import {colors} from '@/constants/colors';
import React from 'react';
import {View} from 'react-native';

type SpacerProps = {
  size?: number;
  horizontal?: boolean;
  backgroundColor?: keyof typeof colors | 'transparent';
};

const Spacer = ({
  size,
  horizontal,
  backgroundColor = 'transparent',
}: SpacerProps) => {
  return (
    <View
      style={[
        {
          backgroundColor:
            backgroundColor === 'transparent'
              ? 'transparent'
              : colors[backgroundColor],
        },
        {
          height: horizontal ? undefined : size,
          width: !horizontal ? undefined : size,
        },
      ]}
    ></View>
  );
};

export default Spacer;
