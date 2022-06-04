import React, {useRef, useEffect, useState} from 'react'
import {
  View,
  Text,
  StyleSheet,
  Easing,
  TouchableOpacity,
  Dimensions,
  SafeAreaView,
  FlatList,
} from 'react-native'
import HeaderFarmer from '../components/HeaderFarmer'
import BottomNavbarFarmer from '../components/BottomNavbarFarmer'
import {
  Chart,
  VerticalAxis,
  HorizontalAxis,
  Area,
} from 'react-native-responsive-linechart'

import SwiperCard from '../components/SwiperCard'

// Image Slides
import Slide1 from '../../../assets/img/slide1.jpg'
import Slide2 from '../../../assets/img/slide2.jpg'
import Slide3 from '../../../assets/img/slide3.jpg'
import tailwind from 'tailwind-rn'

const HomeFarmer = ({navigation}) => {
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

      <View style={styles.chartWrapper}>
        <Text style={styles.chartTitle}>Irrigation Analytics</Text>
        <Chart
          style={{height: 250, width: 400}}
          padding={{left: 30, bottom: 20, right: 30, top: 20}}
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
      </View>

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
  chartWrapper: {
    marginTop: 60,
    marginHorizontal: 30,
    width: Dimensions.get('window').width - 20,
    height: 200,
    justifyContent: 'center',
  },
  chartTitle: {
    paddingBottom: 5,
    fontSize: 22,
    fontWeight: 'bold',
  },
})

export default HomeFarmer
