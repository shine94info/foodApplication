import {StyleSheet, Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const styles = StyleSheet.create({
  maincontainer: {
    flex: 1,
    backgroundColor: '#F2F2F2',
  },
  statusbar: {
    backgroundColor: '#FF460A',
  },
  container: {
    height: windowHeight / 2,
    backgroundColor: '#FFFFFF',
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  logo: {
    height: 140,
    width: 162,
    borderRadius: 50,
    resizeMode: 'contain',
  },
  secondview: {
    marginHorizontal: 45,
    height: windowHeight / 2,
    justifyContent: 'space-between',
  },
  forgotpasstxt: {
    color: '#FA4A0C',
    marginTop: 30,
    fontWeight: '500',
  },
  selectedBtn: {
    borderBottomColor: '#FA4A0C',
    borderBottomWidth: 2,
  },
  unseletedBtn: {
    color: '#000000',
  },
  selectedtext: {
    fontWeight: '600',
    color: '#000000',
    fontSize: 18,
    marginBottom: 10,
  },
  unselectedtext: {
    fontSize: 18,
    color: '#000000',
  },
  loginbtn: {
    backgroundColor: '#FA4A0C',
    color: 'white',
  },
  btntxt: {
    color: 'white',
  },
});
