import { StatusBar  } from "expo-status-bar"
import React, { useState, useEffect } from "react"
import { Animated, Text, View, StyleSheet, Button, SafeAreaView, Image } from 'react-native';

export default function App() {

  const [posx] = useState(new Animated.Value(-300));
  const [posy] = useState(new Animated.Value(-300));
  const [scale] = useState(new Animated.Value(1));
  const [opacity] = useState(new Animated.Value(0));

  const def = {
    transform: [
      {translateX : posx},
      {translateY : posy},
      {scaleX : scale},
      {scaleY : scale},
    ],
    opacity
  }

  const animation = Animated.parallel([
    Animated.timing(posy,{
      toValue: 0,
      duration: 2700,
      useNativeDriver: true,
    }),

    Animated.timing(posx,{
      toValue: 0,
      duration: 2700,
      useNativeDriver: true,
    }),

    Animated.timing(opacity,{
      toValue: 1,
      duration: 2700,
      useNativeDriver: true,
    }),
  ]);

  useEffect(()=>{
    animation.start();
  },[]);

  return (
    <View style={styles.container}>
       <View style={styles.logo}></View>
       <View style={styles.logo}></View>
       <View style={styles.logo}></View>
       {/* <View style={styles.logo}></View> */}

      <Animated.View style={def}>
        <View style={{position: 'relative',backgroundColor: '#000', borderRadius: 10, width: 180, height: 280}}></View>
      </Animated.View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    width: '100%',
    height: '100%',
    backgroundColor: "#fff000",
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
  },
  logo: {
    backgroundColor: '#000',
    borderRadius: 10,
    width: 180,   
    height: 280,
    margin: 10
  },
})
