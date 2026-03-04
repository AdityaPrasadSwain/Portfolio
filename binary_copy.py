import os

src = rb"C:\Users\swain\.gemini\antigravity\brain\6ea115d3-27d8-4d4c-b7bd-9f18dadf9ab4\system_architecture_diagram_v2_1772640588461.png"
dst = r"c:\Users\swain\OneDrive\Desktop\Portfolio\public\images\system-architecture.png"

# Note: rb and r are used carefully. src is the absolute path string. 
# Re-writing the script to be more correct.
src_path = r"C:\Users\swain\.gemini\antigravity\brain\6ea115d3-27d8-4d4c-b7bd-9f18dadf9ab4\system_architecture_diagram_v2_1772640588461.png"
dst_path = r"c:\Users\swain\OneDrive\Desktop\Portfolio\public\images\system-architecture.png"

with open(src_path, 'rb') as f_src:
    content = f_src.read()
    with open(dst_path, 'wb') as f_dst:
        f_dst.write(content)
print("Binary copy complete.")
