import os

import boto3
import cv2
import shutil
import matplotlib.pyplot as plt

import credentials


output_dir = r'E:\_AI_SEVERIN\aws_object_detection\output'

anns_dir = os.path.join(output_dir, 'anns')
images_dir = os.path.join(output_dir, 'images')

for dir_ in [output_dir,anns_dir, images_dir]:
    if os.path.exists(dir_):
        shutil.rmtree(dir_)
    os.mkdir(dir_)

reko_client=boto3.client('rekognition', 
                        region_name='us-east-1',
                        aws_access_key_id=credentials.access_key,
                        aws_secret_access_key=credentials.secret_key)

input_file = r'E:\_AI_SEVERIN\aws_object_detection\video_concurs.mp4'\

cap = cv2.VideoCapture(input_file)



contor = 0


ret = True
class_names = []
while ret:
    cap.set(cv2.CAP_PROP_POS_FRAMES, contor)
    ret, frame = cap.read()
    # frame = cv2.rotate(frame, cv2.ROTATE_180)
    if ret:

        H, W, _ = frame.shape

        anns_file = open(os.path.join(anns_dir, '{}.txt'.format(str(contor).zfill(6))), 'w')

        tmp_filename = './tmp.jpg'
        cv2.imwrite(tmp_filename, frame)
        cv2.imwrite(os.path.join(images_dir, '{}.jpg'.format(str(contor).zfill(6))), frame)

        with open(tmp_filename, 'rb') as image:
            response = reko_client.detect_labels(Image={'Bytes': image.read()})

        for label in response['Labels']:
            if len(label['Instances']) > 0:
                name = label['Name']
                if name not in class_names:
                    class_names.append(name)
                for instance in label['Instances']:
                    conf = float(instance['Confidence']) / 100
                    w = instance['BoundingBox']['Width']
                    h = instance['BoundingBox']['Height']
                    x = instance['BoundingBox']['Left']
                    y = instance['BoundingBox']['Top']
                    # print(x, y, w, h, conf)
                    # class_index, xc, yc, w, h, confidence
                    print(f'{contor} {name} {conf} {w} {h} {x} {y}')
                    print('\n')
                    text = name
                    if name == 'Adult' or name == 'Male' or name == 'Boy' or name=='Man' or name=='Teen':
                        text='Person'
                    if name == 'Cane':
                        text='Poster'
                    if name =='Package':
                        text='Wall'
                    if name =='Photo Frame' or name=='White Board':
                        text='Wall'
                    if name=='Refrigerator':
                        text='Cabinet'
                    if name=='Mailbox' or name=='Gas Pump':
                        text='Door'
                    if name=='Cricket Bat' or name=='E-scooter' or name=='Dagger':
                        text='Railing'
                    if name=='Business Card':
                        text='Text Panel'
                    if name=='Blackboard':
                        text='Furniture'
                    if name=='Hot Tub':
                        text='Staircase'
                    if name=='Cat':
                        text=''
                    if name=='Speaker':
                        text='Cabinet'
                    if name=='Shower Faucet':
                        text='Lamp'
                    anns_file.write('{} {} {} {} {} {}\n'.format(class_names.index(name),
                                                                 x + (w / 2),
                                                                 y + (h / 2),
                                                                 w,
                                                                 h,
                                                                 conf))
                    
                    x_ = int(x * W)
                    w_ = int(w * W)
                    y_ = int(y * H)
                    h_ = int(h * H)
                    frame = cv2.rectangle(frame, (x_, y_), (x_ + w_, y_ + h_), (0, 255, 0), 2)
                    
                    frame = cv2.putText(frame, '{} {:.2f}'.format(text, conf), (x_, y_ + 20), cv2.FONT_HERSHEY_SIMPLEX, 0.5, (0, 255, 0), 2)
                    cv2.imwrite(os.path.join(images_dir, '{}.jpg'.format(str(contor).zfill(6))), frame)
        # plt.imshow(cv2.cvtColor(frame, cv2.COLOR_BGR2RGB))
        # plt.show()
            else:
                text = name
                if name == 'Adult' or name == 'Male' or name == 'Boy' or name=='Man' or name=='Teen':
                    text='Person'
                if name == 'Cane':
                    text='Poster'
                if name =='Package':
                    text='Wall'
                if name =='Photo Frame' or name=='White Board':
                    text='Wall'
                if name=='Refrigerator':
                    text='Cabinet'
                if name=='Mailbox' or name=='Gas Pump':
                    text='Door'
                if name=='Cricket Bat' or name=='E-scooter' or name=='Dagger':
                    text='Railing'
                if name=='Business Card':
                    text='Text Panel'
                if name=='Blackboard':
                    text='Furniture'
                if name=='Hot Tub':
                    text='Staircase'
                if name=='Cat':
                    text=''
                if name=='Speaker':
                    text='Cabinet'
                if name=='Shower Faucet':
                    text='Lamp'
                frame = cv2.rectangle(frame, (x_, y_), (x_ + w_, y_ + h_), (0, 255, 0), 2)
                frame = cv2.putText(frame, '{} {:.2f}'.format(text, conf), (x_, y_ + 20), cv2.FONT_HERSHEY_SIMPLEX, 0.5, (0, 255, 0), 2)
                cv2.imwrite(os.path.join(images_dir, '{}.jpg'.format(str(contor).zfill(6))), frame)
        os.remove(tmp_filename)

        anns_file.close()

        contor += 1

with open(os.path.join(output_dir, 'class.names'), 'w') as fw:
    for name in class_names:
        fw.write('{}\n'.format(name))
    fw.close()

