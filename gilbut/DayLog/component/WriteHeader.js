import { useNavigation } from '@react-navigation/native'
import { format } from 'date-fns'
import { ko } from 'date-fns/locale'
import React, { useReducer, useState } from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import DateTimePicker from 'react-native-modal-datetime-picker'
import Icon from 'react-native-vector-icons/MaterialIcons'
import TransparentCircleButton from './TransparentCircleButton'

const initialState = { mode: 'date', visible: false }
function reducer(state, action) {
  switch (action.type) {
    case 'open':
      return {
        mode: action.mode,
        visible: true,
      }
    case 'close':
      return {
        ...state,
        visible: false,
      }
    default:
      throw new Error('Unhandled action type')
  }
}

function WriteHeader({ onSave, onAskRemove, isEditing, date, onChangeDate }) {
  const navigations = useNavigation()
  const onGoBack = () => {
    navigations.pop()
  }

  const [state, dispatch] = useReducer(reducer, initialState)
  const open = (mode) => dispatch({ type: 'open', mode })
  const close = () => dispatch({ type: 'close' })

  const onConfirm = (selectedDate) => {
    close()
    onChangeDate(selectedDate)
  }

  return (
    <View style={styles.block}>
      <View>
        <TransparentCircleButton
          onPress={onGoBack}
          name="arrow-back"
          color="#424242"
        />
      </View>
      <View style={styles.buttons}>
        {isEditing && (
          <TransparentCircleButton
            name="delete-forever"
            color="#ef5350"
            hasMarginRight
            onPress={onAskRemove}
          />
        )}
        <TransparentCircleButton
          name="check"
          color="#009688"
          onPress={onSave}
        />
      </View>
      <View style={styles.center}>
        <Pressable onPress={() => open('date')}>
          <Text>
            {format(new Date(date), 'PPP', {
              locale: ko,
            })}
          </Text>
        </Pressable>
        <View style={styles.separator} />
        <Pressable onPress={() => open('time')}>
          <Text>{format(new Date(date), 'p', { local: ko })}</Text>
        </Pressable>
      </View>
      <DateTimePicker
        isVisible={state.visible}
        mode={state.mode}
        onConfirm={onConfirm}
        onCancel={close}
        date={date}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  block: {
    height: 48,
    paddingHorizontal: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  iconButtonWrapper: {
    width: 32,
    height: 32,
    borderRadius: 16,
    overflow: 'hidden',
  },
  buttons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  center: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: -1,
    flexDirection: 'row',
  },
  separator: {
    width: 8,
  },
})

export default WriteHeader
