import {MotiView} from 'moti';
import React from 'react';
import {StyleSheet} from 'react-native';

const Cursor = () => {
  return (
    <MotiView
      from={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{
        loop: true,
        type: 'timing',
        duration: 500,
      }}
      style={styles.cursor}
    ></MotiView>
  );
};

export default Cursor;

const styles = StyleSheet.create({
  cursor: {
    height: 40,
    width: 2,
    backgroundColor: 'black',
  },
});
