const fs = require('fs');
const path = require('path');

const dir = 'src/components/case-study';
const files = fs.readdirSync(dir).filter(f => f.endsWith('View.tsx'));

files.forEach(file => {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  content = content.replace(/<img\}/g, '<img');
  content = content.replace(/<img \}/g, '<img');
  fs.writeFileSync(filePath, content);
});
console.log('Fixed img tags');
