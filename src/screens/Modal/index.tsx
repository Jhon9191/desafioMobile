import React, { useState, useEffect, useContext } from "react"
import { Animated, FlatList, Text, View, StyleSheet, Modal, TouchableOpacity } from 'react-native';
import { TextTitleModal } from "../../components/films";
import { Context } from "../../Context/Context";

import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons'; 

export default function Login() {

  const { activeModal, setActiveModal, dataModal, active }: any = useContext(Context);
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

  const closeModal = () => {
    setActiveModal(!activeModal);
  }

  return (

    <Modal visible={activeModal}>
      <View style={styles.modal}>
        <View style={[styles.modal, { marginTop: 50, width: '100%', }]}>
          <View style={{ width: '80%' }}>
            <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center'}}>

              <TouchableOpacity onPress={closeModal}>
                <MaterialCommunityIcons style={{ marginRight: 5 }} name="keyboard-backspace" size={24} color="red" />
              </TouchableOpacity>
              {active == "Characters" && (
                <>
                  <MaterialIcons style={{ marginRight: 5 }} name="people-alt" size={24} color="red" />
                  <TextTitleModal>Personagens</TextTitleModal>
                </>
              )}
              {active == "Films" && (
                <>
                  <MaterialCommunityIcons style={{ marginRight: 5 }} name="filmstrip" size={24} color="red" />
                  <TextTitleModal>Filmes</TextTitleModal>
                </>
              )}
              {active == "Comics" && (
                <>
                  <FontAwesome5 style={{ marginRight: 5 }} name="book-open" size={24} color="red" />
                  <TextTitleModal>Personagens</TextTitleModal>
                </>
              )}
            </View>

          </View>
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
      </View>
    </Modal>

    //  <View style={styles.logo}></View>
    //  <View style={styles.logo}></View>
    //  <View style={styles.logo}></View>

    //   <Animated.View style={def}></Animated.View> 

  )
}

const styles = StyleSheet.create({
  modal: {
    backgroundColor: '#000',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerFilm: {
    backgroundColor: '#1b6e65',
    borderRadius: 30,
    width: 161,
    height: 244,
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
})
