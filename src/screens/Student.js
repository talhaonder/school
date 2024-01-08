import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import SideMenu from 'react-native-side-menu';

class ContentView extends React.Component {
  render() {
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
      </View>
    );
  }
}

class Menu extends React.Component {
  render() {
    return (
      <View style={styles.menuContainer}>
        <TouchableOpacity onPress={() => alert('Menu item clicked')}>
          <Text style={styles.menuItem}>Menu Item 1</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => alert('Menu item clicked')}>
          <Text style={styles.menuItem}>Menu Item 2</Text>
        </TouchableOpacity>
        {/* Ek menu öğelerini buraya ekleyebilirsiniz */}
      </View>
    );
  }
}

class Application extends React.Component {
  render() {
    const menu = <Menu />;
 
    return (
      <SideMenu menu={menu}>
        <ContentView />
      </SideMenu>
    );
  }
}

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
});

export default Application;
