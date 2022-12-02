import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {colors} from '../../../utils';

const Link = ({title, size, align, onPress}) => {
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
      <Text style={styles.text(size, align)}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Link;

const styles = StyleSheet.create({
  text: (size, align) => ({
    fontSize: size,
    fontFamily: 'Poppins-Light',
    color: colors.text.secondary,
    textDecorationLine: 'underline',
    textAlign: align,
  }),
});
