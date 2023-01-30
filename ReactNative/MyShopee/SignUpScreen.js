import React from 'react';
import { Button, Image, StyleSheet, Text, TextInput, ToastAndroid, View } from 'react-native';
import axios from 'axios';
import Url from './Url'


export function SignUpScreen({ navigation }) {
  const [name, onChangeName] = React.useState('');
  const [email, onChangeEmail] = React.useState('');
  const [username, onChangeUsername] = React.useState('');
  const [password, onChangePassword] = React.useState('');
  const [passwordAgain, onChangeConfirmPassword] = React.useState('');
  return (
    <View style={styles.main}>
      <Image style={styles.image} source={require('./assets/profile.png')} />

      <TextInput
        style={styles.input}
        placeholder="Name"
        onChangeText={onChangeName} />

      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={onChangeEmail} />

      <TextInput
        style={styles.input}
        placeholder="Username"
        onChangeText={onChangeUsername} />

      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        right={<TextInput.Icon icon="assets/icon.png" />}
        onChangeText={onChangePassword} />

      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        onChangeText={onChangeConfirmPassword} />

      <Button
        style={styles.button}
        title='SignUp'
        onPress={() => signUp(name, email, username, password, passwordAgain)} />
      <Text style={styles.text}
            onPress={() => changeScreen(navigation, 'Login')}>Back</Text>
    </View>
  );
}

async function postSignUp(name, email, username, password, confirmPassword) {
  const formdata = new FormData();
  formdata.append('name', name);
  formdata.append('email', email);
  formdata.append('username', username);
  formdata.append('password', password);
  formdata.append('confirm', confirmPassword);

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


function signUp(name, email, username, password, confirmPassword) {
  if(password === confirmPassword) {
    postSignUp(name, email, username, password, confirmPassword)
    .then((data) => {
      const res =  JSON.parse(data.data);
      if(res.status === "success") {
        Toast.show('success', Toast.LONG);
        changeScreen(navigation, 'Login');
      }
    })
    .catch((reason) => console.log("Message: " + reason.message));
  } else{
    console.log('password not match');
  }
}

function changeScreen(navigation, screen) {
  navigation.navigate(screen);
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
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#76a2e8',
  },
  button: {
    marginTop: 20,
  },
  image: {
    marginTop: 10,
    marginBottom: 30,
    width: 200,
    height: 200,
  },
  text: {
    marginTop: 20,
  },
  passwordBtn: {
    
  }
});

