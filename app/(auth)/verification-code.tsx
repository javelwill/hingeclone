import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {Link, router, useLocalSearchParams} from 'expo-router';
import ActionBtn from '@/components/action-btn';
import PhoneInput from '@/components/phone-input';
import Spacer from '@/components/spacer';
import Type from '@/components/type';
import {colors} from '@/constants/colors';
import {
  PhoneIcon,
  DotIcon,
  ChevronRightIcon,
  ShieldIcon,
} from '@/constants/icons';
import {links} from '@/constants/links';
import OtpInput from '@/components/otp-input';

const VerificationCodeScreen = () => {
  const {dialCode, nationalNumber, code} = useLocalSearchParams<{
    dialCode: string;
    nationalNumber: string;
    code: string;
  }>();

  const [otp, setOtp] = useState('');

  const isValid = otp.length === 6;

  const handleSubmit = () => {};
  return (
    <>
      <View style={styles.content}>
        <Spacer size={30} />
        <View style={styles.icons}>
          <DotIcon height={5} width={5} fill={colors.black} />
          <ShieldIcon height={40} width={40} />
        </View>
        <Spacer size={10} />
        <Type variant="displayLarge">Enter your verification code</Type>
        <Spacer size={40} />
        <Type variant="bodySmall" color="grey2">
          Sent to {nationalNumber + '  '}
          <Link href={'../'}>
            <Type variant="bodySmallBold" color="primaryDark">
              Edit
            </Type>
          </Link>
        </Type>
        <Spacer size={10} />
        <OtpInput onChangeInput={setOtp} />
        <Spacer size={10} />
        <Spacer size={40} />
        <Link href={'../'} suppressHighlighting={true}>
          <Type variant="bodySmallBold" color="primaryDark">
            Didn't get a code?
          </Type>
        </Link>
      </View>
      <KeyboardAvoidingView
        style={styles.action}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={100}
      >
        <ActionBtn
          onPress={handleSubmit}
          disabled={!isValid}
          backgroundColor={isValid ? 'primaryDark' : 'lightGrey2'}
        >
          <ChevronRightIcon
            height={32}
            width={32}
            fill={isValid ? colors.white : colors.grey2}
          />
        </ActionBtn>
      </KeyboardAvoidingView>
    </>
  );
};

export default VerificationCodeScreen;

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
    zIndex: -1,
  },
});
