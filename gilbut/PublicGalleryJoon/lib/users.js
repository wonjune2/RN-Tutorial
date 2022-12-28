import { db } from '../configs/firebaseConfig'
import {
  collection,
  addDoc,
  getDocs,
  setDoc,
  getDoc,
  doc,
  query,
  where,
} from 'firebase/firestore'

export function createUser({ id, displayName, photoURL }) {
  return setDoc(doc(db, 'users', id), {
    id,
    displayName,
    photoURL,
  })
}

export async function getUser(id) {
  const docRef = doc(db, 'users', id)
  const docSnap = await getDoc(docRef)

  if (docSnap.exists()) {
    return docSnap.data()
  } else {
    return {}
  }
}
