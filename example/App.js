/**
 * Sample React Native App
 *
 * adapted from App.js generated by the following command:
 *
 * react-native init example
 *
 * https://github.com/facebook/react-native
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import CharacterInput from 'react-native-character-input';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <CharacterInput
          placeHolder='YYYY/MM/DD'
          showCharBinary='1111011011'
          length={10}
          handleChange={(text) => console.log('text', text)}
          inputType='underlined'
        />
      </View>
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
});
