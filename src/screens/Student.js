import React, { useState, useEffect } from 'react';
import { View, Text, SafeAreaView, ScrollView } from 'react-native';
import { BarChart } from 'react-native-chart-kit';
import { useNavigation } from '@react-navigation/native';

const SecondScreen = ({ route }) => {
  const { cevaplar } = route.params; // İlk ekrandan gelen cevapları al
  const navigation = useNavigation();

  // Grafik için verileri hazırla
  const data = {
    labels: ['Soru 1', 'Soru 2', 'Soru 3', 'Soru 4', 'Soru 5', 'Soru 6', 'Soru 7', 'Soru 8', 'Soru 9', 'Soru 10'],
    datasets: [
      {
        data: cevaplar,
      },
    ],
  };

  const chartConfig = {
    backgroundGradientFrom: '#ffffff',
    backgroundGradientTo: '#ffffff',
    color: (opacity = 1) => `rgba(0, 0, 255, ${opacity})`,
    strokeWidth: 20,
  };

  return (
    <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 20 }}>Cevaplar Grafiği</Text>
      <ScrollView horizontal>
        <BarChart
          data={data}
          width={600}
          height={200}
          yAxisLabel=""
          chartConfig={chartConfig}
        />
      </ScrollView>
      <Text
        style={{ marginTop: 20, color: 'blue', textDecorationLine: 'underline', cursor: 'pointer' }}
        onPress={() => navigation.navigate('Teacher')}
      >
        Geri Dön
      </Text>
    </SafeAreaView>
  );
};

export default SecondScreen;
