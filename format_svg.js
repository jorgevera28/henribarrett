const fs = require('fs');
const content = fs.readFileSync('logotype.svg', 'utf8');
let modified = content.replace(/<rect[^>]*fill="white"[^>]*>/g, '');
modified = modified.replace(/fill="black"/gi, 'fill="currentColor"');
modified = modified.replace(/fill="#111111"/gi, 'fill="currentColor"');
modified = modified.replace(/width="[^"]*"/, 'className={`${className} shrink-0`} style={{ width: "146px", height: "auto" }} aria-hidden="true"');
modified = modified.replace(/height="[^"]*"/, '');
console.log(modified);
