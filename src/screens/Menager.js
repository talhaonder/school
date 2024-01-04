import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import Teacher from './Teacher';
import Student from './Student';

export default function Menager() {
    const navigation = useNavigation();
    return (
    <SafeAreaView style={{backgroundColor: "green", flex: 0.5, alignItems: "center", justifyContent: "center"}}>
        <TouchableOpacity style={{width: 100, backgroundColor: "lightgreen", height: 100, alignItems: "center", justifyContent: "center"}} onPress={() => navigation.navigate('Teacher',)}>
            <Text>Go to Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{width: 100, backgroundColor: "lightpurple", height: 100, alignItems: "center", justifyContent: "center"}} onPress={() => navigation.navigate('Student',)}>
            <Text>Go to Home</Text>
        </TouchableOpacity>
    </SafeAreaView>
  )
}