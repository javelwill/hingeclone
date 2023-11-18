import {colors} from '@/constants/Colors';
import {MotiPressable} from 'moti/interactions';
import React, {useMemo} from 'react';
import {StyleSheet} from 'react-native';

type ActionBtnProps = {
  onPress?: () => void;
  backgroundColor?: keyof typeof colors | 'transparent';
  size?: number;
  style?: any;
  children: React.ReactNode;
};

const ActionBtn = ({
  onPress,
  backgroundColor = 'white',
  size = 52,
  style,
  children,
}: ActionBtnProps) => {
  return (
    <MotiPressable
      onPress={onPress}
      style={[
        {
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 10,
          height: size,
          width: size,
          backgroundColor:
            backgroundColor === 'transparent'
              ? 'transparent'
              : colors[backgroundColor],
          borderRadius: size,
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
      {children}
    </MotiPressable>
  );
};

export default ActionBtn;

const styles = StyleSheet.create({});
