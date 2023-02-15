import React from 'react';
import { Button, StyleSheet, Text, TextInput, View, AsyncStorage } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LoginScreen } from './LoginScreen';
import { ForgetPasswordScreen } from './ForgetPasswordScreen';
import { SignUpScreen } from './SignUpScreen';
import { ProductDetailScreen } from './ProductDetailScreen'
import { MainScreen } from './MainScreen';

import * as SecureStore from "expo-secure-store";

const Stack = createNativeStackNavigator();

async function save(key, value) {
  await SecureStore.setItemAsync(key, value);
}

async function getValueFor(key) {
 
}

export default function App() {

  const [isLogin, onChange] = React.useState(false);

  SecureStore.getItemAsync('is_login').then(isLogin => {
    if(!isLogin || isLogin === 'false') {
      onChange(false);
    } else if( isLogin = 'true') {
      onChange(true);
    }
  })
  
  if(isLogin) {
    console.log('isLogin');
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Main'>
          <Stack.Screen name="Main" component={MainScreen} />
          <Stack.Screen name="ProductDetail" component={ProductDetailScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  } else {
    return (
      <NavigationContainer>
        <Stack.Navigator  initialRouteName='Main'>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="ForgetPassword" component={ForgetPasswordScreen} />
          <Stack.Screen name="SignUp" component={SignUpScreen} />
          <Stack.Screen 
          name="Main" 
          component={MainScreen}
          options={{headerBackTitleVisible: false}} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}







