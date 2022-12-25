import React from 'react'
import { StyleSheet, View } from 'react-native'
import CustomBottom from './CustomButtom'
import { useNavigation } from '@react-navigation/native'

function SignButtons({ isSignUp, onSubmit }) {
  const navigation = useNavigation()

  const primaryTitle = isSignUp ? '회원가입' : '로그인'
  const secondaryTitle = isSignUp ? '로그인' : '회원가입'

  const onSecondaryButtonPress = () => {
    if (isSignUp) {
      navigation.goBack()
    } else {
      navigation.push('SignIn', { isSignUp: true })
    }
  }

  return (
    <View style={styles.buttons}>
      <CustomBottom title={primaryTitle} hasMarginBottom onPress={onSubmit} />
      <CustomBottom
        title={secondaryTitle}
        theme="secondary"
        onPress={onSecondaryButtonPress}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  buttons: {
    marginTop: 64,
  },
})

export default SignButtons
