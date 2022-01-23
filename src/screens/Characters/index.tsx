import { View, StyleSheet, Text } from 'react-native';
import React, { useState, useContext } from 'react';
import {
  Background, FirstView, SecondImage, SecondView,
} from '../../components/films';
import Header from '../../components/films/HeaderFilms';
import HeaderButttonNavigation from '../../components/films/HeaderButttonNavigation';
import { Context } from '../../Context/Context';
import { TextRed } from '../../components/input';

const firtBackground = require('../../assets/wanda.jpg');
export default function Characters() {

  const [aparicoes, setAparicoes] = useState([]);
  const { active }: any = useContext(Context);

  return (
    <Background >
      <FirstView>
        <HeaderButttonNavigation />
      </FirstView>
      <SecondView>

        {active === "Characters" && (
          <>
            <Header
              title="Top 10 - Personagens Populares"
              star={5}
              cardOne={firtBackground}
              cardTwo={firtBackground}
              cardThree={firtBackground}
              description="Wanda Maximoff foi sequestrada
        da Sérvia e trazida para a Montanha Wundagore, 
        base do Alto Evolucionário. "
            />
          </> 

        )}
      </SecondView>
    </Background>
  );
}

const styles = StyleSheet.create({
})
