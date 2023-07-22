import React from "react";
import { Button, View, Text } from "react-native";

type ILoginProps = {
    navigation: any;
  }
  
   const Login = ({ navigation }: ILoginProps) => {
    const handleLogin = () => {
      navigation.navigate('Home');
    };
  
    return (
      <View>
        <Text>Tela de Login</Text>
        <Button title="Login" onPress={handleLogin} />
      </View>
    );
  };

  export default Login;