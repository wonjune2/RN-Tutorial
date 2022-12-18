import React, { useContext, useEffect, useRef, useState } from 'react'
import { Animated, StyleSheet, Text, View, Button } from 'react-native'
import LogContext from '../contexts/LogContext'

function FadeInAndOut() {
  const animation = useRef(new Animated.Value(1)).current

  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    Animated.timing(animation, {
      toValue: enabled ? 1 : 0,
      useNativeDriver: true,
    }).start()
  }, [enabled, animation])
  return (
    <View>
      <Animated.View
        style={[
          styles.rectangle,
          {
            transform: [
              {
                translateX: animation.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, 150],
                }),
              },
            ],
            opacity: animation.interpolate({
              inputRange: [0, 1],
              outputRange: [1, 0],
            }),
          },
        ]}
      />
      <Button
        title="Toggle"
        onPress={() => {
          setEnabled(!enabled)
        }}
      />
    </View>
  )
}

function CalendarScreen() {
  return (
    <View style={styles.block}>
      <FadeInAndOut />
    </View>
  )
}

const styles = StyleSheet.create({
  block: {},
  rectangle: {
    width: 100,
    height: 100,
    backgroundColor: 'black',
  },
})

export default CalendarScreen
