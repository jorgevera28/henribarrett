const fs = require('fs');
let content = fs.readFileSync('App.tsx', 'utf8');

const replacement = `export const LoopedReelVideo: React.FC<{
  src: string;
  poster?: string;
  className?: string;
  muted?: boolean;
}> = ({ src, poster, className = '', muted = true }) => {
  return (
    <img
      src={poster || src}
      alt="Reel cover"
      className={className}
      loading="lazy"
    />
  );
};`;

const targetStart = `export const LoopedReelVideo: React.FC<{`;
const targetEnd = `  );
};`;

const startIndex = content.indexOf(targetStart);
// find the correct targetEnd starting from startIndex
let remaining = content.slice(startIndex);
let endIdx = remaining.indexOf(targetEnd);
if(startIndex !== -1 && endIdx !== -1) {
    const toReplace = content.substring(startIndex, startIndex + endIdx + targetEnd.length);
    content = content.replace(toReplace, replacement);
    fs.writeFileSync('App.tsx', content);
    console.log('Replaced');
} else {
    console.log('Not found');
}
