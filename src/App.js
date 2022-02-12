import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import Title from './components/Title';
import styles from './styles';

function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Title />
    </SafeAreaView>
  );
}

export default App;
