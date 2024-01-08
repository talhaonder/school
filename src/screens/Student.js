import { View, Text, SafeAreaView, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'


export default function Student() {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity style={styles.buttons} onPress={() => navigation.navigate('Teacher',)}>
                <Text style={styles.texts}>Go to Home</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttons} onPress={() => navigation.navigate('Student',)}>
                <Text style={styles.texts}>Go to Home</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({

    container: {
        backgroundColor: "green",
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    texts: {
        fontWeight: "bold",
    },
    buttons: {
        width: 100,
        backgroundColor: "lightgreen",
        height: 100,
        alignItems: "center",
        justifyContent: "center",
        borderBlockColor: "plum",
        borderWidth: 1
    },
});
