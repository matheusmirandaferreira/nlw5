import React from 'react';

import {
  SafeAreaView,
  Dimensions,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import { Entypo, Feather } from '@expo/vector-icons';

import wateringImg from '../assets/watering.png';
import colors from '../styles/colors';

export function Welcome() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>
        Gerencie {'\n'} suas plantas {'\n'}de forma fácil
      </Text>
      <Image style={styles.image} resizeMode="contain" source={wateringImg} />
      <Text style={styles.subtitle}>
        Não esqueca mais de regar suas plantas. Nós cuidamos de lembrar você
        sempre que precisar
      </Text>

      <TouchableOpacity activeOpacity={0.8} style={styles.button}>
        <Feather name="chevron-right" style={styles.buttonicon} />
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },

  title: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    color: colors.heading,
    marginTop: 38,
  },

  image: {
    height: Dimensions.get('window').width * 0.7,
  },

  subtitle: {
    textAlign: 'center',
    fontSize: 18,
    paddingHorizontal: 20,
    color: colors.heading,
  },

  button: {
    backgroundColor: colors.green,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
    marginBottom: 10,
    height: 56,
    width: 56,
  },

  buttonicon: {
    color: colors.white,
    fontSize: 24,
  },
});
