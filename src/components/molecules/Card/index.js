import React from 'react';
import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {IconFavoritOutline, IconStar} from '../../../assets/Icon';
import {colors, fonts} from '../../../utils';

const Card = ({img, title, location, rate, price, onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.card}>
        <View style={styles.image}>
          <Image source={img} style={styles.img} />
        </View>
        <View style={styles.content}>
          <Text style={styles.titleHotel}>{title}</Text>
          <Text style={styles.textLoc}>{location}</Text>
          <View style={styles.divide}>
            <View>
              <View style={styles.rate}>
                <IconStar />
                <Text style={styles.numberRate}>{rate}</Text>
              </View>
              <Text style={styles.price}>{price}</Text>
            </View>
            <TouchableOpacity style={styles.favorit}>
              <IconFavoritOutline style={styles.iconFavorit} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

export default Card;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    backgroundColor: colors.grey,
    borderRadius: 10,
  },
  card: {
    flexDirection: 'row',
    paddingHorizontal: 10,
  },
  image: {
    paddingLeft: 10,
    paddingVertical: 5,
  },
  img: {
    borderRadius: 10,
    alignContent: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  content: {
    flex: 1,
    paddingHorizontal: 15,
    justifyContent: 'center',
  },
  titleHotel: {
    fontFamily: fonts.primary[600],
    fontSize: 16,
    color: colors.text.primary,
  },
  textLoc: {
    fontFamily: fonts.primary[500],
    fontSize: 12,
    color: colors.text.secondary,
  },
  rate: {
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center',
  },
  numberRate: {
    fontFamily: fonts.primary[600],
    color: colors.yellow,
    paddingLeft: 7,
  },
  price: {
    fontFamily: fonts.primary[500],
    color: colors.primary,
    fontSize: 14,
  },
  divide: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  favorit: {
    justifyContent: 'center',
  },
  iconFavorit: {
    width: '150%',
    height: '150%',
  },
});
