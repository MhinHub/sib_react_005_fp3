import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Wisata1} from '../../../assets/Dummy';
import {colors, fonts} from '../../../utils';

const TourCard = ({title, img}) => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.image}>
          <Image source={img} style={styles.img} />
        </View>
        <Text style={styles.title}>{title}</Text>
      </View>
    </View>
  );
};

export default TourCard;

const styles = StyleSheet.create({
  container: {
    width: 140,
    height: 147,
    borderRadius: 16,
    borderColor: colors.border,
    borderWidth: 0.3,
    borderRadius: 8,
    shadowOffset: {width: 0, height: 1},
    backgroundColor: colors.white,
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
  },
  card: {},
  image: {
    width: 120,
    height: 110,
    backgroundColor: 'yellow',
    marginTop: 9,
    borderRadius: 12,
    alignSelf: 'center',
  },
  img: {
    borderRadius: 8,
  },
  title: {
    marginTop: 3,
    fontSize: 14,
    fontFamily: fonts.primary[500],
    textAlign: 'center',
    color: colors.text.primary,
  },
});
