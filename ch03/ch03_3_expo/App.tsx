import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {useFonts} from 'expo-font'
import React from "react";

export default function App() {
  const [loaded] = useFonts({
    regular: require('./assets/fonts/DancingScript-Regular.ttf')
  })

  return (
    <View>
      {loaded ? (
        <Text style={styles.font}>Hello World</Text>
      ) : <StatusBar />}
    </View>
  );
}

const styles = StyleSheet.create({
  font: {
    fontFamily: 'regular', fontWeight: '400'
  }
});
