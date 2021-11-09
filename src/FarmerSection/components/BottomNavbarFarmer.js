import React, {useState} from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome5'

const BottomNavbarFarmer = ({navigation}) => {
  const [screen, setScreen] = useState('AdminHomeScreen')

  return (
    <View style={[styles.container]}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('MyFields')
        }}
        style={[
          styles.btn,
          {
            backgroundColor: '#199333',
            borderTopStartRadius: 20,
            borderTopEndRadius: 20,
          },
        ]}>
        <Icon name="seedling" size={20} color="#fff" />

        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            marginLeft: 10,
            color: '#fff',
          }}>
          My Fields
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate('FarmerProfile')
        }}
        style={[
          styles.btn,
          {
            borderWidth: 2,
            borderTopStartRadius: 20,
            borderTopEndRadius: 20,
            borderColor: '#199333',
          },
        ]}>
        <Icon name="user" size={20} color="#199333" />
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            marginLeft: 10,
            color: '#199333',
          }}>
          Profile
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export default BottomNavbarFarmer

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    height: Dimensions.get('window').height * 0.07,
    width: '100%',
    flexDirection: 'row',
  },
  btn: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
})
