import React, { useEffect, useState } from 'react';
import {
    ActivityIndicator, View, StyleSheet, SafeAreaView,
    FlatList, Text, Image, TouchableWithoutFeedback, Button, ToastAndroid
} from 'react-native';
import { URL } from "./Url";
import * as SecureStore from "expo-secure-store";
import Dialog from "react-native-dialog";
import axios from 'axios';





export function ProductDetailScreen({ route, navigation }) {
    const { item } = route.params;

    const [current_user, onChange] = React.useState('admin');
    const [address, onAddressChange] = React.useState('');
    const [phone, onPhoneChange] = React.useState('');


    const [visible, setVisible] = useState(false);

    const showDialog = () => {
        setVisible(true);
    };

    const handleCancel = () => {
        setVisible(false);
    };

    const handleOK = () => {
        const username = current_user;
        const product = item['pro_name']
        const adr = address;
        const ph = phone;
        const status = 0;
        postOrder(username, product, adr, ph, status)
            .then((data) => {
                navigation.navigate('Order', {current_user});
            })
            .catch((reason) => console.log("Message: " + reason.message));
        setVisible(false);
    };

    SecureStore.getItemAsync('current_user').then(current_user => {
        if (current_user) {
            onChange(current_user);
        }
    });
    return (
        <SafeAreaView style={styleSheet.MainContainer}>
            <Image style={styleSheet.image}
                source={{ uri: URL + '/get_image/' + item.image + '.png' }}>
            </Image>
            <View style={styleSheet.viewTitle}>
                <Image style={styleSheet.seller} source={require('./assets/profile.png')}></Image>
                <View>
                    <Text style={styleSheet.sellerTitle}>{item['seller']}</Text>
                    <Text style={styleSheet.title}>{item['pro_name']}</Text>
                </View>
            </View>
            <Text style={styleSheet.description}>{item.description}</Text>
            <View style={styleSheet.viewButtonOrder}>
                <View style={styleSheet.buttonOrder}>
                    <Button
                        title={'$' + item.price}
                        onPress={() => {
                            showDialog();
                            // navigation.navigate('Order', { current_user });
                        }} />
                </View>
            </View>
            <Dialog.Container visible={visible}>
                <Dialog.Title>Nhập địa chỉ của bạn</Dialog.Title>
                <Dialog.Input placeholder='Địa Chỉ' onChangeText={onAddressChange}>
                </Dialog.Input>
                <Dialog.Input placeholder='Số Điện Thoạt' onChangeText={onPhoneChange}>
                </Dialog.Input>
                <Dialog.Button label="Cancel" onPress={handleCancel} />
                <Dialog.Button label="OK" onPress={handleOK} />
            </Dialog.Container>
        </SafeAreaView>
    );
}


async function postOrder(username, product, address, phone, status) {
    const url = URL + 'upload_order'
    fetch(url + '?username=' + username
        + '&product=' + product
        + '&address=' + address
        + '&phone=' + phone
        + '&status=' + status).then((value) => {
            console.log('post order');
        });
}

const styleSheet = StyleSheet.create({
    MainContainer: {
        flex: 1,
    },
    image: {
        height: 170,
    },
    title: {
        paddingLeft: 10,
        fontSize: 15,
        paddingRight: 60,
    },
    description: {

    },
    viewTitle: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        padding: 10,
    },
    seller: {
        width: 50,
        height: 50,
        alignSelf: 'flex-start'
    },
    sellerTitle: {
        textAlign: 'left',
        paddingLeft: 10,
        paddingRight: 60,
        fontSize: 18,
    },
    viewButtonOrder: {
        padding: 20,
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'center',
    },
    buttonOrder: {
        width: 100,
    }
});
