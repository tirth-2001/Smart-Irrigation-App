import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const SingleFieldCard = ({
  title,
  action,
  img,
  mb = 20,
  mt = 70,
  height,
  width,
  top,
  elevation = 0,
  cardHeight,
  ml = -20,
  gradientArray = ['#199333', '#1FAA59', '#38CC77'],

  name,
  navigation,
}) => {
  return (
    // <View>
    <LinearGradient
      style={[
        styles.card,
        {
          marginBottom: mb,
          marginTop: mt,
          elevation: elevation,
          height: cardHeight,
          marginLeft: ml,
        },
      ]}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 1}}
      colors={gradientArray}>
      <View style={[styles.imgWrapper, {marginTop: top}]}>
        <Image source={img} style={[{height, width, borderWidth: 1}]} />
      </View>
      <View style={styles.title}>
        <Text style={styles.titleText}>{title}</Text>
      </View>
      <TouchableOpacity
        activeOpacity={0.7}
        // onPress={() => {
        //   navigation.navigate(name);
        // }}
        style={[styles.ctaBtn]}>
        <Text style={styles.actionText}>{action}</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

export default SingleFieldCard;

const styles = StyleSheet.create({
  card: {
    width: Dimensions.get('window').width * 0.75,
    height: Dimensions.get('window').height * 0.8,
    paddingVertical: 25,
    paddingHorizontal: 10,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#cccccc',
    backgroundColor: '#fff',
    shadowOffset: {width: 20, height: 20},
    shadowColor: '#000',
    shadowOpacity: 1.0,
    shadowRadius: 22,
    minHeight: 150,
    marginLeft: -20,
    paddingLeft: 30,
  },
  imgWrapper: {
    position: 'absolute',
    right: 10,
    top: 57,
    marginBottom: -10,
  },
  title: {
    width: '60%',
    height: 150,
    paddingTop: 40,
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
