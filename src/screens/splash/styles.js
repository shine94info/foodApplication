import {StyleSheet} from 'react-native';
import {View, Text, Image, StatusBar, Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#FF460A',
    padding: 40,
    justifyContent: "space-between"
  },
  statusbar: {
    backgroundColor: '#FF460A',
  },
  imageview:
  {
    marginHorizontal: -50,
    position: 'absolute',
    bottom: 50,
    left: 50,
    right: 50,
  },
  logo: {
    height: 74,
    width: 74,
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
    height: Dimensions.get('window').height / 1.8,
    width: windowWidth,
  },
  buttonstyle:
  {
    marginTop:20
  }
});
