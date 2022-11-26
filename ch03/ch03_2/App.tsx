import React from "react";
import {StyleSheet, SafeAreaView, Text, Dimensions, Platform} from 'react-native'
import { Colors } from "react-native-paper";

const {width, height} = Dimensions.get('window')

export default function App() {
  return (
    <SafeAreaView style={[styles.safeAreaView]}>
      <Text style={[styles.text]}>os: {Platform.OS}</Text>
      <Text style={[styles.text]}>width: {width}</Text>
      <Text style={[styles.text]}>height: {height}</Text>
    </SafeAreaView>
  )
}

const styles= StyleSheet.create({
  safeAreaView: {backgroundColor: Colors.blue500, flex: 1},
  text: {fontSize: 20, Color: Colors.blue200}
})