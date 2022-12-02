import {StyleSheet, View} from 'react-native';
import React from 'react';
import {Button, Gap, Header, Input, Link} from '../../components';
import {colors} from '../../utils';
import {useState} from 'react';
import {useDispatch} from 'react-redux';
import { signup } from '../../context/user/reducer';

const SignUp = ({navigation}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const onBtnClicked = () => {
    console.log('name: ' + name, 'email: ' + email, 'password: ' + password);
    dispatch(signup({name, email, password}));
    navigation.replace('MainApp');
  };

  // const [form, setForm] = useState({
  //   fullName: '',
  //   email: '',
  //   password: '',
  // });

  // const onInputChange = (value, input) => {
  //   setForm({
  //     ...form,
  //     [input]: value,
  //   });
  // };

  // const dispatch = useDispatch();
  // const sendData = () => {
  //   dispatch(login(form));
  //   console.log('data yang dikirim: ', form);
  // };

  return (
    <View style={styles.page}>
      <Header title="Daftar Akun" onPress={() => navigation.goBack()} />
      <View style={styles.content}>
        <Input
          label="Nama Lengkap"
          // value={form.name}
          // onChangeText={value => onInputChange(value, 'name')}
          textContentType="name"
          value={name}
          onChangeText={e => setName(e.nativeEvent.text)}
        />
        <Input
          label="Email"
          // value={form.email}
          // onChangeText={value => onInputChange(value, 'email')}
          textContentType="emailAddress"
          value={email}
          onChangeText={e => setEmail(e.nativeEvent.text)}
        />
        <Input
          label="Password"
          // value={form.password}
          // onChangeText={value => onInputChange(value, 'password')}
          textContentType="password"
          secureTextEntry
          value={password}
          onChangeText={e => setPassword(e.nativeEvent.text)}
          secureTextEntry
        />
        <Button title="Daftar" onPress={onBtnClicked} />
        <Gap height={30} />
        <Link
          title="Masuk Akun"
          size={16}
          align="center"
          onPress={() => navigation.navigate('SignIn')}
        />
      </View>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.white,
  },
  content: {
    padding: 40,
    paddingTop: 0,
  },
});
