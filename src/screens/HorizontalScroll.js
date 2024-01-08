import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'
import React from 'react'

export default function horizontalScroll() {
    return (
        <View style={styles.secondscd}>
            <TouchableOpacity
                onPress={() => handleDayPress(item)}
                style={styles.horizontalScroll}
            >
                <Image source={require('../../assets/indir.jpeg')} style={{ height: 44, width: 44 }} />
                <Text style={{ color: 'white', fontSize: 12, fontWeight: '300' }}>pazartesi</Text>
                <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>29&#176;</Text>
                <Text style={{ color: 'white', fontSize: 12 }}>15:30</Text>

            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => handleDayPress(item)}
                style={styles.horizontalScroll}
            >
                <Image source={require('../../assets/indir.jpeg')} style={{ height: 44, width: 44 }} />
                <Text style={{ color: 'white', fontSize: 12, fontWeight: '300' }}>pazartesi</Text>
                <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>29&#176;</Text>
                <Text style={{ color: 'white', fontSize: 12 }}>15:30</Text>

            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => handleDayPress(item)}
                style={styles.horizontalScroll}
            >
                <Image source={require('../../assets/indir.jpeg')} style={{ height: 44, width: 44 }} />
                <Text style={{ color: 'white', fontSize: 12, fontWeight: '300' }}>pazartesi</Text>
                <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>29&#176;</Text>
                <Text style={{ color: 'white', fontSize: 12 }}>15:30</Text>

            </TouchableOpacity>
        </View>

    )
}
const styles = StyleSheet.create({
    horizontalScroll: {
        flex: 1,
        margin: 5,
        justifyContent: 'center',
        alignItems: 'center',
        width: 100,
        height: 150,  // İlgili kısım: Elemanların yüksekliğini artırabilirsiniz.
        borderRadius: 25,
        marginBottom: 1,
      },
      secondscd: {
        display: "flex",
        flexDirection: "row",
      },
})