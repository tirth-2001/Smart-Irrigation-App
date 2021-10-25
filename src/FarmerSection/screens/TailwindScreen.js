import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import tailwind from 'tailwind-rn';
import Icon from 'react-native-vector-icons/FontAwesome5';

const TailwindSCreen = () => {
  return (
    <View style={styles.container}>
      <View style={tailwind('h-full items-center bg-blue-700 p-12 pt-40')}>
        <View
          style={[
            tailwind('bg-white w-full h-80 p-6 rounded-lg items-center'),
            {backgroundColor: '#eee'},
          ]}>
          <Icon name="check" size={30} color="#00C853" />
          <Text style={tailwind('font-bold pt-4')}>
            Payment successful Lorem ipsum dolor sit amet, consectetur
            adipiscing elit.
          </Text>
          <Text style={tailwind('text-gray-800 text-xl font-medium mt-4')}>
            Payment successful
          </Text>
          <Text style={tailwind('text-gray-600 text-center mt-2 w-56')}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Text>
          <View
            style={tailwind(
              'bg-indigo-600 w-full py-2 items-center rounded-md mt-6',
            )}>
            <Text style={tailwind('text-white font-medium')}>
              Go back to dashboard
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default TailwindSCreen;
