import shutil
import os

src = r"C:\Users\swain\.gemini\antigravity\brain\6ea115d3-27d8-4d4c-b7bd-9f18dadf9ab4\system_architecture_diagram_v2_1772640588461.png"
dst = r"c:\Users\swain\OneDrive\Desktop\Portfolio\public\system-architecture.png"

if os.path.exists(src):
    shutil.copy2(src, dst)
    print(f"Successfully copied {src} to {dst}")
else:
    print(f"Source file not found: {src}")
