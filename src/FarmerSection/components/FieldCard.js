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
import LinearGradient from 'react-native-linear-gradient';
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';

const FieldCard = ({fieldData, navigation}) => {
  const {name, area, crop, status, image} = fieldData || [];

  return (
    <LinearGradient
      start={{x: 0, y: 1}}
      end={{x: 1, y: 0}}
      colors={['#199333', '#1FAA59', '#38CC77']}
      style={{
        height: 160,
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
          justifyContent: 'space-around',
        }}>
        <View>
          <Image
            source={{uri: image}}
            style={{width: 120, height: 80, borderRadius: 25}}
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
                color: '#fff',
              }}>
              {name}
            </Text>
            <Text
              style={{
                fontSize: 15,
                marginTop: 8,
                width: Dimensions.get('window').width / 2 + 8,
                height: 28,
                textAlign: 'justify',
                color: '#fff',
                fontWeight: 'bold',
              }}>
              Crop Name : {crop}
            </Text>
            <Text
              style={{
                fontSize: 13,
                marginTop: 2,
                width: Dimensions.get('window').width / 2 + 8,
                height: 28,
                textAlign: 'justify',
                color: '#fff',
              }}>
              Field Area: {area}
            </Text>
          </View>
        </View>
        <View
          style={{
            height: 22,
            justifyContent: 'center',
            marginBottom: 3,
            marginRight: 10,
          }}>
          <Menu style={{height: 22}}>
            <MenuTrigger
              children={<Icon name="ellipsis-v" size={20} color="#fff" />}
            />
            <MenuOptions
              style={{
                borderRadius: 50,
                backgroundColor: '#fff',
              }}>
              <MenuOption onSelect={() => alert(`Save`)}>
                <Text
                  style={{
                    marginTop: 5,
                    fontSize: 16,
                    borderColor: '#e3e3e3',
                    borderBottomWidth: 1,
                    paddingLeft: 5,

                    paddingBottom: 15,
                  }}>
                  Update
                </Text>
              </MenuOption>
              <MenuOption onSelect={() => alert(`Delete`)}>
                <Text
                  style={{
                    color: 'red',
                    marginBottom: 10,
                    paddingTop: 5,
                    paddingLeft: 5,
                    fontSize: 16,
                  }}>
                  Delete
                </Text>
              </MenuOption>
            </MenuOptions>
          </Menu>
        </View>
      </View>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          marginTop: 7,
          justifyContent: 'flex-start',
          marginBottom: 2,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            width: '50%',
          }}>
          <TouchableOpacity
            onPress={() => navigation.navigate('SingleField')}
            activeOpacity={0.7}
            style={[styles.btn, {backgroundColor: '#fff'}]}>
            <Text
              style={{
                fontSize: 14,
                fontWeight: 'bold',
                marginLeft: 10,
                marginRight: 10,
                color: '#199333',
              }}>
              View Field
            </Text>
            <Icon name="arrow-right" size={20} color="#199333" />
          </TouchableOpacity>
        </View>
      </View>
    </LinearGradient>
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

export default FieldCard;
