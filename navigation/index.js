import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Teacher from "../src/screens/Teacher";
import { LogBox, Text, View } from "react-native";
import SecondScreen from "../src/screens/Student";

const Stack = createNativeStackNavigator();

LogBox.ignoreLogs([
    'Non-serializable values were found in the navigation state'
]);

export default function AppNavigation() {
    return(
        <NavigationContainer>
            <Stack.Navigator >
                <Stack.Screen name="Teacher" options={{headerShown: false}} component={Teacher} />
                <Stack.Screen name="SecondScreen" options={{headerShown: false}} component={SecondScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}