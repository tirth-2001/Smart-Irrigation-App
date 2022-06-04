import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'

// ALL SCREENS
import LoginScreen from './screens/LoginScreen'
import SignupScreen from './screens/SignupScreen'
import HomeScreen from './Admin/screens/HomeScreen'
import ProfileScreen from './Admin/screens/ProfileScreen'
import AllFarmerScreen from './Admin/screens/AllFarmersScreen'
import IrrigationSchedule from './Admin/screens/IrrigtionSchedule'
import BaseScreen from './screens/BaseScreen'
import HomeFarmer from './FarmerSection/screens/HomeFarmer'
import MyFields from './FarmerSection/screens/MyFields'
import NewField from './FarmerSection/screens/NewField'
import SingleField from './FarmerSection/screens/SingleField'
import FarmerProfile from './FarmerSection/screens/FarmerProfile'
import AdminProfile from './Admin/screens/ProfileScreen'

const Stack = createNativeStackNavigator()

import {useAuth} from './context/authContext'
import NewIrrigation from './Admin/screens/NewIrrigation'

function Routes() {
  const {currentUser} = useAuth()

  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{header: () => null}}
          initialRouteName={'BaseScreen'}>
          {/* Common Screens */}
          {currentUser == null || currentUser.uid == null ? (
            <>
              <Stack.Screen name="BaseScreen" component={BaseScreen} />
              <Stack.Screen name="LoginScreen" component={LoginScreen} />
              <Stack.Screen name="SignupScreen" component={SignupScreen} />
            </>
          ) : currentUser.uid == 'moao40zx3HOIENLz4bGZZ74EjKY2' ? (
            <>
              {/* ADMIN SCREENS */}
              <Stack.Screen name="AdminHomeScreen" component={HomeScreen} />
              <Stack.Screen
                name="AdminProfileScreen"
                component={ProfileScreen}
              />
              <Stack.Screen
                name="AllFarmerScreen"
                component={AllFarmerScreen}
              />
              <Stack.Screen name="AdminProfile" component={AdminProfile} />
              <Stack.Screen
                name="IrrigationSchedule"
                component={IrrigationSchedule}
              />
              <Stack.Screen name="NewIrrigation" component={NewIrrigation} />
            </>
          ) : (
            <>
              {/* Farmer Screens */}
              <Stack.Screen name="HomeFarmer" component={HomeFarmer} />
              <Stack.Screen name="MyFields" component={MyFields} />
              <Stack.Screen name="NewField" component={NewField} />
              <Stack.Screen name="SingleField" component={SingleField} />
              <Stack.Screen name="FarmerProfile" component={FarmerProfile} />
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </>
  )
}

export default Routes
