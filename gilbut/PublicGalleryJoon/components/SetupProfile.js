import { useNavigation, useRoute } from '@react-navigation/native'
import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { SignOut } from '../lib/auth'
import { createUser } from '../lib/users'
import BorderedInput from './BorderedInput'
import CustomBottom from './CustomButtom'

function SetupProfile() {
  const [displayName, setDisplayName] = useState('')
  const navigation = useNavigation()

  const { params } = useRoute()
  const { uid } = params || {}

  const onSubmit = () => {
    createUser({
      id: uid,
      displayName,
      photoURL: null,
    })
  }

  const onCancel = () => {
    SignOut()
    navigation.goBack()
  }

  return (
    <View style={styles.block}>
      <View style={styles.circle} />
      <View style={styles.form}>
        <BorderedInput
          placeholder="닉네임"
          value={displayName}
          onChangeText={setDisplayName}
          onSubmitEditing={onSubmit}
          returnkeyType="next"
        />
      </View>
      <View style={styles.buttons}>
        <CustomBottom title="다음" onPress={onSubmit} hasMarginBottom />
        <CustomBottom title="취소" onPress={onCancel} theme="secondary" />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  block: {
    alignItems: 'center',
    marginTop: 24,
    paddingHorizontal: 16,
    width: '100%',
  },
  circle: {
    backgroundColor: '#cdcdcd',
    borderRadius: 64,
    width: 128,
    height: 128,
  },
  form: { marginTop: 16, width: '100%' },
  buttons: { marginTop: 48 },
})