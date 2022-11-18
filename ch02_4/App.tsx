import React from "react";
import { SafeAreaView, Button, Alert } from "react-native";

export default function App() {
  return (
  <SafeAreaView>
    <Button title="home" onPress={() => Alert.alert('home pressed.', 'message')}></Button>
  </SafeAreaView>
  )
}