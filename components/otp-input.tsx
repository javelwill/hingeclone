import {colors} from '@/constants/colors';
import React, {useEffect, useRef, useState} from 'react';
import {Pressable, StyleSheet, Text, TextInput, View} from 'react-native';
import Type from './type';
import {ChevronDownIcon} from '@/constants/icons';
import {countries} from '@/constants/countries';
import {typography} from '@/constants/typography';
import CountryModal from './country-modal';
import {Country} from '@/constants/types';
import {
  AsYouType,
  validatePhoneNumberLength,
  CountryCode,
} from 'libphonenumber-js';
import {useFocusEffect} from 'expo-router';
import Cursor from './cursor';

type OtpInputProps = {
  onChangeInput: (input: string) => void;
  length?: number;
};

const OtpInput = ({onChangeInput, length = 6}: OtpInputProps) => {
  const [otp, setOtp] = useState('');
  const inputRef = useRef<TextInput>(null);

  const handleChangeText = (text: string) => {
    setOtp(text);
    onChangeInput(text);
  };

  useFocusEffect(() => {
    setTimeout(() => {
      inputRef.current?.focus();
    }, 100);
  });

  return (
    <>
      <View style={styles.container}>
        {Array.from({length}).map((_, index) => {
          const showCursor = otp.length === index;
          return (
            <View style={styles.box}>
              {showCursor ? (
                <Cursor></Cursor>
              ) : (
                <Type variant="displayMedium">{otp[index]}</Type>
              )}
            </View>
          );
        })}
      </View>
      <TextInput
        style={styles.input}
        selectionColor={colors.black}
        keyboardType="numeric"
        inputMode="numeric"
        textContentType="oneTimeCode"
        autoFocus
        value={otp}
        onChangeText={handleChangeText}
        ref={inputRef}
        maxLength={length}
      ></TextInput>
    </>
  );
};

export default OtpInput;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 10,
    height: 50,
  },
  input: {
    position: 'absolute',
    opacity: 0,
    height: 0,
    width: 0,
  },
  box: {
    borderBottomColor: colors.black,
    borderBottomWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
});
