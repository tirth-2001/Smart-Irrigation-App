import React, {useState, useEffect} from 'react'
import {View, Text, StyleSheet, Image, SafeAreaView} from 'react-native'
import Card from '../components/Card'

import User from '../../../assets/img/user.png'
import Farmer from '../../../assets/img/Farmer1.png'
import Water from '../../../assets/img/water.png'
import BottomNavbar from '../components/BottomNavbar'
import {useFirebase} from '../../hooks'

const HomeScreen = ({navigation}) => {
  const {totalWater, farmers: allFarmers} = useFirebase()
  // const [allFarmers, setAllFarmers] = useState([])
  // const [totalWater, setTotalWater] = useState(0)

  // const preloadStatistic = async () => {
  //   setTotalWater(await getTotalWaterIrrigation())
  // }

  // useEffect(() => {
  //   preloadStatistic()
  // }, [])

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <View style={{flexDirection: 'row', marginTop: 15}}>
        <View style={{marginLeft: 20}}>
          <Image
            source={User}
            style={{
              width: 30,
              height: 30,
            }}
          />
        </View>
        <View style={{marginLeft: 15, justifyContent: 'center'}}>
          <Text style={{fontSize: 22, fontWeight: '700'}}>Welcome Admin</Text>
        </View>
      </View>

      <View
        style={{
          alignItems: 'center',
          marginTop: 60,
        }}>
        <Card
          title={`${allFarmers?.length}+ Farmer Registered for SIS`}
          action="View All ➔"
          img={Farmer}
          height={245}
          width={110}
          top={-64}
          mb={80}
          btnWidth={35}
          name="AllFarmerScreen"
          navigation={navigation}
        />
        <Card
          title={`${totalWater} Gallon Water Irrigated`}
          action="Irrigation Schedule ➔"
          img={Water}
          height={135}
          width={135}
          top={-35}
          mt={0}
          btnWidth={60}
          name="IrrigationSchedule"
          navigation={navigation}
        />
      </View>
      <BottomNavbar navigation={navigation} />
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})
