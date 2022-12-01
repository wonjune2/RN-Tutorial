import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import TopBar from './src/screens/TopBar'
import Content from './src/screens/Content'
import BottomBar from './src/screens/BottomBar'
import { Colors } from 'react-native-paper';
export default function App() {
  return (
    <SafeAreaView>
      <TopBar />
      <Content />
      <BottomBar />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  flex: {flex: 1, backgroundColor: Colors.lightBlue100}
});
