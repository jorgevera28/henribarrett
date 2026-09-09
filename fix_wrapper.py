import sys
with open('App.tsx', 'r') as f:
    content = f.read()

target = 'if (currentView === \'work-with-us\') {\n    return (\n      <div className="w-full min-h-screen flex flex-col justify-between bg-[#F4F4F4] text-black font-sans selection:bg-black selection:text-white z-[100] relative">'
replacement = 'if (currentView === \'work-with-us\') {\n    return (\n      <div className="w-full min-h-screen flex flex-col justify-between bg-[#F4F4F4] text-black font-sans selection:bg-black selection:text-white relative z-[9999]" style={{ opacity: 1 }}>'

if target in content:
    content = content.replace(target, replacement)
    with open('App.tsx', 'w') as f:
        f.write(content)
    print("Fixed target 3")
else:
    print("Not found target 3")
