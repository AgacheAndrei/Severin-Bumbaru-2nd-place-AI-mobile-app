import { StyleSheet } from "react-native";

const styles=StyleSheet.create({
    eyeContainer:{
        width:'100%',
        height:'100%',
    
      },
    
      titles: {
        marginTop: '30%',
        width: '100%',
        alignItems: 'center',
      },
      title: {
        fontSize: 40,
        fontWeight: '500',
      },
      subtitles: {
        textDecorationLine: 'underline',
      },
      subtitle: {
        fontSize: 16,
        color: '#5c5e62'
      },
    
      image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        position: 'absolute',
      },
    
      buttonsContainer: {
        display:'flex',
        position: 'absolute',
        bottom: 50,
        width: '100%',
        
      },

      

      buttMicrophone:{
        position: 'absolute',
        bottom: 210,
        width:'100%',
      },



      buttonRecord:{
        position: 'absolute',
        marginLeft:205,
        bottom:35,

      },

      

      

});

export default styles;