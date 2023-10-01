# Severin Bumbaru Competition - 2nd place 
## Section AI and mobile app
## Problem
<pre>
Mobile application for the visually impaired to facilitate orientation within a facility. 
Objects of interest: door label, stairs, elevator, door, table, person, wall, etc. Text-to-speech and speech-to-text components (in EN or RO). 
Input: uploaded video. 
Output: audio guidance (text-to-speech) with object detection and/or object recognition instructions.

</pre>

**! 48 hours to resolve this problem !**

## Solution
### APP
Mobile application built with React Native and expo. 

![app_severin_3png](https://github.com/AgacheAndrei/Severin-Bumbaru-2nd-place-AI-mobile-app/assets/36128809/b9fe5039-536f-4280-ab0b-4b34aa88dd9a)
![app_severin_2](https://github.com/AgacheAndrei/Severin-Bumbaru-2nd-place-AI-mobile-app/assets/36128809/113f465d-b508-445b-9c8a-65f0f4702c98)
![app_severin](https://github.com/AgacheAndrei/Severin-Bumbaru-2nd-place-AI-mobile-app/assets/36128809/eb738e58-125b-4750-a0af-284a7f4b4045)

### AI
The AI implementation was done in AWS with the help of the Rekognition for the recognition of the objects, 
Textract for the text extraction from the frames
Text-to-speech with pyttsx3
Speach-to-text for the React Native was done using the accessibility mode from Android Phones/IOS Phones and the react-speech-recognition

The pipeline of the app:

https://github.com/AgacheAndrei/Severin-Bumbaru-2nd-place-AI-mobile-app/assets/36128809/0fda31d9-017e-4fe2-9824-63a47966c0f5 

