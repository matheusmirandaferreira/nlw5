import React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  TouchableOpacityProps,
} from 'react-native';

import colors from '../styles/colors';
import fonts from '../styles/fonts';
interface ButtonProps extends TouchableOpacityProps {
  title: string;
}

export function Button({ title, ...rest }: ButtonProps) {
  return (
    <TouchableOpacity activeOpacity={0.8} style={styles.container} {...rest}>
      <Text style={styles.buttontext}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.green,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
    height: 56,
  },

  buttontext: {
    color: colors.white,
    fontFamily: fonts.heading,
    fontSize: 24,
  },
});
