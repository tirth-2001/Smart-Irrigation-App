import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native'
import Header from '../../components/Header'
import IrrigationCard from '../components/IrrigationCard'
import Icon from 'react-native-vector-icons/FontAwesome5'

const IrrigationSchedule = ({navigation}) => {
  const irrigations = [
    {
      id: 1,
      farmerImageUrl:
        'https://firebasestorage.googleapis.com/v0/b/ssip-final.appspot.com/o/IrrigationApp%2Fuser1.png?alt=media&token=1b78d275-5f73-40d0-9653-f4b88632d51a',
      name: 'Ram Pathak',
      date: '01/01/2019',
      startTime: '10:00',
      endTime: '11:00',
      duration: '1 hour',
      status: 'Active',
      action: 'Edit',
      fieldArea: 600,
      waterRequirement: 200,
    },
    {
      id: 2,
      farmerImageUrl:
        'https://firebasestorage.googleapis.com/v0/b/ssip-final.appspot.com/o/IrrigationApp%2Fuser1.png?alt=media&token=1b78d275-5f73-40d0-9653-f4b88632d51a',
      name: 'Shyam Kumar',
      date: '01/01/2019',
      startTime: '10:00',
      endTime: '11:00',
      duration: '1 hour',
      status: 'Active',
      action: 'Edit',
      fieldArea: 600,
      waterRequirement: 200,
    },
    {
      id: 3,
      farmerImageUrl:
        'https://firebasestorage.googleapis.com/v0/b/ssip-final.appspot.com/o/IrrigationApp%2Fuser1.png?alt=media&token=1b78d275-5f73-40d0-9653-f4b88632d51a',
      name: 'Gopal Avasthi',
      date: '01/01/2019',
      startTime: '10:00',
      endTime: '11:00',
      duration: '1 hour',
      status: 'Active',
      action: 'Edit',
      fieldArea: 600,
      waterRequirement: 200,
    },
    {
      id: 4,
      farmerImageUrl:
        'https://firebasestorage.googleapis.com/v0/b/ssip-final.appspot.com/o/IrrigationApp%2Fuser1.png?alt=media&token=1b78d275-5f73-40d0-9653-f4b88632d51a',
      name: 'Gopal Avasthi',
      date: '01/01/2019',
      startTime: '10:00',
      endTime: '11:00',
      duration: '1 hour',
      status: 'Active',
      action: 'Edit',
      fieldArea: 600,
      waterRequirement: 200,
    },
    {
      id: 5,
      farmerImageUrl:
        'https://firebasestorage.googleapis.com/v0/b/ssip-final.appspot.com/o/IrrigationApp%2Fuser1.png?alt=media&token=1b78d275-5f73-40d0-9653-f4b88632d51a',
      name: 'Gopal Avasthi',
      date: '01/01/2019',
      startTime: '10:00',
      endTime: '11:00',
      duration: '1 hour',
      status: 'Active',
      action: 'Edit',
      fieldArea: 600,
      waterRequirement: 200,
    },
  ]

  return (
    <SafeAreaView style={styles.container}>
      <Header name="Irrigation Schedule" navigation={navigation} />
      <ScrollView style={styles.container}>
        {irrigations && irrigations.length > 0 ? (
          irrigations.map(irrigation => (
            <IrrigationCard
              irrigationData={irrigation}
              navigation={navigation}
              key={irrigation.id}
            />
          ))
        ) : (
          <Text>No Irrigation Schedules</Text>
        )}
        <View style={styles.dummy}></View>
      </ScrollView>
      <View>
        <TouchableOpacity
          style={styles.newIrrigation}
          onPress={() => navigation.navigate('NewIrrigation')}>
          <Icon name="plus" size={20} color="#fff" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  dummy: {
    height: 100,
  },
  newIrrigation: {
    position: 'absolute',
    flexDirection: 'row',
    margin: 20,
    right: 0,
    bottom: 0,
    backgroundColor: '#199333',
    height: 50,
    width: 50,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
})

export default IrrigationSchedule
