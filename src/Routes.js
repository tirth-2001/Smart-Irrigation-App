import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// ALL SCREENS
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';

const Stack = createNativeStackNavigator();

function Routes() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{header: () => null}}>
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="SignupScreen" component={SignupScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

export default Routes;
