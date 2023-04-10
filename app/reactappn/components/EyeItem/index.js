import React,{useState,useEffect} from "react";
import { StyleSheet, Text, View, ImageBackground, Modal, Button,Linking} from 'react-native';
import styles from "./styles";
import StyleButton from "../StyleButton";
import MicroButton from "../MicroButton";
import * as Permissions from 'expo-permissions';
import { Audio } from 'expo-av';
import { Camera } from 'expo-camera';

// const RECORDING_OPTIONS_PRESET_HIGH_QUALITY = {
//   isMeteringEnabled: true,
//   android: {
//     extension: '.m4a',
//     outputFormat: Audio.RECORDING_OPTION_ANDROID_OUTPUT_FORMAT_MPEG_4,
//     audioEncoder: Audio.RECORDING_OPTION_ANDROID_AUDIO_ENCODER_AAC,
//     sampleRate: 44100,
//     numberOfChannels: 2,
//     bitRate: 128000,
//   },
//   ios: {
//     extension: '.caf',
//     audioQuality: Audio.RECORDING_OPTION_IOS_AUDIO_QUALITY_MAX,
//     sampleRate: 44100,
//     numberOfChannels: 2,
//     bitRate: 128000,
//     linearPCMBitDepth: 16,
//     linearPCMIsBigEndian: false,
//     linearPCMIsFloat: false,
//   },
// };

const EyeItem=()=>{
 
//pentru website
  const [transcript, setTranscript] = useState('');

  const startRecognition = () => {
    const recognition = new window.webkitSpeechRecognition();
    recognition.interimResults = true;

    recognition.onresult = e => {
      const interimTranscript = Array.from(e.results)
        .map(result => result[0])
        .map(result => result.transcript)
        .join('');
     
      setTranscript(interimTranscript);
      
    };

    recognition.start();
    console.log(transcript);
    
    



    
  };
  
  // for phone
  // const [recording, setRecording] = useState(null);
  // const [isRecording, setIsRecording] = useState(false);
  // const [transcript, setTranscript] = useState('');
  // const audioMode = {
  //   allowsRecordingIOS: true,
  //   playsInSilentModeIOS: true,
  //   staysActiveInBackground: true,
  //   interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_MIX_WITH_OTHERS,
  //   interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DO_NOT_MIX,
  //   shouldDuckAndroid: true,
  //   playThroughEarpieceAndroid: false,
  // };


  // const startRecording = async () => {
  //   try {
  //     console.log('Requesting permissions..');
  //     const { status } = await Permissions.askAsync(Permissions.AUDIO_RECORDING);
  //     if (status !== 'granted') {
  //       alert('Permission to access microphone denied');
  //       return;
  //     }
  //     console.log('Starting recording..');
  //     const newRecording = new Audio.Recording();
  //     await newRecording.prepareToRecordAsync(audioMode);
  //     await newRecording.startAsync();
  //     setRecording(newRecording);
  //     setIsRecording(true);
  //     console.log('Recording started');
  //   } catch (err) {
  //     console.error('Failed to start recording', err);
  //   }
  // };

  // const stopRecording = async () => {
  //   console.log('Stopping recording..');
  //   setIsRecording(false);
  //   await recording.stopAndUnloadAsync();
  //   const uri = recording.getURI();
  //   console.log('Recording stopped and stored at', uri);
  //   await convertToText(uri);
  // };

  // const convertToText = async (uri) => {
  //   try {
  //     console.log('Converting to text..');
  //     const { status } = await Permissions.askAsync(Permissions.AUDIO_RECORDING);
  //     if (status !== 'granted') {
  //       alert('Permission to access microphone denied');
  //       return;
  //     }
  //     const voicePermissions = await Voice.getPermissionsAsync();
  //     if (!voicePermissions.granted) {
  //       await Voice.requestPermissionsAsync();
  //     }
  //     const { transcript } = await Voice.recognizeAsync({
  //       uri,
  //       language: 'en-US',
  //     });
  //     setTranscript(transcript);
  //     console.log('Transcript:', transcript);
  //   } catch (err) {
  //     console.error('Failed to convert to text', err);
  //   }
  // };

  // useEffect(() => {
  //   return () => {
  //     if (recording) {
  //       recording.stopAndUnloadAsync();
  //     }
  //   };
  // }, []);
  //var link='';
  if(transcript.includes('Video.')){
    const link = 'https://youtu.be/X4sicgZ1rus';
    Linking.openURL(link);
    }
  const handleLinkPress = () => {
    // if(transcript.contains('l')){
    //   link='https://youtu.be/b9eMGE7QtTk'
    // }
    console.log(transcript);
    
    const link = 'https://youtu.be/X4sicgZ1rus';
    Linking.openURL(link);
    
  };
return (
    <View style={styles.eyeContainer}>
      

    <ImageBackground 
    
    source={require('D:\\Facultate Anul III\\SeverinReactApp\\reactappn\\assets\\images\\Backphoto2.jpg')}
    style={styles.image}
    />

    

    <View style={styles.titles}>
      <Text 
      accessible={true}
      accessibilityLabel="Title"
      accessibilityHint="We Become Your Eyes"
      style={styles.title}>We Become Your Eyes</Text>
      <Text 
      accessible={true}
      accessibilityLabel="Subtitle"
      accessibilityHint="Here To Help You"
      style={styles.subtitles}>Here To Help You</Text>
    </View>
    {/* <View style={styles.buttMicrophone}>
      <MicroButton/>

    </View> */}
    <View 
    
    style={styles.buttonsContainer}>
    <StyleButton style={{bottom:'50'}}
    type="primary" 
    content={"Use My Eye"}
    onPress={handleLinkPress}
   
    />
    </View>
    <View 
    accessible={true}
    accessibilityLabel="Button"
    accessibilityHint="For vocal commands"
    style={styles.buttonRecord}>
    <StyleButton 
    type="secondary" 
    content={"Start Recording"}
    onPress={startRecognition}
   
    />
    <Text style={styles.textAs} id="convert_text">{transcript}</Text>
    </View>
    {/* <>
  <StyleButton styles={styles.butonsContainer}
    id="click_to_record"
    title="Click to Record"
    onPress={startRecognition}
  />
  <Text style={styles.textAs} id="convert_text">{transcript}</Text>
</> */}
{/* <View style={styles.buttonRecord}>
    <StyleButton 
    type="secondary" 
    content={"Click to Record"}
    onPress={handleLinkPress}
    
    />
    </View> */}
    
  </View>
);

};


export default EyeItem;