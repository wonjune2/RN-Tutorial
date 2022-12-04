import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, Platform, Alert} from 'react-native';
import TopBar from './src/screens/TopBar'
import Content from './src/screens/Content'
import BottomBar from './src/screens/BottomBar'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { Colors } from 'react-native-paper';

const iconPressed = () => Alert.alert('Icon pressed')
export default function App() {
  return (
    <>
      <SafeAreaView style={[styles.flex]}>
        <TopBar />
        <Content />
        <BottomBar />
      </SafeAreaView>
      <View style={[styles.absoluteView]}>
        <Icon name="feather" size={50} color='white' onPress={iconPressed}></Icon>
      </View>
    </>

  );
}

const styles = StyleSheet.create({
  flex: {flex: 1, backgroundColor: Colors.lightBlue100},
  absoluteView: {
    backgroundColor: Colors.purple900,
    position: 'absolute',
    right: 30,
    bottom: Platform.select({ios: 100, android: 80}),
    padding: 10,
    borderRadius: 35
  }
});
