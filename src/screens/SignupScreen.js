import React from 'react'
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native'
import Header from '../components/Header'
import Pots from '../../assets/img/pots.png'
import styles from './common.styles'
import {Formik} from 'formik'
import {signupValidationSchema} from '../utils/validation'
import {useAuth} from '../context/authContext'
import {useAddDataFirebase} from '../hooks'

const SignupScreen = ({navigation}) => {
  const {signup, currentUser} = useAuth()
  const {newFarmer} = useAddDataFirebase()
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imgWrapper}>
        <Image source={Pots} style={styles.img} />
      </View>
      <ScrollView>
        <Header name="Sign up" navigation={navigation} />

        {/* Formik */}
        <Formik
          initialValues={{
            name: 'ABC',
            password: 'password',
            email: 'user1@gmail.com',
            city: 'city',
            phone: '12121212',
          }}
          validationSchema={signupValidationSchema}
          onSubmit={async values => {
            console.log(values)
            try {
              const response = await signup(values.email, values.password)
              const {uid} = response.user
              await newFarmer(values, uid)
              navigation.navigate('HomeFarmer')
            } catch (error) {
              console.log(error)
            }
          }}>
          {({handleChange, handleBlur, handleSubmit, values, errors}) => (
            <View style={styles.form}>
              <View>
                <Text style={styles.label}>Name</Text>
                <TextInput
                  style={styles.input}
                  keyboardType="default"
                  onChangeText={handleChange('name')}
                  onBlur={handleBlur('name')}
                  value={values.name}
                />
                {errors.name && (
                  <Text style={{color: 'red', fontSize: 12}}>
                    {errors.name}
                  </Text>
                )}
              </View>
              <View>
                <Text style={styles.label}>City</Text>
                <TextInput
                  style={styles.input}
                  keyboardType="default"
                  onChangeText={handleChange('city')}
                  onBlur={handleBlur('city')}
                  value={values.city}
                />
                {errors.city && (
                  <Text style={{color: 'red', fontSize: 12}}>
                    {errors.city}
                  </Text>
                )}
              </View>
              <View>
                <Text style={styles.label}>Phone Number</Text>
                <TextInput
                  style={styles.input}
                  keyboardType="phone-pad"
                  onChangeText={handleChange('phone')}
                  onBlur={handleBlur('phone')}
                  value={values.phone}
                />
                {errors.phone && (
                  <Text style={{color: 'red', fontSize: 12}}>
                    {errors.phone}
                  </Text>
                )}
              </View>
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
                  <Text style={{color: 'red', fontSize: 12}}>
                    {errors.email}
                  </Text>
                )}
              </View>

              <View>
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
              </View>
              <View style={styles.center}>
                <TouchableOpacity
                  style={styles.btn}
                  activeOpacity={0.7}
                  onPress={handleSubmit}>
                  <Text style={styles.btnText}>Sign Up</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        </Formik>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignupScreen
