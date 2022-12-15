import { NavigationContainer } from '@react-navigation/native'
import LogContext, { LogContextProvider } from './contexts/LogContext'
import { Text } from 'react-native'
import RootStack from './screens/RootStack'

export default function App() {
  return (
    <NavigationContainer>
      <LogContextProvider>
        <RootStack />
      </LogContextProvider>
    </NavigationContainer>
  )
}
