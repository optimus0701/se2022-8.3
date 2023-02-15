import React, { useEffect, useState } from 'react';
import {
  ActivityIndicator, View, StyleSheet, SafeAreaView,
  FlatList, Text, Image, TouchableWithoutFeedback, Button
} from 'react-native';
import { URL } from "./Url";
import * as SecureStore from "expo-secure-store";

export function UserScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.viewProfile}>
        <View style={{ flexDirection: 'row' }}>
          <Image style={styles.imageProfile}
            source={require('./assets/profile.png')}></Image>
          <View>
            <Text style={styles.itemText}>Username</Text>
            <Text style={styles.itemText}>Email</Text>
          </View>
        </View>
      </View>

      <View style={styles.viewOptions}>
        <TouchableWithoutFeedback onPress={() => {
          navigation.navigate('Order');
        }}>
          <View style={styles.cart}>
            <Image style={styles.imageOptions}
              source={require('./assets/cart.png')}></Image>
            <Text style={{ fontSize: 12, marginLeft: 10 }}>Giỏ Hàng</Text>
          </View>
        </TouchableWithoutFeedback>
        <View style={styles.order}>
          <Image style={styles.imageOptions}
            source={require('./assets/fast-delivery.png')}></Image>
          <Text style={{ fontSize: 12 }}>Đang Vận Chuyển</Text>
        </View>
      </View>
      <View style={{ paddingTop: 200, justifyContent: 'center', alignContent: 'center', flexDirection: 'row' }}>
        <View style={{ width: 100 }}>
          <Button title='LOGOUT' onPress={() => {
            SecureStore.setItemAsync('is_login', 'false');
            navigation.reset({
              index: 0,
              routes: [{ name: 'Login' }],
            });
          }} />
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
    paddingTop: 6,
  },
  viewOptions: {
    flexDirection: 'row',
  },
  imageOptions: {
    width: 60,
    height: 60,
  },
  cart: {
    paddingLeft: 60,
    justifyContent: 'center',
    alignContent: 'center',
  },
  order: {
    paddingLeft: 120,
    justifyContent: 'center',
    alignContent: 'center',
    paddingTop: 5,
  }
});
