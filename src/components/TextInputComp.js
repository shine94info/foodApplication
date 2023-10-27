import {View, Text, TextInput, StyleSheet} from 'react-native';
import React from 'react';

const TextInputComp = ({
  value,
  onChangeText,
  placeholder,
  inputStyle,
  secureTextEntry,
  textinputstyle,
  textinputcontainerstyle,
  placeholderColor,
  onShowHide,
  placeholderheading,
}) => {
  return (
    <View style={[styles.container, textinputcontainerstyle]}>
      <Text style={[styles.textinputheader]}>{placeholderheading}</Text>
      <TextInput
        placeholder={placeholder}
        style={[styles.textinputstyle, textinputstyle]}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        placeholderTextColor={placeholderColor}
      />
      <View style={styles.border}></View>
    </View>
  );
};

export default TextInputComp;
const styles = StyleSheet.create({
  container: {
    marginTop: 30,
  },
  textinputheader: {
    color: 'grey',
    fontSize: 15,
  },

  textinputstyle: {
    color: '#000000',
    fontWeight: '500',
    fontSize: 17,
  },
  border: {
    borderBottomColor: 'grey',
    borderWidth: 0.5,
  },
});
