import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';

import Icon from 'react-native-vector-icons/Feather';

const BottomNavbar = ({navigation}) => {
  const [screen, setScreen] = useState('AdminHomeScreen');

  return (
    <View style={[styles.container, {borderTopWidth: 2}]}>
      <View style={[styles.btn, {borderRightWidth: 4}]}>
        <Icon
          name="home"
          size={22}
          style={{
            borderBottomWidth: 3,
            paddingBottom: 2,
            borderBottomColor: '#1b50c1',
          }}
          color="#1b50c1"
        />

        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            marginLeft: 10,
            color: '#1b50c1',
          }}>
          Home
        </Text>
      </View>
      <View style={styles.btn}>
        <Icon
          name="user"
          size={22}
          style={{
            borderBottomWidth: 3,
            paddingBottom: 2,
          }}
        />

        <Text style={{fontSize: 20, fontWeight: 'bold', marginLeft: 10}}>
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
