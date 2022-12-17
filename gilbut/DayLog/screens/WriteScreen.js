import React from 'react'
import { KeyboardAvoidingView, Platform, StyleSheet, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import WriteEditor from '../component/WriteEditor'
import WriteHeader from '../component/WriteHeader'

function WriteScreen() {
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')

  return (
    <SafeAreaView style={styles.block}>
      <KeyboardAvoidingView
        style={styles.avoidingView}
        behavior={Platform.select({ ios: 'padding' })}
      >
        <WriteHeader />
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
