import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import Header from '../../components/Header';
import Farm from '../../../assets/img/farm1.png';
import Icon from 'react-native-vector-icons/Ionicons';

import styles from '../../screens/common.styles';

const NewField = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Header name="Add New Field" navigation={navigation} />
      <ScrollView style={styles.form}>
        <View>
          {/* <Text style={styles.label}>Field Name</Text> */}
          <TextInput
            style={styles.input}
            keyboardType="default"
            placeholder="Field Name"
          />
        </View>
        <View>
          {/* <Text style={styles.label}>Field Crop</Text> */}
          <TextInput
            style={styles.input}
            keyboardType="default"
            placeholder="Crop"
          />
        </View>

        <View>
          {/* <Text style={styles.label}>Area</Text> */}
          <TextInput
            style={styles.input}
            keyboardType="phone-pad"
            placeholder="Area"
          />
        </View>
        <View>
          {/* <Text style={styles.label}>Water Requirement (in gallons)</Text> */}
          <TextInput
            style={styles.input}
            keyboardType="default"
            placeholder="Water Requirement"
          />
        </View>
        <View>
          <TouchableOpacity
            activeOpacity={0.5}
            style={[styles1.imageUploadBox, {borderStyle: 'dashed'}]}>
            <Icon name={'cloud-upload-outline'} color="#7f7f7f" size={39} />
            <Text style={styles1.imageUploadText}> Click to Upload </Text>
          </TouchableOpacity>

          <Text style={styles.label}>Upload Image (if any)</Text>
        </View>

        <View style={styles.center}>
          <TouchableOpacity
            style={styles.btn}
            activeOpacity={0.7}
            onPress={() => navigation.navigate('AdminHomeScreen')}>
            <Text style={styles.btnText}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      {/* <View style={styles.imgWrapper}>
        <Image source={Farm} style={styles.img} />
      </View> */}
    </View>
  );
};

const styles1 = StyleSheet.create({
  imageUploadText: {
    color: '#7f7f7f',
    fontSize: 15,
    marginTop: 5,
  },
  imageBox: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default NewField;
