import { View, Text, TouchableOpacity, SafeAreaView } from 'react-native'
import React from 'react'
import Student from './Student'
import { useNavigation } from '@react-navigation/native'

export default function Teacher() {
    const navigation = useNavigation();
  return (
    <SafeAreaView style={{backgroundColor: "blue", flex: 0.5,  alignItems: "center", justifyContent: "center"}}>
        <TouchableOpacity style={{width: 100, backgroundColor: "plum", height: 100, alignItems: "center", justifyContent: "center"}} onPress={() => navigation.navigate('Student',)}>
            <Text>Go to Home</Text>
        </TouchableOpacity>
    </SafeAreaView>
  )
}