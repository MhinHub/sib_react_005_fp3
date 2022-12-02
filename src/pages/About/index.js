import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {IconBackWhite, ILLogo} from '../../assets';
import {Gap} from '../../components';
import {colors, fonts} from '../../utils';

const About = ({navigation}) => {
  return (
    <>
      <Pressable style={styles.button} onPress={() => navigation.goBack()}>
        <IconBackWhite />
      </Pressable>
      <View style={styles.page}>
        <Text style={styles.brand}>HOTELIO</Text>
        <Gap height={8} />
        <Text style={styles.text}>Versi 0.0.1</Text>
        <Gap height={30} />
        <ILLogo style={styles.logo} />
        <Gap height={30} />
        <Text style={styles.text}>@2022 - Kelompok 1 RCTN-KS05</Text>
        <Gap height={8} />
        <Text style={styles.text}>HOTELIO TEAM HACTIV8</Text>
      </View>
    </>
  );
};

export default About;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    height: 50,
    borderRadius: 10,
    backgroundColor: colors.primary,
    position: 'absolute',
    zIndex: 99,
    marginLeft: 20,
    marginTop: 20,
  },
  brand: {
    fontFamily: fonts.primary[600],
    color: colors.white,
    fontSize: 25,
  },
  text: {
    fontSize: 16,
    color: colors.white,
    fontFamily: fonts.primary[400],
  },
  logo: {
    width: 130,
    height: 130,
  },
});
