import sys, re

with open('App.tsx', 'r') as f:
    content = f.read()

# 1. Add key to work-with-us root
content = re.sub(
    r'if \(currentView === \'work-with-us\'\) \{\s*return \(\s*<div (key="work-with-us" )?className="w-full min-h-screen flex flex-col justify-between bg-\[#F4F4F4\] text-black font-sans selection:bg-black selection:text-white[^>]*>',
    'if (currentView === \'work-with-us\') {\n    return (\n      <div key="work-with-us" className="w-full min-h-screen flex flex-col justify-between bg-[#F4F4F4] text-black font-sans selection:bg-black selection:text-white">',
    content
)

# 2. Add key to home root
content = re.sub(
    r'return \(\s*<div (key="home" )?ref=\{mainContainerRef\}',
    'return (\n    <div key="home" ref={mainContainerRef}',
    content
)

# 3. Add key to work root
content = re.sub(
    r'if \(currentView === \'work\'\) \{\s*return \(\s*<div (key="work" )?className="w-full min-h-screen',
    'if (currentView === \'work\') {\n    return (\n      <div key="work" className="w-full min-h-screen',
    content
)

# 4. Add key to quicklys root
content = re.sub(
    r'if \(currentView === \'quicklys\'\) \{\s*return \(\s*<div (key="quicklys" )?className="w-full min-h-screen',
    'if (currentView === \'quicklys\') {\n    return (\n      <div key="quicklys" className="w-full min-h-screen',
    content
)

# 5. Add key to services root
content = re.sub(
    r'if \(currentView === \'services\'\) \{\s*return \(\s*<div (key="services" )?className="w-full min-h-screen',
    'if (currentView === \'services\') {\n    return (\n      <div key="services" className="w-full min-h-screen',
    content
)

with open('App.tsx', 'w') as f:
    f.write(content)
print("Keys injected to prevent DOM reuse bugs")
