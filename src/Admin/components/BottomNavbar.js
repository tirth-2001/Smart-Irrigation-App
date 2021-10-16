import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome5';

const BottomNavbar = ({navigation}) => {
  const [screen, setScreen] = useState('AdminHomeScreen');

  return (
    <View style={[styles.container]}>
      <View
        style={[
          styles.btn,
          {backgroundColor: '#199333', borderTopStartRadius: 20},
        ]}>
        <Icon name="home" size={20} color="#fff" />

        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            marginLeft: 10,
            color: '#fff',
          }}>
          Home
        </Text>
      </View>

      <View
        style={[
          styles.btn,
          {
            borderRightWidth: 4,
            borderTopWidth: 2,
            borderTopRightRadius: 20,
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
      </View>
    </View>
  );
};

export default BottomNavbar;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    height: 50,
    width: '100%',
    flexDirection: 'row',
  },
  btn: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
});
