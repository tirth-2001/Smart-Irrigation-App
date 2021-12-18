import React, {useRef, useEffect, useState} from 'react'
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
  FlatList,
} from 'react-native'
import HeaderFarmer from '../components/HeaderFarmer'
import {AnimatedCircularProgress} from 'react-native-circular-progress'
import BottomNavbarFarmer from '../components/BottomNavbarFarmer'
import {
  Chart,
  VerticalAxis,
  HorizontalAxis,
  Line,
  Area,
} from 'react-native-responsive-linechart'

import SwiperCard from '../components/SwiperCard'

// Image Slides
import Slide1 from '../../../assets/img/slide1.jpg'
import Slide2 from '../../../assets/img/slide2.jpg'
import Slide3 from '../../../assets/img/slide3.jpg'
import tailwind from 'tailwind-rn'

const HomeFarmer = ({navigation}) => {
  const progress = useRef(null)
  useEffect(() => {
    progress.current.animate(100, 3000, Easing.quad)
  }, [])

  const crashTest = () => {
    console.log('Crash Test')
    throw new Error('Crash Test')
  }

  return (
    <SafeAreaView style={styles.container}>
      <HeaderFarmer />

      <View style={{height: 250}}>
        <FlatList
          style={tailwind('mt-8 mx-2 flex flex-1')}
          data={[Slide1, Slide2, Slide3]}
          ItemSeparatorComponent={() => <View style={tailwind('mx-2')} />}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={true}
          renderItem={({item}) => <SwiperCard imgURL={item} />}
        />
      </View>

      <TouchableOpacity
        style={tailwind('mt-8 mx-2 p-2 bg-red-500')}
        onPress={() => crashTest()}>
        <Text style={tailwind('text-white text-center text-xl')}>
          Crash Test
        </Text>
      </TouchableOpacity>

      <AnimatedCircularProgress
        ref={progress}
        size={120}
        width={25}
        fill={0}
        tintColor="#199333"
        backgroundColor="#e2e2e2"
      />

      <Chart
        style={{height: 200, width: 400}}
        padding={{left: 40, bottom: 20, right: 20, top: 20}}
        xDomain={{min: -2, max: 10}}
        yDomain={{min: 0, max: 20}}>
        <VerticalAxis
          tickCount={10}
          theme={{labels: {formatter: v => v.toFixed(2)}}}
        />
        <HorizontalAxis />
        <Area
          theme={{
            gradient: {
              from: {color: '#1abc9c', opacity: 0.4},
              to: {color: '#1abc9c', opacity: 0.4},
            },
          }}
          smoothing="cubic-spline"
          data={[
            {x: -2, y: 15},
            {x: -1, y: 10},
            {x: 0, y: 12},
            {x: 5, y: 8},
            {x: 6, y: 12},
            {x: 9, y: 13.5},
            {x: 10, y: 15},
          ]}
        />
        <Area
          theme={{
            gradient: {
              from: {color: '#f39c12', opacity: 0.4},
              to: {color: '#f39c12', opacity: 0.4},
            },
          }}
          smoothing="cubic-spline"
          data={[
            {x: -2, y: 0},
            {x: -1, y: 2},
            {x: 0, y: 7},
            {x: 2, y: 5},
            {x: 3, y: 12},
            {x: 7, y: 16},
            {x: 9, y: 17},
            {x: 10, y: 12},
          ]}
        />
      </Chart>

      {/* Bottom Navbar */}
      <BottomNavbarFarmer navigation={navigation} />
    </SafeAreaView>
  )
}

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
})

export default HomeFarmer
