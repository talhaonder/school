import React, { useState, useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import TeacherService from '../../api'; // api.js dosyanızın yolunu düzenleyin

const HorizontalScroll = () => {
  const [teachers, setTeachers] = useState([]);

  useEffect(() => {
    TeacherService.getAllTeachers()
      .then((response) => setTeachers(response.data))
      .catch((error) => console.error('Error fetching teachers', error));
  }, []);

  const handleAddTeacher = () => {
    TeacherService.addTeacher('Yeni Öğretmen')
      .then((response) => {
        setTeachers([...teachers, response.data]);
      })
      .catch((error) => console.error('Error adding teacher', error));
  };;

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

export default HorizontalScroll;