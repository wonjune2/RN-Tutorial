import { NavigationContainer } from '@react-navigation/native'
import LogContext from './contexts/LogContext'
import RootStack from './screens/RootStack'

export default function App() {
  return (
    <NavigationContainer>
      <LogContext.Provider value="안녕하세요">
        <RootStack />
      </LogContext.Provider>
    </NavigationContainer>
  )
}
