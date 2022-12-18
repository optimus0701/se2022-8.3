import { Button, Image, StyleSheet, Text, TextInput, View } from 'react-native';


export function SignUpScreen({ navigation }) {
  return (
    <View style={styles.main}>
      <Image style={styles.image} source={require('./assets/profile.png')} />

      <TextInput
        style={styles.input}
        placeholder="Email" />

      <TextInput
        style={styles.input}
        placeholder="Username" />

      <TextInput
        style={styles.input}
        placeholder="Password" />

      <TextInput
        style={styles.input}
        placeholder="Password Again" />

      <Button
        style={styles.button}
        title='SignUp' />
    </View>
  );
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

