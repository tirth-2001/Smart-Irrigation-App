import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import Header from '../components/Header';
import Pots from '../../assets/img/pots.png';
import styles from './common.styles';

const SignupScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imgWrapper}>
        <Image source={Pots} style={styles.img} />
      </View>
      <ScrollView>
        <Header name="Sign up" navigation={navigation} />

        <View style={styles.form}>
          <View>
            <Text style={styles.label}>Name</Text>
            <TextInput style={styles.input} keyboardType="default" />
          </View>
          <View>
            <Text style={styles.label}>City</Text>
            <TextInput style={styles.input} keyboardType="default" />
          </View>
          <View>
            <Text style={styles.label}>Phone Number</Text>
            <TextInput style={styles.input} keyboardType="phone-pad" />
          </View>
          <View>
            <Text style={styles.label}>Email</Text>
            <TextInput style={styles.input} keyboardType="email-address" />
          </View>

          <View>
            <Text style={styles.label}>Password</Text>
            <TextInput
              style={styles.input}
              secureTextEntry
              autoCorrect={false}
            />
          </View>
          <View style={styles.center}>
            <TouchableOpacity style={styles.btn} activeOpacity={0.7}>
              <Text style={styles.btnText}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignupScreen;
