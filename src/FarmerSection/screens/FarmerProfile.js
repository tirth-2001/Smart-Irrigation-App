import React from 'react'
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native'

import Header from '../../components/Header'
import tailwind from 'tailwind-rn'
import Icon from 'react-native-vector-icons/FontAwesome5'
import {useAuth} from '../../context/authContext'

const FarmerProfile = ({navigation}) => {
  const {currentUser, logout} = useAuth()
  console.log(`Current User from  ROuters${currentUser}`)
  return (
    <View style={styles.container}>
      <Header name="Farmer Profile" navigation={navigation} />

      <View style={tailwind('flex flex-col justify-between mx-2')}>
        <Text style={tailwind('text-lg text-gray-900 font-bold')}>
          Email : {currentUser?.email}
          Role : {currentUser?.isAdmin}
        </Text>

        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => {
            logout()
            // navigation.navigate('BaseScreen')
          }}
          style={[
            tailwind(
              'mt-20 px-3 py-2 w-48 rounded-full flex flex-row items-center justify-center',
            ),
            {backgroundColor: '#199333'},
          ]}>
          <Text style={tailwind('text-lg text-white font-bold px-2')}>
            Logout
          </Text>
          <Icon name="sign-out-alt" size={20} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    marginTop: 10,
    marginHorizontal: 10,
  },
  contentContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: '#777',
  },
  cardContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 28,
    fontWeight: '900',
    textTransform: 'uppercase',
    letterSpacing: -1,
  },
  location: {
    fontSize: 16,
  },
  date: {
    fontSize: 12,
  },
})

export default FarmerProfile
