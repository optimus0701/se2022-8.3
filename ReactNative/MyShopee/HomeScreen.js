import React, { useEffect, useState } from 'react';
import { ActivityIndicator, View, StyleSheet, SafeAreaView,
     FlatList, Text, Image, TouchableWithoutFeedback } from 'react-native';
import { URL } from "./Url";



export function HomeScreen({ navigation }) {
    const [JSON_DATA, setJSON_DATA] = useState('');

    const [showIndicator, setShowIndicator] = useState(true);

    useEffect(() => {
        async function fetchData() {
            fetch(URL + 'products')
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
        <TouchableWithoutFeedback onPress={() => {
            navigation.navigate('ProductDetail', {item});
        }}>
            <View style={styleSheet.listItem}>
            <Image
                style={styleSheet.itemImage}
                source={{uri:URL + '/get_image/' + item.image}}></Image>
            <Text style={styleSheet.itemText}> {item['pro_name']} </Text>
        </View>
        </TouchableWithoutFeedback>
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
                numColumns={3}
            />

        </SafeAreaView>
    );
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
        width: 105,
        flex: 1,
        textAlign: 'center'
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
