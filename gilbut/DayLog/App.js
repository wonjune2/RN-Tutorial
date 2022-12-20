import { NavigationContainer } from '@react-navigation/native'
import LogContext, { LogContextProvider } from './contexts/LogContext'
import { Text } from 'react-native'
import RootStack from './screens/RootStack'
import 'react-native-get-random-values'
import { SearchContextProvider } from './contexts/SearchContext'

export default function App() {
  return (
    <NavigationContainer>
      <SearchContextProvider>
        <LogContextProvider>
          <RootStack />
        </LogContextProvider>
      </SearchContextProvider>
    </NavigationContainer>
  )
}
