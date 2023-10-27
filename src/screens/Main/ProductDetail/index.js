import {
  View,
  Text,
  Image,
  FlatList,
  Button,
  useWindowDimensions,
  Dimensions,
  Pressable,
  ScrollView,
} from 'react-native';
import React, {useMemo, useState} from 'react';
import imagePath from '../../../constants/imagePath';
import Icon from 'react-native-vector-icons/AntDesign';
import {styles} from './styles';
import ButtonComp from '../../../components/ButtonComp';
import HeartIcon from 'react-native-vector-icons/Ionicons';
import IndicatorDots from './indicator';
import {FOODITEM} from '../../../constants/FoodItems';
import {useDispatch} from 'react-redux';
import {Cart, addToCart, addToCartById} from '../../../redux/auth/authSlice';

const ProductDetailScreen = ({navigation, route}) => {
  
  const {selectedItemIndex} = route.params;
  const seletedItem = FOODITEM[selectedItemIndex];

  const dispatch = useDispatch();
  console.log('dispatch', dispatch);
  console.log('selectedId', seletedItem.id);

  const {height, width, scale, fontScale} = useWindowDimensions();

  const [selectedId, setSelectedId] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePageChange = index => {
    setCurrentIndex(index);
  };

  const renderfooodItems = ({item}) => {
    return (
      <View
        style={{
          width: Dimensions.get('window').width,
          height: 200,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image
          source={seletedItem.image}
          style={{width: '100%', height: '100%'}}
          resizeMode="contain"
        />
      </View>
    );
  };

  return (
    <View style={styles.maincontainer}>
      <View style={styles.headingcontainer}>
        <Pressable
          onPress={() => {
            navigation.navigate('Home');
          }}>
          <Icon name="left" size={24} color={'#000000'} />
        </Pressable>

        <Pressable
          onPress={() => {
            navigation.navigate('Favourite');
          }}>
        <HeartIcon name="heart-outline" size={24} color={'#000000'} />
        </Pressable>
      </View>

      <View
        style={{
          flex: 1,
          justifyContent: 'space-between',
          paddingVertical: 30,
          //   backgroundColor: 'black',
        }}>
        <ScrollView style={{}} showsVerticalScrollIndicator={false}>
          <FlatList
            data={FOODITEM}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={renderfooodItems}
            keyExtractor={item => item.id}
            style={{marginHorizontal: -30}}
            snapToInterval={Dimensions.get('window').width}
            pagingEnabled={true}
            // onStartReachedThreshold={0.5}
            onEndReachedThreshold={0.5}
            onMomentumScrollEnd={event => {
              const offsetX = event.nativeEvent.contentOffset.x;
              const newIndex = Math.round(
                offsetX / Dimensions.get('window').width,
              );
              setCurrentIndex(newIndex);
            }}
          />
          <IndicatorDots
            currentIndex={currentIndex}
            totalDots={FOODITEM.length}
            onPress={handlePageChange}
          />

          <Text
            style={{
              fontSize: 28,
              color: '#000000',
              fontWeight: '500',
              textAlign: 'center',
              marginTop: 40,
            }}>
            {seletedItem.title}
          </Text>
          <Text
            style={{
              fontSize: 28,
              color: '#FA4A0C',
              fontWeight: '500',
              textAlign: 'center',
            }}>
            {seletedItem.price}
          </Text>

          <Text
            style={{
              fontSize: 17,
              color: '#000000',
              fontWeight: '500',
              marginTop: 40,
            }}>
            Delivery Info
          </Text>
          <Text style={{fontSize: 15, color: 'grey', fontWeight: '500'}}>
            Delivered between monday aug and {'\n'} thursday 20 from 8p.m to
            91.32 pm
          </Text>

          <Text
            style={{
              fontSize: 17,
              color: '#000000',
              marginTop: 40,
              fontWeight: '500',
            }}>
            Return Policy
          </Text>
          <Text style={{fontSize: 15, color: 'grey', fontWeight: '500'}}>
            Delivered between monday aug and {'\n'} thursday 20 from 8p.m to
            91.32 pm {'\n'} Delivered between monday aug and {'\n'} thursday 20
            from 8p.m to 91.32 pm
          </Text>
        </ScrollView>

        <View>
          <ButtonComp
            btnText={'Add to cart'}
            btnStyle={styles.loginbtn}
            btntextstyle={styles.btntxt}
            // onPress={() => {
            //   dispatch(addToCart(seletedItem.id));
            // }}
            onPress={() => {
              navigation.navigate('Cart')
              dispatch(addToCart({ item: seletedItem }));
            }}
          />
        </View>
      </View>
    </View>
  );
};
export default ProductDetailScreen;
