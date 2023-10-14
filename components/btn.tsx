import {Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useMemo} from 'react';
import {MotiPressable} from 'moti/interactions';
import {colors} from '@/constants/colors';

type BtnProps = {
  onPress?: () => void;
  backgroundColor?: keyof typeof colors | 'transparent';
  width?: number | 'auto';
  height?: number;
  startIcon?: React.ReactNode;
  style?: any;
  children: React.ReactNode;
};

const Btn = ({
  onPress,
  backgroundColor = 'white',
  width = 'auto',
  height = 52,
  startIcon,
  style,
  children,
}: BtnProps) => {
  return (
    <MotiPressable
      onPress={onPress}
      style={[
        {
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 10,
          height,
          width,
          backgroundColor:
            backgroundColor === 'transparent'
              ? 'transparent'
              : colors[backgroundColor],
          borderRadius: height,
          paddingHorizontal: height / 2,
        },
        style,
      ]}
      animate={useMemo(
        () =>
          ({hovered, pressed}) => {
            'worklet';

            return {
              scale: hovered || pressed ? 0.95 : 1,
            };
          },
        []
      )}
    >
      {startIcon}
      {children}
    </MotiPressable>
  );
};

export default Btn;

const styles = StyleSheet.create({});
