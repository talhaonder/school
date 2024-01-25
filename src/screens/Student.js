import React from 'react';
import { View, Text, SafeAreaView, ScrollView } from 'react-native';
import { BarChart } from 'react-native-chart-kit';
import { useRoute } from '@react-navigation/native';

const SecondScreen = () => {
  const route = useRoute();
  const { cevaplar, userName } = route.params;
  console.log(route.params); // Parametreleri konsol ekranında görüntüle
  const scrollContentWidth = 600; // BarChart'ın genişliği

  const surveyQuestions = [
    {
      question: "Soru 1: Sosyal medya kullanımının günlük yaşantınıza etkisi nedir?",
      options: ["Çok olumlu", "Olumlu", "Nötr", "Olumsuz", "Çok olumsuz"],
    },
    {
      question: "Soru 2: Sosyal medyada geçirdiğiniz zamanın genel mutluluğunuza etkisi nasıl?",
      options: ["Çok olumlu", "Olumlu", "Nötr", "Olumsuz", "Çok olumsuz"],
    },
    {
      question: "Soru 3: Sosyal medyada karşılaştığınız içeriklerin özgüveninize etkisi nedir?",
      options: ["Çok olumlu", "Olumlu", "Nötr", "Olumsuz", "Çok olumsuz"],
    },
    {
      question: "Soru 4: Sosyal medya platformlarının sosyal ilişkilerinize etkisi nasıl?",
      options: ["Çok olumlu", "Olumlu", "Nötr", "Olumsuz", "Çok olumsuz"],
    },
    {
      question: "Soru 5: Sosyal medyada gördüğünüz olumsuz içeriklerin duygusal sağlığınıza etkisi nedir?",
      options: ["Çok olumlu", "Olumlu", "Nötr", "Olumsuz", "Çok olumsuz"],
    },
    {
      question: "Soru 6: En çok kullandığınız sosyal medya platformu?",
      options: ["Instagram", "X", "Youtube", "Tiktok", "Facebook"],
    },
    {
      question: "Soru 7: Sosyal medyadaki haber akışının dünya görüşünüzü nasıl şekillendirdiğini düşünüyorsunuz?",
      options: ["Çok olumlu", "Olumlu", "Nötr", "Olumsuz", "Çok olumsuz"],
    },
    {
      question: "Soru 8: Sosyal medyada gerçekleşen tartışma ve polemiklerin stres seviyenizi nasıl etkilediğini düşünüyorsunuz?",
      options: ["Çok olumlu", "Olumlu", "Nötr", "Olumsuz", "Çok olumsuz"],
    },
    {
      question: "Soru 9: Sosyal medya kullanımının uyku düzeninize olan etkisini nasıl değerlendirirsiniz?",
      options: ["Çok olumlu", "Olumlu", "Nötr", "Olumsuz", "Çok olumsuz"],
    },
    {
      question: "Soru 10: Sosyal medyada zaman geçirirken, gerçek hayattaki aktivitelerle olan dengeyi nasıl sağlıyorsunuz?",
      options: ["Çok iyi", "İyi", "Orta", "Kötü", "Çok Kötü"],
    },
  ];

  // Her bir soru için ayrı bir veri seti oluştur
  const dataSets = surveyQuestions.map(({ question, options }, index) => {
    const labels = options.map((option) => option);
    const datasets = [
      {
        data: labels.map((label, labelIndex) => (cevaplar[index] === labelIndex ? 1 : 0)),
      },
    ];

    return {
      data: {
        labels,
        datasets,
      },
      question,
      options,
    };
  });

  const chartConfig = {
    backgroundGradientFrom: '#ffffff',
    backgroundGradientTo: '#ffffff',
    color: (opacity = 1) => `rgba(0, 0, 255, ${opacity})`,
    strokeWidth: 1,
  };

  return (
    <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 10 }}>Hoş Geldiniz!</Text>
      <ScrollView >
        {dataSets.map(({ data, question, }, index) => (
          <View key={index} style={{ marginRight: 10 }}>
            <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10 }}>{`${index + 1}. ${question}`}</Text>
            <ScrollView horizontal>
              <BarChart
                data={data}
                width={scrollContentWidth}
                height={200}
                chartConfig={chartConfig}
              />
            </ScrollView>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default SecondScreen;
