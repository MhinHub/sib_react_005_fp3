import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Hotel1} from '../../../assets/Dummy';
import {colors, fonts} from '../../../utils';
import {Gap} from '../../atoms';

const BookingCard = ({onPress}) => {
  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.8}
      onPress={onPress}>
      <View style={styles.card}>
        {/* image */}
        <View style={styles.image}>
          <Image source={Hotel1} style={styles.img} />
        </View>
        {/* hotel */}
        <View style={styles.content}>
          <Text style={styles.titleHotel}>Hotel Star</Text>
          <Gap height={4} />
          <Text style={styles.textLoc}>Jakarta Pusa</Text>
          <Gap height={4} />
          <View style={styles.wrapperStatus}>
            <Text style={styles.statusText}>Unpaid</Text>
          </View>
        </View>
      </View>
      <Gap height={10} />
      <View style={styles.line} />
      <Gap height={10} />
      <View style={styles.containerAction}>
        <TouchableOpacity style={styles.wrapperCancel} activeOpacity={0.8}>
          <Text style={styles.textCancel}>Batalkan Pesanan</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.wrapperSee} activeOpacity={0.7}>
          <Text style={styles.textSee}>Lihat Tiket</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export default BookingCard;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    backgroundColor: colors.grey,
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 18,
  },
  card: {
    flexDirection: 'row',
  },
  img: {
    borderRadius: 10,
    alignContent: 'center',
    justifyContent: 'center',
    // marginVertical: 10,
  },
  image: {
    // paddingVertical: 5,
    
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
  content: {
    // flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 15,
    // paddingVertical: 15,
  },
  statusText: {
    fontFamily: fonts.primary[500],
    fontSize: 12,
    color: colors.primary,
    paddingVertical: 3,
    paddingHorizontal: 7,
    textAlign: 'center',
  },
  wrapperStatus: {
    backgroundColor: 'rgba(37, 143, 218, 0.2)',
    borderRadius: 8,
  },
  line: {
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  textCancel: {
    fontFamily: fonts.primary[500],
    fontSize: 12,
    color: colors.primary,
    paddingVertical: 5,
    paddingHorizontal: 15,
  },
  wrapperCancel: {
    borderColor: colors.primary,
    borderWidth: 1,
    borderRadius: 10,
  },
  wrapperSee: {
    backgroundColor: colors.primary,

    borderRadius: 10,
  },
  containerAction: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  textSee: {
    fontFamily: fonts.primary[500],
    fontSize: 12,
    color: colors.white,
    paddingVertical: 5,
    paddingHorizontal: 15,
    // alignSelf: 'flex-end',
  },
});
