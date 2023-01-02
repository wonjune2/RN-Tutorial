import { useRoute } from '@react-navigation/native'
import React, { useCallback, useEffect, useRef, useState } from 'react'
import {
  StyleSheet,
  TextInput,
  useWindowDimensions,
  View,
  Animated,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import IconRightButton from '../components/IconRightButton'
import { useUserContext } from '../contexts/UserContext'
import { downloadURL, uploadImage } from '../lib/upload'
import { createPost } from '../lib/posts'
import { v4 } from 'uuid'

function UploadScreen() {
  const route = useRoute()
  const { res } = route.params || {}
  const { width } = useWindowDimensions()
  const animation = useRef(new Animated.Value(width)).current
  const [isKeyboardOpen, setIsKeyboardOpen] = useState(false)
  const [description, setDescription] = useState('')
  const navigation = useNavigation()
  const { user } = useUserContext()

  const onSubmit = useCallback(async () => {
    navigation.pop()

    const imageUri = res.assets[0].uri
    const ext = imageUri.split('.').pop()
    const ref = `photo/${user.id}/${v4()}.${ext}`
    let photoURL = await uploadImage(ref, imageUri)
    photoURL = await downloadURL(photoURL)
    await createPost({ description, photoURL, user })
  }, [res, user, description, navigation])

  useEffect(() => {
    const didShow = Keyboard.addListener('keyboardDidShow', () =>
      setIsKeyboardOpen(true)
    )
    const didHide = Keyboard.addListener('keyboardDidHide', () =>
      setIsKeyboardOpen(false)
    )

    return () => {
      didShow.remove()
      didHide.remove()
    }
  }, [])

  useEffect(() => {
    Animated.timing(animation, {
      toValue: isKeyboardOpen ? 0 : width,
      useNativeDriver: false,
      duration: 150,
      delay: 200,
    }).start()
  }, [isKeyboardOpen, width, animation])

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => <IconRightButton onPress={onSubmit} name="send" />,
    })
  }, [navigation, onSubmit])

  return (
    <KeyboardAvoidingView
      behavior={Platform.select({ ios: 'height' })}
      style={styles.block}
      keyboardVerticalOffset={Platform.select({ ios: 180 })}
    >
      <Animated.Image
        source={{ uri: res.assets[0]?.uri }}
        style={[styles.image, { height: animation }]}
        resizeMode="cover"
      />
      <TextInput
        style={styles.input}
        multiline={true}
        placeholder="이 사진에 대한 설명을 입력하세요"
        textAlignVertical="top"
        value={description}
        onChangeText={setDescription}
      />
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  block: {
    flex: 1,
  },
  image: { width: '100%' },
  input: {
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 16,
    flex: 1,
    fontSize: 16,
  },
})

export default UploadScreen
