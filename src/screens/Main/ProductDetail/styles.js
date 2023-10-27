import {StyleSheet} from 'react-native';
import {View, Text, Image, StatusBar, Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;

export const styles = StyleSheet.create({
  container: {},
  maincontainer: {
   flex: 1,
   paddingHorizontal:30
  },

  headingcontainer: {
    flexDirection: 'row',
    height:50,
    alignItems:'center',
    justifyContent:'space-between'
  },
  headingtext: {
    fontSize: 18,
    color: '#000000',
    fontWeight: '500',
    textAlign: 'center',
  },
  loginbtn: {
   
    
    backgroundColor: '#FA4A0C',
    color: 'white',
  
  },
  btntxt: {
    color: 'white',
    fontSize:17
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
   
   height:300,
    backgroundColor:'pink',
    width: '70%',

  },
  foodname: {
    fontSize: 18,
    color: '#000000',
  },
  personinfo: {
    fontSize: 13,
    marginTop: 10,
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
});
