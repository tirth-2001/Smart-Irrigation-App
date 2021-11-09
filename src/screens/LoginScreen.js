import React, {useState} from 'react'
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native'
import Pots from '../../assets/img/pots.png'
import Header from '../components/Header'
import {useAuth} from '../context/authContext'
import styles from './common.styles'
import {Formik} from 'formik'
import {loginValidationSchema} from '../utils/validation'

const LoginScreen = ({navigation}) => {
  const {login} = useAuth()

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imgWrapper}>
        <Image source={Pots} style={styles.img} />
      </View>
      <Header name="Login" navigation={navigation} />
      <Formik
        initialValues={{email: 'admin1@gmail.com', password: 'admin123'}}
        validationSchema={loginValidationSchema}
        onSubmit={async values => {
          console.log(values)
          try {
            await login(values.email, values.password)
            navigation.navigate('AdminHomeScreen')
          } catch (error) {
            console.log(error)
          }
        }}>
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          isValid,
        }) => (
          <View style={styles.form}>
            <View>
              <Text style={styles.label}>Email</Text>
              <TextInput
                style={styles.input}
                keyboardType="email-address"
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
              />
              {errors.email && (
                <Text style={{color: 'red', fontSize: 12}}>{errors.email}</Text>
              )}
            </View>
            <View style={{position: 'relative'}}>
              <Text style={styles.label}>Password</Text>
              <TextInput
                style={styles.input}
                secureTextEntry
                autoCorrect={false}
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
              />
              {errors.password && (
                <Text style={{color: 'red', fontSize: 12}}>
                  {errors.password}
                </Text>
              )}
              <TouchableOpacity
                style={{position: 'absolute', bottom: -12, right: 0}}>
                <Text>Forgot Password?</Text>
              </TouchableOpacity>
            </View>

            <View style={[styles.center, {marginTop: 30}]}>
              <TouchableOpacity
                style={styles.btn}
                activeOpacity={0.7}
                onPress={handleSubmit}>
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
        )}
      </Formik>
    </SafeAreaView>
  )
}

export default LoginScreen
