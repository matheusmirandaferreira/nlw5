import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { RectButton, RectButtonProps } from "react-native-gesture-handler";

import colors from '../styles/colors';
import fonts from '../styles/fonts';

interface EnvariomentButtonProps extends RectButtonProps {
  title: string;
  active?: boolean;
}

export function EnvironmentButton({ title, active = false, ...rest }: EnvariomentButtonProps) {
  return (
    <RectButton style={[styles.container, active && styles.containerActive]} {...rest}>
      <Text style={[styles.text, active && styles.textActive]}>{title}</Text>
    </RectButton>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.shape,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    marginHorizontal: 5,
  },

  containerActive: {
    backgroundColor: colors.green_light,
  },

  text: {
    color: colors.heading,
    fontFamily: fonts.text,
    paddingHorizontal: 12,
  },

  textActive: {
    color: colors.green_dark,
    fontFamily: fonts.text,
  },
});