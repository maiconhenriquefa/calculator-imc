import {View, Text} from 'react-native';
import React from 'react';
import styles from './styles';

export default function Title() {
  return (
    <View>
      <Text style={styles.text}>Calculadora IMC</Text>
    </View>
  );
}
