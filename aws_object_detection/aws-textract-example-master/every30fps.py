# from collections import Counter

# # Open the file and read its content
# with open(r'E:\_AI_SEVERIN\aws_object_detection\aws-textract-example-master\myfile.txt', 'r') as file:
#     text = file.read()

# # Split the text into words and count their occurrences
# word_counts = Counter(text.split())

# # Get the most common word
# most_common_word = word_counts.most_common(1)[0][0]

# # Print the result
# print(f"The most common word is '{most_common_word}' with {word_counts[most_common_word]} occurrences.")
# print(word_counts)


#working good 
# import collections

# Initialize a dictionary to hold the counts of each word
# word_counts = collections.Counter()

# # Open the file and read it line by line
# with open(r'E:\_AI_SEVERIN\aws_object_detection\aws-textract-example-master\filtered_file.txt', 'r') as file:
#     line_count = 0
#     for line in file:
#         # Increment the line count
#         line_count += 1
        
#         # Split the line into words and update the word counts
#         words = line.strip().split()
#         word_counts.update(words)
        
#         # Check if we've read 200 lines
#         if line_count % 30 == 0:
#             # Output the most common word
#             most_common_word = word_counts.most_common(1)[0][0]
#             print(f'Most common word after {line_count} lines: {most_common_word}')


import re
from collections import Counter

def is_number(word):
    try:
        float(word)
        return True
    except ValueError:
        return False

filename = r"E:\_AI_SEVERIN\aws_object_detection\aws-textract-example-master\myfile.txt"
pattern = "This is frame counter"
count = 0
words = []
with open(filename) as file, open("most_common_word.txt", "w") as output_file:
    for line in file:
        if re.match(pattern, line):
            count += 1
            if count % 30 == 0:
                word_counts = Counter()
                for word in words:
                    if not is_number(word):
                        word_counts[word] += 1
                if word_counts:
                    most_common_word = word_counts.most_common(1)[0][0]
                    print(f"Most common word after {count}th match: {most_common_word}")
                    output_file.write(most_common_word+'\n')
                words = []
        else:
            words += line.split()

# If there are any remaining words after the last match, find their most common word
if words:
    word_counts = Counter()
    for word in words:
        if not is_number(word):
            word_counts[word] += 1
    if word_counts:
        most_common_word = word_counts.most_common(1)[0][0]
        print(f"Most common word after final match: {most_common_word}")
        output_file.write(most_common_word+'\n')
