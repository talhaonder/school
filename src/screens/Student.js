import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import SideMenu from 'react-native-side-menu';
import { getTeachers, getClasses } from '../../components/index';

const teachers = getTeachers();
const classes = getClasses();

const ContentView = ({ selectedTeacher }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>
        Welcome to React Native!
      </Text>
      <Text style={styles.instructions}>
        To get started, edit index.ios.js
      </Text>
      <Text style={styles.instructions}>
        Press Cmd+R to reload,{'\n'}
        Cmd+Control+Z for dev menu
      </Text>
      {selectedTeacher && (
        <Text style={styles.teacherInfo}>
          Selected Teacher: {selectedTeacher.name}
        </Text>
      )}
    </View>
  );
};

const TeacherMenu = () => {
  const [selectedTeacher, setSelectedTeacher] = useState(null);

  const handleMenuItemClick = (teacher) => {
    setSelectedTeacher(teacher);

    // Seçilen öğretmenin sınıflarını göster
    const teacherClasses = classes.filter((cls) => cls.teacherId === teacher.id);
    const classList = teacherClasses.map((cls) => cls.name).join(', ');

    Alert.alert(
      `Classes for ${teacher.name}`,
      classList || 'No classes available.',
    );
  };

  return (
    <View style={styles.menuContainer}>
      {teachers.map((teacher) => (
        <TouchableOpacity key={teacher.id} onPress={() => handleMenuItemClick(teacher)}>
          <Text style={styles.menuItem}>{teacher.name}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const Menu = () => {
  return <TeacherMenu />;
};

const Application = () => {
  const menu = <Menu />;

  return (
    <SideMenu menu={menu}>
      <ContentView selectedTeacher={null} />
    </SideMenu>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  menuContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EFEFEF',
    padding: 20,
  },
  menuItem: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  teacherInfo: {
    marginTop: 20,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Application;
