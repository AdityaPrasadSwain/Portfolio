import os
import shutil

src = r"C:\Users\swain\.gemini\antigravity\brain\6ea115d3-27d8-4d4c-b7bd-9f18dadf9ab4\system_architecture_diagram_v2_1772640588461.png"
dst = r"c:\Users\swain\OneDrive\Desktop\Portfolio\public\images\system-architecture.png"

print(f"Source exists: {os.path.exists(src)}")
print(f"Destination exists: {os.path.exists(dst)}")
print(f"Parent exists: {os.path.exists(os.path.dirname(dst))}")

try:
    shutil.copy2(src, dst)
    print("Copy successful")
except Exception as e:
    print(f"Copy failed: {e}")

print(f"Final destination exists: {os.path.exists(dst)}")
