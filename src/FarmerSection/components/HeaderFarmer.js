import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Image,
  ScrollView,
  Share,
  Button,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {Badge} from 'react-native-paper';

const Header = ({route, navigation}) => {
  const [lastOpenVariable, setLastOpenVariable] = useState('');
  const [lastOpenVariable1, setLastOpenVariable1] = useState('');
  const [showBadge, setShowBadge] = useState(true);
  const [badgeValue, setBadgeValue] = useState(0);
  const [flagValue, setFlagValue] = useState(true);
  const [dummy, setDummy] = useState('A');
  const [isLoading, setIsLoading] = useState(false);
  const [tempValue, setTempValue] = useState(false);

  const onShare = async () => {
    try {
      const result = await Share.share({
        message:
          'Smart Irrigation System 🌱\nMobile App 📱 \n\nDownload this app now... 👇 \n\nGoogle Playstore Link : \nhttps://play.google.com/store/apps',
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <View style={styles.header}>
      <View style={styles.landscapeImage}>
        <Image
          source={require('../../../assets/img/landscape.png')}
          style={styles.image2}
        />
      </View>
      <View style={styles.logoContainer}>
        <TouchableOpacity
          onPress={() => {}}
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-start',
            borderWidth: 0,
          }}>
          <Icon
            style={[styles.logo, {borderWidth: 0}]}
            name={'megaphone'}
            color="#199333"
            size={27}
          />
          <Badge
            style={{
              position: 'absolute',
              top: -5,
              left: 12,
              margin: 10,
              borderWidth: 1,
              borderColor: '#fff',
            }}
            size={20}
            visible={true}>
            {5}
          </Badge>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={onShare}
          activeOpacity={0.5}
          style={{borderWidth: 0, width: 35, height: 45}}>
          <Icon
            style={styles.logo}
            name={'share-social'}
            color="#199333"
            size={27}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '100%',
  },
  logoContainer: {
    margin: 15,
    position: 'absolute',
    right: 6,
    top: 0,
  },
  logo: {
    marginTop: 10,
  },
  landscapeImage: {
    alignItems: 'center',
    marginTop: 20,
    marginLeft: -60,
  },
  image2: {
    height: 60,
    width: 250,
    borderWidth: 1,
  },
});

export default Header;
