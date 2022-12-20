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

