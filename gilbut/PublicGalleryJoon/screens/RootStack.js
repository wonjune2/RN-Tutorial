import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import SignInScreen from './SignInScreen'
import WelcomeSceen from './WelcomeScreen'

const Stack = createNativeStackNavigator()

function RootStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SignIn"
        component={SignInScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Welcome"
        component={WelcomeSceen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  )
}

export default RootStack
