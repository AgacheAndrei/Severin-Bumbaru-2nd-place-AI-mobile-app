# Severin Bumbaru Competition - 2nd place 
## Section AI and mobile app
## Problem
<pre>
Mobile application for the visually impaired to facilitate orientation within a facility 👀. 
Objects of interest: door label🏷️, stairs, elevator🛗, door🚪, table, person🕴️, wall🧱, etc. Text-to-speech and speech-to-text components (in EN or RO) . 
Input: uploaded video 🎥, !not real time!.
Output: audio guidance (text-to-speech) with object detection and/or object recognition instructions 👂.
</pre>

**! 48 hours to resolve this problem !**

## Solution

### Programing languages and technology used

<img align="left" width="30px" style="padding-right:10px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" />   
<img align="left" width="30px" style="padding-right:10px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />  
<img align="left" width="30px" style="padding-right:10px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" />  
<img align="left" width="30px" style="padding-right:10px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />  
<img align="left" alt="expo" width="30px" style="padding-right:10px" src="https://github.com/AgacheAndrei/Severin-Bumbaru-2nd-place-AI-mobile-app/assets/36128809/e96b701a-e582-48a7-8dfe-3ea608c39b2d">
<img align="left" width="30px" style="padding-right:10px" src="https://github.com/AgacheAndrei/Severin-Bumbaru-2nd-place-AI-mobile-app/assets/36128809/798da42a-8b3c-4fb2-9b20-3aced1fd5e1c" />  

<br>  

### APP
Mobile application built with React Native and expo - **THE APP NAME -> EYES 👀**. 

The layout and the app UI in the following photos📸.
<br>
!!! For voice command  **video** -> the video of the final output will be presented.
<br>
The instructions of how to use the app are presented in one of the photos.

![app_severin_2](https://github.com/AgacheAndrei/Severin-Bumbaru-2nd-place-AI-mobile-app/assets/36128809/113f465d-b508-445b-9c8a-65f0f4702c98)
![app_severin_3png](https://github.com/AgacheAndrei/Severin-Bumbaru-2nd-place-AI-mobile-app/assets/36128809/b9fe5039-536f-4280-ab0b-4b34aa88dd9a)
![app_severin](https://github.com/AgacheAndrei/Severin-Bumbaru-2nd-place-AI-mobile-app/assets/36128809/eb738e58-125b-4750-a0af-284a7f4b4045)

### AI
->The AI implementation was done in AWS with the help of the Rekognition for the recognition of the objects.
<br> 
->Textract for the text extraction from the frames(OCR).
<br> 
->Text-to-speech with pyttsx3.
<br> 
->Speach-to-text for the React Native was done using the accessibility mode from Android Phones/IOS Phones and the react-speech-recognition and webkitSpeechRecognition for the web, and for the mobile with permissions from the phone and other libraries (expo-permissions, expo-av, expo-camera etc). --> expo is bugy sometimes and the Speach-to-text will not work everytime (is an expo thing)

#### The pipeline of the output
The input video is analyzed frame by frame to detect the objects using Rekognition -> After the metadata is saved in a file and manipulated -> filter the noise and the anomalies from detection-> Create the border on the object and put the label and the confidence of the AI model -> The analyzed frames are put together in one video -> From this video the text visible in the frames is detected by the ocr system and the text-to-speach create the audio file with that data -> The analyzed video and the audio are put toghter in one final output 🏆🏆🏆


## Input video
https://github.com/AgacheAndrei/Severin-Bumbaru-2nd-place-AI-mobile-app/assets/36128809/a5e1f35a-a99b-4231-b865-bfb0741b28e7

## Output video
https://github.com/AgacheAndrei/Severin-Bumbaru-2nd-place-AI-mobile-app/assets/36128809/0fda31d9-017e-4fe2-9824-63a47966c0f5 




