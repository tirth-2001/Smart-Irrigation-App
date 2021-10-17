import React from 'react';
import {Text, View, StyleSheet, Image, Dimensions} from 'react-native';

const SwiperCard = ({imgURL}) => {
  return (
    // <View style={styles.card}>
    <Image source={imgURL} style={styles.img} />
    // </View>
  );
};
const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    elevation: 5,
    shadowOffset: {width: 2, height: 10},
    shadowColor: '#000',
    shadowOpacity: 0.77,
    shadowRadius: 12,
    width: Dimensions.get('window').width - 50,
    height: 100,
    margin: 10,
    borderRadius: 12,
    borderWidth: 10,
  },
  img: {
    width: 300,
    height: 200,
    marginHorizontal: 10,
    borderRadius: 12,
  },
});
export default SwiperCard;
