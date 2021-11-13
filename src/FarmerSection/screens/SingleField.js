import React, {useRef, useState, useEffect, useCallback} from 'react'
import {
  View,
  StyleSheet,
  ScrollView,
  Dimensions,
  FlatList,
  Animated,
  SafeAreaView,
} from 'react-native'
import SingleFieldCard from '../components/SingleFieldCard'
import LinearGradient from 'react-native-linear-gradient'
const {width} = Dimensions.get('screen')
import {
  FlingGestureHandler,
  Directions,
  State,
} from 'react-native-gesture-handler'
// Import Assets
import Sun from '../../../assets/img/sun.png'
import Crop from '../../../assets/img/plant.png'
import Water from '../../../assets/img/water1.png'
import Irrigation from '../../../assets/img/sprinkler.png'
import Farmer from '../../../assets/img/farmer.png'
import tw from 'tailwind-react-native-classnames'

import Header from '../../components/Header'

const data2 = [
  {
    title: 'Humidity & Temperature Data',
    action: 'View More',
    img: Sun,
    height: 165,
    width: 165,
    top: -130,
    ml: 10,
    elevation: 0,
    cardData: [
      {
        title: 'Humidity',
        value: '50',
        unit: '%',
        icon: 'wind',
      },
      {
        title: 'Temperature',
        value: '25',
        unit: '°C',
        icon: 'temperature-high',
      },
    ],
    gradientArray: ['red', 'orange'],
  },
  {
    title: 'Moisture Content in Soil',
    action: 'View More',
    img: Water,
    height: 155,
    width: 155,
    top: -125,
    ml: 0,
    elevation: 15,
    cardData: [
      {
        title: 'Moisture',
        value: '70',
        unit: '%',
        icon: 'tint',
      },
    ],
    gradientArray: ['#2827CC', '#12B0E8'],
  },
  {
    title: 'Crop Sown in Field',
    action: 'View More',
    img: Crop,
    height: 135,
    width: 155,
    top: -155,
    ml: 0,
    elevation: 10,
    cardData: [
      {
        title: 'Crop',
        value: 'Tomato',
        unit: '',
        icon: 'seedling',
      },
    ],
    gradientArray: ['#147a20', '#36f720'],
  },
  {
    title: 'Water Irrigation',
    action: 'View More',
    img: Irrigation,
    height: 145,
    width: 145,
    top: -135,
    ml: 0,
    elevation: 5,
    cardData: [
      {
        title: 'Water Requirement',
        value: '100',
        unit: 'gallons',
        icon: 'hand-holding-water',
      },
      {
        title: 'Total Water Irrigated',
        value: '80',
        unit: 'gallons',
        icon: 'shower',
      },
    ],
    gradientArray: ['#470175', '#c369ff'],
  },
]

const OVERFLOW_HEIGHT = 70
const SPACING = 10
const ITEM_WIDTH = width * 0.76
const ITEM_HEIGHT = ITEM_WIDTH * 1.7
const VISIBLE_ITEMS = 3

const SingleField = ({navigation, route}) => {
  const fieldData = route.params.fieldData
  const [data, setData] = useState(data2)
  const scrollXIndex = useRef(new Animated.Value(0)).current
  const scrollXAnimated = useRef(new Animated.Value(0)).current
  const [index, setIndex] = useState(0)
  const setActiveIndex = useCallback(activeIndex => {
    scrollXIndex.setValue(activeIndex)
    setIndex(activeIndex)
  })

  useEffect(() => {
    if (index === data.length - VISIBLE_ITEMS - 1) {
      // get new data
      const newData = [...data]
      setData(newData)
    }
  }, [])

  useEffect(() => {
    Animated.spring(scrollXAnimated, {
      toValue: scrollXIndex,
      useNativeDriver: true,
    }).start()
  }, [])

  return (
    <View style={styles.container}>
      <Header name={fieldData?.fieldName} navigation={navigation} />

      <FlingGestureHandler
        key="left"
        direction={Directions.LEFT}
        onHandlerStateChange={ev => {
          if (ev.nativeEvent.state === State.END) {
            if (index === data.length - 1) {
              return
            }
            setActiveIndex(index + 1)
          }
        }}>
        <FlingGestureHandler
          key="right"
          direction={Directions.RIGHT}
          onHandlerStateChange={ev => {
            if (ev.nativeEvent.state === State.END) {
              if (index === 0) {
                return
              }
              setActiveIndex(index - 1)
            }
          }}>
          <SafeAreaView style={styles.cardContainer}>
            <FlatList
              data={data}
              keyExtractor={(_, index) => String(index)}
              horizontal
              inverted
              contentContainerStyle={{
                flex: 1,
                justifyContent: 'center',
              }}
              scrollEnabled={false}
              removeClippedSubviews={false}
              CellRendererComponent={({
                item,
                index,
                children,
                style,
                ...props
              }) => {
                const newStyle = [style, {zIndex: data.length - index}]
                return (
                  <View style={newStyle} index={index} {...props}>
                    {children}
                  </View>
                )
              }}
              renderItem={({item, index}) => {
                const inputRange = [index - 1, index, index + 1]
                const translateX = scrollXAnimated.interpolate({
                  inputRange,
                  outputRange: [50, 0, -100],
                })
                const scale = scrollXAnimated.interpolate({
                  inputRange,
                  outputRange: [0.8, 1, 1.3],
                })
                const opacity = scrollXAnimated.interpolate({
                  inputRange,
                  outputRange: [1 - 1 / VISIBLE_ITEMS, 1, 0],
                })

                return (
                  <Animated.View
                    style={{
                      position: 'absolute',
                      left: -ITEM_WIDTH / 2,
                      opacity,
                      transform: [
                        {
                          translateX,
                        },
                        {scale},
                      ],
                    }}>
                    <SingleFieldCard
                      title={item.title}
                      action={item.action}
                      img={item.img}
                      height={item.height}
                      width={item.width}
                      top={item.top}
                      ml={item.ml}
                      elevation={item.elevation}
                      gradientArray={item.gradientArray}
                      cardData={item.cardData}
                    />
                  </Animated.View>
                )
              }}
            />
          </SafeAreaView>
        </FlingGestureHandler>
      </FlingGestureHandler>

      {/* OLD CARD CAROUSAL */}
      {/* <ScrollView
        horizontal={true}
        style={styles.content}
        pagingEnabled={true}
        contentContainerStyle={styles.contentContainer}
        showsHorizontalScrollIndicator={true}>
        <SingleFieldCard
          title="Humidity & Temperature Data"
          action="View More"
          img={Sun}
          height={165}
          width={165}
          top={-130}
          mt={70}
          ml={10}
          elevation={20}
          cardHeight={Dimensions.get('window').height * 0.8}
          gradientArray={['red', 'orange']}
        />
        <SingleFieldCard
          title="Moisture Content in Soil"
          action="View More"
          img={Water}
          height={155}
          width={155}
          top={-125}
          mt={70}
          elevation={15}
          cardHeight={Dimensions.get('window').height * 0.75}
          gradientArray={['#2827CC', '#12B0E8']}
        />
        <SingleFieldCard
          title="Crop Sown in Field"
          action="View More"
          img={Crop}
          height={155}
          width={155}
          top={-145}
          mt={70}
          elevation={10}
          cardHeight={Dimensions.get('window').height * 0.7}
          gradientArray={['#147a20', '#36f720']}
        />
        <SingleFieldCard
          title="Water Irrigation"
          action="View More"
          img={Irrigation}
          height={145}
          width={145}
          top={-135}
          mt={70}
          elevation={5}
          cardHeight={Dimensions.get('window').height * 0.65}
          gradientArray={['#470175', '#c369ff']}
        />
      </ScrollView> */}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    marginTop: 10,
    marginHorizontal: 10,
  },
  contentContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: '#777',
  },
  cardContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 28,
    fontWeight: '900',
    textTransform: 'uppercase',
    letterSpacing: -1,
  },
  location: {
    fontSize: 16,
  },
  date: {
    fontSize: 12,
  },
  itemContainer: {
    height: OVERFLOW_HEIGHT,
    padding: SPACING * 2,
  },
  itemContainerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  overflowContainer: {
    height: OVERFLOW_HEIGHT,
    overflow: 'hidden',
  },
})

export default SingleField
