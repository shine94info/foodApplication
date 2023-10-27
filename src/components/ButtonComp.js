import {View, Text, Pressable, StyleSheet} from 'react-native';
import React from 'react';

export const ButtonComp = ({
  onPress = () => {},
  btnText,
  btntextstyle,
  btnStyle,
}) => {
  return (
    <Pressable onPress={onPress} style={[styles.btnStyle, btnStyle]}>
      <Text style={[styles.btntextstyle, btntextstyle]}>{btnText}</Text>
    </Pressable>
  );
};

export default ButtonComp;
const styles = StyleSheet.create({
  btnStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 60,
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
  },
  btntextstyle: {
    textAlign: 'center',
    fontWeight: '700',
  },
});
