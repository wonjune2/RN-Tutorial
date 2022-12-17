import React from 'react'
import { StyleSheet, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import WriteEditor from '../component/WriteEditor'
import WriteHeader from '../component/WriteHeader'

function WriteScreen() {
  return (
    <SafeAreaView style={styles.block}>
      <WriteHeader />
      <WriteEditor />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  block: { flex: 1, backgroundColor: 'white' },
})

export default WriteScreen
