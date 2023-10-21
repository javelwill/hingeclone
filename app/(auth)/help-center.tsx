import {useLocalSearchParams} from 'expo-router';
import React from 'react';
import {WebView} from 'react-native-webview';

const HelpCenterScreen = () => {
  const {url} = useLocalSearchParams<{url: string}>();
  return <WebView source={{uri: url}} />;
};

export default HelpCenterScreen;
