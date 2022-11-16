import React from 'react'
import { SafeAreaView, Text } from 'react-native'
import ClassComponent from './src/screens/ClassComponent'
import ArrowComponent from './src/screens/ArrowComponent'

export default function App() {
  return (
    <SafeAreaView>
      <ClassComponent />
      <ArrowComponent />
    </SafeAreaView>
  )
}