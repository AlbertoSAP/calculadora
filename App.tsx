import React from 'react';
import {SafeAreaView, StatusBar  } from "react-native";
import { CalculadoraScreent } from './src/screens/CalculadoraScreent';
import { styles } from './src/theme/appTheme';

const App = () => {
  return (

    <SafeAreaView style={styles.backgroundApp}>
      <StatusBar backgroundColor='black'/>
   <CalculadoraScreent/>
   </SafeAreaView>
  );
};
export default App;

