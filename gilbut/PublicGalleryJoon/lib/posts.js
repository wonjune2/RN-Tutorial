import {
  collection,
  doc,
  endBefore,
  getDoc,
  getDocs,
  limit,
  orderBy,
  query,
  serverTimestamp,
  setDoc,
  startAfter,
  where,
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
  const first = query(
    collection(db, 'posts'),
    orderBy('createAt', 'desc'),
    limit(PAGE_SIZE)
  )
  const querySnapshot = await getDocs(first)
  const posts = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }))
  return posts
}

export async function getOlderPosts(id) {
  const docRef = doc(db, 'posts', id)
  const cursorDoc = await getDoc(docRef)
  console.log(cursorDoc.exists())
  if (cursorDoc.exists()) {
    const first = query(
      collection(db, 'posts'),
      orderBy('createAt', 'desc'),
      startAfter(cursorDoc),
      limit(PAGE_SIZE)
    )
    const snapshot = await getDocs(first)
    const posts = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }))
    return posts
  }
  return []
}

export async function getNewerPosts(id) {
  const docRef = doc(db, 'posts', id)
  const cursorDoc = await getDoc(docRef)
  if (cursorDoc.exists()) {
    const first = query(
      collection(db, 'posts'),
      orderBy('createAt', 'desc'),
      endBefore(cursorDoc),
      limit(PAGE_SIZE)
    )
    const snapshot = await getDocs(first)

    const posts = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }))

    return posts
  }

  return []
}
