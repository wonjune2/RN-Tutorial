import { StatusBar } from 'expo-status-bar';
import {StyleSheet, SafeAreaView, Platform, ImageBackground, Image, Text, View, Alert} from "react-native"
import * as D from './src/data'
import { Colors } from "react-native-paper";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { useFonts } from 'expo-font';

const avatarUrl = D.randomAvatarUrl()
const avatarSize = 50
const text = `Almost before we knew it, we had left the ground.`
const onIconPressed = () => Alert.alert('icon pressed')
const fontsUrl = "./assets/fonts/";

export default function App() {
  const [loaded] = useFonts({
    "DancingScript-Regular" : require(fontsUrl + "DancingScript-Regular.ttf"),
    "DancingScript-Medium" : require(fontsUrl + 'DancingScript-Medium.ttf'),
    'DancingScript-SemiBold' : require(fontsUrl + 'DancingScript-SemiBold.ttf'),
    'DancingScript-Bold' : require(fontsUrl + 'DancingScript-Bold.ttf')
  })

  return (
    <SafeAreaView style={styles.flex}>
      {loaded ?      
      <ImageBackground
        style={styles.backgroundImage}
        source={require('./assets/images/bg.jpg')}>
        <Image source={{uri: avatarUrl}} style={[styles.image]} />
        <View style={[styles.flex, styles.padding10]}>
          <Text style={[styles.text, styles.regular]}>{text} [regular]</Text>
          <Text style={[styles.text, styles.medium]}>{text} [medium]</Text>
          <Text style={[styles.text, styles.semiBold]}>{text} [semi bold]</Text>
          <Text style={[styles.text, styles.bold]}>{text} [bold]</Text>
        </View>
        <Icon name="home" size={50} color={Colors.lightBlue500} onPress={onIconPressed}/>
      </ImageBackground> : 
      <StatusBar />}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  flex: {flex: 1},
  backgroundImage: {flex: 1},
  image: {width: avatarSize, height: avatarSize, borderRadius: avatarSize / 2},
  padding10: {padding: 10},
  text: {textAlign: 'center', fontSize: 25, color: 'white', marginBottom: 10},
  regular: {fontFamily: 'DancingScript-Regular', fontWeight: '400'},
  medium: {fontFamily: 'DancingScript-Medium', fontWeight: '500'},
  semiBold: {fontFamily: 'DancingScript-SemiBold', fontWeight: '600'},
  bold: {
    fontFamily: 'DancingScript-Bold',
    fontWeight: Platform.select({ios: '700', android: '600'})
  }
})
