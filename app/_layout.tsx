import {Slot, SplashScreen} from 'expo-router';
import React, {useEffect} from 'react';
import {useFonts} from 'expo-font';
import {fonts} from '../constants/fonts';

SplashScreen.preventAutoHideAsync();

const AppLayout = () => {
  const [fontsLoaded, fontError] = useFonts(fonts);

  useEffect(() => {
    if (fontsLoaded || fontError) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return <Slot />;
};

export default AppLayout;
