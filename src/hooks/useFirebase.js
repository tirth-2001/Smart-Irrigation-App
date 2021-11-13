import {database} from '../config'
import {useAuth} from '../context/authContext'
import {useState, useEffect, useMemo} from 'react'
;(function () {
  var defaultTransformer = function (x) {
    return x
  }
  Object.defineProperty(Array.prototype, 'sum', {
    value: function (transformer) {
      transformer = transformer || defaultTransformer
      return this.reduce(function (previous, current) {
        return previous + transformer(current)
      }, 0)
    },
    configurable: true,
    writable: true,
  })
})()
const getTotalWaterIrrigation = farmers => {
  return farmers
    .reduce((prev, curr) => {
      prev = prev + curr?.fields?.sum(x => parseFloat(x?.waterRequirement))
      return prev
    }, 0)
    .toFixed(2)
}

export const useFirebase = () => {
  const {currentUser, setCurrentUser} = useAuth()
  const [farmers, setFarmers] = useState([])
  const totalWater = useMemo(() => getTotalWaterIrrigation(farmers), [farmers])

  const newFarmer = (farmer, uid, isAdmin) => {
    console.log(farmer, uid)
    database.farmers.doc(uid).set({
      ...farmer,
      id: uid,
      isAdmin,
    })
  }

  const getFarmerRole = async uid => {
    console.log('getting farmer', uid)
    const farmer = uid && (await database.farmers.doc(uid).get())

    const {isAdmin} = farmer.data()
    console.log('aa', isAdmin)
    return isAdmin
  }

  // getFarmerRole('moao40zx3HOIENLz4bGZZ74EjKY2')

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

  useEffect(() => {
    console.log('useEffect')
    database.farmers.onSnapshot(async snap => {
      console.log('snap', snap.docs)
      const data = await (snap.size > 0 ? snap.docs : []).map(doc => ({
        ...doc.data(),
        id: doc.id,
      }))
      setFarmers(data)
    })
  }, [])

  // useEffect(async () => {
  //   console.log('useEffect 2')
  //   const {isAdmin} = currentUser && (await getFarmerRole(currentUser.uid))
  //   console.log('isAdmin', isAdmin)
  //   setCurrentUser({...currentUser, isAdmin: isAdmin})
  // }, [])

  return {newFarmer, newField, farmers, totalWater, getFarmerRole}
}
