import sys
with open('App.tsx', 'r') as f:
    content = f.read()

target = 'if (infoBarRef.current) {\n            let opacity = Math.max(0, Math.min(1 - Math.abs(scrollProgress - 0.5) * 8, 1));\n            infoBarRef.current.style.opacity = opacity.toString();\n            infoBarRef.current.style.top = `${topMid + heightMid + 32}px`;\n        }'
replacement = 'if (infoBarRef.current && currentView === \'home\') {\n            let opacity = Math.max(0, Math.min(1 - Math.abs(scrollProgress - 0.5) * 8, 1));\n            infoBarRef.current.style.opacity = opacity.toString();\n            infoBarRef.current.style.top = `${topMid + heightMid + 32}px`;\n        }'

if target in content:
    content = content.replace(target, replacement)
    with open('App.tsx', 'w') as f:
        f.write(content)
    print("Fixed target 1")
else:
    print("Not found target 1")
