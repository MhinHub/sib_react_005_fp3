import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {IconStar} from '../../../assets';
import {colors, fonts} from '../../../utils';
import {Gap} from '../../atoms';

const Review = ({img, rate, desc, name}) => {
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <View style={styles.wrapperLabel}>
          <Image source={img} style={styles.image} />
          <Text style={styles.name}>{name}</Text>
        </View>
        <View style={styles.wrapperRate}>
          <IconStar />
          <Text style={styles.rate}>{rate}</Text>
        </View>
      </View>
      <Gap height={10} />
      <Text style={styles.desc}>{desc}</Text>
      <Gap height={15} />
      <View style={styles.line} />
    </View>
  );
};

export default Review;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
  },
  image: {
    width: 27,
    height: 27,
    borderRadius: 20,
  },
  rate: {
    fontFamily: fonts.primary[600],
    color: colors.yellow,
    marginTop: 3,
    fontSize: 14,
    paddingLeft: 8,
  },
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  wrapperRate: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingRight: 10,
  },
  wrapperLabel: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  name: {
    fontFamily: fonts.primary[600],
    color: colors.secondary,
    fontSize: 14,
    paddingLeft: 10,
  },
  line: {
    height: 0.3,
    borderBottomColor: colors.border,
    borderWidth: 0.2,
  },
});
