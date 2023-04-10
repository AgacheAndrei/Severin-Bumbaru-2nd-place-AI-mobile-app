import React from "react";
import SpeechRecognition, {
  useSpeechRecognition
} from "react-speech-recognition";



const App = () => {
  
  const { transcript, listening ,resetTranscript,browserSupportsSpeechRecognition } = useSpeechRecognition();
  SpeechRecognition.startListening({ continuous: true });
  if (!browserSupportsSpeechRecognition) {
    return <span>NU merge aici boss</span>
  }
  if(transcript.includes('start')){
    var vari1 = 'green';
  }
  if(transcript.includes('stop')){
    var vari2 = 'red';
  }
  let funci = () => {}
  if (transcript.includes('go')){
      funci =()=>{
      var body = document.getElementsByTagName('body')[0];
      body.style.backgroundColor = 'green';
    }
    funci()
  }
  if(transcript.includes('restart')){
    resetTranscript();
    var body = document.getElementsByTagName('body')[0];
    body.style.backgroundColor = 'white';
  }
  if(transcript.includes('open web')){
    
    var a = document.getElementsByTagName('a')[0];
    a.setAttribute('href','https://www.google.com');
    a.click();
    
  }

  return (
    <div>
      <p>Microphone: {listening?'on':'off'}</p>
      <button onClick={SpeechRecognition.startListening} style={{color:vari1}}>Start</button>
      <button onClick={SpeechRecognition.stopListening} style={{color:vari2}}>Stop</button>
      <button onClick={resetTranscript}>Reset</button>
      <p>{transcript}</p>
      <a href="https://example.com">Website</a>
      
    </div>
  );
};
export default App;