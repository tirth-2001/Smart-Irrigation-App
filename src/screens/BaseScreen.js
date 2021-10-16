import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Animated} from 'react-native';
import LottieView from 'lottie-react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import LoadingJson from '../../assets/lottie/loading.json';

const BaseScreen = ({navigation}) => {
  const opacity = React.useState(new Animated.Value(0))[0];

  const fadeIn = () => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    }).start();
  };

  // function to fade in the view after delay of 3 seconds
  React.useEffect(() => {
    setTimeout(() => {
      fadeIn();
    }, 1500);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.animationWrapper}>
        <LottieView source={LoadingJson} autoPlay loop speed={2} />
      </View>
      {/* <Text>BaseScreen</Text> */}
      <Animated.View style={[styles.animatedView, {opacity}]}>
        <TouchableOpacity
          onPress={() => navigation.navigate('HomeFarmer')}
          activeOpacity={0.7}
          style={[styles.btn, {backgroundColor: '#199333'}]}>
          <Icon name="leaf" size={20} color="#fff" />

          <Text
            style={{
              fontSize: 20,
              fontWeight: 'bold',
              marginLeft: 10,
              color: '#fff',
            }}>
            Farmer Login
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('LoginScreen')}
          activeOpacity={0.7}
          style={[
            styles.btn,
            {backgroundColor: '#fff', borderColor: '#199333', borderWidth: 1},
          ]}>
          <Icon name="home" size={20} color="#199333" />

          <Text
            style={{
              fontSize: 20,
              fontWeight: 'bold',
              marginLeft: 10,
              color: '#199333',
            }}>
            Admin Login
          </Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
  },
  animationWrapper: {
    // flex: 1,
    width: '100%',
    height: '60%',
    marginTop: 20,
  },
  animatedView: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  btn: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 20,
    marginBottom: 30,
    width: '60%',
    height: 40,
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

export default BaseScreen;
