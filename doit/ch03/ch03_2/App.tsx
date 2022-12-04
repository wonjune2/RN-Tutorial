import React from "react";
import {StyleSheet, SafeAreaView, Text, Dimensions, Platform, View} from 'react-native'
import { Colors } from "react-native-paper";

const {width, height} = Dimensions.get('window')

export default function App() {
  return (
    <SafeAreaView style={[styles.safeAreaView]}>
      <Text style={[styles.text]}>os: {Platform.OS}</Text>
      <Text style={[styles.text]}>width: {width}</Text>
      <Text style={[styles.text]}>height: {height}</Text>

      <View style={[styles.box, styles.border]}/>
      <View style={[styles.box, styles.border, {borderRadius: 20}]}/>
      <View style={[styles.box, styles.border, {borderTopLeftRadius: 40, borderBottomLeftRadius: 40}]}/>
    </SafeAreaView>
  )
}

const styles= StyleSheet.create({
  safeAreaView: {backgroundColor: Colors.blue500, flex: 1, paddingLeft: Platform.select({ios: 0, android: 20})},
  text: {fontSize: 20, Color: Colors.blue200, marginBottom: 10},
  box: {height: 100, backgroundColor: Colors.lime500, marginLeft: Platform.select({ios: 20, android: 0})},
  border: {borderWidth: 10, borderColor: Colors.blue900}
})