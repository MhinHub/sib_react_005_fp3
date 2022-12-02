import React from 'react';
import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import {ImageIrfan, ImageMuhaemin, ImageVika} from '../../assets';
import {Gap, Header} from '../../components';
import {colors, fonts} from '../../utils';

const CardTeam = ({name, code, img}) => {
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <View style={styles.imageWrapper}>
          <Image source={img} />
        </View>
        <View style={styles.textWrapper}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.code}>{code}</Text>
          <Text style={styles.name}>Hactiv8</Text>
        </View>
      </View>
    </View>
  );
};
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const Team = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header title="Nama Kelompok" onPress={() => navigation.goBack()} />
      <Gap height={10} />
      <View style={styles.cardTitle}>
        <Text style={styles.title}>Developer Team 1 - Project 3</Text>
      </View>
      <Gap height={20} />
      <CardTeam
        name="Muhammad Irfan Zidni"
        img={ImageIrfan}
        code="RCTN-KS05-002"
      />
      <Gap height={12} />
      <CardTeam
        name="Muhaemin Iskandar"
        img={ImageMuhaemin}
        code="RCTN-KS05-001"
      />
      <Gap height={12} />
      <CardTeam name="Vika Alpiana" img={ImageVika} code="RCTN-KS05-004" />
    </View>
  );
};

export default Team;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.white,
  },
  container: {
    marginHorizontal: 20,
    width: WIDTH * 0.9,
    height: 125,
    backgroundColor: colors.grey,
    borderRadius: 10,
  },

  name: {
    fontFamily: fonts.primary[400],
    fontSize: 16,
    color: colors.secondary,
  },
  code: {
    fontFamily: fonts.primary[400],
    fontSize: 16,
    color: colors.grey1,
  },
  wrapper: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    alignItems: 'center',
    flex: 1,
  },
  textWrapper: {
    paddingLeft: 15,
  },
  cardTitle: {
    backgroundColor: colors.primary,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 40,
  },
  title: {
    fontFamily: fonts.primary[400],
    color: colors.white,
    fontSize: 16,
    paddingHorizontal: 15,
    paddingVertical: 15,
  },
});
