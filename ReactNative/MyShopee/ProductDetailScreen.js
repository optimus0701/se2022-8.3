import React, { useEffect, useState } from 'react';
import {
    ActivityIndicator, View, StyleSheet, SafeAreaView,
    FlatList, Text, Image, TouchableWithoutFeedback, Button
} from 'react-native';
import { URL } from "./Url";




export function ProductDetailScreen({ route, navigation }) {
    const { item } = route.params;
    return (
        <SafeAreaView style={styleSheet.MainContainer}>
            <Image style={styleSheet.image}
                source={{ uri: URL + '/get_image/' + item.image }}>
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
                            navigation.navigate('Order', {item});
                        }} />
                </View>
            </View>
        </SafeAreaView>
    );
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
