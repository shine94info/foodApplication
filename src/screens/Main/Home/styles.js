import {StyleSheet} from 'react-native';
import {View, Text, Image, StatusBar, Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;

export const styles = StyleSheet.create({
  container: {
    flex:1,
  },
  statusbar: {
    backgroundColor: '#FF460A',
  },
  Deliciousfoodforyoutext:
  {
    color: '#000',
    fontSize: 36,
    fontWeight: '700',

  },
  searchimage:
  {
    height: 18, width: 18, marginEnd: 16
  },
  iconcontainer: {
    justifyContent:'space-between',
    flexDirection: 'row',
    height:50,
    alignItems:'center',
    paddingHorizontal:30
  },
  seemoretext:
  {
    color: '#FA4A0C',
    fontSize: 15,
    fontWeight: '400',
    textAlign: 'right',
    marginTop: 26,
  },
  foodlogo: {
    width: '98%',
    height: 130,
    marginTop: 20,
  },
  searchview: {
    alignContent: 'center',
    marginTop: 40,
    alignItems: 'center',
    height: 60,
    borderRadius: 60,
    borderWidth: 0.5,
    flexDirection: 'row',
    paddingHorizontal: 20,
    backgroundColor: '#EFEEEE',
  },
  logo: {
    height: 73,
    width: 73,
    marginTop: 30,
    left: 60,
    backgroundColor: 'white',
    borderRadius: 50,
  },
  secondlogo: {
    marginTop: 30,
    height: 125,
    width: 275,
    alignSelf: 'center',
  },
  Group: {
    marginTop: 20,
    height: 453,
    width: windowWidth,
  },
  selectedBtn: {
    borderBottomColor: '#FA4A0C',
    borderBottomWidth: 2,
  },
  unseletedBtn: {
    color: '#000000',
  },
  selectedtext: {
    fontSize: 17,
    color: '#FA4A0C',
    fontWeight: '400',
    textAlign: 'center',
  },
  unselectedtext: {
    fontSize: 17,
    color: '#000000',
    textAlign: 'center',
    color: '#9A9A9D',
  },
  fooditemview: {
    backgroundColor: '#FFFFFF',
    height: 260,
    width: 220,
    borderRadius: 30,
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  fooditemimage: {
    height: "70%",
    width: "80%",
    position: 'absolute',
    top: -60,
    borderRadius:100,
   
  },
  fooditemtitle: {
    marginTop: 90,
    textAlign: 'center',
    color: '#000000',
    fontSize: 22,
  },
  fooditemsubtitle: {
    color: '#FA4A0C',
    fontSize: 17,
    fontWeight: '700',
    marginTop: 15,
  },
});
