import sys
with open('App.tsx', 'r') as f:
    content = f.read()

target = 'if (contentRef.current) {\n        contentRef.current.style.transform = `translate3d(0, -${currentScrollY.current}px, 0)`;\n      }'
replacement = 'if (contentRef.current && currentView === \'home\') {\n        contentRef.current.style.transform = `translate3d(0, -${currentScrollY.current}px, 0)`;\n      }'

if target in content:
    content = content.replace(target, replacement)
    
    target2 = 'videoContainerRef.current.style.clipPath = `inset(${currentTop}px ${windowWidth - (currentLeft + currentWidth)}px ${windowHeight - (currentTop + currentHeight)}px ${currentLeft}px)`;'
    replacement2 = 'if (currentView === \'home\') videoContainerRef.current.style.clipPath = `inset(${currentTop}px ${windowWidth - (currentLeft + currentWidth)}px ${windowHeight - (currentTop + currentHeight)}px ${currentLeft}px)`;'
    content = content.replace(target2, replacement2)
    
    with open('App.tsx', 'w') as f:
        f.write(content)
    print("Fixed target 2")
else:
    print("Not found target 2")
