import {colors} from '@/constants/colors';
import React, {useState} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import Type from './type';
import {ChevronDownIcon} from '@/constants/icons';
import {countries} from '@/constants/countries';
import {typography} from '@/constants/typography';

const PhoneInput = () => {
  const [country, setCountry] = useState(countries[0]);

  const {flag, dialCode} = country;
  return (
    <View style={styles.container}>
      <View style={styles.countryContainer}>
        <Text style={styles.flag}>{flag}</Text>
        <Type variant="displayMedium">{dialCode}</Type>
        <ChevronDownIcon width={15} height={15} />
      </View>
      <TextInput
        style={styles.input}
        selectionColor={colors.black}
        keyboardType="numeric"
        inputMode="numeric"
        textContentType="telephoneNumber"
        autoFocus
      ></TextInput>
    </View>
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
