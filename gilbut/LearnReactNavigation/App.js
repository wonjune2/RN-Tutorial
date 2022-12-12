import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from './screens/HomeScreen'
import DetailScreen from './screens/DetailScreen'
import HeaderlessScreen from './screens/HeaderlessScreen'
const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: '홈',
            headerStyle: {
              backgroundColor: '#26b6f6',
            },
            headerTintColor: '#ffffff',
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize: 20,
            },
          }}
        />
        <Stack.Screen
          name="Detail"
          component={DetailScreen}
          options={{
            headerBackVisible: false,
            headerLeft: ({ onPress }) => (
              <TouchableOpacity onPress={onPress}>
                <Text>Left</Text>
              </TouchableOpacity>
            ),
            headerTitle: ({ children }) => (
              <View>
                <Text>{children}</Text>
              </View>
            ),
            headerRight: () => (
              <View>
                <Text>Right</Text>
              </View>
            ),
          }}
        />
        <Stack.Screen
          name="Headerless"
          component={HeaderlessScreen}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
