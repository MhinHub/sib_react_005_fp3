import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors, fonts} from '../../../utils';

const Title = ({title}) => {
  return <Text style={styles.title}>{title}</Text>;
};

export default Title;

const styles = StyleSheet.create({
  title: {
    fontFamily: fonts.primary[600],
    color: colors.primary,
    fontSize: 16,
    paddingLeft: 20,
  },
});
