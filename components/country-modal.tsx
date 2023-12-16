import {
  Modal,
  Pressable,
  SafeAreaView,
  SectionList,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import Type from './type';
import {CloseIcon} from '@/constants/icons';
import {colors} from '@/constants/colors';
import {countries} from '@/constants/countries';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Country} from '@/constants/types';
import Spacer from './spacer';

const sections = [
  {
    title: 'main',
    data: countries.filter(({code}) =>
      ['JM', 'US', 'AU', 'CA', 'UK'].includes(code)
    ),
  },
  {
    title: 'side',
    data: countries.filter(
      ({code}) => !['JM', 'US', 'AU', 'CA', 'UK'].includes(code)
    ),
  },
];

type CountryModalProps = {
  visible: boolean;
  onClose: () => void;
  onSelectCountry: (country: Country) => void;
};

const CountryModal = ({
  visible,
  onClose,
  onSelectCountry,
}: CountryModalProps) => {
  return (
    <Modal visible={visible} animationType="slide">
      <SafeAreaView style={styles.modal}>
        <View style={styles.header}>
          <Type style={styles.title} variant="titleBold" textAlign="center">
            Select Country
          </Type>
          <Pressable style={styles.close} onPress={onClose}>
            <CloseIcon />
          </Pressable>
        </View>
        <SectionList
          sections={sections}
          renderItem={({item}) => (
            <TouchableOpacity onPress={() => onSelectCountry(item)}>
              <View style={styles.countryItem}>
                <Type>{item.name}</Type>
                <View style={styles.right}>
                  <Text>{item.flag}</Text>
                  <Type>{item.dialCode}</Type>
                </View>
              </View>
            </TouchableOpacity>
          )}
          ItemSeparatorComponent={() => (
            <Spacer size={1} backgroundColor="lightGrey2" />
          )}
          renderSectionFooter={({section: {title}}) => {
            if (title === 'main') {
              return <Spacer size={20} backgroundColor="lightGrey2" />;
            }
            return null;
          }}
        />
      </SafeAreaView>
    </Modal>
  );
};

export default CountryModal;

const styles = StyleSheet.create({
  modal: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: colors.lightGrey2,
    borderBottomWidth: 1,
    paddingVertical: 8,
  },
  title: {
    flex: 1,
  },
  close: {
    position: 'absolute',
    right: 20,
  },
  countryItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
  },
  right: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
});
