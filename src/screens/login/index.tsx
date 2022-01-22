import { StatusBar } from "expo-status-bar"
import React, { useState, useEffect } from "react"
import { Animated, FlatList, Text, View, StyleSheet, Button, Image, SafeAreaView } from 'react-native';

export default function Login() {

  const [films] = useState([
    { key: 1, name: "homem de ferro 1" },
    { key: 2, name: "homem de ferro 2" },
    { key: 3, name: "homem de ferro 3" },
    { key: 4, name: "homem de ferro 4" }
  ]);

  const [posx] = useState(new Animated.Value(-300));
  const [posy] = useState(new Animated.Value(-300));
  const [scale] = useState(new Animated.Value(1));
  const [opacity] = useState(new Animated.Value(0));

  const def = {
    transform: [
      { translateX: posx },
      { translateY: posy },
      { scaleX: scale },
      { scaleY: scale },
    ],
    opacity,
    backgroundColor: '#000', borderRadius: 30, width: '45%', height: 244, margin: 10
  }

  const animation = Animated.parallel([
    Animated.timing(posy, {
      toValue: 0,
      duration: 800,
      useNativeDriver: true,
    }),

    Animated.timing(posx, {
      toValue: 0,
      duration: 800,
      useNativeDriver: true,
    }),

    Animated.timing(opacity, {
      toValue: 1,
      duration: 800,
      useNativeDriver: true,
    }),
  ]);

  useEffect(() => {
    animation.start();
  }, []);

  return (
    <SafeAreaView style={styles.container}>

      <View style={{ flex: 1, alignItems: 'center',
    justifyContent: 'center', paddingTop: 40 }}>
        <FlatList
          data={films}
          keyExtractor={(item) => String(item.key)}
          renderItem={({ item }) => (
            <View style={styles.containerFilm}>
              <Text>{item.name}</Text>
            </View>
          )}
          numColumns={2}
        />
      </View>

      {/* <View style={styles.logo}></View>
       <View style={styles.logo}></View>
       <View style={styles.logo}></View>

        <Animated.View style={def}></Animated.View> */}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  containerFilm: {
    backgroundColor: '#102220',
    borderRadius: 30,
    width: 161,
    height: 244,
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
})
