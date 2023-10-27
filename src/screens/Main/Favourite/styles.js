import {StyleSheet} from 'react-native';
import {View, Text, Image, StatusBar, Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;

export const styles = StyleSheet.create({
  container: {},
  maincontainer: {
    flex: 1,
  },

  headingcontainer: {
    flexDirection: 'row',
    height: 50,
    alignItems: 'center',
    paddingHorizontal: 30,
  },
  headingtext: {
    fontSize: 18,
    color: '#000000',
    fontWeight: '500',
    textAlign: 'center',
    flex: 1,
  },
  //renderitemstyle
  renderitemmaincontainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  renderitemcontainer: {
    backgroundColor: '#FFFFFF',
    height: 252,
    width: 156,
    borderRadius: 30,
    marginTop: 70,
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },

  image: {
    height: '60%',
    width: '100%',
    position: 'absolute',
    top: -40,
    borderRadius:110
  },
  titlesubtitletext: {
    marginTop: 90,
    height: 52,
    textAlign: 'center',
    color: '#000000',
    fontSize: 22,
  },
  price: {
    color: '#FA4A0C',
    fontSize: 17,
    fontWeight: '700',
    marginTop: 15,
  },
  loginbtn: {
    backgroundColor: '#FA4A0C',
    color: 'white',
  },
  btntxt: {
    color: 'white',
  },
  informationtext: {
    fontSize: 17,
    color: '#000000',
    fontWeight: '500',
    marginTop: 20,
    marginBottom: 10,
  },
  informationview: {
    flexDirection: 'row',
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 20,
  },
  informationimage: {
    marginRight: 20,
    marginLeft: 20,
    height: 60,
    width: 60,
  },
  personname: {
    fontSize: 18,
    color: '#000000',
  },
  personinfo: {
    fontSize: 13,
    marginTop: 10,
  },
  screendivideview: {
    flex: 1,
    justifyContent: 'space-between',
  },
  paymenttext: {
    fontSize: 17,
    color: '#000000',
    fontWeight: '500',
    marginTop: 20,
    marginBottom: 10,
  },
  paymentview: {
    borderColor: '#C4C4C4',
    alignItems: 'flex-start',
    borderRadius: 20,
    backgroundColor: 'white',
  },
  favouritetext: {
    fontSize: 18,
    color: '#000000',
    fontWeight: '500',
    textAlign: 'center',
  },
  viewdividesecondview: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
});
