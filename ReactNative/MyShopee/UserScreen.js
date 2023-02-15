import React, { useEffect, useState } from 'react';
import {
  ActivityIndicator, View, StyleSheet, SafeAreaView,
  FlatList, Text, Image, TouchableWithoutFeedback, Button
} from 'react-native';
import { URL } from "./Url";
import * as SecureStore from "expo-secure-store";

export function UserScreen({ navigation }) {
  const [current_user, onChange] = React.useState('admin');

  SecureStore.getItemAsync('current_user').then(current_user => {
    if (current_user) {
      onChange(current_user);
    }
  });
  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.viewProfile}>
        <View style={{ flexDirection: 'row' }}>
          <Image style={styles.imageProfile}
            source={require('./assets/profile.png')}></Image>
          <View>
            <Text style={styles.itemText}>{current_user} </Text>
          </View>
          <TouchableWithoutFeedback onPress={() => {
            navigation.navigate('Order', {current_user});
          }}>
            <Image style={styles.imageDelivery}
              source={require('./assets/cart.png')}></Image>
          </TouchableWithoutFeedback>
        </View>
      </View>
      <View style={styles.viewOptions}>
        <View style={{marginLeft: 130, marginTop: 10}}>
          <View style={{width: 100}}>
            <Button title='Logout' onPress={() => {
              SecureStore.setItemAsync('is_login', 'false');
              navigation.reset({
                index: 0,
                routes: [{ name: 'Login' }],
              });
            }}/>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  viewProfile: {
    width: '100%',
    height: 180,
    padding: 10,
    backgroundColor: 'white',
    borderBottomWidth: 1,
  },
  imageProfile: {
    width: 60,
    height: 60,
  },
  itemText: {
    paddingLeft: 10,
    paddingTop: 10,
  },
  viewOptions: {
    flexDirection: 'row',
  },
  imageDelivery: {
    width: 60,
    height: 60,
    marginLeft: 120,
  },

});
