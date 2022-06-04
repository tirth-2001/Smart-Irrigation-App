import React, {useMemo} from 'react'
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ScrollView,
  SafeAreaView,
  ActivityIndicator,
} from 'react-native'
import FarmerCard from '../components/FarmerCard'
import LinearGradient from 'react-native-linear-gradient'
import Header from '../../components/Header'
import {useFirebase} from '../../hooks'

const AllFarmerScreen = ({navigation}) => {
  const {farmers: allFarmers} = useFirebase()

  const fallbackImage =
    'https://firebasestorage.googleapis.com/v0/b/ssip-final.appspot.com/o/IrrigationApp%2Fuser1.png?alt=media&token=1b78d275-5f73-40d0-9653-f4b88632d51a'

  const farmers = useMemo(() => {
    return allFarmers.map(a => ({...a, profileImage: fallbackImage}))
  }, [allFarmers])

  return (
    <SafeAreaView>
      <ScrollView>
        <LinearGradient
          start={{x: 0, y: 1}}
          end={{x: 1, y: 1}}
          colors={['#199333', '#1FAA59', '#38CC77']}
          style={[styles.container]}>
          <Header name="All Farmers" navigation={navigation} />

          {!farmers.length ? (
            <View style={styles.activityIndicator}>
              <ActivityIndicator color="#fff" size={40} />
            </View>
          ) : (
            <View style={styles.allFarmers}>
              {farmers.map(farmer => {
                console.log(farmer)
                return (
                  <FarmerCard
                    id={farmer.id}
                    farmerData={farmer}
                    key={farmer.id}
                  />
                )
              })}
            </View>
          )}
        </LinearGradient>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    height: Dimensions.get('window').height + 30,
  },
  activityIndicator: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '95%',
    borderWidth: 2,
  },
  allFarmers: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingLeft: 15,
    paddingTop: 10,
  },
})

export default AllFarmerScreen
