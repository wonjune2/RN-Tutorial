import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import BorderedInput from '../components/BorderedInput'
import CustomBottom from '../components/CustomButtom'

function SignInScreen({ navigation, route }) {
  const { isSignUp } = route.params ?? {}
  return (
    <SafeAreaView style={styles.fullscreen}>
      <Text style={styles.text}>PublicGallery</Text>
      <View style={styles.form}>
        <BorderedInput hasMarginBottom placeholder="이메일" />
        <BorderedInput placeholder="비밀번호" hasMarginBottom={isSignUp} />
        {isSignUp && <BorderedInput placeholder="비밀번호 확인" />}
        <View style={styles.buttons}>
          {isSignUp ? (
            <>
              <CustomBottom title="회원가입" hasMarginBottom />
              <CustomBottom
                title="로그인"
                theme="secondary"
                onPress={() => {
                  navigation.goBack()
                }}
              />
            </>
          ) : (
            <>
              <CustomBottom title="로그인" hasMarginBottom />
              <CustomBottom
                title="회원가입"
                theme="secondary"
                onPress={() => {
                  navigation.push('SignIn', { isSignUp: true })
                }}
              />
            </>
          )}
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  fullscreen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  form: {
    marginTop: 64,
    width: '100%',
    paddingHorizontal: 16,
  },
  buttons: {
    marginTop: 64,
  },
})

export default SignInScreen
