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
  const {currentUser} = useAuth()
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
    if (!uid) return false
    const farmer = uid && (await database.farmers.doc(uid).get())

    const {isAdmin} = farmer && farmer.data()
    return isAdmin
  }

  const newField = async field => {
    const data = await database.farmers.doc(currentUser.uid).get()
    const {fields} = data.data()

    const newFields = fields ? [...fields, field] : [field]

    await database.farmers.doc(currentUser.uid).update({
      fields: newFields,
    })
  }

  useEffect(async () => {
    database.farmers.onSnapshot(async snap => {
      const data = await (snap.size > 0 ? snap.docs : []).map(doc => ({
        ...doc.data(),
        id: doc.id,
      }))
      setFarmers(data)
    })
  }, [])

  return {newFarmer, newField, farmers, totalWater, getFarmerRole}
}
