import React from 'react';

import {
  SafeAreaView,
  Dimensions,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';

import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import wateringImg from '../assets/watering.png';
import colors from '../styles/colors';
import fonts from '../styles/fonts';

export function Welcome() {
  const navigation = useNavigation();

  function handleStart() {
    navigation.navigate('UserIdentification');
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={styles.title}>
          Gerencie{'\n'} suas plantas de{'\n'}forma fácil
        </Text>
        <Image style={styles.image} resizeMode="contain" source={wateringImg} />
        <Text style={styles.subtitle}>
          Não esqueca mais de regar suas plantas. Nós cuidamos de lembrar você
          sempre que precisar
        </Text>

        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.button}
          onPress={handleStart}>
          <Feather name="chevron-right" style={styles.buttonicon} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  wrapper: {
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingHorizontal: 20,
    height: '100%',
  },

  title: {
    fontFamily: fonts.heading,
    fontSize: 28,
    textAlign: 'center',
    color: colors.heading,
    marginTop: 38,
    lineHeight: 34,
  },

  image: {
    width: '100%',
    height: Dimensions.get('window').width * 0.7,
  },

  subtitle: {
    fontFamily: fonts.text,
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
