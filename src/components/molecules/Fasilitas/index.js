import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  IconApartment,
  IconBathroom,
  IconBedroom,
  IconKitchen,
  IconWifi,
} from '../../../assets';
import {Gap} from '../../atoms';
import {colors, fonts} from '../../../utils';

const Fasilitas = ({apartment, bedrooms, bathrooms, kitchen}) => {
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <View style={styles.wrapperLabel}>
          <IconApartment style={styles.icon} />
          <Text style={styles.label}>{apartment}</Text>
        </View>
        <Gap width={10} />
        <View style={styles.wrapperLabel}>
          <IconBedroom style={styles.icon} />
          <Text style={styles.label}>{bedrooms} Bedrooms</Text>
        </View>
        <Gap width={10} />
        <View style={styles.wrapperLabel}>
          <IconBathroom style={styles.icon} />
          <Text style={styles.label}>{bathrooms} Bathroom</Text>
        </View>
        <Gap width={10} />
        <View style={styles.wrapperLabel}>
          <IconKitchen style={styles.icon} />
          <Text style={styles.label}>{kitchen}</Text>
        </View>
      </View>
    </View>
  );
};

export default Fasilitas;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
  },
  wrapper: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  wrapperLabel: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 14,
    fontFamily: fonts.primary[400],
    color: colors.greymedium,
    marginTop: 3,
  },
  icon: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
