import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, Image, ScrollView } from 'react-native';
import * as Progress from 'react-native-progress';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';  // useNavigation eklenmiş


export default function Teacher() {
  const navigation = useNavigation();  // useNavigation hook'u eklenmiş
  const [loading, setLoading] = useState(true);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState(Array(10).fill(null)); // 10 soru için cevapları saklayan dizi
  const [cevaplar, setCevaplar] = useState(Array(10).fill(null).map(() => ''));

  const surveyQuestions = [
    {
      question: "Soru 1: Favori renk nedir?",
      options: ["Kırmızı", "Mavi", "Yeşil", "Sarı", "Mor"],
    },
    {
      question: "Soru 2: En sevdiğin film türü nedir?",
      options: ["Aksiyon", "Komedi", "Dram", "Bilim Kurgu", "Romantik"],
    },
    {
      question: "Soru 3: Hangi sporu yapmayı tercih edersin?",
      options: ["Futbol", "Basketbol", "Yüzme", "Tenis", "Voleybol"],
    },
    {
      question: "Soru 4: En sevdiğin yemek nedir?",
      options: ["Pizza", "Hamburger", "Salata", "Kebap", "Pasta"],
    },
    {
      question: "Soru 5: Hangi kitabı en son okudun?",
      options: ["Harry Potter", "Dune", "1984", "Küçük Prens", "Suç ve Ceza"],
    },
    {
      question: "Soru 6: Favori tatil yeri neresidir?",
      options: ["Plaj", "Dağlar", "Şehir", "Orman", "Tarihi Yerler"],
    },
    {
      question: "Soru 7: En sevdiğin müzik türü nedir?",
      options: ["Pop", "Rock", "Rap", "Klasik", "Country"],
    },
    {
      question: "Soru 8: Hangi hayvanı seversin?",
      options: ["Köpek", "Kedi", "Kuş", "At", "Balık"],
    },
    {
      question: "Soru 9: Hangi aktiviteyi yapmayı tercih edersin?",
      options: ["Yürüyüş", "Bisiklet", "Kamp", "Sinema", "Alışveriş"],
    },
    {
      question: "Soru 10: En sevdiğin meyve nedir?",
      options: ["Elma", "Muz", "Üzüm", "Portakal", "Çilek"],
    },
  ];

  useEffect(() => {
    const delay = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(delay);
  }, []);

  const handleAnswer = (optionIndex) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestionIndex] = optionIndex;
    setAnswers(newAnswers);

    const newCevaplar = [...cevaplar];
    newCevaplar[currentQuestionIndex] = String.fromCharCode('A'.charCodeAt(0) + optionIndex);
    setCevaplar(newCevaplar);

    if (currentQuestionIndex < surveyQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };
  return (
    <View style={{ flex: 1 }}>
      <StatusBar />
      <Image
        blurRadius={12}
        source={require('../../assets/indir.jpeg')}
        style={{ position: 'absolute', height: '100%', width: '100%' }}
      />
      {loading ? (
        <View style={{ flex: 1, flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
          <Progress.CircleSnail thickness={10} size={140} color={"#0bb3b2"} />
        </View>
      ) : (
        <SafeAreaView style={styles.container}>
          <View style={styles.first}>
            <View style={styles.firstsc}>
              <TouchableOpacity style={styles.buttons} onPress={() => navigation.navigate('SecondScreen', { cevaplar: answers })}>
              </TouchableOpacity>

            </View>
          </View>
          <View style={styles.second}>
            <View style={styles.secondfirst}>
              {surveyQuestions.map((item, index) => (
                <View key={index} style={{ marginBottom: 10, display: index === currentQuestionIndex ? 'flex' : 'none' }}>
                  <Text>{item.question}</Text>
                  {item.options.map((option, optionIndex) => (
                    <TouchableOpacity
                      key={optionIndex}
                      style={{ marginVertical: 5, backgroundColor: answers[currentQuestionIndex] === optionIndex ? 'lightblue' : 'transparent' }}
                      onPress={() => handleAnswer(optionIndex)}
                    >
                      <Text style={styles.menu}>{option}</Text>
                    </TouchableOpacity>
                  ))}
                  <TouchableOpacity onPress={() => currentQuestionIndex > 0 && setCurrentQuestionIndex(currentQuestionIndex - 1)}>
                    <Text style={{ marginTop: 10, color: currentQuestionIndex === 0 ? 'gray' : 'blue' }}>Geri Dön</Text>
                  </TouchableOpacity>
                </View>
              ))}
            </View>
            <View style={styles.secondscd}>
              <ScrollView
                contentContainerStyle={{
                  flexGrow: 1,
                  flexDirection: 'row',
                  marginBottom: 20,
                }}
                horizontal
              >
                {cevaplar.map((cevap, index) => (
                  <View key={index} style={styles.horizontalContentItem}>
                    <Text>{`${index + 1}-${cevap}`}</Text>
                  </View>
                ))}
              </ScrollView>
            </View>
          </View>
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
