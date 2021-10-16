import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import Header from '../../components/Header';
import FieldCard from '../components/FieldCard';
import FieldFab from '../components/FieldFab';

const MyFields = ({navigation}) => {
  const fields = [
    {
      id: 1,
      name: 'Field 1',
      area: '10.5',
      crop: 'Cotton',
      status: 'Active',
      image: 'https://picsum.photos/481/321',
    },
    {
      id: 2,
      name: 'Field 2',
      area: '10.5',
      crop: 'Cotton',
      status: 'Active',
      image: 'https://picsum.photos/484/324',
    },
    {
      id: 3,
      name: 'Field 3',
      area: '10.5',
      crop: 'Cotton',
      status: 'Active',
      image: 'https://picsum.photos/482/322',
    },
    {
      id: 3,
      name: 'Field 4',
      area: '10.5',
      crop: 'Cotton',
      status: 'Active',
      image: 'https://picsum.photos/483/323',
    },
  ];

  return (
    <View style={styles.container}>
      <ScrollView style={styles.container}>
        <Header name="My Fields" navigation={navigation} />
        <View style={styles.fields}>
          {fields &&
            fields.map((f, index) => (
              <FieldCard key={index} fieldData={f} navigation={navigation} />
            ))}
        </View>
      </ScrollView>
      <FieldFab navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  fields: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignContent: 'center',
  },
});

export default MyFields;
