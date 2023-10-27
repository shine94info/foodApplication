import {View, Text, Image, Pressable} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import {useDispatch, useSelector} from 'react-redux'; // Import useSelector
import {styles} from './styles';
import ButtonComp from '../../../components/ButtonComp';
import imagePath from '../../../constants/imagePath';
import {ScrollView} from 'react-native-gesture-handler';
import {
  addToCart,
  decrementItemQuantity,
  incrementItemQuantity,
} from '../../../redux/auth/authSlice';

const Cart = ({navigation}) => {
  const cart = useSelector(state => state.auth.items);
  console.log('cart:::::::', cart);

  const dispatch = useDispatch();

  const incrementItem = itemId => {
    console.log('itemId========', itemId);
    dispatch(incrementItemQuantity({itemId}));
  };

  const decrementItem = itemId => {
    dispatch(decrementItemQuantity({itemId}));
  };

  // const incrementItem = (itemId) => {
  //   console.log('incremet::::',incrementItem);
  //   const itemToUpdate = cart.find((item) => item.id === itemId);
  //   if (itemToUpdate) {
  //     const newQuantity = parseInt(itemToUpdate.quantity) + 1; // Ensure it's a number
  //     useDispatch(addToCart({ item: itemToUpdate, quantity: newQuantity }));
  //   }
  // };

  // const decrementItem = (itemId) => {
  //   const itemToUpdate = cart.find((item) => item.id === itemId);
  //   if (itemToUpdate) {
  //     const newQuantity = parseInt(itemToUpdate.quantity) - 1; // Ensure it's a number
  //     dispatch(addToCart({ item: itemToUpdate, quantity: newQuantity }));
  //   }
  // };

  return (
    <View style={styles.maincontainer}>
      <View style={styles.headingcontainer}>
        <Pressable
          onPress={() => {
            navigation.navigate('Home');
          }}>
          <Icon name="left" size={24} color={'#000000'} />
        </Pressable>

        <Text style={styles.headingtext}>Cart</Text>
      </View>

      {cart.map(item => (
        <ScrollView style={styles.itemdivideview}>
          <View>
            <View style={styles.informationview}>
              <Image source={item.image} style={styles.informationimage} />

              <View style={{flex: 1, justifyContent: 'center', marginTop: 10}}>
                <Text style={styles.foodname}>{item.title}</Text>

                <View style={styles.priceandbtnview}>
                  <Text style={styles.price}>{`#${item.price}`}</Text>
                  <View style={styles.incrementdecrementview}>
                    <Pressable
                      hitSlop={{top: 25, bottom: 25, left: 20, right: 20}}>
                      <Text
                        style={styles.incrementdecrementtext}
                        onPress={() => decrementItem(item.id)}>
                        -
                      </Text>
                    </Pressable>

                    <Text
                      style={[
                        styles.incrementdecrementtext,
                        {marginHorizontal: 8},
                      ]}>
                      {item.quantity}
                    </Text>
                    <Pressable
                      hitSlop={{top: 25, bottom: 25, left: 20, right: 20}}>
                      <Text
                        style={styles.incrementdecrementtext}
                        onPress={() => incrementItem(item.id)}>
                        +
                      </Text>
                    </Pressable>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      ))}

      <View style={{marginHorizontal: 20}}>
        <ButtonComp
          onPress={() => {}}
          btnText={'Complete order'}
          btnStyle={styles.loginbtn}
          btntextstyle={styles.btntxt}
        />
      </View>
    </View>
  );
};

export default Cart;
