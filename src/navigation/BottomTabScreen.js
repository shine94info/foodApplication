import {View, Text, KeyboardAvoidingView} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import Home from '../screens/Main/Home/home';
import Favourite from '../screens/Main/Favourite/favourite';
import Profile from '../screens/Main/Profile/profile';
import AntDesign from 'react-native-vector-icons';
import Icon from 'react-native-vector-icons/Ionicons';
import ProductDetailScreen from '../screens/Main/ProductDetail';

const Tab = createBottomTabNavigator();

const BottomTabScreen = () => {
  return (
    <KeyboardAvoidingView style={{flex: 1}}>
      <Tab.Navigator
        screenOptions={({route}) => ({
          headerShown: false,
          tabBarStyle: {height: 40, backgroundColor: '#F2F2F2'},
          tabBarActiveTintColor: '#FA4A0C',
          tabBarInactiveTintColor: '#ADADAF',
          tabBarIcon: ({focused, color, size}) => {
            let iconName;

            if (route.name === 'Home') {
              return (
                <Icon
                  name={focused ? 'home' : 'home-outline'}
                  size={size}
                  color={color}
                />
              );
            } else if (route.name === 'Favourite') {
              return (
                <Icon
                  name={focused ? 'heart-sharp' : 'heart-outline'}
                  size={size}
                  color={color}
                />
              );
            } else if (route.name === 'Profile') {
              return (
                <Icon
                  name={focused ? 'person-sharp' : 'person-outline'}
                  size={size}
                  color={color}
                />
              );
            }
          },
        })}>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Favourite" component={Favourite} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
    </KeyboardAvoidingView>
  );
};

export default BottomTabScreen;
