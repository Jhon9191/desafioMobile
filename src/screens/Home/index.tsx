import { View, StyleSheet, Text } from 'react-native';
import React, { useState } from 'react';
import {
  Background,
} from '../../components/films';
import Header from '../../components/films/HeaderFilms';
const firtBackground = require('../../assets/wanda.jpg');
export default function Home() {
  return (
    <Background >
      <Header 
        star={5}
        cardOne={firtBackground}
        cardTwo={firtBackground}
        cardThree={firtBackground}
        description="Wanda Maximoff foi sequestrada
       da Sérvia e trazida para a Montanha Wundagore, 
       base do Alto Evolucionário. "
      />
    </Background>
  );
}

const styles = StyleSheet.create({
})
