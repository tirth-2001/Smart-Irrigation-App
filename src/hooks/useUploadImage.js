import React from 'react'
import {storageRef} from '../config/firebase'

const useUploadImage = imageFile => {
  let imgURL

  try {
    const reference = storageRef.ref(
      `/irrigation_app/${imageFile.assets[0].fileName}`,
    )

    const task = reference.putFile(imageFile.assets[0].uri)

    task.then(async () => {
      imgURL = await reference.getDownloadURL()
    })
  } catch (error) {
    console.log(error)
  }
  return imgURL
}

export default useUploadImage
