import boto3
import io
from PIL import Image
import creditss
import cv2
# Create an Amazon Textract client
textract = boto3.client('textract', region_name='us-east-1',
                        aws_access_key_id=creditss.access_key,
                        aws_secret_access_key=creditss.secret_key)


def extract_text_from_image(file_path):
    try:
        # Open the image file
        with open(file_path, 'rb') as image:
            # Read the image
            img_data = image.read()

            # Send the image to AWS Textract
            response = textract.detect_document_text(Document={'Bytes': img_data})

            # Extract the text from the response
            text = ""
            for item in response["Blocks"]:
                if item["BlockType"] == "LINE":
                    text += item["Text"] + "\n"
            
            return text

    except Exception as e:
        print(e)
def extract_images_and_text_from_video(video_path, output_path, interval):
    try:
        # Open the video file
        cap = cv2.VideoCapture(video_path)

        # Initialize a frame counter
        frame_counter = 0

        # Loop through the video frames
        while True:
            # Read a frame from the video
            ret, frame = cap.read()

            # Break the loop if no more frames
            if not ret:
                break

            # Extract frames at specified interval
            if frame_counter % interval == 0:
                # Write the frame to a file
                image_path = output_path + "/frame{}.jpg".format(frame_counter)
                cv2.imwrite(image_path, frame)

                # Extract text from the image
                text = extract_text_from_image(image_path)
                with open(r'E:\_AI_SEVERIN\aws_object_detection\aws-textract-example-master\myfile.txt', 'a',encoding='utf-8') as file:
                    file.write("This is frame counter "+str(frame_counter))
                    file.write('\n')
                    file.write(text)
                    file.write('\n')
                print("Text extracted from {}: {}".format(image_path, text))

            # Increment the frame counter
            frame_counter += 1

    except Exception as e:
        print(e)

if __name__ == '__main__':
    
    # file_path = r'E:\_AI_SEVERIN\aws_object_detection\aws-textract-example-master\003361.png'
    # extracted_text = extract_text_from_image(file_path)
    # print(extracted_text)
    video_path = r'E:\_AI_SEVERIN\aws_object_detection\output_video_for_ocr.mp4'
    output_path = r'E:\_AI_SEVERIN\aws_object_detection\aws-textract-example-master\output'
    interval =1  # extract a frame every 1 frames
    extract_images_and_text_from_video(video_path, output_path, interval)