import React from 'react';
import { Button, StyleSheet, Text, TextInput, View, AsyncStorage } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LoginScreen } from './LoginScreen';
import { ForgetPasswordScreen } from './ForgetPasswordScreen';
import { SignUpScreen } from './SignUpScreen';
import { ProductDetailScreen } from './ProductDetailScreen'
import { MainScreen } from './MainScreen';
import { OrderScreen } from './OrderScreen';

import * as SecureStore from "expo-secure-store";
import { UserScreen } from './UserScreen';

const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="ForgetPassword" component={ForgetPasswordScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="Main"component={MainScreen}/>
        <Stack.Screen name="ProductDetail" component={ProductDetailScreen} />
        <Stack.Screen name="Order" component={OrderScreen} />
        <Stack.Screen name="User" component={UserScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
  
}







