import {storageRef} from '../config'

export const useUploadImage = (file, filePath, setUrl, setProgress) => {
  console.log('Inside useupload', file, setUrl, setProgress)
  setProgress(0)
  setUrl('')
  // const handleUpload = async () => {
  try {
    const uploadTask = storageRef
      .child(`${filePath}/${file.split('/').pop()}`)
      .putFile(file)
    uploadTask.on(
      'state_changed',
      snapshot => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100,
        )
        setProgress(progress)
      },
      error => {
        console.log(error)
      },
      () => {
        storageRef
          .child(`${filePath}/${file.split('/').pop()}`)
          .getDownloadURL()
          .then(url => {
            console.log('url', url)
            setUrl(url)
          })
      },
    )
  } catch (error) {
    console.log('Error in useUploadImage', error)
    const response = {
      success: false,
      error: error,
    }
    return response
  }
}

// handleUpload()

// return {handleUpload}
// }
