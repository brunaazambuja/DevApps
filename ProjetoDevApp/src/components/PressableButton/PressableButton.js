import React from 'react';
import { Pressable, Platform } from 'react-native';

const PressableButton = ({ children, style, ...rest }) => {
  return (
    <Pressable
      android_ripple={{ color: 'rgba(255, 255, 255, 0.32)' }}
      style={({ pressed }) => [
        {
          opacity: Platform.OS !== 'android' ? (pressed ? 0.5 : 1) : 1,
          alignItems: 'center',
          alignSelf: 'center',
          justifyContent: 'center',
        },
        style,
      ]}
      {...rest}>
      {children}
    </Pressable>
  );
};

export default PressableButton;
