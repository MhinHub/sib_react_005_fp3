import React from 'react';
import {StyleSheet, View} from 'react-native';
import {BookingCard, Gap, Header} from '../../components';

import {colors} from '../../utils';

const Pesanan = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header title="Pesanan" type="first" />
      <Gap height={30} />
      <BookingCard onPress={() => navigation.navigate('DetailBooking')} />
      <Gap height={15} />
      <BookingCard />
    </View>
  );
};

export default Pesanan;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.white,
  },
});
