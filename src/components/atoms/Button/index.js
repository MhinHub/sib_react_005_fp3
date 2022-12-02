import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {colors} from '../../../utils';
import IconOnly from './IconOnly';

const Button = ({title, type, icon, onPress}) => {
  if (type === 'icon-only') {
    return <IconOnly icon={icon} onPress={onPress} />;
  }
  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.8}
      onPress={onPress}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    backgroundColor: colors.primary,
    borderRadius: 10,
    alignSelf: 'center',
    width: 280,
  },
  title: {
    color: colors.white,
    fontFamily: 'Poppins-Medium',
    fontSize: 18,
    textAlign: 'center',
  },
});
