import cv2
import os

# Set the path to the directory containing the images
image_path = r"E:\_AI_SEVERIN\aws_object_detection\output\images"

# Set the frame rate (frames per second) of the output video
frame_rate = 30

# Set the output video format
fourcc = cv2.VideoWriter_fourcc(*"mp4v")

# Get a list of all the image filenames in the directory
images = [os.path.join(image_path, f) for f in os.listdir(image_path) if f.endswith(".jpg")]

# Get the height and width of the first image
image = cv2.imread(images[0])
height, width, channels = image.shape

# Create a video writer object
video_writer = cv2.VideoWriter("output_video.mp4", fourcc, frame_rate, (width, height))

# Loop through all the images and write them to the video
for image_file in images:
    # Load the image
    image = cv2.imread(image_file)

    # Write the image to the video
    video_writer.write(image)

# Release the video writer object
video_writer.release()