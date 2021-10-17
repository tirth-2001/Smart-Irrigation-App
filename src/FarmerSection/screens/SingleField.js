import React, {useRef} from 'react';
import {View, Text, StyleSheet, ScrollView, Dimensions} from 'react-native';
import CardStack, {Card} from 'react-native-card-stack-swiper';
import SingleFieldCard from '../components/SingleFieldCard';
import LinearGradient from 'react-native-linear-gradient';

// Import Assets
import Sun from '../../../assets/img/sun.png';
import Crop from '../../../assets/img/plant.png';
import Water from '../../../assets/img/water1.png';
import Irrigation from '../../../assets/img/sprinkler.png';
import Farmer from '../../../assets/img/farmer.png';

import Header from '../../components/Header';

const SingleField = ({navigation}) => {
  const cardStackRef = useRef(null);

  return (
    <View style={styles.container}>
      <Header name="Field Data" navigation={navigation} />

      <ScrollView
        horizontal={true}
        style={styles.content}
        pagingEnabled={true}
        contentContainerStyle={styles.contentContainer}
        showsHorizontalScrollIndicator={true}>
        <SingleFieldCard
          title="Humidity & Temperature Data"
          action="View More"
          img={Sun}
          height={165}
          width={165}
          top={-130}
          mt={70}
          ml={10}
          elevation={20}
          cardHeight={Dimensions.get('window').height * 0.8}
          gradientArray={['red', 'orange']}
        />
        <SingleFieldCard
          title="Moisture Content in Soil"
          action="View More"
          img={Water}
          height={155}
          width={155}
          top={-125}
          mt={70}
          elevation={15}
          cardHeight={Dimensions.get('window').height * 0.75}
          gradientArray={['#2827CC', '#12B0E8']}
        />
        <SingleFieldCard
          title="Crop Sown in Field"
          action="View More"
          img={Crop}
          height={155}
          width={155}
          top={-145}
          mt={70}
          elevation={10}
          cardHeight={Dimensions.get('window').height * 0.7}
          gradientArray={['#147a20', '#36f720']}
        />
        <SingleFieldCard
          title="Water Irrigation"
          action="View More"
          img={Irrigation}
          height={145}
          width={145}
          top={-135}
          mt={70}
          elevation={5}
          cardHeight={Dimensions.get('window').height * 0.65}
          gradientArray={['#470175', '#c369ff']}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    marginTop: 10,
    marginHorizontal: 10,
  },
  contentContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: '#777',
  },
});

export default SingleField;
