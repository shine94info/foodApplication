import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  createDrawerNavigator,
  DrawerNavigationProp,
  DrawerItem,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerContentComponentProps,
  DrawerContentOptions,
} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons';
import {useDispatch} from 'react-redux';
import {clearCartAndUser, logOut} from '../redux/auth/authSlice';

//#FA4A0C
const Customdrawer = ({props, navigation}) => {
  const Dispatch = useDispatch();

  return (
    <View style={{paddingTop: 140, backgroundColor: '#FA4A0C', flex: 1}}>
      <DrawerItem
        label="Home"
        labelStyle={{fontSize: 17}}
        icon={({color, size}) => (
          <Icon name="home-outline" size={30} color={'white'} />
        )}
        onPress={() => {
          props.navigation.navigate('Home');
        }}
      />

      <View
        style={{
          borderColor: 'white',
          borderWidth: 0.2,
          marginTop: 10,
          marginBottom: 10,
        }}
      />
      <DrawerItem
        label="favourtie"
        labelStyle={{fontSize: 17}}
        icon={({color, size}) => (
          <Icon name="heart-outline" size={30} color={'white'} />
        )}
        onPress={() => {
          props.navigation.navigate('Favourite');
          activeBackgroundColor = 'blue';
        }}
      />
      <View
        style={{
          borderColor: 'white',
          borderWidth: 0.2,
          marginTop: 10,
          marginBottom: 10,
        }}
      />

      <DrawerItem
        label="profile"
        labelStyle={{fontSize: 17}}
        icon={({color, size}) => (
          <Icon name="person-outline" size={30} color={'white'} />
        )}
        onPress={() => {
          props.navigation.navigate('Profile');
        }}
      />
      <View style={{flex: 1, justifyContent: 'flex-end', marginBottom: 40}}>
        {/* <DrawerItem
        style={{}}
        label="Sign Out"
        icon={({color, size}) => (
          <Icon name="arrow-forward-outline" size={30} color={'white'} />
        )}
      /> */}

        <Pressable
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            flex: 1,
            marginHorizontal: 40,
            alignSelf: 'center',
          }}
          onPress={() => Dispatch(clearCartAndUser())
          }
          >
          <Text style={{fontSize: 17}}>Sign Out</Text>
          <Icon
            name="arrow-forward-outline"
            size={30}
            color={'white'}
            style={{marginLeft: 20}}
          />
        </Pressable>
      </View>
    </View>
  );
};

export default Customdrawer;
