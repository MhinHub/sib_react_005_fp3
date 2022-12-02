import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import {colors} from '../../../utils';

const Input = ({
  label,
  textContentType,
  onChangeText,
  value,
  secureTextEntry,
}) => {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        textContentType={textContentType}
        placeholder={`Masukkan ${label}`}
        value={value}
        onChange={onChangeText}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 10,
    padding: 12,
    marginBottom: 20,
  },
  label: {
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    color: colors.text.secondary,
    marginBottom: 7,
  },
});
