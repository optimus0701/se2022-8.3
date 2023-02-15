import React from 'react';
import { Button, Image, ScrollView, StyleSheet,
   Text, ToastAndroid, View } from 'react-native';
import axios from 'axios';
import { URL } from './Url'
import { TextInput } from 'react-native-paper';


export function SignUpScreen({ navigation }) {

  const [hidePass, setHidePass] = React.useState(true);
  const [password, onChangePassword] = React.useState('');

  const [hidePassConfirm, setHidePassConfirm] = React.useState(true);
  const [passwordConfirm, onChangePasswordConfirm] = React.useState('');

  const [name, onChangeName] = React.useState('');
  const [email, onChangeEmail] = React.useState('');
  const [username, onChangeUsername] = React.useState('');

  return (
    <ScrollView automaticallyAdjustContentInsets={true} style={styles.scrollview}>
      <View style={styles.main}>
        <Image style={styles.image} source={require('./assets/profile.png')} />

        <TextInput
          style={styles.input}
          placeholder="Name"
          onChangeText={onChangeName}
          left={
            <TextInput.Icon icon={'account'}/>
          } />

        <TextInput
          style={styles.input}
          placeholder="Email"
          onChangeText={onChangeEmail}
          left={
            <TextInput.Icon icon={'email'}/>
          } />

        <TextInput
          style={styles.input}
          placeholder="Username"
          onChangeText={onChangeUsername}
          left={
            <TextInput.Icon icon={'account'}/>
          } />

        <TextInput
          style={styles.input}
          placeholder="Password"
          onChangeText={onChangePassword} 
          right={
            <TextInput.Icon
              icon={hidePass? "eye-off" : "eye"}
              onPress={() => setHidePass(!hidePass)}
            />
          }
          left={
            <TextInput.Icon
            icon={"lock"} />
          }/>

        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          onChangeText={onChangePasswordConfirm}
          right={
            <TextInput.Icon
              icon={hidePassConfirm? "eye-off" : "eye"}
              onPress={() => setHidePass(!hidePassConfirm)}
            />
          }
          left={
            <TextInput.Icon
            icon={"lock"} />
          }/>

        <Button
          style={styles.button}
          title='SignUp'
          onPress={() => signUp(name, email, username, password, passwordConfirm)} />
        <Text style={styles.text}
          onPress={() => changeScreen(navigation, 'Login')}>Back</Text>
      </View>
    </ScrollView>
  );
}

async function postSignUp(name, email, username, password, confirmPassword) {
  const url = URL + 'register';
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
  if (password === confirmPassword) {
    postSignUp(name, email, username, password, confirmPassword)
      .then((data) => {
        const res = JSON.parse(data.data);
        console.log(res.status);
      })
      .catch((reason) => console.log("Message: " + reason.message));
  } else {
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
  scrollview: {
    backgroundColor: '#fff',
  },
});
