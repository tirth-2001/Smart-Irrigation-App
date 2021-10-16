import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import Header from '../../components/Header';
import IrrigationCard from '../components/IrrigationCard';

const IrrigationSchedule = ({navigation}) => {
  const irrigations = [
    {
      id: 1,
      farmerImageUrl:
        'https://firebasestorage.googleapis.com/v0/b/ssip-final.appspot.com/o/Admin_Panel%2Fuser.png?alt=media&token=ce51a93d-276e-4d42-aecb-ae15f1a0f749',
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
        'https://firebasestorage.googleapis.com/v0/b/ssip-final.appspot.com/o/Admin_Panel%2Fuser.png?alt=media&token=ce51a93d-276e-4d42-aecb-ae15f1a0f749',
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
        'https://firebasestorage.googleapis.com/v0/b/ssip-final.appspot.com/o/Admin_Panel%2Fuser.png?alt=media&token=ce51a93d-276e-4d42-aecb-ae15f1a0f749',
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
        'https://firebasestorage.googleapis.com/v0/b/ssip-final.appspot.com/o/Admin_Panel%2Fuser.png?alt=media&token=ce51a93d-276e-4d42-aecb-ae15f1a0f749',
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
        'https://firebasestorage.googleapis.com/v0/b/ssip-final.appspot.com/o/Admin_Panel%2Fuser.png?alt=media&token=ce51a93d-276e-4d42-aecb-ae15f1a0f749',
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
  ];

  return (
    <View style={styles.container}>
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  dummy: {
    height: 100,
  },
});

export default IrrigationSchedule;
