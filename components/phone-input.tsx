import {colors} from '@/constants/Colors';
import React from 'react';
import {StyleSheet, TextInput} from 'react-native';

const PhoneInput = () => {
  return (
    <TextInput
      keyboardType="numeric"
      style={{
        backgroundColor: colors.lightGrey1,
        height: 50,
      }}
    ></TextInput>
  );
};

export default PhoneInput;

const styles = StyleSheet.create({});
