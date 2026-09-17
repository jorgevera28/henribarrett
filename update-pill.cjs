const fs = require('fs');

let content = fs.readFileSync('src/components/case-study/BarrettSessionsHeader.tsx', 'utf8');
content = content.replace('bg-transparent border-black/20', 'bg-transparent border-black/40');
fs.writeFileSync('src/components/case-study/BarrettSessionsHeader.tsx', content);
