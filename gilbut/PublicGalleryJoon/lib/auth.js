import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth'
import { auth } from '../configs/firebaseConfig'

export function signUp({ email, password }) {
  console.log(email, password)
  return createUserWithEmailAndPassword(auth, email, password)
}

export function signIn({ email, password }) {
  return signInWithEmailAndPassword(auth, email, password)
}

export function SignOut({ email, password }) {
  return signOut(auth)
}

export function subscribeAuth(callback) {
  return onAuthStateChanged(auth, callback)
}
