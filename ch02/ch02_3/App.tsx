import React from 'react'
import { SafeAreaView, ScrollView } from 'react-native'
import ClassComponent from './src/screens/ClassComponent'
import ArrowComponent from './src/screens/ArrowComponent'
import Person from './src/screens/Person'
import * as D from './src/data'
const people = D.makeArray(100).map(D.createRandomPerson);
const person = D.createRandomPerson()
export default function App() {
  return (
    <SafeAreaView>
      <ClassComponent />
      <ArrowComponent />
      <Person person={person} />
    </SafeAreaView>
  )
}