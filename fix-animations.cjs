const fs = require('fs');
const path = require('path');

const dir = 'src/components/case-study';
const files = fs.readdirSync(dir).filter(f => f.endsWith('View.tsx'));

files.forEach(file => {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Replace motion.img with img, or just remove the animation props
  content = content.replace(/<motion\.img[^>]*initial=\{\{\s*opacity:\s*0[^>]*whileInView=\{\{\s*opacity:\s*1[^>]*viewport=\{[^}]*\}[^>]*transition=\{[^}]*\}/g, (match) => {
    // just strip the motion props
    return '<img';
  });
  
  // Also replace any remaining <motion.img with <img
  content = content.replace(/<motion\.img/g, '<img');
  content = content.replace(/<\/motion\.img>/g, '</img>');

  fs.writeFileSync(filePath, content);
});
console.log('Fixed animations');
