import React from "react";
import {StyleSheet, SafeAreaView, Text} from 'react-native'

export default function App() {
  return (
    <SafeAreaView style={[styles.safeAreaView]}>
      <Text style={[styles.text]}>Hello World!</Text>
    </SafeAreaView>
  )
}

const styles= StyleSheet.create({
  safeAreaView: {},
  text: {}
})