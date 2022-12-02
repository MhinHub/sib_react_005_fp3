import React, {useEffect} from 'react';
import {StatusBar, StyleSheet, Text, View} from 'react-native';
import {ILLogo} from '../../assets';
import {colors, fonts} from '../../utils';

const Splashscreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('AppIntro');
    }, 2000);
  }, []);
  return (
    <View style={styles.page}>
      <StatusBar
        barStyle="white-content"
        translucent={true}
        backgroundColor="transparent"
      />
      <ILLogo />
      <Text style={styles.text}>HOTELIO</Text>
    </View>
  );
};

export default Splashscreen;

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  text: {
    color: 'white',
    marginTop: 12,
    fontSize: 25,
    fontFamily: fonts.primary[500],
  },
});
