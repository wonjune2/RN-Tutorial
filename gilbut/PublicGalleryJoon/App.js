import { NavigationContainer } from '@react-navigation/native'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import RootStack from './screens/RootStack'
import { UserContextProvider } from './contexts/UserContext'
import 'react-native-get-random-values'

export default function App() {
  return (
    <UserContextProvider>
      <NavigationContainer>
        <RootStack />
      </NavigationContainer>
    </UserContextProvider>
  )
}
