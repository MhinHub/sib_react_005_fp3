import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors, fonts} from '../../../utils';

const MiniCard = ({img, title}) => {
  return (
    <>
      <View style={styles.miniCard}>
        <View style={styles.container}>
          <Image source={img} styles={styles.img} />
        </View>
        <Text style={styles.title}>{title}</Text>
      </View>
    </>
  );
};

export default MiniCard;

const styles = StyleSheet.create({
  container: {
    width: 66,
    height: 66,
    borderRadius: 12,
    backgroundColor: colors.primary,
  },
  img: {
    width: 66,
    height: 66,
  },
  miniCard: {
    flexDirection: 'column',
  },
  title: {
    fontFamily: fonts.primary[400],
    textAlign: 'center',
    color: colors.text.primary,
  },
});
