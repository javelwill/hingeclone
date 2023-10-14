import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {router} from 'expo-router';
import VideoBackground from '@/components/video-background';
import {HingeLogo} from '@/constants/icons';
import {colors} from '@/constants/colors';
import {SafeAreaView} from 'react-native-safe-area-context';
import Spacer from '@/components/spacer';

const SignInScreen = () => {
  const [isSigningIn, setIsSigningIn] = useState(false);

  const handleSignIn = () => {
    setIsSigningIn((prev) => !prev);
  };

  const handleSignInWithPhoneNumber = () => {
    router.push('/(auth)/phone-number');
  };

  return (
    <VideoBackground source={require('@/assets/videos/background.mp4')}>
      <SafeAreaView style={styles.content}>
        <Spacer size={130} />
        <HingeLogo fill={colors.white} width={140} height={70} />
      </SafeAreaView>
    </VideoBackground>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({});
