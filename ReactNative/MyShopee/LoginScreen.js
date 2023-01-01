import React from 'react';
import { Button, Image, StyleSheet, Text, TextInput, View } from 'react-native';
import axios from 'axios';


export function LoginScreen({ navigation }) {
  const [email, onChangeEmail] = React.useState('');
  const [password, onChangePassword] = React.useState('');
  return (
    <View style={styles.main}>
      <Image style={styles.image} source={require('./assets/profile.png')} />

      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={onChangeEmail} />

      <TextInput
        style={styles.input}
        placeholder="Password" 
        onChangeText={onChangePassword} />

      <Button
        style={styles.button}
        title='Login'
        onPress={() => login(email, password)} />

      <Text style={styles.text}
        onPress={() => changeScreen(navigation, 'ForgetPassword')}>Forget Password</Text>
      <Text style={styles.text}
        onPress={() => changeScreen(navigation, 'SignUp')} >Do not have account? sign up!</Text>
    </View>
  );
}



function login(email, password) {
  console.log('abc1');
  axios.post('http://192.168.43.4:5000/user-login', {
    username: "vido0701@gmail.com",
    password: "03112002"
  }).then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
  console.log('abc2');
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
    marginBottom: 120,
    width: 200,
    height: 200,
  },
  text: {
    marginTop: 20,
  }
});
