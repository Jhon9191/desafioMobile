import { StyleSheet, TouchableOpacity, View, Alert } from 'react-native';
import React, { useContext, useEffect, useState } from 'react';
import {
  Background, FirstView, SecondView, HeaderView
} from '../../components/films';
import Header from '../../components/films/HeaderFilms';
import HeaderButttonNavigation from '../../components/films/HeaderButttonNavigation';
import { Context } from '../../Context/Context';
import Apparitions from '../../components/films/Apparitions';
import CharactersComponent from '../../components/films/Characteres';
import { Entypo } from '@expo/vector-icons';
import { Button, TextRed } from '../../components/input';
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
      <HeaderView>
        <TouchableOpacity onPress={() => Alert.alert(":( Error")}>
          <Entypo name="menu" size={24} color="red" style={{ top: 25, margin: 24 }} />
        </TouchableOpacity>
      </HeaderView>
      <View style={{ flexDirection: 'row', height: '90%' }}>
        <FirstView>
          <HeaderButttonNavigation />
        </FirstView>
        <SecondView>

          {active === "Characters" && (
            <>
              <Header
                title="Top 10 - Personagens Populares"
                star={headerFilms[0].score}
                cardOne={headerFilms[0].url}
                cardTwo={headerFilms[1].url}
                cardThree={headerFilms[2].url}
                description={headerFilms[0].description}
                name={headerFilms[0].name}
              />
              <Apparitions data={aparitionsFilms} />
              <CharactersComponent data={charactersFilms} />
            </>
          )}

          {active === "Films" && (
            <>
               <Header
                title="Top 10 - Personagens Populares"
                star={headerFilms[1].score}
                cardOne={headerFilms[1].url}
                cardTwo={headerFilms[0].url}
                cardThree={headerFilms[2].url}
                description={headerFilms[1].description}
                name={headerFilms[1].name}
              />
              <Apparitions data={aparitionsFilms} />
              <CharactersComponent data={charactersFilms} />
            </>
          )}

          {active === "Comics" && (
            <>
               <Header
                title="Top 10 - Personagens Populares"
                star={headerFilms[2].score}
                cardOne={headerFilms[2].url}
                cardTwo={headerFilms[1].url}
                cardThree={headerFilms[0].url}
                description={headerFilms[2].description}
                name={headerFilms[2].name}
              />
              <Apparitions data={aparitionsFilms} />
              <CharactersComponent data={charactersFilms} />
            </>
          )}

        </SecondView>
      </View>
    </Background>
  );
}

const styles = StyleSheet.create({
})
