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

export async function getPosts(userId) {
  const q = query(
    collection(db, 'posts'),
    orderBy('createAt', 'desc'),
    limit(PAGE_SIZE),
    userId && where('user.id', '==', userId)
  )
  const querySnapshot = await getDocs(q)
  const posts = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }))
  return posts
}

export async function getOlderPosts(id, userId) {
  const docRef = doc(db, 'posts', id)
  const cursorDoc = await getDoc(docRef)
  if (cursorDoc.exists()) {
    const q = query(
      collection(db, 'posts'),
      orderBy('createAt', 'desc'),
      startAfter(cursorDoc),
      limit(PAGE_SIZE),
      userId && where('user.id', '==', userId)
    )
    const snapshot = await getDocs(q)
    const posts = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }))
    return posts
  }
  return []
}

export async function getNewerPosts(id, userId) {
  const docRef = doc(db, 'posts', id)
  const cursorDoc = await getDoc(docRef)
  if (cursorDoc.exists()) {
    const q = query(
      collection(db, 'posts'),
      orderBy('createAt', 'desc'),
      endBefore(cursorDoc),
      limit(PAGE_SIZE),
      userId && where('user.id', '==', userId)
    )
    const snapshot = await getDocs(q)

    const posts = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }))

    return posts
  }

  return []
}
