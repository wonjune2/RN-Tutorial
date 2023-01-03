import {
  collection,
  doc,
  getDocs,
  serverTimestamp,
  setDoc,
} from 'firebase/firestore'
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

export async function getPosts() {
  const querySnapshot = await getDocs(collection(db, 'posts'))
  const posts = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }))

  return posts
}
