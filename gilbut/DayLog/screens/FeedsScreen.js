import React, { useContext } from 'react'
import { StyleSheet, View, TextInput } from 'react-native'
import FloatingWriteButton from '../component/FloatingWriteButton'
import LogContext from '../contexts/LogContext'

function FeedsScreen() {
  const { logs } = useContext(LogContext)
  return (
    <View style={styles.block}>
      <FloatingWriteButton />
    </View>
  )
}

const styles = StyleSheet.create({
  block: {
    flex: 1,
  },
  input: {
    padding: 16,
    backgroundColor: 'white',
  },
})

export default FeedsScreen
