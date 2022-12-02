import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Gap, Header} from '../../components';
import {colors, fonts} from '../../utils';
import List from '../../components/molecules/List';
import {Hotel1} from '../../assets/Dummy';
import {ScrollView} from 'react-native-gesture-handler';

const ProfileInfo = () => {
  return (
    <View style={styles.profileInfo}>
      <Gap height={20} />
      <View style={styles.photoContainer}>
        <Image source={Hotel1} style={styles.photo} />
      </View>
      <Gap height={20} />
      <Text style={styles.textName}>John</Text>
      <Text style={styles.textGmail}>john@gmail.com</Text>
    </View>
  );
};

const Profil = ({navigation}) => {
  return (
    <ScrollView style={styles.page} showsVerticalScrollIndicator={false}>
      <Header type="first" title="Profile" />
      <ProfileInfo />
      <Gap height={20} />
      <List
        title="Edit Profile"
        icon="profile"
        onPress={() => navigation.navigate('ProfileEdit')}
      />
      <List
        title="Nama Kelompok"
        icon="team"
        onPress={() => navigation.navigate('Team')}
      />
      <List
        title="Kontak dan Bantuan"
        icon="phone"
        onPress={() => navigation.navigate('Help')}
      />
      <List
        title="Tentang Aplikasi"
        icon="info"
        onPress={() => navigation.navigate('About')}
      />
    </ScrollView>
  );
};

export default Profil;

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.white,
    flex: 1,
  },
  profileInfo: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  textName: {
    fontFamily: fonts.primary[600],
    color: colors.secondary,
    fontSize: 20,
  },
  textGmail: {
    fontFamily: fonts.primary[400],
    color: colors.grey1,
    fontSize: 14,
  },
  photoContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  photo: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
});
