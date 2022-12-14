import React from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import { Text, Button, View } from 'react-native-paper'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { useNavigation } from '@react-navigation/native'

function OpenDetailButton() {
  const navigation = useNavigation()

  return (
    <Button
      title="Detail 1 열기"
      onPress={() => navigation.push('Detail', { id: 1 })}
    />
  )
}

function HomeScreen() {
  return (
    <View>
      <Text>Home</Text>
    </View>
  )
}

export default HomeScreen
