import React, { useEffect } from 'react';
import {
  Button, Image, KeyboardAvoidingView, StyleSheet,
  Text, ToastAndroid, TouchableWithoutFeedback, View,
  Platform, Keyboard, ScrollView
} from 'react-native';

import { TextInput } from 'react-native-paper';

import axios from 'axios';
import { URL } from './Url';
let navi;

export function LoginScreen({ navigation }) {
  navi = navigation;
  const [hidePass, setHidePass] = React.useState(true);
  const [password, onChangePassword] = React.useState('');

  const [username, onChangeUsername] = React.useState('');
  return (
    <ScrollView automaticallyAdjustContentInsets={true} style={styles.scrollview}>
      <View style={styles.main}>
        <Image style={styles.image} source={require('./assets/profile.png')} />

        <TextInput
          style={styles.input}
          placeholder="Username"
          onChangeText={onChangeUsername}
          left={
            <TextInput.Icon 
            icon={'account'}/>
          } />

        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry={hidePass ? true : false}
          onChangeText={onChangePassword}
          right={
            <TextInput.Icon
              icon={hidePass? "eye-off" : "eye"}
              onPress={() => {
                console.log('abc');
                setHidePass(!hidePass);
              }}
            />
          }
          left={
            <TextInput.Icon
            icon={"lock"} />
          }
          />
        <Button
          style={styles.button}
          title='Login'
          onPress={() => login(username, password)} />

        <Text style={styles.text}
          onPress={() => changeScreen(navigation, 'ForgetPassword')}>Forget Password</Text>
        <Text style={styles.text}
          onPress={() => changeScreen(navigation, 'SignUp')} >Do not have account? sign up!</Text>
      </View>
    </ScrollView>
  );
}


async function postLogin(username, password) {
  const url = URL + 'user-login'
  const formdata = new FormData();
  formdata.append('username', username);
  formdata.append('password', password);

  const headers = {
    accept: 'application/json',
    'content-type': 'multipart/form-data',
  };

  const opts = {
    method: 'POST',
    url: url,
    headers: headers,
    data: formdata,
  };
  return await axios.request(opts);
}

function login(email, password) {
  if(isValidInput(email, password)) {
    postLogin(email, password)
    .then((data) => {
      const res = JSON.parse(data.data);
      if (res.status === 'success') {
        console.log('login success');
        ToastAndroid.show('success', ToastAndroid.SHORT);
        changeScreen(navi, 'Home');
      }
    })
    .catch((reason) => console.log("Message: " + reason.message));
  } else {
    console.log('invalid input');
  }
  
}




function changeScreen(navigation, screen) {
  console.log('change screen from login screen');
  navigation.navigate(screen);
}

function isValidInput(username, password) {
  return (username?.trim()?.length || 0) > 0 && (password?.trim()?.length || 0) > 0;
}

const styles = StyleSheet.create({
  main: {
    backgroundColor: '#fff',
    alignItems: 'center',
    flex: 1,
  },
  input: {
    height: 40,
    margin: 12,
    width: 300,
    borderWidth: 1,
    backgroundColor: '#76a2e8',
  },
  button: {
    marginTop: 20,
  },
  image: {
    marginTop: 10,
    marginBottom: 120,
    width: 200,
    height: 200,
  },
  text: {
    marginTop: 20,
  },
  scrollview: {
    backgroundColor: '#fff',
  },
});
