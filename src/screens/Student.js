import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import Teacher from './Teacher';
import Menager from './Menager';

export default function Student() {
    const navigation = useNavigation();
    return (
    <SafeAreaView style={{backgroundColor: "green", flex: 0.5, alignItems: "center", justifyContent: "center"}}>
        <TouchableOpacity style={{width: 100, backgroundColor: "lightyellow", height: 100, alignItems: "center", justifyContent: "center"}} onPress={() => navigation.navigate('Teacher',)}>
            <Text>Go to Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{width: 100, backgroundColor: "lightblue", height: 100, alignItems: "center", justifyContent: "center"}} onPress={() => navigation.navigate('Menager',)}>
            <Text>Go to Home</Text>
        </TouchableOpacity>
    </SafeAreaView>
  )
}