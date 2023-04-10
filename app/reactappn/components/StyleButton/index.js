import React,{useState} from "react";
import {View, Text, ImageBackground, Pressable,Linking} from 'react-native';
import styles from "./styles";
//import Video from 'react-native-video';
//import LightVideo from 'D:\\Facultate Anul III\\SeverinReactApp\\reactappn\\assets\\videos\\videofinal.mp4'


const StyleButton=(props)=>{
   
    

    const type = props.type;
    const content = props.content;
    const onPress = props.onPress;
    //const{type, content, onPress} = props;
    const backgroundColor = type === 'primary' ? 'black' : 'white';
    const textColor = type === 'primary' ?  'white' : 'black';
    return (
        <View style={styles.container}>
            <Pressable
            style={[styles.button,{backgroundColor: backgroundColor}]}
            onPress={()=>onPress()}
            >
                <Text style={[styles.text,{color:textColor}]}>{content}</Text>
            
            </Pressable>
      </View>
    );

};

export default StyleButton;