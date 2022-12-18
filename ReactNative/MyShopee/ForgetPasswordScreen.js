import { Button, Image, StyleSheet, Text, TextInput, View } from 'react-native';

export function ForgetPasswordScreen({ navigation }) {
  const [email, onChangeEmail] = React.useState('');
  return (
    <View style={styles.main}>
      <Image style={styles.image} source={require('./assets/profile.png')} />

      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={onChangeEmail} />

      <Button
        style={styles.button}
        title='Send Request'
        onPress={() => sendRequest(email)} />
      <Text style={styles.text}>Back</Text>
      </View>
  );
}

function sendRequest(email) {
  console.log('send request')
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