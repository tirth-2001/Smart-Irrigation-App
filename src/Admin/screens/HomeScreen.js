import React from 'react';
import {View, Text, StyleSheet, Image, SafeAreaView} from 'react-native';
import Card from '../components/Card';

import User from '../../../assets/img/user.png';
import Farmer from '../../../assets/img/Farmer1.png';
import Water from '../../../assets/img/water.png';
import BottomNavbar from '../components/BottomNavbar';

const HomeScreen = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flexDirection: 'row', marginTop: 15}}>
        <View style={{marginLeft: 20}}>
          <Image
            source={User}
            style={{
              width: 40,
              height: 40,
            }}
          />
        </View>
        <View style={{marginLeft: 15, justifyContent: 'center'}}>
          <Text style={{fontSize: 22, fontWeight: '700'}}>Welcome Admin</Text>
        </View>
      </View>

      <View style={{alignItems: 'center', marginTop: 20}}>
        <Card
          title="22+ Farmer Registered"
          action="See All"
          img={Farmer}
          height={155}
          width={80}
          top={-60}
          mb={40}
        />
        <Card
          title="80 Gallon Water used"
          action="See Irrigation Schedule"
          img={Water}
          height={75}
          width={75}
          top={-25}
          mt={0}
        />
      </View>
      <BottomNavbar navigation={navigation} />
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
