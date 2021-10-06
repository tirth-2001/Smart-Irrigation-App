import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

const Card = ({title, action, img, mb = 20, mt = 20, height, width, top}) => {
  return (
    <View style={[styles.card, {marginBottom: mb, marginTop: mt}]}>
      <View style={[styles.imgWrapper, {top}]}>
        <Image source={img} style={[{height, width}]} />
      </View>
      <View style={styles.title}>
        <Text style={styles.titleText}>{title}</Text>
      </View>
      <TouchableOpacity>
        <Text style={styles.actionText}>{action}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  card: {
    width: '90%',
    height: 90,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#cccccc',
    elevation: 10,
    backgroundColor: '#fff',
    shadowOffset: {width: 20, height: 20},
    shadowColor: '#000',
    shadowOpacity: 1.0,
    shadowRadius: 22,
  },
  imgWrapper: {
    position: 'absolute',
    right: 0,
  },
  title: {
    width: '80%',
    height: 48,
  },
  titleText: {
    fontSize: 19,
    color: '#101010',
    fontWeight: '500',
    marginTop: 5,
  },
  actionText: {
    fontSize: 15,
    textDecorationLine: 'underline',
    color: '#383838',
  },
});
