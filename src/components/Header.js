import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Header = ({name, navigation}) => {
  const goBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      {navigation.canGoBack() && (
        <TouchableOpacity onPress={() => goBack()}>
          <Icon name="arrow-back" size={35} />
        </TouchableOpacity>
      )}
      <View style={styles.textWrapper}>
        <Text style={styles.text}>{name}</Text>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    margin: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textWrapper: {
    width: '88%',
  },
  text: {
    textAlign: 'center',
    fontSize: 25,
    fontWeight: '700',
  },
});
