import { StyleSheet } from 'react-native';
import { View, Text, Image, StatusBar, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;

export const styles = StyleSheet.create({
  container: {},
  maincontainer: {
    padding: 10,

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
  loginbtn: {
    backgroundColor: '#FA4A0C',
    color: 'white',


  },
  btntxt: {
    color: 'white',
    fontSize: 17,
  },
  informationtext: {
    fontSize: 17,
    color: '#000000',
    fontWeight: '500',
    marginTop: 20,
    marginBottom: 10,
  },
  itemdivideview: {
    padding: 20,
  
  },
  informationview: {
    flexDirection: 'row',
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 20,
  },
  informationimage: {
    marginRight: 20,
    borderRadius: 50,
    height: 70,
    width: 70,
    alignSelf: 'center',
  },
  personname: {
    fontSize: 17,
    color: '#000000',
  },
  price: {
    fontSize: 16,
    color: '#FA4A0C',
  },
  priceandbtnview: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
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
  incrementdecrementview: {
    flexDirection: 'row',
    backgroundColor: '#FA4A0C',
    borderRadius: 20,
    padding: 8,
    paddingHorizontal: 12,
  },
  incrementdecrementtext: {
    fontSize: 15,
    color: '#FFFF',
  },
});
