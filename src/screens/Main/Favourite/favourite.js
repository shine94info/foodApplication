import React, {useState, useEffect} from 'react';
import {View, Text, FlatList, Image, Pressable} from 'react-native';
import {FOODITEM} from '../../../constants/FoodItems';
import Icon from 'react-native-vector-icons/AntDesign';
import {RefreshControl} from 'react-native-gesture-handler';

import {styles} from './styles';
import ButtonComp from '../../../components/ButtonComp';
import {TextInput} from 'react-native-gesture-handler';

const renderfooodItems = ({item}) => (
  <View style={styles.renderitemmaincontainer}>
    <View style={styles.renderitemcontainer}>
      <Image source={item.image} style={styles.image} />
      <Text style={styles.titlesubtitletext}>
        {item.title}
        {'\n'}
        {item.subtitle}
      </Text>
      <Text style={styles.price}>{item.price}</Text>
    </View>
    <View style={styles.renderitemcontainer}>
      <Image source={item.image} style={styles.image} />
      <Text style={styles.titlesubtitletext}>
        {item.title}
        {'\n'}
        {item.subtitle}
      </Text>
      <Text style={styles.price}>{item.price}</Text>
    </View>
  </View>
);

const Favourite = ({navigation}) => {
  const [refreshing, setRefreshing] = useState(false);
  const [data, setData] = useState([]);
  const [isselected, setIsSelected] = useState(false);

  const fetchData = async () => {
    setRefreshing(true);

    await new Promise(resolve => setTimeout(resolve, 2000));

    setData(FOODITEM);
    setRefreshing(false);
  };
  return (
    <View style={styles.maincontainer}>
      <View style={styles.headingcontainer}>
        <Pressable  onPress={() => {
            navigation.navigate('Home');
          }}>
        <Icon name="left" size={24} color={'#000000'} />
        </Pressable>
        <Text style={styles.headingtext}>Favourites</Text>
      </View>

      <View style={{backgroundColor: '#F9F9F9', flex: 1}}>
        <FlatList
          data={data}
          renderItem={renderfooodItems}
          contentContainerStyle={{
            flexGrow: 1,
          }}
          keyExtractor={item => item.id}
          style={{marginBottom: 10}}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={fetchData} />
          }
          ListEmptyComponent={() => {
            return (
              <View style={styles.screendivideview}>
                <View style={styles.viewdividesecondview}>
                  <Icon name="hearto" size={150} color={'#C7C7C7'} />
                  <Text style={styles.favouritetext}>Favourite Items</Text>
                  <Text style={styles.favouritetext}>
                    Hit the orange button
                  </Text>
                </View>

                <View style={{padding: 30}}>
                  {/* <ButtonComp
                    btnText={'Update'}
                    btnStyle={styles.loginbtn}
                    btntextstyle={styles.btntxt}
                  /> */}
                </View>
              </View>
            );
          }}
          // contentContainerStyle={{marginHorizontal:32}}
        />
      </View>
      <View></View>
    </View>
  );
};
export default Favourite;
