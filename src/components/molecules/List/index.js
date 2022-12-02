import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {
  IconArrowGrey,
  IconInfo,
  IconPhone,
  IconProfil,
  IconProfile,
  IconTeam,
} from '../../../assets';
import {colors, fonts} from '../../../utils';

const List = ({title, onPress, icon}) => {
  const Icon = () => {
    switch (icon) {
      case 'profile':
        return <IconProfile />;
      case 'team':
        return <IconTeam />;
      case 'phone':
        return <IconPhone />;
      case 'info':
        return <IconInfo />;
      default:
        return <IconProfil />;
    }
  };
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.wrapper}>
        <Icon />
        <View style={styles.content}>
          <Text style={styles.title}>{title}</Text>
        </View>
        <IconArrowGrey />
      </View>
    </TouchableOpacity>
  );
};

export default List;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: 25,
    paddingHorizontal: 30,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  content: {
    flex: 1,
    marginLeft: 30,
    justifyContent: 'center',
  },
  title: {
    fontSize: 14,
    fontFamily: fonts.primary[500],
    color: colors.grey1,
  },
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
