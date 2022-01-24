import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import {
  Background,
  Text,
  FirstImage,
  SecondImage,
  ThirdImage,
  Avaliation,
  TextAvaliation,
  TextHeader,
  TextDescription
} from '.';
import { LinearGradient } from 'expo-linear-gradient';

const fullstar = require('../../assets/startfull.png');
const starempty = require('../../assets/starempty.png');

type HeaderProps = {
  star: Number;
  cardOne: String;
  cardTwo: String;
  cardThree: String;
  description: String;
  title: String;
  name: String;
}

type firstCardProps = {
  cardOne: String;
  name: String;
}

type secondCardProps = {
  cardTwo: String;
}

type thirdCardProps = {
  cardThree: String;
}


function Card({ cardOne, name }: firstCardProps) {
  return (
    <View style={{ margin: 3 }}>
      <FirstImage source={{ uri: cardOne }} />
      <LinearGradient colors={['rgba(255, 255, 255, 0)', 'red']} style={styles.linear}>
        <Text>{name}</Text>
      </LinearGradient>
    </View>
  )
}
function SecondCard({ cardTwo }: secondCardProps) {
  return (
    <View style={{ margin: 3 }}>
      <SecondImage source={{ uri: cardTwo }} />
      <View style={{ borderRadius: 20, width: 70, height: 70, opacity: 0.5, backgroundColor: "#000", position: "absolute" }}></View>
    </View>
  )
}
function ThirdCard({ cardThree }: thirdCardProps) {
  return (
    <View style={{ margin: 3 }}>
      <ThirdImage source={{ uri: cardThree }} />
      <View style={{ borderRadius: 15, width: 50, height: 50, opacity: 0.5, backgroundColor: "#000", position: "absolute" }}></View>
    </View>
  )
}


export default function Header({ name, title, star, cardOne, cardTwo, cardThree, description }: HeaderProps) {
  return (
    <View>
      <TextHeader>{title}</TextHeader>
      <View style={styles.header}>
        <Card cardOne={cardOne} name={name} />
        <SecondCard cardTwo={cardTwo} />
        <ThirdCard cardThree={cardThree} />
      </View>
      <Avaliation>
        <TextAvaliation>Avaliações dos fãs</TextAvaliation>
        <View style={{ flexDirection: 'row' }}>
          {star == 5 && (
            <>
              <Image source={fullstar} style={{ width: 17, height: 17, margin: 2 }} />
              <Image source={fullstar} style={{ width: 17, height: 17, margin: 2 }} />
              <Image source={fullstar} style={{ width: 17, height: 17, margin: 2 }} />
              <Image source={fullstar} style={{ width: 17, height: 17, margin: 2 }} />
              <Image source={fullstar} style={{ width: 17, height: 17, margin: 2 }} />
            </>
          )}
          {star == 4 && (
            <>
              <Image source={fullstar} style={{ width: 17, height: 17, margin: 2 }} />
              <Image source={fullstar} style={{ width: 17, height: 17, margin: 2 }} />
              <Image source={fullstar} style={{ width: 17, height: 17, margin: 2 }} />
              <Image source={fullstar} style={{ width: 17, height: 17, margin: 2 }} />
              <Image source={starempty} style={{ width: 17, height: 17, margin: 2 }} />
            </>
          )}
          {star == 3 && (
            <>
              <Image source={fullstar} style={{ width: 17, height: 17, margin: 2 }} />
              <Image source={fullstar} style={{ width: 17, height: 17, margin: 2 }} />
              <Image source={fullstar} style={{ width: 17, height: 17, margin: 2 }} />
              <Image source={starempty} style={{ width: 17, height: 17, margin: 2 }} />
              <Image source={starempty} style={{ width: 17, height: 17, margin: 2 }} />
            </>
          )}
          {star == 2 && (
            <>
              <Image source={fullstar} style={{ width: 17, height: 17, margin: 2 }} />
              <Image source={fullstar} style={{ width: 17, height: 17, margin: 2 }} />
              <Image source={starempty} style={{ width: 17, height: 17, margin: 2 }} />
              <Image source={starempty} style={{ width: 17, height: 17, margin: 2 }} />
              <Image source={starempty} style={{ width: 17, height: 17, margin: 2 }} />
            </>
          )}
          {star == 1 && (
            <>
              <Image source={fullstar} style={{ width: 17, height: 17, margin: 2 }} />
              <Image source={starempty} style={{ width: 17, height: 17, margin: 2 }} />
              <Image source={starempty} style={{ width: 17, height: 17, margin: 2 }} />
              <Image source={starempty} style={{ width: 17, height: 17, margin: 2 }} />
              <Image source={starempty} style={{ width: 17, height: 17, margin: 2 }} />
            </>
          )}
          {star == 0 && (
            <>
              <Image source={starempty} style={{ width: 17, height: 17, margin: 2 }} />
              <Image source={starempty} style={{ width: 17, height: 17, margin: 2 }} />
              <Image source={starempty} style={{ width: 17, height: 17, margin: 2 }} />
              <Image source={starempty} style={{ width: 17, height: 17, margin: 2 }} />
              <Image source={starempty} style={{ width: 17, height: 17, margin: 2 }} />
            </>
          )}
        </View>
      </Avaliation>
      <View style={{ width: '85%' }}>
        <TextDescription >{description}</TextDescription>
        <TouchableOpacity >
          <Text style={{ color: 'red', marginLeft: 15, marginTop: 5 }}>Ver mais</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: "center",
    width: '100%',
    height: '100%',
    backgroundColor: '#000000',
  },

  linear: {
    width: 170,
    height: 69,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    marginTop: '60%',
  },

  avatar: {
    width: 170,
    height: 170,
    borderRadius: 30,
    borderColor: '#ff0000',
    borderWidth: 2
  },

  header: {
    flexDirection: 'row'
  }

})
