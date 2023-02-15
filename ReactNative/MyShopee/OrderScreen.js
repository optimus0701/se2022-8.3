import React, { useEffect, useState } from 'react';
import {
    ActivityIndicator, View, StyleSheet, SafeAreaView,
    FlatList, Text, Image, TouchableWithoutFeedback
} from 'react-native';
import { URL } from "./Url";
import * as SecureStore from "expo-secure-store";


export function OrderScreen({ route, navigation }) {

    const { current_user } = route.params;

    console.log(current_user);

    const [JSON_DATA, setJSON_DATA] = useState('');

    const [showIndicator, setShowIndicator] = useState(true);

    useEffect(() => {
        async function fetchData() {
            fetch(URL + 'get_orders/' + current_user)
                .then((response) => response.json())
                .then((responseJson) => {
                    setJSON_DATA(responseJson);
                    setShowIndicator(false);
                })
                .catch((error) => {
                    console.error(error);
                });
        }
        fetchData();
    }, []);




    const ItemRender = ({ item }) => (
        <View style={styleSheet.listItem}>
            <Text style={styleSheet.itemText}> Người Nhận: {item['username']} </Text>
            <Text style={styleSheet.itemText}> Địa chỉ: {item['address']} </Text>
            <Text style={styleSheet.itemText}> Số điện thoại: {item['phone']} </Text>
            <Text style={styleSheet.itemText}> Tên Sản Phẩm: {item['product']} </Text>
            <Text style={styleSheet.itemText}> Trạng Thái: {
                getStatus(item['status'])
            } </Text>
        </View>
    );



    return (
        <SafeAreaView style={styleSheet.MainContainer}>

            <ActivityIndicator
                size="large"
                color="red"
                animating={showIndicator}
                style={styleSheet.activityIndicator} />
            <FlatList
                data={JSON_DATA}
                renderItem={({ item }) => <ItemRender item={item} />}
            />

        </SafeAreaView>
    );
}

function getStatus(number) {
    if(number === 0) {
        return 'Chờ xác nhận'
    } else if(number === 1) {
        return 'Đang giao hàng'
    } else if(number === 2) {
        return 'Đã giao hàng'
    } else {
        return 'Lỗi'
    }
}
const styleSheet = StyleSheet.create({
    MainContainer: {
        flex: 1,
    },

    listItem: {
        paddingLeft: 12,
        paddingTop: 10,
        paddingBottom: 10,
    },

    itemText: {
        fontSize: 12,
        color: 'black',
        flex: 1,
    },
    itemImage: {
        width: 105,
        height: 100,
    },
    activityIndicator: {
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
    }

});
