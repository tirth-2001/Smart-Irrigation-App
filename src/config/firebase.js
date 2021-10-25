import auth from '@react-native-firebase/auth'

// const firestore = app.firestore()
// export const database = {
//   folders: firestore.collection('folders'),
//   files: firestore.collection('files'),
//   formatDoc: doc => {
//     return {id: doc.id, ...doc.data()}
//   },
//   getCurrentTimestamp: firebase.firestore.FieldValue.serverTimestamp,
// }
// export const storage = app.storage()
export const auth = auth()
