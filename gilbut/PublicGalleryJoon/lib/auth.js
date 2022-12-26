import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
const auth = getAuth()
async function register(email, password) {
  try {
    await createUserWithEmailAndPassword(auth, email, password)
  } catch (error) {
    console.error(error)
  }
}

export async function signUp({ email, password }) {
  try {
    await createUserWithEmailAndPassword(auth, email, password)
  } catch (error) {
    console.error(error)
  }
}

export default register
