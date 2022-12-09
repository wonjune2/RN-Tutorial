import { StatusBar } from 'expo-status-bar'
import { useState } from 'react'
import { StyleSheet, KeyboardAvoidingView, Platform } from 'react-native'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import AddTodo from './components/AddTodo'
import DateHead from './components/DateHead'
import Empty from './components/Empty'
import TodoList from './components/TodoList'

export default function App() {
  const today = new Date()

  const [todos, setTodos] = useState([
    { id: 1, text: '작업환경 설정', done: true },
    { id: 2, text: '리택트 네이티브 기초 공부', done: false },
    { id: 3, text: '투두 리스트 만들어 보기', done: false },
  ])

  return (
    <SafeAreaProvider>
      <SafeAreaView edges={['bottom']} style={styles.block}>
        <KeyboardAvoidingView
          behavior={Platform.select({ ios: 'padding' })}
          style={styles.avoid}
        >
          <DateHead date={today} />
          {todos.length === 0 ? <Empty /> : <TodoList todos={todos} />}
          <AddTodo />
        </KeyboardAvoidingView>
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

const styles = StyleSheet.create({
  block: {
    flex: 1,
  },
  avoid: {
    flex: 1,
  },
})
