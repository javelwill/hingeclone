import {Slot, SplashScreen} from 'expo-router';
import React, {useEffect} from 'react';
import {useFonts} from 'expo-font';
import {fonts} from '../constants/fonts';
import {ThemeProvider, DefaultTheme} from '@react-navigation/native';
import {colors} from '@/constants/colors';

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

  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: colors.white,
    },
  };

  return (
    <ThemeProvider value={theme}>
      <Slot />
    </ThemeProvider>
  );
};

export default AppLayout;
