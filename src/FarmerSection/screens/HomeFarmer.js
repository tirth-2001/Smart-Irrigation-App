import React, {useRef, useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Easing,
  TouchableOpacity,
  Image,
  Dimensions,
  ScrollView,
  StatusBar,
  SafeAreaView,
} from 'react-native';
import HeaderFarmer from '../components/HeaderFarmer';
import {AnimatedCircularProgress} from 'react-native-circular-progress';
import BottomNavbarFarmer from '../components/BottomNavbarFarmer';
import Swiper from 'react-native-swiper';

import SwiperCard from '../components/SwiperCard';

// Image Slides
import Slide1 from '../../../assets/img/slide1.jpg';
import Slide2 from '../../../assets/img/slide2.jpg';
import Slide3 from '../../../assets/img/slide3.jpg';

const HomeFarmer = ({navigation}) => {
  const progress = useRef(null);
  useEffect(() => {
    progress.current.animate(100, 3000, Easing.quad);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <HeaderFarmer />

      <View style={{height: 250}}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={[styles.scrollContainer]}>
          <SwiperCard imgURL={Slide1} />
          <SwiperCard imgURL={Slide2} />
          <SwiperCard imgURL={Slide3} />
        </ScrollView>
      </View>

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
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // height: Dimensions.get('window').height + StatusBar.currentHeight,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  scrollContainer: {
    marginTop: 20,
    marginHorizontal: 30,
    width: Dimensions.get('window').width - 20,
  },
});

export default HomeFarmer;
