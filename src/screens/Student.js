// React ve gerekli bileşenleri içe aktar
import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
  SafeAreaView,
  ScrollView,
} from 'react-native';

// Dışarıdan alınan özel bileşenleri içe aktar
import SideMenu from 'react-native-side-menu';
import { getTeachers, getClasses } from '../../components/index';

// Öğretmen ve sınıf verilerini al
const teachers = getTeachers();
const classes = getClasses();

// Ana içerik bileşeni
const ContentView = ({ selectedTeacher }) => {
  // Seçilen öğretmenin sınıflarını alın
  const teacherClasses = selectedTeacher
    ? classes.filter((cls) => cls.teacherId === selectedTeacher.id)
    : [];

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.safeAreaViewContainer}>
        {/* Üst bölüm */}
        <View style={styles.first}>
          <View style={styles.firstsc}>
            {/* firstsc içindeki buton */}
            <TouchableOpacity style={styles.buttons}></TouchableOpacity>
          </View>
        </View>

        {/* Alt bölüm */}
        <View style={styles.second}>
          <View style={styles.secondfirst}>
            {/* Seçilen öğretmenin adını göster */}
            {selectedTeacher && selectedTeacher.name && (
              <Text style={styles.teacherName}>{selectedTeacher.name}</Text>
            )}
          </View>
          <View style={styles.secondscd}>
            {/* Yatay kaydırmayı içeren ScrollView */}
            <ScrollView
              contentContainerStyle={{
                flexGrow: 1,
                flexDirection: 'row',
              }}
              horizontal
            >
              {/* Seçilen öğretmenin sınıflarını listele */}
              {teacherClasses.map((cls) => (
                <TouchableOpacity key={cls.id} style={styles.classItem}>
                  <Text>{cls.name}</Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

// Öğretmen menüsü bileşeni
const TeacherMenu = ({ onSelectTeacher }) => {
  // Menü öğelerine tıklanınca işlem yap
  const handleMenuItemClick = (teacher) => {
    // Seçilen öğretmenin sınıflarını göster
    const teacherClasses = classes.filter((cls) => cls.teacherId === teacher.id);
    const classList = teacherClasses.map((cls) => cls.name).join(', ');

    // Alert ile sınıf bilgilerini göster
    Alert.alert(`Classes for ${teacher.name}`, classList || 'No classes available.');

    // Seçilen öğretmeni ana bileşene iletilmek üzere onSelectTeacher fonksiyonu aracılığıyla iletilir
    onSelectTeacher(teacher);
  };

  return (
    <View style={styles.menuContainer}>
      {/* Öğretmenleri listele */}
      {teachers.map((teacher) => (
        <TouchableOpacity key={teacher.id} onPress={() => handleMenuItemClick(teacher)}>
          <Text style={styles.menuItem}>{teacher.name}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

// Genel Menü bileşeni
const Menu = ({ onSelectTeacher }) => {
  return <TeacherMenu onSelectTeacher={onSelectTeacher} />;
};

// Uygulama ana bileşeni
const Application = () => {
  // Seçilen öğretmeni saklamak için state kullan
  const [selectedTeacher, setSelectedTeacher] = useState(null);

  // Öğretmen seçildiğinde yapılacak işlem
  const handleSelectTeacher = (teacher) => {
    setSelectedTeacher(teacher);
  };

  // Menü bileşenini oluştur
  const menu = <Menu onSelectTeacher={handleSelectTeacher} />;

  return (
    // SideMenu bileşeni içinde içerik ve menüyü birleştir
    <SideMenu menu={menu}>
      <ContentView selectedTeacher={selectedTeacher} />
    </SideMenu>
  );
};

// Stil tanımlamaları
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
  classItem: {
    padding: 10,
    marginRight: 10,
  },
});

export default Application;
// Bileşeni dışa aktar