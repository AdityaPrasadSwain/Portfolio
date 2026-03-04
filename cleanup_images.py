import os
import shutil

base_path = r"c:\Users\swain\OneDrive\Desktop\Portfolio"
images_path = os.path.join(base_path, "public", "images")
brain_path = r"C:\Users\swain\.gemini\antigravity\brain\6ea115d3-27d8-4d4c-b7bd-9f18dadf9ab4"

mapping = {
    "ai_learning_mockup_v2_1772640537360.png": "ai_learning_mockup.png",
    "ecommerce_mockup_1772640432079.png": "ecommerce_mockup.png",
    "performance_metrics_visual_v2_1772640559011.png": "performance_metrics_visual.png",
    "system_architect_visual_1772640355787.png": "system_architect_visual.png",
    "hero_3d_connectivity_flow_1772489081311.png": "hero.png"
}

# Ensure destination mapping exists
for src_long, dst_short in mapping.items():
    src_path = os.path.join(images_path, src_long)
    dst_path = os.path.join(images_path, dst_short)
    if os.path.exists(src_path):
        print(f"Renaming {src_long} to {dst_short}")
        shutil.copy2(src_path, dst_path)
    else:
        print(f"Source not found in public/images: {src_long}")

# Copy architecture diagram
arch_src = os.path.join(brain_path, "system_architecture_diagram_v2_1772640588461.png")
arch_dst = os.path.join(base_path, "public", "system-architecture.png")
if os.path.exists(arch_src):
    print(f"Copying architecture diagram to {arch_dst}")
    shutil.copy2(arch_src, arch_dst)
else:
    print(f"Brain source not found: {arch_src}")

print("Cleanup complete.")
