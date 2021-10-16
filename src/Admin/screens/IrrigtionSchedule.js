import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const IrrigationSchedule = () => {
  return (
    <View style={styles.container}>
      <Text>Irrigation Schedule</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default IrrigationSchedule;
