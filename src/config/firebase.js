import auth from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore'
import storage from '@react-native-firebase/storage'

const db = firestore()

export const database = {
  farmers: db.collection('farmers'),
  admins: db.collection('irrigation_admins'),
  formatDoc: doc => {
    return {id: doc.id, ...doc.data()}
  },
}

export const storageRef = storage().ref('/irrigation_app')

export const firebaseAuth = auth()
