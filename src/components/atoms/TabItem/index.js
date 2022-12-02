import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {
  IconBeranda,
  IconBerandaActive,
  IconFavorit,
  IconFavoritActive,
  IconPesanan,
  IconPesananActive,
  IconProfil,
  IconProfileActive,
} from '../../../assets';
import {colors, fonts} from '../../../utils';

const TabItem = ({title, active, onPress, onLongPress}) => {
  const Icon = () => {
    if (title === 'Beranda') {
      return active ? <IconBerandaActive /> : <IconBeranda />;
    }
    if (title === 'Favorit') {
      return active ? <IconFavoritActive /> : <IconFavorit />;
    }
    if (title === 'Pesanan') {
      return active ? <IconPesananActive /> : <IconPesanan />;
    }
    if (title === 'Profil') {
      return active ? <IconProfileActive /> : <IconProfil />;
    }
    return <IconBeranda />;
  };
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      onLongPress={onLongPress}
      activeOpacity={0.7}>
      <Icon />
      <Text style={styles.text(active)}>{title}</Text>
    </TouchableOpacity>
  );
};

export default TabItem;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  text: active => ({
    fontSize: 11,
    color: active ? colors.text.menuActive : colors.text.menuInactive,
    fontFamily: fonts.primary[400],
    marginTop: 4,
  }),
});
