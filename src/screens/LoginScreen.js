import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Pots from '../../assets/img/pots.png';
import Header from '../components/Header';
import styles from './common.styles';

const LoginScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imgWrapper}>
        <Image source={Pots} style={styles.img} />
      </View>
      <Header name="Login" navigation={navigation} />

      <View style={styles.form}>
        <View>
          <Text style={styles.label}>Email</Text>
          <TextInput style={styles.input} keyboardType="email-address" />
        </View>

        <View style={{position: 'relative'}}>
          <Text style={styles.label}>Password</Text>
          <TextInput style={styles.input} secureTextEntry autoCorrect={false} />
          <TouchableOpacity
            style={{position: 'absolute', bottom: -12, right: 0}}>
            <Text>Forgot Password?</Text>
          </TouchableOpacity>
        </View>

        <View style={[styles.center, {marginTop: 30}]}>
          <TouchableOpacity style={styles.btn} activeOpacity={0.7}>
            <Text style={styles.btnText}>Login</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{marginTop: 10}}
            onPress={() => navigation.navigate('SignupScreen')}>
            <Text style={{fontSize: 15, textDecorationLine: 'underline'}}>
              SignUp Here
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
