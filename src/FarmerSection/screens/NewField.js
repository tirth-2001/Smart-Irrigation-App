import React, {useState} from 'react'
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native'
import Header from '../../components/Header'
import Farm from '../../../assets/img/farm1.png'
import Icon from 'react-native-vector-icons/Ionicons'
import {launchCamera, launchImageLibrary} from 'react-native-image-picker'
import * as Progress from 'react-native-progress'
import tailwind from 'tailwind-rn'
import {Formik} from 'formik'

import {useUploadImage, useAddDataFirebase} from '../../hooks'

import styles from '../../screens/common.styles'
import {newFieldValidationSchema} from '../../utils/validation'
import {database} from '../../config'

const NewField = ({navigation}) => {
  const {newField} = useAddDataFirebase()
  const [progress, setProgress] = useState(0)
  const [url, setUrl] = useState('')

  const options = {
    title: 'Select Farm Image',
    storageOptions: {
      skipBackup: true,
      path: 'images',
    },
  }

  const chooseFromGallery = async () => {
    console.log('----> GALLERY Image\n')

    launchImageLibrary(options, response => {
      console.log(response)
      if (response.didCancel) {
        console.log('CANCEL EVENT')
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error)
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton)
      } else {
        uploadImage(response)
      }
    })
  }

  const uploadImage = async response => {
    console.log(response.assets[0].fileName)
    // setImageUploading(true);
    console.log('Image URI : ', response.assets[0].uri)
    await useUploadImage(
      response.assets[0].uri,
      'new_field',
      setUrl,
      setProgress,
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      <Header name="Add New Field" navigation={navigation} />
      <ScrollView style={styles.form}>
        {/* New Field Form */}
        <Formik
          initialValues={{
            fieldName: '',
            crop: '',
            area: '',
            waterRequirement: '',
          }}
          validationSchema={newFieldValidationSchema}
          onSubmit={async values => {
            console.log(values)
            try {
              await newField({
                ...values,
                image: url,
                humidity: 70,
                temperature: 25,
                moisture: 50,
                totalWaterIrrigated: values.waterRequirement + 10,
                timestamp: Date.now(),
              })
              // await database.farmers.add({
              //   ...values,
              //   image: url,
              //   timestamp: Date.now(),
              // })
              navigation.navigate('MyFields')
            } catch (error) {
              console.log(error)
            }
          }}>
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            isValid,
          }) => (
            <>
              <View>
                {/* <Text style={styles.label}>Field Name</Text> */}
                <TextInput
                  style={styles.input}
                  keyboardType="default"
                  placeholder="Field Name"
                  onChangeText={handleChange('fieldName')}
                  onBlur={handleBlur('fieldName')}
                  value={values.fieldName}
                />
                {errors.fieldName && (
                  <Text style={{color: 'red', fontSize: 12}}>
                    {errors.fieldName}
                  </Text>
                )}
              </View>
              <View>
                {/* <Text style={styles.label}>Field Crop</Text> */}
                <TextInput
                  style={styles.input}
                  keyboardType="default"
                  placeholder="Crop"
                  onChangeText={handleChange('crop')}
                  onBlur={handleBlur('crop')}
                  value={values.crop}
                />
                {errors.crop && (
                  <Text style={{color: 'red', fontSize: 12}}>
                    {errors.crop}
                  </Text>
                )}
              </View>

              <View>
                {/* <Text style={styles.label}>Area</Text> */}
                <TextInput
                  style={styles.input}
                  keyboardType="phone-pad"
                  placeholder="Area (in sq. mts.)"
                  onChangeText={handleChange('area')}
                  onBlur={handleBlur('area')}
                  value={values.area}
                />
                {errors.area && (
                  <Text style={{color: 'red', fontSize: 12}}>
                    {errors.area}
                  </Text>
                )}
              </View>
              <View>
                {/* <Text style={styles.label}>Water Requirement (in gallons)</Text> */}
                <TextInput
                  style={styles.input}
                  keyboardType="decimal-pad"
                  placeholder="Water Requirement (gallons/month)"
                  onChangeText={handleChange('waterRequirement')}
                  onBlur={handleBlur('waterRequirement')}
                  value={values.waterRequirement}
                />
                {errors.waterRequirement && (
                  <Text style={{color: 'red', fontSize: 12}}>
                    {errors.waterRequirement}
                  </Text>
                )}
              </View>

              <View>
                <Text style={tailwind('text-lg pb-2')}>Farm Image</Text>
              </View>

              {url ? (
                <>
                  <View style={tailwind('h-48 w-full')}>
                    <Image
                      source={{uri: url}}
                      style={{width: '100%', height: '100%'}}
                    />
                  </View>
                  <View style={tailwind('flex flex-row my-4 justify-evenly')}>
                    <TouchableOpacity
                      style={tailwind(
                        'bg-gray-500 text-white p-2 px-3 rounded-md',
                      )}
                      onPress={() => chooseFromGallery()}>
                      <Text style={tailwind('text-white text-base')}>
                        Change Farm Image
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={tailwind(
                        'bg-red-500 text-white p-2 px-3 rounded-md',
                      )}
                      onPress={() => {
                        setProgress(0)
                        setUrl('')
                      }}>
                      <Text style={tailwind('text-white text-base')}>
                        Remove Image
                      </Text>
                    </TouchableOpacity>
                  </View>
                </>
              ) : (
                <View
                  style={tailwind(
                    'rounded-md bg-gray-100 p-4 w-60 my-4 border-2 border-gray-400 border-dashed',
                  )}>
                  <TouchableOpacity
                    activeOpacity={0.5}
                    onPress={chooseFromGallery}
                    style={[styles1.imageUploadBox, {borderStyle: 'dashed'}]}>
                    <Icon
                      name={'cloud-upload-outline'}
                      color="#7f7f7f"
                      size={39}
                    />
                    <Text style={styles1.imageUploadText}>
                      {' '}
                      Click to Upload{' '}
                    </Text>
                  </TouchableOpacity>

                  <Text style={tailwind('text-base')}>
                    Upload Image (if any)
                  </Text>
                </View>
              )}

              {progress > 0 && progress < 100 && (
                <View style={tailwind('pt-4 pb-2')}>
                  {progress === 100 ? (
                    <Text style={tailwind('text-base pb-2')}>
                      Image Uploaded Successfully
                    </Text>
                  ) : (
                    <Text style={tailwind('text-base pb-2')}>
                      Uploading Image {progress}%
                    </Text>
                  )}

                  <Progress.Bar
                    progress={progress / 100}
                    width={Dimensions.get('window').width * 0.8}
                    color={'#199333'}
                  />
                </View>
              )}

              <View style={styles.center}>
                <TouchableOpacity
                  disabled={progress > 0 && !url}
                  style={styles.btn}
                  activeOpacity={0.7}
                  onPress={handleSubmit}>
                  <Text style={styles.btnText}>Submit</Text>
                </TouchableOpacity>
              </View>
            </>
          )}
        </Formik>
      </ScrollView>

      {/* <View style={styles.imgWrapper}>
        <Image source={Farm} style={styles.img} />
      </View> */}
    </SafeAreaView>
  )
}

const styles1 = StyleSheet.create({
  imageUploadText: {
    color: '#7f7f7f',
    fontSize: 15,
    marginTop: 5,
  },
  imageBox: {
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default NewField
