import React from 'react';
import { Button, Image, StyleSheet, Text, TextInput, ToastAndroid, View } from 'react-native';


export function SignUpScreen({ navigation }) {
  const [email, onChangeEmail] = React.useState('');
  const [username, onChangeUsername] = React.useState('');
  const [password, onChangePassword] = React.useState('');
  const [passwordAgain, onChangeConfirmPassword] = React.useState('');
  return (
    <View style={styles.main}>
      <Image style={styles.image} source={require('./assets/profile.png')} />

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
        onChangeText={onChangePassword} />

      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        onChangeText={onChangeConfirmPassword} />

      <Button
        style={styles.button}
        title='SignUp'
        onPress={() => signUp(email, username, password, passwordAgain)} />
      <Text style={styles.text}>Back</Text>
    </View>
  );
}

async function postSignUp(email, username, password, confirmPassword) {
  const url = 'https://08ec-59-153-254-226.ap.ngrok.io/register';
  const formdata = new FormData();
  formdata.append('username', email);
  formdata.append('password', username);
  formdata.append('password', password);
  formdata.append('password', confirmPassword);

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


function signUp(email, username, password, confirmPassword) {
  console.log('sign up');
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
    marginBottom: 50,
    width: 200,
    height: 200,
  },
  text: {
    marginTop: 20,
  }
});

