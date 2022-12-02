import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Card, Gap, Header} from '../../components';
import {colors} from '../../utils';
import {Hotel3} from '../../assets/Dummy';

const Favorit = () => {
  return (
    <View style={styles.page}>
      <Header title="Favorit" type="first" />
      <Gap height={24} />
      <View style={styles.wrapper}>
        <Card
          img={Hotel3}
          title="Hotel Santika"
          location="Tebet, Jakarta Utara"
          rate={4.8}
          price="Rp. 450.000"
        />
        <Gap height={12} />
        <Card
          img={Hotel3}
          title="Hotel Santika"
          location="Tebet, Jakarta Utara"
          rate={4.8}
          price="Rp. 450.000"
        />
      </View>
    </View>
  );
};

export default Favorit;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.white,
  },
});
