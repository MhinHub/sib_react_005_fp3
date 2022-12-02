import React from 'react';
import {Alert, StyleSheet, Text, View} from 'react-native';
import {LogoBlue} from '../../assets';
import {Button, Gap, Input, Link} from '../../components';
import {colors} from '../../utils';
import {useState} from 'react';
import {useSelector} from 'react-redux';

const SignIn = ({navigation}) => {
  const [email, setEmail] = useState('john@mail.com');
  const [password, setPassword] = useState('123john');

  const {email: defaultEmail, password: defaultPassword} = useSelector(
    state => state.user.user,
  );

  const onBtnClicked = () => {
    const isEmailMatch = email === defaultEmail;
    const isPasswordMatch = password === defaultPassword;
    isEmailMatch && isPasswordMatch
      ? navigation.replace('MainApp')
      : Alert.alert('Email atau Password salah');
  };
  return (
    <View style={styles.page}>
      <LogoBlue />
      <Text style={styles.title}>Masuk dan mulai{'\n'}menginap</Text>
      <Gap height={38} />
      <Input
        label="Email Address"
        textContentType="emailAddress"
        value={email}
        onChangeText={e => setEmail(e.nativeEvent.text)}
      />
      <Input
        label="Password"
        textContentType="password"
        value={password}
        onChangeText={e => setPassword(e.nativeEvent.text)}
        secureTextEntry
      />
      <Gap height={18} />
      <Button title="Masuk" onPress={onBtnClicked} />
      <Gap height={30} />
      <Link
        title="Buat Akun"
        size={16}
        align="center"
        onPress={() => navigation.navigate('SignUp')}
      />
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.white,
    padding: 40,
  },
  title: {
    fontFamily: 'Poppins-Medium',
    fontSize: 20,
    color: colors.text.primary,
  },
});
