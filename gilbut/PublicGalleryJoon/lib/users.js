import { db } from '../configs/firebaseConfig'
import {
  collection,
  addDoc,
  getDocs,
  setDoc,
  doc,
  getDoc,
} from 'firebase/firestore'

export function createUser({ id, displayName, photoURL }) {
  return addDoc(collection(db, 'users'), {
    id,
    displayName,
    photoURL,
  })
}

export async function getUser(id) {
  const querySnapshot = await getDoc(collection(db, 'users'))
  return querySnapshot.filter((doc) => doc.id === id)
}
