import {database} from '../config'
import {useAuth} from '../context/authContext'

export const useAddDataFirebase = () => {
  const {currentUser} = useAuth()

  const newFarmer = (farmer, uid) => {
    console.log(farmer, uid)
    database.farmers.doc(uid).set({
      ...farmer,
      id: uid,
    })
  }

  const newField = async field => {
    // console.log(field, uid)
    const data = await database.farmers.doc(currentUser.uid).get()
    const {fields} = data.data()
    console.log('Fields', fields?.length)

    const newFields = fields ? [...fields, field] : [field]
    console.log('new', newFields.length)

    await database.farmers.doc(currentUser.uid).update({
      fields: newFields,
    })
  }

  return {newFarmer, newField}
}
