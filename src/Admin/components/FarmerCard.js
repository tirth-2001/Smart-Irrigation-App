import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableNativeFeedback,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const FarmerCard = ({farmerData, navigation}) => {
  const {name, id, profileImage} = farmerData || [];

  return (
    <View
      style={{
        height: 180,
        width: '40%',
        padding: 10,
        marginHorizontal: 10,
        marginTop: 24,
        borderRadius: 15,
        elevation: 7,
        backgroundColor: '#fff',
        shadowOffset: {width: 0, height: 10},
        shadowColor: '#333',
        shadowOpacity: 1.0,
        shadowRadius: 22,
        borderWidth: 0,
        borderColor: '#ddd',
      }}>
      <View
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: 7,
        }}>
        <View>
          <Image
            source={{uri: profileImage}}
            style={{width: 80, height: 80, borderRadius: 50}}
            resizeMode="center"
          />
        </View>
        <View>
          <View style={{marginLeft: 0, alignItems: 'center', marginTop: 10}}>
            <Text
              style={{
                fontSize: 18,
                // width: Dimensions.get('window').width / 2 + 8,
                alignSelf: 'center',
                color: '#199333',
              }}>
              {name}
            </Text>
          </View>
        </View>
      </View>

      <TouchableOpacity
        // onPress={() => navigation.navigate('LoginScreen')}
        activeOpacity={0.7}
        style={[styles.btn, {backgroundColor: '#199333'}]}>
        <Text
          style={{
            fontSize: 14,
            fontWeight: 'bold',
            marginLeft: 7,
            marginRight: 7,
            color: '#fff',
          }}>
          View Fields
        </Text>
        <Icon name="arrow-right" size={16} color="#fff" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  btn: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    width: 120,
    height: 38,
    borderRadius: 20,
    // shadowColor: '#000',
    // shadowOffset: {
    //   width: 0,
    //   height: 3,
    // },
    // shadowOpacity: 0.39,
    // shadowRadius: 8.3,

    // elevation: 7,
  },
});

export default FarmerCard;
