
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Home } from '../screens/Home';

import { NavigationContainer } from '@react-navigation/native';
import Login from '../screens/Login';



const Stack = createStackNavigator();

export const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login}  />
        <Stack.Screen name="Home" component={Home}  options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

