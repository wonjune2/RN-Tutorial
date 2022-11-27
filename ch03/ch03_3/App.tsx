import React from "react";
import {StyleSheet, SafeAreaView, ImageBackground, Image} from "react-native"
import * as D from './src/data'

const avatarUrl = D.randomAvatarUrl()
const avatarSize = 50
console.log(avatarUrl)
export default function App() {
  return (
  <SafeAreaView style={styles.flex}>
    <ImageBackground style={[styles.flex, styles.backgroundImage]}
      source={require('./src/assets/images/bg.jpg')}>
      <Image source={{uri: avatarUrl}} style={[styles.image]} />
    </ImageBackground>
  </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  flex: {flex: 1},
  backgroundImage: {flex: 1},
  image: {width: avatarSize, height: avatarSize, borderRadius: avatarSize / 2},

})