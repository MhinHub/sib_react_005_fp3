import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors, fonts} from '../../utils';
import {Gap, Header} from '../../components';
import {HelpCenter, IconAddress, IconEmail, IconWhatsapp} from '../../assets';
import {ScrollView} from 'react-native-gesture-handler';

const CardInfo = ({icon, title, info}) => {
  const Icon = () => {
    switch (icon) {
      case 'whatsapp':
        return <IconWhatsapp />;
      case 'email':
        return <IconEmail />;
      case 'address':
        return <IconAddress />;
      default:
        return <IconEmail />;
    }
  };

  return (
    <View style={styles.container}>
      <View>
        <Icon />
      </View>
      <View style={styles.infoWrapper}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.info}>{info}</Text>
      </View>
    </View>
  );
};

const Help = ({navigation}) => {
  return (
    <ScrollView style={styles.page} showsVerticalScrollIndicator={false}>
      <Header title="Kontak & Bantuan" onPress={() => navigation.goBack()} />
      <Gap height={20} />
      <View style={styles.imageWrapper}>
        <Image source={HelpCenter} />
      </View>
      <Gap height={40} />
      <CardInfo icon="whatsapp" title="Whatsapp" info="0812345678"/>
      <Gap height={12} />
      <CardInfo icon="email" title="Email" info="cs@hotelio.com" />
      <Gap height={12} />
      <CardInfo icon="address" title="Alamat" info="Jl. Ke Negeri Wakanda" />
      <Gap height={40} />
    </ScrollView>
  );
};

export default Help;

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.white,
    flex: 1,
  },
  imageWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flexDirection: 'row',
    borderWidth: 1,
    paddingHorizontal: 18,
    paddingVertical: 18,
    borderRadius: 10,
    marginHorizontal: 30,
    alignItems: 'center',
    borderColor: colors.border,
  },
  infoWrapper: {
    marginLeft: 20,
  },
  title: {
    fontFamily: fonts.primary[400],
    color: colors.grey1,
    fontSize: 14,
  },
  info: {
    fontFamily: fonts.primary[400],
    color: colors.secondary,
    fontSize: 16,
  },
  icon: {
    width: 50,
    height: 50,
  },
});
