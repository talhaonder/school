// React ve react-native kütüphanelerini içe aktar
import React, { useState, useEffect } from 'react';
// react-native bileşenlerini içe aktar
import { View, Text, Button } from 'react-native';
// TeacherService'i içe aktar, api.js dosyasının yolunu düzenleyin
import TeacherService from '../../api';

// HorizontalScroll bileşeni oluştur
const HorizontalScroll = () => {
  // teachers state'ini tanımla ve başlangıç değeri boş bir dizi olsun
  const [teachers, setTeachers] = useState([]);

  // useEffect hook'u kullanarak bileşenin ilk render edildiğinde çalışacak işlemleri belirt
  useEffect(() => {
    // TeacherService ile tüm öğretmenleri getir
    TeacherService.getAllTeachers()
      .then((response) => setTeachers(response.data))
      .catch((error) => console.error('Error fetching teachers', error));
  }, []); // useEffect sadece bileşenin ilk render edildiğinde çalışsın

  // Yeni bir öğretmen eklemek için kullanılacak fonksiyon
  const handleAddTeacher = () => {
    // TeacherService ile 'Yeni Öğretmen' adında bir öğretmen ekleyin
    TeacherService.addTeacher('Yeni Öğretmen')
      .then((response) => {
        // Yeni öğretmen eklenince teachers state'ini güncelle
        setTeachers([...teachers, response.data]);
      })
      .catch((error) => console.error('Error adding teacher', error));
  };

  // JSX içinde öğretmenleri listeleyen ve yeni öğretmen eklemek için buton içeren bir View oluştur
  return (
    <View>
      {teachers.map((teacher) => (
        <View key={teacher._id}>
          <Text>{teacher.name}</Text>
        </View>
      ))}
      <Button title="Add Teacher" onPress={handleAddTeacher} />
    </View>
  );
};

// HorizontalScroll bileşenini dışa aktar
export default HorizontalScroll;
