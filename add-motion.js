import fs from 'fs';

const files = fs.readdirSync('src/components/case-study')
  .filter(f => f.endsWith('VisualView.tsx'))
  .map(f => 'src/components/case-study/' + f);

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  
  if (!content.includes("import { motion }")) {
    content = content.replace("import React from 'react';", "import React from 'react';\nimport { motion } from 'motion/react';");
  }

  const lines = content.split('\n');
  let inMotionDiv = false;
  let divDepth = 0;
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (!inMotionDiv) {
      if (line.match(/<div className="[^"]*overflow-hidden[^"]*"\s*>/)) {
        let hasImg = false;
        for (let j = i + 1; j < i + 3 && j < lines.length; j++) {
          if (lines[j].includes("<img")) {
            hasImg = true;
            break;
          }
        }
        if (hasImg) {
          lines[i] = line.replace('<div', '<motion.div\n  initial={{ opacity: 0, y: 30 }}\n  whileInView={{ opacity: 1, y: 0 }}\n  viewport={{ once: true, margin: "-10%" }}\n  transition={{ duration: 0.8, ease: "easeOut" }}');
          inMotionDiv = true;
          divDepth = 1;
        }
      }
    } else {
      if (line.includes("<div")) {
          // Note: some lines might have both <div and </div. This is simple heuristics.
          divDepth += (line.match(/<div/g) || []).length;
      }
      if (line.includes("</div")) {
        divDepth -= (line.match(/<\/div/g) || []).length;
        if (divDepth <= 0) {
          lines[i] = line.replace(/<\/div>(?!.*<\/div>)/, '</motion.div>'); // replace last div
          inMotionDiv = false;
        }
      }
    }
  }
  
  fs.writeFileSync(file, lines.join('\n'));
});
console.log('Done');
