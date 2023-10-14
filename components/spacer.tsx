import React from 'react';
import {View} from 'react-native';

type SpacerProps = {
  size?: number;
  horizontal?: boolean;
};

const Spacer = ({size, horizontal}: SpacerProps) => {
  return (
    <View
      style={{
        height: horizontal ? undefined : size,
        width: !horizontal ? undefined : size,
      }}
    ></View>
  );
};

export default Spacer;
