import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {ChevronRightIcon, DotIcon, PhoneIcon} from '@/constants/icons';
import {colors} from '@/constants/colors';
import Spacer from '@/components/spacer';
import Type from '@/components/type';
import PhoneInput from '@/components/phone-input';
import {Link} from 'expo-router';
import {links} from '@/constants/links';
import ActionBtn from '@/components/action-btn';

const PhoneNumberScreen = () => {
  return (
    <>
      <View style={styles.content}>
        <Spacer size={30} />
        <View style={styles.icons}>
          <PhoneIcon height={40} width={40} />
          <DotIcon height={5} width={5} fill={colors.lightGrey1} />
        </View>
        <Spacer size={10} />
        <Type variant="displayLarge">What's your phone number?</Type>
        <Spacer size={70} />
        <PhoneInput />
        <Spacer size={10} />
        <Type variant="bodySmall" color="grey2">
          Hinge will send you a text with a verification code. Message and data
          rates may apply.
        </Type>
        <Spacer size={40} />
        <Link
          href={{
            pathname: '/(auth)/help-center',
            params: {
              url: links.phoneNumber,
            },
          }}
          suppressHighlighting={true}
        >
          <Type variant="bodySmallBold" color="primaryDark">
            What if my number changes?
          </Type>
        </Link>
      </View>
      <KeyboardAvoidingView
        style={styles.action}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={100}
      >
        <ActionBtn backgroundColor="lightGrey2">
          <ChevronRightIcon height={32} width={32} fill={colors.grey2} />
        </ActionBtn>
      </KeyboardAvoidingView>
    </>
  );
};

export default PhoneNumberScreen;

const styles = StyleSheet.create({
  content: {
    flex: 1,
    paddingHorizontal: 20,
  },
  icons: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  action: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    padding: 20,
  },
});
