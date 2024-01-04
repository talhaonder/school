import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Teacher from "../../src/screens/Teacher";
import { LogBox, Text, View } from "react-native";
import Student from "../../src/screens/Student";
import Menager from "../../src/screens/Menager";

const Stack = createNativeStackNavigator();

LogBox.ignoreLogs([
    'Non-serializable values were found in the navigation state'
]);

export default function AppNavigation() {
    return(
        <NavigationContainer>
            <Stack.Navigator >
                <Stack.Screen name="Teacher" options={{headerShown: false}} component={Teacher} />
                <Stack.Screen name="Student" options={{headerShown: false}} component={Student} />
                <Stack.Screen name="Menager" options={{headerShown: false}} component={Menager} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}