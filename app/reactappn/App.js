import { StatusBar } from 'expo-status-bar';
import React,{useState,useEffect} from 'react';
import { StyleSheet, Text, View, ImageBackground, Modal, Button} from 'react-native';
import EyeItem from './components/EyeItem';
import Header from './components/Header';

// import SpeechRecognition, {
//   useSpeechRecognition
// } from "react-speech-recognition";


export default function App() {
  
    const [showModal, setShowModal] = useState(true);
  
    const toggleModal = () => {
      setShowModal(!showModal);
    };
    useEffect(() => {
      const timeout = setTimeout(() => {
        toggleModal();
      }, 20000); // 5000ms = 5 seconds
    
      return () => {
        clearTimeout(timeout);
      };
    }, []);

    // const { transcript, listening ,resetTranscript,browserSupportsSpeechRecognition } = useSpeechRecognition();
    // SpeechRecognition.startListening({ continuous: true });
    // // if (!browserSupportsSpeechRecognition) {
    // //   return <Text>NU merge aici boss</Text>
    // // } 
    // let funci = () => {}
    // if (transcript.includes('go')){
    //     funci =()=>{
    //     var body = document.getElementsByTagName('body')[0];
    //     body.style.backgroundColor = 'green';
    //   }
    //   funci()
    // }
  
  
  return (
    
    <View style={styles.container}>
       
       <Modal visible={showModal} animationType="slide" transparent>
      <View style={styles.modalContainer}>
        <View  accessible={true}
                accessibilityLabel="POPUP"
                accessibilityHint="Instructions for the APP-Welcome to the EYES At the bottom of the application you have 2 buttons: One for displaying the video (bottom left) One for voice commands(bottom right) This Popup will dissapear soon"
                 style={styles.modalContent}>
          <Text  style={styles.modalText}>Welcome to the EYES!</Text>
          <Text  style={styles.modalText}>At the bottom of the application you have 2 buttons:</Text>
          <Text  style={styles.modalText}>One for displaying the video (bottom left)</Text>
          <Text style={styles.modalText}>One for voice commands</Text>
          <Text style={styles.modalText}>(bottom right)</Text>
          <Button  title="Close" onPress={toggleModal}  />
        </View>
      </View>
    </Modal>
    
      <Header/>
      
      <EyeItem/>
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  // popUp:{
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },

  
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  modalContent: {
    backgroundColor: 'rgba(224,224,224, 0.75)',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  modalText: {
    fontSize: 24,
    fontWeight: '400',
    textAlign: 'center',
    marginBottom: 16,
   
  },


});
