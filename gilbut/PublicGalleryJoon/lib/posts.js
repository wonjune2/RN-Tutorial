import { collection, doc, serverTimestamp, setDoc } from 'firebase/firestore'
import { db } from '../configs/firebaseConfig'

const docRef = doc(collection(db, 'posts'))

export function createPost({ user, photoURL, description }) {
  return setDoc(docRef, {
    user,
    photoURL,
    description,
    createAt: serverTimestamp(),
  })
}
