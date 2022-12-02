import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors} from '../../../utils';
import {Button, Gap} from '../../atoms';

const Header = ({title, onPress, type}) => {
  if (type === 'first') {
    return (
      <>
        <View style={styles.containerFirst}>
          <Text style={styles.textFirst}>{title}</Text>
        </View>
      </>
    );
  }
  return (
    <View style={styles.container}>
      <Button type="icon-only" icon="back-dark" onPress={onPress} />
      <Text style={styles.text}>{title}</Text>
      <Gap width={24} />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 30,
    backgroundColor: colors.white,
    flexDirection: 'row',
    alignItems: 'center',
  },
  containerFirst: {
    paddingHorizontal: 30,
    borderBottomWidth: 2,
    borderBottomColor: colors.border,
    paddingVertical: 30,
    backgroundColor: colors.white,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0.5, height: 0.5},
    shadowOpacity: 0.4,
    shadowRadius: 3,
    elevation: 3,
  },
  text: {
    flex: 1,
    textAlign: 'center',
    fontFamily: 'Poppins-Medium',
    fontSize: 20,
    color: colors.text.primary,
  },
  textFirst: {
    textAlign: 'center',
    fontFamily: 'Poppins-Medium',
    fontSize: 20,
    color: colors.text.primary,
  },
});
