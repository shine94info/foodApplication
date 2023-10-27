import {
  View,
  Text,
  Image,
  Pressable,
  FlatList,
  ScrollView,
  TextInput,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import imagePath from '../../../constants/imagePath';
import {styles} from './styles';
import {FOODITEMLIST} from './FoodItemList';
import {FOODITEM} from '../../../constants/FoodItems';
import Icon from 'react-native-vector-icons/Feather';
import {useSelector} from 'react-redux';

const Home = ({navigation}) => {
  const [isselected, setIsSelected] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  const handleItemClick = id => {
    setIsSelected(id);
  };
  const cart = useSelector(state => state.auth.items);

  // const totalItemsInCart = cart.reduce((total, item) => total + item.quantity, 0);

  const totalItemsInCart = cart.length;

  const renderfooodList = ({item}) => (
    <View style={{marginTop: 40, marginRight: 30, marginLeft: 40}}>
      <Pressable
        style={
          item.id === isselected ? styles.selectedBtn : styles.unseletedBtn
        }
        onPress={() => {
          handleItemClick(item.id);
        }}>
        <Text
          style={
            item.id === isselected ? styles.selectedtext : styles.unselectedtext
          }>
          {item.title}
        </Text>
      </Pressable>
    </View>
  );

  const renderfooodItems = ({item, index}) => {
    return (
      <Pressable
        onPress={() =>
          navigation.navigate('Product', {selectedItemIndex: index})
        }>
        <View style={{paddingTop: 84, marginHorizontal: 18}}>
          <View style={styles.fooditemview}>
            <Image source={item.image} style={styles.fooditemimage} />
            <Text style={styles.fooditemtitle}>
              {item.title}
              {'\n'}
              {item.subtitle}
            </Text>
            <Text style={styles.fooditemsubtitle}>{item.price}</Text>
          </View>
        </View>
      </Pressable>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.iconcontainer}>
        <Pressable
          onPress={() => {
            navigation.openDrawer();
          }}>
          <Icon name="menu" size={28} color={'#000000'} />
        </Pressable>
        <View>
          <Pressable onPress={() => navigation.navigate('Cart')}>
            <Icon name="shopping-cart" size={28} color={'#000000'} />
            {totalItemsInCart > 0 && (
              <View
                style={{
                  position: 'absolute',
                  top: -10,
                  right: -10,
                  backgroundColor: '#FA4A0C',
                  borderRadius: 10,
                  paddingHorizontal: 6,
                  paddingVertical: 2,
                }}>
                <Text style={{fontSize: 16, color: '#FFFFFF'}}>
                  {totalItemsInCart}
                </Text>
              </View>
            )}
          </Pressable>
        </View>

        {/* <Image source={imagePath.Cart} style={{height: 25, width: 25}} /> */}
      </View>
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          paddingHorizontal: 40,
          paddingVertical: 20,
        }}>
        <Text style={styles.Deliciousfoodforyoutext}>
          Delicious {'\n'}food for you
        </Text>

        <View style={styles.searchview}>
          <Image source={imagePath.Search} style={styles.searchimage} />

          <TextInput placeholder="Search"></TextInput>
        </View>

        <FlatList
          data={FOODITEMLIST}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={renderfooodList}
          keyExtractor={item => item.id}
          style={{marginHorizontal: -40}}
        />
        <Text style={styles.seemoretext}>see more</Text>

        <FlatList
          data={FOODITEM}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={renderfooodItems}
          keyExtractor={item => item.id}
          style={{marginHorizontal: -50}}
        />
      </ScrollView>
    </View>
  );
};
export default Home;
