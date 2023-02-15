import React, { useEffect, useState } from 'react';
import {
    ActivityIndicator, View, StyleSheet, SafeAreaView,
    FlatList, Text, Image, TouchableWithoutFeedback, Button
} from 'react-native';
import { URL } from "./Url";

export function OrderScreen({ navigation }) {

    const [current_user, onChange] = React.useState(false);

    SecureStore.getItemAsync('current_user').then(current_user => {
        if (!current_user) {
            onChange('');
        } else {
            onChange(current_user);
        }
    })

    return (
        <View>
            <Text>{'' + item.price}</Text>
        </View>
    )
}