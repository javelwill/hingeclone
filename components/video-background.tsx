import {AVPlaybackSource, ResizeMode, Video} from 'expo-av';
import {useMemo} from 'react';
import {Animated, StyleSheet, View} from 'react-native';

type VideoBackgroundProps = {
  source: AVPlaybackSource;
  children: React.ReactNode;
};

const VideoBackground = ({source, children}: VideoBackgroundProps) => {
  const opacity = useMemo(() => new Animated.Value(0), []);

  return (
    <View style={styles.container}>
      <View style={styles.background}>
        <Animated.View
          style={[styles.backgroundViewWrapper, {opacity: opacity}]}
        >
          <Video
            isLooping
            isMuted
            positionMillis={500}
            onLoad={() => {
              Animated.timing(opacity, {
                toValue: 1,
                useNativeDriver: true,
              }).start();
            }}
            resizeMode={ResizeMode.COVER}
            shouldPlay
            source={source}
            style={{flex: 1}}
          />
        </Animated.View>
      </View>
      <View style={styles.overlay}>{children}</View>
    </View>
  );
};

export default VideoBackground;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: 'transparent',
    flex: 1,
    justifyContent: 'center',
  },
  background: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'black',
  },
  backgroundViewWrapper: {
    ...StyleSheet.absoluteFillObject,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  title: {
    color: 'white',
    fontSize: 20,
    marginTop: 90,
    paddingHorizontal: 20,
    textAlign: 'center',
  },
});
