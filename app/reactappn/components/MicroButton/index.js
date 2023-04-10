import React from "react";
import {View, Image, ImageBackground, Pressable} from 'react-native';
import styles from "./styles";

const MicroButton=(props)=>{
    return (
        <View style={styles.container}>
          <Pressable
          style={styles.button}
          onPress={()=>{
            console.warn("Microphone")
          }}
          >  
          <Image style={styles.menu} source={require('D:\\Facultate Anul III\\SeverinReactApp\\reactappn\\assets\\images\\icons8-microphone-48.png')}/>
          </Pressable>
      </View>
         
      
    );

};

export default MicroButton;