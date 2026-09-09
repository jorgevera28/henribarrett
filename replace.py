import sys

with open('App.tsx', 'r') as f:
    content = f.read()

start_str = "export const LoopedReelVideo: React.FC<{"
end_str = "    />\n  );\n};"

start_idx = content.find(start_str)
if start_idx == -1:
    print("Start not found")
    sys.exit(1)

end_idx = content.find(end_str, start_idx)
if end_idx == -1:
    print("End not found")
    sys.exit(1)

to_replace = content[start_idx:end_idx + len(end_str)]
replacement = """export const LoopedReelVideo: React.FC<{
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
      style={{ objectFit: 'cover' }}
    />
  );
};"""

content = content.replace(to_replace, replacement)
with open('App.tsx', 'w') as f:
    f.write(content)

print("Replaced")
