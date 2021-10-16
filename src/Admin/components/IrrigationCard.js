import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import LinearGradient from 'react-native-linear-gradient';

const IrrigationCard = ({irrigationData, navigation}) => {
  const {
    name,
    fieldArea,
    date,
    startTime,
    endTime,
    waterRequirement,
    farmerImageUrl,
  } = irrigationData || [];

  return (
    <View
      //   start={{x: 0, y: 1}}
      //   end={{x: 1, y: 0}}
      //   colors={['#199333', '#1FAA59', '#38CC77']}
      style={{
        height: 200,
        width: Dimensions.get('window').width - 20,
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
          flexDirection: 'row',
          justifyContent: 'flex-start',
          height: 30,
        }}>
        <View>
          <Image
            source={{uri: farmerImageUrl}}
            style={{width: 25, height: 25, borderRadius: 25}}
            resizeMode="center"
          />
        </View>
        <View>
          <View style={{marginLeft: 10}}>
            <Text
              style={{
                fontSize: 18,
                width: Dimensions.get('window').width / 2 + 8,
                textAlign: 'justify',
                color: '#199333',
              }}>
              {name}
            </Text>
          </View>
        </View>
      </View>

      <View
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-around',
          height: 90,
          marginTop: 10,
        }}>
        <Text style={{fontSize: 15, color: '#199333', fontWeight: 'bold'}}>
          Field Area : {fieldArea} sq. mts.
        </Text>
        <Text style={{fontSize: 15, color: '#199333', fontWeight: 'bold'}}>
          Water Alloted : {waterRequirement} gallons
        </Text>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <View style={{display: 'flex', flexDirection: 'row'}}>
            <Icon name="calendar-alt" size={20} color="#7f7f7f" />
            <Text style={{fontSize: 15, color: '#7f7f7f', paddingLeft: 5}}>
              {date}
            </Text>
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
            }}>
            <Icon name="clock" size={20} color="#7f7f7f" />
            <Text style={{fontSize: 15, color: '#7f7f7f', paddingLeft: 5}}>
              {startTime} - {endTime}
            </Text>
          </View>
        </View>
      </View>

      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          marginTop: 10,
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: 10,
          borderTopWidth: 1,
          borderColor: '#7f7f7f',
          marginHorizontal: -10,
          //   borde,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            width: '50%',
          }}>
          <TouchableOpacity
            onPress={() => navigation.navigate('LoginScreen')}
            activeOpacity={0.7}
            style={[styles.btn, {backgroundColor: '#fff'}]}>
            <Text
              style={{
                fontSize: 18,
                marginLeft: 10,
                marginRight: 10,
                color: '#ff0000',
              }}>
              Abort
            </Text>
            <Icon name="exclamation-triangle" size={16} color="#ff0000" />
          </TouchableOpacity>
        </View>

        <View
          style={{
            width: 6,
            height: '110%',
            borderRightWidth: 1,
            borderColor: '#7f7f7f',

            marginBottom: -5,
          }}></View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            width: '50%',
          }}>
          <TouchableOpacity
            onPress={() => navigation.navigate('LoginScreen')}
            activeOpacity={0.7}
            style={[styles.btn, {backgroundColor: '#fff'}]}>
            <Text
              style={{
                fontSize: 18,
                marginLeft: 10,
                marginRight: 10,
                color: '#199333',
              }}>
              Manage
            </Text>
            <Icon name="cog" size={18} color="#199333" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  btn: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    width: 150,
    height: 38,
    borderRadius: 20,
    marginTop: 5,
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

export default IrrigationCard;
