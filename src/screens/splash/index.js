import {View, Text, Image, StatusBar, Dimensions} from 'react-native';
import React from 'react';
import imagePath from '../../constants/imagePath';
import {styles} from './styles';
import ButtonComp from '../../components/ButtonComp';

const SplashScreen = ({navigation}) => {
  // const { navigation } = props;

  return (
    <>
      <StatusBar backgroundColor={'#FF460A'} />

      <View style={{backgroundColor: '#FF460A', flex: 1}}>
        <View
          style={styles.imageview}>
          <Image
            source={imagePath.Group}
            style={styles.Group}
            resizeMode="contain"
          />
        </View>
        <View style={styles.container}>
          <View>
            <Image source={imagePath.Splashlogo} style={styles.logo} />
            <Image
              source={imagePath.SplashSecondlogo}
              style={styles.secondlogo}
            />
          </View>

          <ButtonComp
            btnText={'Get Started'}
            onPress={() => {
              navigation.navigate('LoginScreen');
            }}
            btnStyle={styles.buttonstyle}
          />
        </View>
      </View>
    </>
  );
};

export default SplashScreen;
