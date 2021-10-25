import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import FarmerCard from '../components/FarmerCard';
import LinearGradient from 'react-native-linear-gradient';
import Header from '../../components/Header';

const AllFarmerScreen = ({navigation}) => {
  const allFarmers = [
    {
      id: 1,
      name: 'Farmer 1',
      profileImage: 'https://picsum.photos/200/200',
    },
    {
      id: 2,
      name: 'Farmer 2',
      profileImage: 'https://picsum.photos/208/208',
    },
    {
      id: 3,
      name: 'Farmer 3',
      profileImage: 'https://picsum.photos/207/207',
    },
    {
      id: 4,
      name: 'Farmer 4',
      profileImage: 'https://picsum.photos/206/206',
    },
    {
      id: 5,
      name: 'Farmer 4',
      profileImage: 'https://picsum.photos/205/205',
    },
    {
      id: 6,
      name: 'Farmer 4',
      profileImage: 'https://picsum.photos/204/204',
    },
    {
      id: 7,
      name: 'Farmer 4',
      profileImage: 'https://picsum.photos/203/203',
    },
    {
      id: 8,
      name: 'Farmer 4',
      profileImage: 'https://picsum.photos/202/202',
    },
    {
      id: 9,
      name: 'Farmer 4',
      profileImage: 'https://picsum.photos/201/201',
    },
  ];

  return (
    <SafeAreaView>
      <ScrollView>
        <LinearGradient
          start={{x: 0, y: 1}}
          end={{x: 1, y: 1}}
          colors={['#199333', '#1FAA59', '#38CC77']}
          style={styles.container}>
          <Header name="All Farmers" navigation={navigation} />
          <View style={styles.allFarmers}>
            {allFarmers.map(farmer => (
              <FarmerCard id={farmer.id} farmerData={farmer} key={farmer.id} />
            ))}
          </View>
        </LinearGradient>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  allFarmers: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: Dimensions.get('window').width - 10,
  },
});

export default AllFarmerScreen;
