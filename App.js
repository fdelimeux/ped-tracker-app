import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ListItem } from 'react-native-elements';
import Drawer from './modules/drawer/drawer.js';
import { createStackNavigator } from 'react-navigation';

export default class App extends React.Component {
  render() {
    return (
      <View style={{flex:1}}>
        <Drawer/>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
