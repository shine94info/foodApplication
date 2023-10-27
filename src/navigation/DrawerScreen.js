import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Home from '../screens/Main/Home/home';
import Favourite from '../screens/Main/Favourite/favourite';
import Profile from '../screens/Main/Profile/profile';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import imagePath from '../constants/imagePath';
import {Image} from 'react-native';
import BottomTabScreen from './BottomTabScreen';
import Customdrawer from './Customdrawer';

const Drawer = createDrawerNavigator();

const DrawerScreen = () => {
  const drawerIcon = ({focused, size}, name) => {
    return <Icon name={name} size={size} />;
  };
  return (
    <Drawer.Navigator
    screenOptions={{
      headerShown: false,
    
      // drawerStyle: {
      //   backgroundColor: '#FA4A0C',
      //   borderRadius: 20,
      //   width: '70%',
      // },
      sceneContainerStyle: {},
      drawerType:"slide"
      }}
        drawerContent={(props) => <Customdrawer {...props} />}
      >
      <Drawer.Screen name="BottomTabScreen" component={BottomTabScreen} />
     
    </Drawer.Navigator>
  );
};

export default DrawerScreen;

