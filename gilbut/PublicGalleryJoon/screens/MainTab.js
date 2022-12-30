import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { useUserContext } from '../contexts/UserContext'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

const Tab = createBottomTabNavigator()

function MainTab() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: '#6200ee',
      }}
    ></Tab.Navigator>
  )
}

const styles = StyleSheet.create({
  block: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 24,
  },
})

export default MainTab
