import React, {useState, useEffect} from 'react'
import {View, Text, StyleSheet, ScrollView, SafeAreaView} from 'react-native'
import Header from '../../components/Header'
import {database} from '../../config'
import FieldCard from '../components/FieldCard'
import FieldFab from '../components/FieldFab'
import {useAuth} from '../../context/authContext'

const MyFields = ({navigation}) => {
  const {currentUser} = useAuth()
  const [fields, setFields] = useState([])

  useEffect(() => {
    const subscription = database.farmers
      .doc(currentUser?.uid)
      .onSnapshot(snapshot => {
        const allFields = snapshot.data().fields

        setFields(allFields)
      })

    return () => subscription()
  }, [])

  console.log(fields)

  return (
    <SafeAreaView style={styles.container}>
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
    </SafeAreaView>
  )
}

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
})

export default MyFields
