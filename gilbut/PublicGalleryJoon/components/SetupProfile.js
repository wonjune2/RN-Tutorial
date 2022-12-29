import { useNavigation, useRoute } from '@react-navigation/native'
import React, { useState } from 'react'
import {
  ActivityIndicator,
  Image,
  Platform,
  Pressable,
  StyleSheet,
  View,
} from 'react-native'
import { SignOut } from '../lib/auth'
import { createUser } from '../lib/users'
import BorderedInput from './BorderedInput'
import CustomBottom from './CustomButtom'
import { useUserContext } from '../contexts/UserContext'
import {
  launchImageLibraryAsync,
  MediaTypeOptions,
  useMediaLibraryPermissions,
} from 'expo-image-picker'
import { downloadURL, uploadImage } from '../lib/upload'

function SetupProfile() {
  const [displayName, setDisplayName] = useState('')
  const navigation = useNavigation()
  const { setUser } = useUserContext()
  const [response, setRespone] = useState(null)
  const [loading, setLoading] = useState(false)

  const { params } = useRoute()
  const { uid } = params || {}

  const [imagePermission, setImagePermission] = useMediaLibraryPermissions()

  const onSubmit = async () => {
    setLoading(true)

    let photoURL = null
    let donwloadURL = null

    if (response) {
      const imageUri = response.assets[0].uri
      console.log(imageUri)
      photoURL = await uploadImage(uid, imageUri)
    }
    photoURL = await downloadURL(photoURL)

    const user = {
      id: uid,
      displayName,
      photoURL,
    }
    createUser(user)
    setUser(user)
  }

  const onCancel = () => {
    SignOut()
    navigation.goBack()
  }

  const onSelectImage = async () => {
    if (!imagePermission?.granted) {
      const permission = await setImagePermission()
      if (!permission.granted) {
        return
      }
    }
    let result = await launchImageLibraryAsync({
      mediaTypes: MediaTypeOptions.Images,
      allowsEditing: false,
      aspect: [4, 3],
      quality: 1,
    })
    if (result.canceled) {
      return
    }
    setRespone(result)
  }

  return (
    <View style={styles.block}>
      <Pressable onPress={onSelectImage}>
        <Image
          style={styles.circle}
          source={
            response
              ? { uri: response?.assets[0]?.uri }
              : require('../assets/user.png')
          }
        />
      </Pressable>
      <View style={styles.form}>
        <BorderedInput
          placeholder="닉네임"
          value={displayName}
          onChangeText={setDisplayName}
          onSubmitEditing={onSubmit}
          returnkeyType="next"
        />
        {loading ? (
          <ActivityIndicator size={32} color="#6200ee" style={styles.spinner} />
        ) : (
          <View style={styles.buttons}>
            <CustomBottom title="다음" onPress={onSubmit} hasMarginBottom />
            <CustomBottom title="취소" onPress={onCancel} theme="secondary" />
          </View>
        )}
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
  spinner: {
    marginTop: 48,
    height: 104,
  },
})

export default SetupProfile
