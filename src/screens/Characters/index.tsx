import { View, StyleSheet, Text } from 'react-native';
import React, { useState, useContext, useEffect } from 'react';
import {
  Background, FirstView, SecondImage, SecondView,
} from '../../components/films';
import Header from '../../components/films/HeaderFilms';
import HeaderButttonNavigation from '../../components/films/HeaderButttonNavigation';
import { Context } from '../../Context/Context';
import Apparitions from '../../components/films/Apparitions';
import CharactersComponent from '../../components/films/Characteres';
export default function Characters() {

  const {
    active,
    headerFilms,
    aparitionsFilms,
    charactersFilms,
    headerFilms2,
    aparitionsFilms2,
    charactersFilms2,
    aparitionsFilms3,
    headerFilms3,
    charactersFilms3,
  }: any = useContext(Context);


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
              cardOne={headerFilms[0]}
              cardTwo={headerFilms[1]}
              cardThree={headerFilms[2]}
              description="Wanda Maximoff foi sequestrada
              da Sérvia e trazida para a Montanha Wundagore, 
              base do Alto Evolucionário. "
              name="Wanda Maximoff"
            />
            <Apparitions data={aparitionsFilms} />
            <CharactersComponent data={charactersFilms} />
          </>
        )}

        {active === "Films" && (
          <>
            <Header
              title="Top 10 - Filmes Populares"
              star={5}
              cardOne={headerFilms2[0]}
              cardTwo={headerFilms2[1]}
              cardThree={headerFilms2[2]}
              description="“O Visão” (The Vision em inglês) 
              é um super-herói fictício de quadrinhos americanos
              publicados pela Marvel Comics.. "
              name="O Visão"
            />
            <Apparitions data={aparitionsFilms2} />
            <CharactersComponent data={charactersFilms2} />
          </>
        )}

        {active === "Comics" && (
          <>
            <Header
              title="Top 10 - HQs Populares"
              star={5}
              cardOne={headerFilms3[0]}
              cardTwo={headerFilms3[1]}
              cardThree={headerFilms3[2]}
              description="Galactus é uma das entidades mais
              poderosas e temidas do Universo Marvel. Não
              há quase nada na existência que ele não possa fazer ou realizar"
              name="Galactus"
            />
            <Apparitions data={aparitionsFilms3} />
            <CharactersComponent data={charactersFilms3} />
          </>
        )}

      </SecondView>
    </Background>
  );
}

const styles = StyleSheet.create({
})
