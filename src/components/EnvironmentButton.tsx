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
    <RectButton style={[styles.container, active && styles.containerActive]}>
      <Text style={[styles.text, active && styles.textActive]}>{title}</Text>
    </RectButton>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.shape,
    height: 76,
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    marginRight: 5,
  },

  containerActive: {
    backgroundColor: colors.green_light,
  },

  text: {
    color: colors.heading,
    fontFamily: fonts.text,
  },

  textActive: {
    color: colors.green_dark,
    fontFamily: fonts.text,
  },
});