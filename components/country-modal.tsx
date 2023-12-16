import {
  Modal,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import Type from './type';
import {CloseIcon} from '@/constants/icons';
import {colors} from '@/constants/colors';

type CountryModalProps = {
  visible: boolean;
  onClose: () => void;
  onSelectCountry: () => void;
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
});
