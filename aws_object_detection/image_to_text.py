import easyocr

reader = easyocr.Reader(['en']) # need to run only once to load model into memory

results = reader.readtext(r'E:\_AI_SEVERIN\aws_object_detection\output\images\003360.jpg')

print(results)

text=''
for result in results:
    text+=result[1]+" "
print(text)