import { StyleSheet, View, Text, TouchableOpacity, SafeAreaView, Image, Platform, ScrollView } from 'react-native';
import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import * as Progress from 'react-native-progress';
import { StatusBar } from 'expo-status-bar';
import HorizontalScroll from './HorizontalScroll';
export default function Teacher() {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a 3-second delay before showing the main content
    const delay = setTimeout(() => {
      setLoading(false);
    }, 3000);

    // Clear the timeout when the component unmounts or when loading is complete
    return () => clearTimeout(delay);
  }, []);


  return (
    <View style={{ flex: 1 }}>
      <StatusBar />
      <Image blurRadius={12} source={require('../../assets/indir.jpeg')} style={{ position: 'absolute', height: '100%', width: '100%' }} />
      {loading ? (
        <View style={{ flex: 1, flexDirection: "row", justifyContent: "center", alignItems: "center", }}>
          <Progress.CircleSnail thickness={10} size={140} color={"#0bb3b2"} />
        </View>
      ) : (
        <SafeAreaView style={styles.container}>
          <View style={styles.first}>
            <View style={styles.firstsc}>

            </View>
          </View>
          <View style={styles.second}>
            <View style={styles.secondfirst}>

            </View>
            <View style={styles.secondscd}>
              <ScrollView
                keyboardShouldPersistTaps="always"
                horizontal
                contentContainerStyle={{ paddingHorizontal: 15 }}
                showsHorizontalScrollIndicator={false}
              >
                <HorizontalScroll/>
              </ScrollView>
            </View>
          </View>
        </SafeAreaView>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    flex: 1,
    alignItems: "center",
  },
  safeAreaViewContainer: {
    flex: 1,
    alignItems: "center",
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
    borderWidth: 1,
  },
  first: {
    borderWidth: 2,
    borderColor: "black",
    width: 350,
    height: 150,

  },
  firstsc: {
    borderWidth: 2,
    borderColor: "black",
    width: 100,
    height: 100,
    margin: 20
  },
  second: {
    marginTop: 20,
    borderWidth: 2,
    borderColor: "black",
    width: 350,
    height: 600,
    alignItems: "center",
    justifyContent: "center"
  },
  secondfirst: {
    borderWidth: 2,
    borderColor: "black",
    width: 250,
    height: 350,
    marginTop: 30
  },
  secondscd: {
    display: "flex",
    flexDirection: "row",
    margin: 30,
    display: "flex",
    borderWidth: 2,
    borderColor: "black",
    width: 250,
    height: 150,
  },

});
