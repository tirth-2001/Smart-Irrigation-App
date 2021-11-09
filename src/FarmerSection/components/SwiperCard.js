import React from 'react'
import {Text, View, StyleSheet, Image, Dimensions} from 'react-native'

const SwiperCard = ({imgURL}) => {
  return <Image source={imgURL} style={styles.img} />
}
const styles = StyleSheet.create({
  img: {
    width: Dimensions.get('window').width * 0.85,
    height: 200,
    // marginHorizontal: 10,
    borderRadius: 12,
  },
})
export default SwiperCard
