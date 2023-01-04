import {
  collection,
  doc,
  getDocs,
  limit,
  orderBy,
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

export const PAGE_SIZE = 3

export async function getPosts() {
  const querySnapshot = await getDocs(
    collection(db, 'posts'),
    orderBy('createAt', 'desc'),
    limit(PAGE_SIZE)
  )
  const posts = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }))

  return posts
}
