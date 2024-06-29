import os
from PIL import Image

def convert_to_webp(input_dir, output_dir):
    # Ensure output directory exists
    if not os.path.exists(output_dir):
        os.makedirs(output_dir)

    # Loop through files in the input directory
    for filename in os.listdir(input_dir):
        if filename.endswith(".jpg") or filename.endswith(".png"):
            # Open image using Pillow
            img = Image.open(os.path.join(input_dir, filename))

            # Construct output filename with .webp extension
            output_filename = os.path.splitext(filename)[0] + ".webp"
            output_path = os.path.join(output_dir, output_filename)

            # Save image as WebP
            img.save(output_path, "WEBP")

            print(f"Converted {filename} to {output_filename}")

if __name__ == "__main__":
    input_directory = "./"  # Replace with your input directory
    output_directory = "./webp"  # Replace with your output directory

    convert_to_webp(input_directory, output_directory)
