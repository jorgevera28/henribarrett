import sys

with open('App.tsx', 'r') as f:
    content = f.read()

# Replace the z-50 we added earlier with a higher z-index like z-[100] to ensure it's above the fixed video backgrounds from the home page
target = 'if (currentView === \'work-with-us\') {\n    return (\n      <div className="w-full min-h-screen flex flex-col justify-between bg-[#F4F4F4] text-black font-sans selection:bg-black selection:text-white z-50 relative">'
replacement = 'if (currentView === \'work-with-us\') {\n    return (\n      <div className="w-full min-h-screen flex flex-col justify-between bg-[#F4F4F4] text-black font-sans selection:bg-black selection:text-white z-[100] relative">'

if target in content:
    content = content.replace(target, replacement)
    with open('App.tsx', 'w') as f:
        f.write(content)
    print("Fixed")
else:
    print("Not found")

