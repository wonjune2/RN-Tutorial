import { useNavigation } from '@react-navigation/native'
import React, { useContext, useState } from 'react'
import { KeyboardAvoidingView, Platform, StyleSheet, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import WriteEditor from '../component/WriteEditor'
import WriteHeader from '../component/WriteHeader'
import LogContext from '../contexts/LogContext'

function WriteScreen() {
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')

  const navigation = useNavigation()

  const { onCreate } = useContext(LogContext)
  const onSave = () => {
    onCreate({
      title,
      body,
      // 날짜를 문자열로 변환
      date: new Date().toISOString(),
    })
    navigation.pop()
  }

  return (
    <SafeAreaView style={styles.block}>
      <KeyboardAvoidingView
        style={styles.avoidingView}
        behavior={Platform.select({ ios: 'padding' })}
      >
        <WriteHeader onSave={onSave} />
        <WriteEditor
          title={title}
          body={body}
          onChangeTitle={setTitle}
          onChangeBody={setBody}
        />
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  block: { flex: 1, backgroundColor: 'white' },
  avoidingView: {
    flex: 1,
  },
})

export default WriteScreen
