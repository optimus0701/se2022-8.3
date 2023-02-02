import React from 'react';
import { FlatList, StyleSheet, Text, View, Image } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
    img: {
        width: 100,
        height: 100
    },
});


export function HomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <FlatList
                data={[
                    { key: 'Devin', image: require('./assets/profile.png') },
                    { key: 'Dan', image: require('./assets/profile.png') },
                ]}
                renderItem={({ item }) => <><Image source={item.image} style={styles.img} /><Text style={styles.item}>{item.key}</Text></>}
            />
        </View>
    );
}