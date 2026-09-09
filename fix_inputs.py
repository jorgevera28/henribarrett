import sys
with open('App.tsx', 'r') as f:
    content = f.read()

target = 'className="w-full bg-transparent border border-[#D4D4D4] rounded-sm px-5 py-4 focus:outline-none focus:border-black transition-colors placeholder:text-gray-400"'
replacement = 'className="w-full bg-transparent border border-[#D4D4D4] rounded-sm px-5 py-4 focus:outline-none focus:border-black transition-colors placeholder:text-gray-400 relative z-10"'

if target in content:
    content = content.replace(target, replacement)
    
    # Also fix textarea
    target2 = 'className="w-full bg-transparent border border-[#D4D4D4] rounded-sm px-5 py-4 focus:outline-none focus:border-black transition-colors resize-none"'
    replacement2 = 'className="w-full bg-transparent border border-[#D4D4D4] rounded-sm px-5 py-4 focus:outline-none focus:border-black transition-colors resize-none relative z-10"'
    content = content.replace(target2, replacement2)
    
    target3 = 'className="w-full bg-transparent border border-[#D4D4D4] rounded-sm px-5 py-4 focus:outline-none focus:border-black transition-colors"'
    replacement3 = 'className="w-full bg-transparent border border-[#D4D4D4] rounded-sm px-5 py-4 focus:outline-none focus:border-black transition-colors relative z-10"'
    content = content.replace(target3, replacement3)

    with open('App.tsx', 'w') as f:
        f.write(content)
    print("Fixed")
else:
    print("Not found")
