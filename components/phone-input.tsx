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

type PhoneInputProps = {
  onChangeNumber: (number: {
    dialCode: string;
    nationalNumber: string;
    code: string;
  }) => void;
};

const PhoneInput = ({onChangeNumber}: PhoneInputProps) => {
  const [country, setCountry] = useState(countries[0]);
  const [modalVisible, setModalVisible] = useState(false);
  const [nationalNumber, setNationalNumber] = useState('');
  const inputRef = useRef<TextInput>(null);

  const handleToggleModal = () => {
    setModalVisible(!modalVisible);
  };

  const handleChangeCountry = (country: Country) => {
    setCountry(country);
    handleToggleModal();
  };

  const handleChangeText = (text: string) => {
    const inValid =
      validatePhoneNumberLength(
        new AsYouType().input(dialCode + text).replace(dialCode, ''),
        code as CountryCode
      ) === 'TOO_LONG';

    if (inValid) {
      return;
    }

    setNationalNumber(
      new AsYouType().input(dialCode + text).replace(dialCode, '')
    );
  };

  useEffect(() => {
    onChangeNumber({dialCode, nationalNumber, code});
  }, [nationalNumber, country]);

  useFocusEffect(() => {
    setTimeout(() => {
      inputRef.current?.focus();
    }, 100);
  });

  const {flag, dialCode, code} = country;
  return (
    <>
      <CountryModal
        visible={modalVisible}
        onClose={handleToggleModal}
        onSelectCountry={handleChangeCountry}
      />
      <View style={styles.container}>
        <Pressable onPress={handleToggleModal}>
          <View style={styles.countryContainer}>
            {dialCode.length <= 3 && <Text style={styles.flag}>{flag}</Text>}
            <Type variant="displayMedium">{dialCode}</Type>
            <ChevronDownIcon width={15} height={15} />
          </View>
        </Pressable>
        <TextInput
          style={styles.input}
          selectionColor={colors.black}
          keyboardType="numeric"
          inputMode="numeric"
          textContentType="telephoneNumber"
          autoFocus
          value={nationalNumber}
          onChangeText={handleChangeText}
          ref={inputRef}
        ></TextInput>
      </View>
    </>
  );
};

export default PhoneInput;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 32,
  },
  countryContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: colors.black,
    borderBottomWidth: 1,
  },
  flag: {
    fontSize: 28,
    marginRight: 8,
  },
  input: {
    flex: 1,
    borderBottomColor: colors.black,
    borderBottomWidth: 1,
    ...typography.displayMedium,
  },
});
