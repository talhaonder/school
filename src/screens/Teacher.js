import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, Image, ScrollView } from 'react-native';
import * as Progress from 'react-native-progress';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';

export default function Teacher() {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(true);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState(Array(10).fill(null));
  const [cevaplar, setCevaplar] = useState(Array(10).fill(null).map(() => ''));
  const [selectedItemText, setSelectedItemText] = useState('');
  const [selectedOptionIndex, setSelectedOptionIndex] = useState(null);
  const [userName, setUserName] = useState('');
  const handleNavigateToStudent = () => {
    navigation.navigate('Student', { userName });
  };

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

  useEffect(() => {
    const delay = setTimeout(() => {
      setLoading(false);
    }, 5000);

    return () => clearTimeout(delay);
  }, []);

  const handleAnswer = (optionIndex, optionText, questionIndex) => {
    const newAnswers = [...answers];
    newAnswers[questionIndex] = optionIndex;
    setAnswers(newAnswers);

    const newCevaplar = [...cevaplar];
    newCevaplar[questionIndex] = String.fromCharCode('A'.charCodeAt(0) + optionIndex);
    setCevaplar(newCevaplar);
    if (questionIndex < surveyQuestions.length - 1) {
      // Eğer mevcut soru son soru değilse bir sonraki soruya otomatik geçiş yap
      setCurrentQuestionIndex(questionIndex + 1);
    }

    setSelectedItemText(optionText); // Tıklanan şıkkın metni
    setSelectedOptionIndex(optionIndex);
    <View style={styles.secondfirst}>
      {renderQuestionOptions(surveyQuestions[currentQuestionIndex], currentQuestionIndex)}
      <Text style={{ marginTop: 10, color: 'blue' }}>
        {selectedOptionIndex !== null && `Seçilen Şık: ${String.fromCharCode('A'.charCodeAt(0) + selectedOptionIndex)}`}
      </Text>
      <TouchableOpacity onPress={() => currentQuestionIndex > 0 && setCurrentQuestionIndex(currentQuestionIndex - 1)}>
        <Text style={{ marginTop: 10, color: currentQuestionIndex === 0 ? 'gray' : 'blue' }}>Geri Dön</Text>
      </TouchableOpacity>
    </View>
  };

  const renderQuestionOptions = (question, index) => {
    return (
      <View key={index} style={{ marginBottom: 20 }}>
        <Text style={styles.soru}>{question.question}</Text>
        {question.options.map((option, optionIndex) => (
          <TouchableOpacity
            key={optionIndex}
            style={{
              marginVertical: 10,
              backgroundColor: answers[index] === optionIndex ? 'lightblue' : 'transparent',
            }}
            onPress={() => handleAnswer(optionIndex, option, index)}
          >
            <Text style={styles.menu}>{option}</Text>
          </TouchableOpacity>
        ))}
        {currentQuestionIndex > 0 && (
          <TouchableOpacity onPress={() => setCurrentQuestionIndex(currentQuestionIndex - 1)}>
            <Text style={{ marginTop: 10, color: 'blue' }}>Geri Dön</Text>
          </TouchableOpacity>
        )}
      </View>
    );
  };
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <StatusBar />
      <Image blurRadius={6} source={require('../../assets/abant-izzet-baysal-universitesi-logo-B7618646A0-seeklogo.com.png')} style={{ position: 'absolute', height: 350, width: 350 }} />
      {loading ? (
        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
          <Progress.CircleSnail thickness={10} size={140} color={'#0bb3b2'} />
        </View>
      ) : (
        <SafeAreaView style={styles.container}>
          <View style={styles.second}>
            <View style={styles.secondfirst}>{renderQuestionOptions(surveyQuestions[currentQuestionIndex], currentQuestionIndex)}</View>

          </View>
          {currentQuestionIndex === surveyQuestions.length - 1 && (
              <TouchableOpacity style={styles.buttons} onPress={() => navigation.navigate('SecondScreen', { cevaplar: answers, userName: userName })}>
              <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Grafiğe Git</Text>
            </TouchableOpacity>
            )}
        </SafeAreaView>
      )}
    </View>
  );
}

const styles = {
  container: {
    marginTop: 25,
    flex: 1,
    alignItems: "center",
  },
  safeAreaViewContainer: {
    flex: 1,
    alignItems: "center",
  },
  buttons: {
    width: 150,
    marginTop: 15,
    backgroundColor: "lightblue",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderBlockColor: "plum",
    borderRadius: 25,
  },
  first: {
    borderColor: "black",
    width: "100%",
    height: 75,
    alignItems: "center",
    justifyContent: "center",

  },
  firstsc: {
    borderRadius: 25,
    borderColor: "black",
    width: "auto",
    height: 50,
    margin: 20
  },
  second: {
    marginTop: 30,
    borderWidth: 2,
    borderColor: "black",
    width: 350,
    height: 510,
    alignItems: "center",
    justifyContent: "base-line",
    borderRadius: 25,
  },
  secondfirst: {
    borderColor: "black",
    width: 250,
    height: 175,
    marginTop: 30,
    fontWeight: "bold",
    fontSize: 18,
  },
  secondscd: {
    display: "flex",
    flexDirection: "row",
    margin: 30,
    display: "flex",
    borderWidth: 2,
    borderColor: "black",
    width: 250,
    height: 75,
  },
  menu: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  soru: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  horizontalContentItem: {
    marginHorizontal: 10,
    padding: 10,
    backgroundColor: 'lightgray',
    borderRadius: 5,
  },
};
