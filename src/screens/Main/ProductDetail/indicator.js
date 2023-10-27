import React from 'react';
import { View, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const IndicatorDots = ({ currentIndex, totalDots,onPress }) => {
  const dots = [];

  for (let i = 0; i < totalDots; i++) {
    dots.push(
      <TouchableOpacity
        key={i}
        onPress={() => onPress(i)} // Call the onPress function with the index
      >
        <View
          style={[
            styles.dot,
            { backgroundColor: currentIndex === i ? '#FA4A0C' : 'gray' },
          ]}
        />
      </TouchableOpacity>
    );
  }

  return <View style={styles.container}>{dots}</View>;
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
  marginTop:20
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 5,
    marginHorizontal: 5, 
  },
});

export default IndicatorDots;