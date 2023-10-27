import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import SplashScreen from '../screens/splash';
import LoginScreen from '../screens/login';
import DrawerScreen from './DrawerScreen';
import ProductDetailScreen from '../screens/Main/ProductDetail';
import Cart from '../screens/Main/Cart';
import {useSelector} from 'react-redux';

const Stack = createStackNavigator();

const AuthScreen = () => {
  const {isLoggedIn} = useSelector(state => state.auth);
  console.log('state::::::::::::', isLoggedIn);
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="SplashScreen"
        screenOptions={{headerShown: false}}>
        {isLoggedIn ? (
          <>
            <Stack.Screen name="DrawerScreen" component={DrawerScreen} />
            <Stack.Screen name="Product" component={ProductDetailScreen} />
            <Stack.Screen name="Cart" component={Cart} />
          </>
        ) : (
          <>
            <Stack.Screen name="SplashScreen" component={SplashScreen} />
            <Stack.Screen name="LoginScreen" component={LoginScreen} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AuthScreen;
