import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Pressable, StyleSheet, View } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import TransparentCircleButton from './TransparentCircleButton'

function WriteHeader({ onSave, onAskRemove, isEditing }) {
  const navigations = useNavigation()
  const onGoBack = () => {
    navigations.pop()
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
})

export default WriteHeader
