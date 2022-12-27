import { db } from '../configs/firebaseConfig'
import {
  collection,
  addDoc,
  getDocs,
  setDoc,
  getDoc,
  doc,
} from 'firebase/firestore'

export function createUser({ id, displayName, photoURL }) {
  return addDoc(collection(db, 'users'), {
    id,
    displayName,
    photoURL,
  })
}

export async function getUser(id) {
  const docRef = doc(db, 'users', id)
  const docSnap = await getDoc(docRef)
  console.log(docSnap)
}
