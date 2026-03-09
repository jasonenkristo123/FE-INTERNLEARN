import {
  getDocs,
  getFirestore,
  collection,
  getDoc,
  doc,
} from 'firebase/firestore'
import app from './init'

const firestore = getFirestore(app)

export async function retriveData(collectionName: string) {
  const snapshot = await getDocs(collection(firestore, collectionName))
  const data = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...(doc.data() as Record<string, unknown>),
  }))

  return data
}

export async function retrieveDataById(collectionName: string, id: string) {
  const snapshot = await getDoc(doc(firestore, collectionName, id))
  const data = snapshot.data() as Record<string, unknown>

  return data
}
