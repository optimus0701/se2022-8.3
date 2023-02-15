import React, { useEffect, useState } from 'react';
import {
    ActivityIndicator, View, StyleSheet, SafeAreaView,
    FlatList, Text, Image, TouchableWithoutFeedback, Button
} from 'react-native';
import { URL } from "./Url";

export function OrderScreen({route, navigation}) {
    const { item } = route.params;
    return(
        <View>
            <Text>{'' + item.price}</Text>
        </View>
    )
}