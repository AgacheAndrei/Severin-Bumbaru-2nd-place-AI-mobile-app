file_path = r'E:\_AI_SEVERIN\aws_object_detection\aws-textract-example-master\myfile.txt'

with open(file_path, 'r') as f:
    lines = f.readlines()

# Remove lines that contain the word 'frame'
filtered_lines = [line for line in lines if 'frame' not in line]

# Write the filtered lines to a new file
with open('filtered_file.txt', 'w') as f:
    f.writelines(filtered_lines)
