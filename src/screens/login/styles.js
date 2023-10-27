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
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 5,
    borderBottomStartRadius: 25,
    borderBottomEndRadius: 25,
    height: windowHeight / 2,
    backgroundColor: '#ffffff',
    width: '100%',
  },
  parentcontainer: {
    borderBottomStartRadius: 25,
    borderBottomEndRadius: 25,
    height: windowHeight / 2,
    backgroundColor: '#ffffff',
    width: '100%',
  },
  logo: {
    height: 140,
    width: 140,
    borderRadius: 50,
  },
  secondview: {
    marginHorizontal: 45,
    height: windowHeight / 2,
    justifyContent: 'space-between',
  },
  forgotpasstxt: {
    color: '#FA4A0C',
    marginTop: 20,
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
    textAlign: 'center',
  },
  unselectedtext: {
    fontSize: 18,
    color: '#000000',
    textAlign: 'center',
  },
  loginbtn: {
    backgroundColor: '#FA4A0C',
    color: 'white',
  },
  btntxt: {
    color: 'white',
  },
  tabmainview: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    marginHorizontal: 45,
    bottom: 10,
    position: 'absolute',
  },
});
