import {StyleSheet, Text, View, Image, Button} from "react-native";
import { GenericButton } from "../../components/buttons/index";
import { useState } from "react";
import React from 'react';

export const Navbar = () => {
    
    const Logo = require("../../assets/imgs/lgrm01.png");
    const UserIcon = require("../../assets/icons/userIcon.png")
    
    const [Login, setLogin] = useState(false);

    const GetLogin = () => {
    
      setLogin(true);
    };
  

   return (
    <View style={styles.nav}> 
    <View style={styles.content}>
    
        <Image style={styles.logoImg} source={Logo}/>
        <Text style={styles.title}>Your List</Text>
       
        {Login ?  <Image style={styles.icon} source={UserIcon}/> : <GenericButton text="Login" onPress={GetLogin} />}
 
 
    </View>
    </View>
    );
};


const styles = StyleSheet.create({
    content:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        textAlign: 'center',
        padding:5,
        paddingRight:20,
    },
    nav:{
        top: 0,
        left: 0,
        right: 0,
        position: 'absolute',
        width: '100%',
        backgroundColor: '#FFFFFF',
        elevation: 3,
        zIndex: 1,
        paddingTop:20
    },
    logoImg:{
     width:50,
     height:50,
    },
    icon:{
        width:35,
        height:35,
       },
    title:{
        fontSize:20,
    }
});                               