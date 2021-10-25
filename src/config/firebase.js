import auth from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore'
import storage from '@react-native-firebase/storage'

const firestore = firestore()

export const database = {
  farmers: firestore.collection('farmers'),
  admins: firestore.collection('irrigation_admins'),
  formatDoc: doc => {
    return {id: doc.id, ...doc.data()}
  },
}

export const storageRef = storage().ref('/irrigation_app')

export const auth = auth()
