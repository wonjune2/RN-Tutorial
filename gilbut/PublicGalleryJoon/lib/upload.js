import { storage } from '../configs/firebaseConfig'
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'

const imageMeta = {
  contentType: 'image/jpeg',
}

export async function uploadImage(uid, uri) {
  try {
    const response = await fetch(uri)
    const blob = await response.blob()
    const ext = uri.split('.').pop()
    const fileuri = `profile/${uid}.${ext}`
    const storageRef = ref(storage, fileuri)
    await uploadBytes(storageRef, blob, imageMeta)
    return fileuri
  } catch (e) {
    console.error(e)
    return
  }
}

export async function downloadURL(photoURL) {
  try {
    return await getDownloadURL(ref(storage, photoURL))
  } catch (e) {
    console.error(e)
  }
}
