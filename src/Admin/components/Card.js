import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const Card = ({
  title,
  action,
  img,
  mb = 20,
  mt = 20,
  height,
  width,
  top,
  btnWidth,
  name,
  navigation,
}) => {
  var btnWidthPercent = btnWidth + '%';
  console.log('Nav Name', name);
  return (
    // <View>
    <LinearGradient
      style={[styles.card, {marginBottom: mb, marginTop: mt}]}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}
      colors={['#199333', '#1FAA59', '#38CC77']}>
      <View style={[styles.imgWrapper, {marginTop: top}]}>
        <Image source={img} style={[{height, width, borderWidth: 1}]} />
      </View>
      <View style={styles.title}>
        <Text style={styles.titleText}>{title}</Text>
      </View>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => {
          navigation.navigate(name);
        }}
        style={[styles.ctaBtn, {width: btnWidthPercent}]}>
        <Text style={styles.actionText}>{action}</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

export default Card;

const styles = StyleSheet.create({
  card: {
    width: '90%',
    height: 130,
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
    minHeight: 150,
  },
  imgWrapper: {
    position: 'absolute',
    right: 10,
    top: -7,
    marginBottom: -10,
  },
  title: {
    width: '70%',
    height: 78,
  },
  titleText: {
    fontSize: 19,
    color: '#fff',
    fontWeight: '700',
    lineHeight: 28,
    marginTop: 5,
  },
  actionText: {
    fontSize: 16,
    color: '#383838',
    fontWeight: '600',
  },
  ctaBtn: {
    marginTop: 10,
    width: '60%',
    height: 40,
    borderRadius: 80,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',

    shadowOffset: {width: 20, height: 20},
    shadowColor: '#000',
    shadowOpacity: 1.0,
    shadowRadius: 22,
  },
});
