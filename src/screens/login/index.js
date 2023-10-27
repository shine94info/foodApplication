import React, {useState} from 'react';
import {View, Text, Image, Pressable, ScrollView} from 'react-native';
import {styles} from './styles';
import imagePath from '../../constants/imagePath';
import ButtonComp from '../../components/ButtonComp';
import TextInputComp from '../../components/TextInputComp';
import RegisterScreen from '../register';
import {useDispatch, useSelector} from 'react-redux';
import {loginUser, setUser} from '../../redux/auth/authSlice';

const LoginScreen = ({navigation}) => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handleLogin = () => {
    if (email.trim() === '' || password.trim() === '') {
      console.error('Email and password cannot be empty');
    } else {
      dispatch(loginUser({email, password}));
    }
  };

  const onSignUpFail = () => {
    setIsLogin(false);
  };

  const onSignUpSuccess = () => {
    setIsLogin(true);
  };

  return (
    <ScrollView style={styles.maincontainer}>
      {/* <StatusBar backgroundColor={'#FFFFFF'} /> */}
      <View style={styles.container}>
        <Image
          source={imagePath.Loginlogo}
          style={styles.logo}
          resizeMode="contain"
        />

        <View style={styles.tabmainview}>
          <View style={{flex: 0.5}}>
            <Pressable
              style={isLogin ? styles.selectedBtn : styles.unseletedBtn}
              onPress={() => {
                setIsLogin(!isLogin);
              }}>
              <Text
                style={isLogin ? styles.selectedtext : styles.unselectedtext}>
                Login
              </Text>
            </Pressable>
          </View>
          <View style={{flex: 0.5}}>
            <Pressable
              style={!isLogin ? styles.selectedBtn : styles.unseletedBtn}
              onPress={() => {
                setIsLogin(!isLogin);
              }}>
              <Text
                style={!isLogin ? styles.selectedtext : styles.unselectedtext}>
                Sign-up
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
      {isLogin ? (
        <View style={styles.secondview}>
          <View>
            <TextInputComp
              value={email}
              onChangeText={val => {
                setEmail(val);
              }}
              placeholderheading={'Email Address'}
              placeholder={'Dosamarvis@gmail.com'}
              placeholderColor={'black'}
            />
            <TextInputComp
              value={password}
              onChangeText={val => {
                setPassword(val);
              }}
              placeholderheading={'Password'}
              placeholder={'12345'}
              placeholderColor={'black'}
            />
            <Text style={styles.forgotpasstxt}>Forgot passcode?</Text>
          </View>
          <View style={{marginBottom: 30}}>
            <ButtonComp
              onPress={handleLogin}
              btnText={'Login'}
              btnStyle={styles.loginbtn}
              btntextstyle={styles.btntxt}
            />
          </View>
        </View>
      ) : (
        <RegisterScreen
          navigation={navigation}
          onSignUpSuccess={onSignUpSuccess}
          onSignUpFail={onSignUpFail}
        />
      )}
    </ScrollView>
  );
};

export default LoginScreen;
