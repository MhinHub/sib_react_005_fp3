import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors, fonts} from '../../utils';
import {Gap, Header, Card} from '../../components';
import {Hotel1} from '../../assets/Dummy';

const Content = ({title, desc}) => {
  return (
    <View style={styles.wrapperInfo}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.desc}>{desc}</Text>
    </View>
  );
};

const DetailBooking = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header title="Detail Pemesanan" onPress={() => navigation.goBack()} />
      <Gap height={10} />
      <Card
        title="Hotel Star Metro"
        img={Hotel1}
        location="Jakarta Pusat"
        rate="4.8"
        price="Rp. 500.000"
      />
      <Gap height={22} />
      <View style={styles.cardResume}>
        <Content title="Check In" desc="21 November 2022" />
        <Gap height={6} />
        <Content title="Check Out" desc="23 November 2022" />
        <Gap height={6} />
        <Content title="Guest" desc="3" />
      </View>
      <Gap height={22} />
      <View style={styles.cardResume}>
        <Content title="2 malam" desc="Rp. 900.000" />
        <Gap height={15} />
        <View style={styles.line} />
        <Gap height={15} />
        <Content title="Total" desc="Rp. 900.000" />
      </View>
    </View>
  );
};

export default DetailBooking;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.white,
  },
  containerResumeCard: {
    backgroundColor: colors.grey,
    paddingHorizontal: 20,
    marginHorizontal: 20,
  },
  wrapperInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 14,
    fontFamily: fonts.primary[400],
    color: colors.greymedium,
  },
  desc: {
    fontSize: 14,
    fontFamily: fonts.primary[400],
    color: colors.secondary,
  },
  cardResume: {
    backgroundColor: colors.grey,
    marginHorizontal: 20,
    paddingVertical: 20,
    borderRadius: 8,
  },
  line: {
    borderWidth: 0.7,
    borderBottomColor: colors.grey,
    marginHorizontal: 20,
  },
});
