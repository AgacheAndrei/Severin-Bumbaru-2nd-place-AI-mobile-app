import React from "react";
import {View, Image, ImageBackground, Pressable} from 'react-native';
import styles from "./styles";

const Header=(props)=>{
    return (
        <View style={styles.container}>
          <Image style={styles.logo} source={require('D:\\Facultate Anul III\\SeverinReactApp\\reactappn\\assets\\images\\logo.png')}/>
          {/* <Image style={styles.menu} source={require('D:\\Facultate Anul III\\SeverinReactApp\\reactappn\\assets\\images\\icons8-microphone-48.png')}/> */}
      </View>
    );

};

export default Header;