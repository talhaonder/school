import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert, SafeAreaView, ScrollView } from 'react-native';
import SideMenu from 'react-native-side-menu';
import { getTeachers, getClasses } from '../../components/index';

const teachers = getTeachers();
const classes = getClasses();

const ContentView = ({ selectedTeacher }) => {
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.safeAreaViewContainer}>
        <View style={styles.first}>
          <View style={styles.firstsc}>
            {/* firstsc içindeki buton */}
            <TouchableOpacity style={styles.buttons} onPress={() => navigation.navigate('Student')}>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.second}>
          <View style={styles.secondfirst}>
            {selectedTeacher && selectedTeacher.name && (
              <Text style={styles.teacherName}>{selectedTeacher.name}</Text>
            )}
          </View>
          <View style={styles.secondscd}>
            {/* HorizontalScroll yerine doğrudan içeriği ekleyin */}
            <ScrollView
              contentContainerStyle={{
                flexGrow: 1,
                flexDirection: 'row',
              }}
              horizontal
            >
              {/* İçerik buraya ekleyin */}
              <TouchableOpacity>
                <Text>Horizontal Content</Text>
              </TouchableOpacity>
              {/* İçerik eklemeye devam edin */}
            </ScrollView>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

const TeacherMenu = ({ onSelectTeacher }) => {
  const handleMenuItemClick = (teacher) => {
    // Seçilen öğretmenin sınıflarını göster
    const teacherClasses = classes.filter((cls) => cls.teacherId === teacher.id);
    const classList = teacherClasses.map((cls) => cls.name).join(', ');

    Alert.alert(
      `Classes for ${teacher.name}`,
      classList || 'No classes available.',
    );

    // Seçilen öğretmeni ana bileşene iletilmek üzere onSelectTeacher fonksiyonu aracılığıyla iletilir
    onSelectTeacher(teacher);
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

const Menu = ({ onSelectTeacher }) => {
  return <TeacherMenu onSelectTeacher={onSelectTeacher} />;
};

const Application = () => {
  const [selectedTeacher, setSelectedTeacher] = useState(null);

  const handleSelectTeacher = (teacher) => {
    setSelectedTeacher(teacher);
  };

  const menu = <Menu onSelectTeacher={handleSelectTeacher} />;

  return (
    <SideMenu menu={menu}>
      <ContentView selectedTeacher={selectedTeacher} />
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
    height: 50,
    alignItems: "center",
    justifyContent: "center",
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
  teacherName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Application;
