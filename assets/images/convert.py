from PIL import Image
import os

input_path = "./"
export = "./webp"

# Function to convert JPG to WebP
def convert_jpg_to_webp(input_path, output_path):
    try:
        img = Image.open(input_path)
        if img.mode != 'RGB':
            img = img.convert('RGB')
        img.save(output_path, 'webp')
        print(f"Converted {input_path} to WebP format successfully.")
    except Exception as e:
        print(f"Error converting {input_path}:", str(e))


for filename in os.listdir(input_path):
    if filename.endswith(".png") or filename.endswith(".jpg"):
        image_input_path = os.path.join(input_path, filename)
        image_output_path = os.path.join(
            input_path, os.path.splitext(filename)[0] + ".webp"
        )
        convert_jpg_to_webp(image_input_path, image_output_path)

        print(filename)
