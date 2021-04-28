import React from 'react';

import {
  Platform,
  View,
  Text,
  Alert,
  Image,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from 'react-native';
import { SvgFromUri } from 'react-native-svg';

import { Button } from '../components/Button';
import waterdropImg from '../assets/waterdrop.png';
import colors from '../styles/colors';
import { getBottomSpace } from 'react-native-iphone-x-helper';

export function PlantSave() {
  return (
    <View style={styles.container}>
      <View style={styles.plantInfo}>
        <SvgFromUri uri="" height={150} width={150} />
        <Text style={styles.plantName}>nome da planta</Text>
        <Text style={styles.plantAbout}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore
          reprehenderit debitis quo quia placeat, consequuntur nam eos,
          voluptatem necessitatibus culpa iure?
        </Text>
      </View>
      <View style={styles.controllers}>
        <View style={styles.tipContainer}>
          <Image source={waterdropImg} style={styles.tipImage} />
          <Text style={styles.tipText}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          </Text>
        </View>
        <Text style={styles.alertLabel}>
          Escolha o melhor horário para ser lembrado:
        </Text>

        <Button title="Cadastrar planta" onPress={() => {}} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: colors.shape,
  },

  plantInfo: {
    flex: 1,
    paddingHorizontal: 30,
    paddingVertical: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.shape,
  },

  plantName: {},

  plantAbout: {},

  controllers: {
    backgroundColor: colors.white,
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: getBottomSpace(),
  },

  tipContainer: {},

  tipImage: {},

  tipText: {},

  alertLabel: {},
});
