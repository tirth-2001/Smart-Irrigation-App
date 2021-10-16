import React, {useRef, useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Easing,
  TouchableOpacity,
  Circle,
} from 'react-native';
import HeaderFarmer from '../components/HeaderFarmer';
import {AnimatedCircularProgress} from 'react-native-circular-progress';
import BottomNavbar from '../components/BottomNavbarFarmer';
import BottomNavbarFarmer from '../components/BottomNavbarFarmer';

const HomeFarmer = ({navigation}) => {
  const progress = useRef(null);
  useEffect(() => {
    progress.current.animate(100, 3000, Easing.quad);
  }, []);

  return (
    <View style={styles.container}>
      <HeaderFarmer />
      <Text>HomeFarmer</Text>
      <AnimatedCircularProgress
        ref={progress}
        size={120}
        width={25}
        fill={90}
        tintColor="#199333"
        backgroundColor="#e2e2e2"
      />

      {/* Bottom Navbar */}
      <BottomNavbarFarmer navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default HomeFarmer;
