import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
import { MaterialCommunityIcons } from '@expo/vector-icons';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

function BadButton() {
  return (
    <TouchableOpacity style={styles.button}>
      <MaterialCommunityIcons
        size={72}
        name="trash-can"
        color="black"
      />
    </TouchableOpacity>
  );
}

function GoodButton() {
  return (
    <TouchableOpacity
      style={styles.button}
      accessible={true}
      accessibilityLabel="Press to delete"
      accessibilityHint="The item will be deleted permanently"
    >
      <MaterialCommunityIcons
        size={72}
        name="trash-can"
        color="black"
      />
    </TouchableOpacity>
  );
}

export default function App() {
  return (
    <View style={styles.container}>
      <BadButton />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  button: {
    padding: 48,
    backgroundColor: '#e3e3e3',
    borderRadius: 15,
  },
});
