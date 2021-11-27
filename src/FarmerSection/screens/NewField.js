import React, {useState, useRef} from 'react'
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

import {useUploadImage, useFirebase} from '../../hooks'

import styles from '../../screens/common.styles'
import {newFieldValidationSchema} from '../../utils/validation'
import {database} from '../../config'
import {Picker} from '@react-native-picker/picker'
import Axios from 'axios'

//SOLI - DRY, HUMID, WET

// REGION - DESERT, HUMID, SEMI ARID, SEMI HUMID

// WEATHER -  NORMAL, RAINY, SUNNY, WINDY

// MIN TEMP - 20, 30, 40
// MAX TEMP - 30, 40, 50

const NewField = ({navigation}) => {
  const {newField} = useFirebase()
  const [progress, setProgress] = useState(0)
  const [url, setUrl] = useState('')

  const [soil, setSoil] = useState('')
  const [region, setRegion] = useState('')
  const [weather, setWeather] = useState('')
  const [minTemp, setMinTemp] = useState(0)
  const [maxTemp, setMaxTemp] = useState(0)
  const [fieldName, setFieldName] = useState('')
  const [crop, setCrop] = useState('')
  const [area, setArea] = useState('')
  const [waterReq, setWaterReq] = useState()
  const [checkAPI, setCheckAPI] = useState(0)
  const [perGWater, setPerGWater] = useState(null)

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

  const addNewField = async () => {
    if (
      fieldName &&
      crop &&
      area &&
      waterReq &&
      soil &&
      region &&
      weather &&
      minTemp &&
      maxTemp
    ) {
      if (perGWater == null) {
        return alert('Please Check Total Water Requirement')
      }
      try {
        await newField({
          image: url,
          humidity: 70,
          temperature: 25,
          moisture: 50,
          timestamp: Date.now(),
          fieldName,
          crop,
          area,
          waterRequirement: waterReq,
          soil,
          region,
          weather,
          minTemp,
          maxTemp,
          perGWater,
          totalCalculatedWater: area * perGWater,
        })
        navigation.navigate('MyFields')
      } catch (error) {
        console.log(error)
      }
    } else {
      alert('Please fill all the fields')
    }
  }

  const checkTotalWater = async () => {
    const dataP = {
      crop,
      soil,
      region,
      weather,
      min_temp: minTemp,
      max_temp: maxTemp,
    }
    await Axios.post('https://irrigation-ml-api.herokuapp.com/predict', dataP, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(res => {
        setPerGWater(res.data)
        setCheckAPI(3)
      })
      .catch(err => {
        setPerGWater(null)
        setCheckAPI(-1)
        console.log(err)
      })
  }

  const pickerRef = useRef()

  return (
    <SafeAreaView style={styles.container}>
      <Header name="Add New Field" navigation={navigation} />
      <ScrollView style={[styles.form, {marginHorizontal: 20}]}>
        {/* New Field Form */}

        <View>
          {/* <Text style={styles.label}>Field Name</Text> */}
          <TextInput
            style={styles.input}
            keyboardType="default"
            placeholder="Field Name"
            value={fieldName}
            onChangeText={e => setFieldName(e)}
          />
        </View>
        <View>
          {/* <Text style={styles.label}>Field Crop</Text> */}
          <TextInput
            style={styles.input}
            keyboardType="default"
            placeholder="Crop"
            value={crop}
            onChangeText={e => setCrop(e)}
          />
        </View>

        <View>
          {/* <Text style={styles.label}>Area</Text> */}
          <TextInput
            style={styles.input}
            keyboardType="phone-pad"
            placeholder="Area (in sq. mts.)"
            value={area}
            onChangeText={e => setArea(e)}
          />
        </View>
        <View>
          {/* <Text style={styles.label}>Water Requirement (in gallons)</Text> */}
          <TextInput
            style={styles.input}
            keyboardType="decimal-pad"
            placeholder="Water Requirement (gallons/month)"
            value={waterReq}
            onChangeText={e => setWaterReq(e)}
          />
        </View>

        <View style={styles1.drpBtn}>
          <Text>Select Soil</Text>
          <Picker
            ref={pickerRef}
            selectedValue={soil}
            onValueChange={itemValue => setSoil(itemValue)}>
            <Picker.Item label="" value="" />
            <Picker.Item label="DRY" value="DRY" />
            <Picker.Item label="HUMID" value="HUMID" />
            <Picker.Item label="WET" value="WET" />
          </Picker>
        </View>

        <View style={styles1.drpBtn}>
          <Text>Select Region</Text>
          <Picker
            ref={pickerRef}
            selectedValue={region}
            onValueChange={itemValue => setRegion(itemValue)}>
            <Picker.Item label="" value="" />
            <Picker.Item label="DESERT" value="DESERT" />
            <Picker.Item label="HUMID" value="HUMID" />
            <Picker.Item label="SEMI ARID" value="SEMI ARID" />
            <Picker.Item label="SEMI HUMID" value="SEMI HUMID" />
          </Picker>
        </View>

        <View style={styles1.drpBtn}>
          <Text>Select Weather</Text>
          <Picker
            ref={pickerRef}
            selectedValue={weather}
            onValueChange={itemValue => setWeather(itemValue)}>
            <Picker.Item label="" value="" />
            <Picker.Item label="NORMAL" value="NORMAL" />
            <Picker.Item label="RAINY" value="RAINY" />
            <Picker.Item label="SUNNY" value="SUNNY" />
            <Picker.Item label="WINDY" value="WINDY" />
          </Picker>
        </View>

        <View style={styles1.drpBtn}>
          <Text>Min Temperature</Text>
          <Picker
            ref={pickerRef}
            selectedValue={minTemp}
            onValueChange={itemValue => setMinTemp(itemValue)}>
            <Picker.Item label="" value="" />
            <Picker.Item label="10" value={10} />
            <Picker.Item label="20" value={20} />
            <Picker.Item label="30" value={30} />
            <Picker.Item label="40" value={40} />
          </Picker>
        </View>

        <View style={styles1.drpBtn}>
          <Text>Max Temperature</Text>
          <Picker
            ref={pickerRef}
            selectedValue={maxTemp}
            onValueChange={itemValue => setMaxTemp(itemValue)}>
            <Picker.Item label="" value="" />
            <Picker.Item label="30" value={30} />
            <Picker.Item label="40" value={40} />
            <Picker.Item label="50" value={50} />
          </Picker>
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
                style={tailwind('bg-gray-500 text-white p-2 px-3 rounded-md')}
                onPress={() => chooseFromGallery()}>
                <Text style={tailwind('text-white text-base')}>
                  Change Farm Image
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={tailwind('bg-red-500 text-white p-2 px-3 rounded-md')}
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
              <Icon name={'cloud-upload-outline'} color="#7f7f7f" size={39} />
              <Text style={styles1.imageUploadText}> Click to Upload </Text>
            </TouchableOpacity>

            <Text style={tailwind('text-base')}>Upload Image (if any)</Text>
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

        <View
          style={{
            borderWidth: 1,
            borderRadius: 10,
            borderColor: '#7f7f7f',
            paddingVertical: 8,
            paddingHorizontal: 15,
          }}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              width: '100%',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontSize: 18,
                fontWeight: '700',
              }}>
              Total Water Requirement
            </Text>
            <View
              style={{
                alignItems: 'flex-end',
              }}>
              <TouchableOpacity
                style={{
                  backgroundColor: '#000',
                  paddingHorizontal: 10,
                  paddingVertical: 5,
                  borderRadius: 8,
                }}
                activeOpacity={0.5}
                onPress={() => {
                  setCheckAPI(2)
                  checkTotalWater()
                }}
                disabled={checkAPI === 2}>
                <Text style={{color: '#fff', fontSize: 18, fontWeight: '600'}}>
                  {checkAPI === 2 ? 'Checking' : 'Check'}
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={{marginTop: 10}}>
            <Text style={{fontSize: 16}}>
              Per 100Sq = {perGWater === null ? 'NILL' : perGWater + 'Gallon'}
            </Text>
            <Text style={{marginTop: 5, fontSize: 16}}>
              Total Water Required =
              {perGWater === null ? 'NILL' : area * perGWater}
            </Text>
          </View>
        </View>

        <View style={styles.center}>
          <TouchableOpacity
            disabled={
              (progress > 0 && !url) || checkAPI != 3 || perGWater == null
            }
            style={styles.btn}
            activeOpacity={0.7}
            onPress={() => addNewField()}>
            <Text style={styles.btnText}>Submit</Text>
          </TouchableOpacity>
        </View>
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
  drpBtn: {
    borderBottomWidth: 1,
    marginBottom: 8,
  },
})

export default NewField
// Gallon/ 100sq meter output
