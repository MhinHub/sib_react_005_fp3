import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors} from '../../utils';
import {Gap, Header, Input} from '../../components';
import {Hotel1} from '../../assets/Dummy';

const Photo = () => {
  return (
    <View>
      <View style={styles.photoContainer}>
        <Image source={Hotel1} style={styles.photo} />
      </View>
    </View>
  );
};

const ProfileEdit = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header title="Edit Profile" onPress={() => navigation.goBack()} />
      <View style={styles.container}>
        <Photo />
        <Gap height={30} />
        <Input label="Nama" />
        <Gap height={20} />
        <Input label="Np Hp" />
        <Gap height={20} />
        <Input label="Email" />
      </View>
    </View>
  );
};

export default ProfileEdit;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.white,
  },
  container: {
    paddingHorizontal: 40,
  },
  photoContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    alignSelf: 'center',
  },
  photo: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
});
