import React, { useState, useEffect, useContext } from "react"
import { Animated, FlatList, Text, View, ImageBackground, StyleSheet, Modal, TouchableOpacity, Image } from 'react-native';
import { TextTitleModal } from "../films";
import { Context } from "../../Context/Context";
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

export default function ModalComponent({ data }: any) {

  const {
    activeModal,
    setActiveModal,
    setDataModal,
    dataModal,
    active,
    charactersFilms,
    charactersFilms2,
    charactersFilms3
  }: any = useContext(Context);

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
    borderRadius: 30,
    width: 150,
    height: 230,
    margin: 10,
    alignItems: 'center'
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
    if (active == "Characters") {
      setDataModal(charactersFilms)
    } else if (active == "Films") {
      setDataModal(charactersFilms2)
    } else {
      setDataModal(charactersFilms3)
    }
  }, [active]);

  useEffect(() => {
    animation.start();
  }, []);

  const closeModal = () => {
    setActiveModal(!activeModal);
  }



  return (

    <Modal visible={activeModal}>
      <View style={styles.modal}>
        <View style={[styles.modal, { marginTop: 50, width: '100%' }]}>
          <View style={{ width: '80%' }}>
            <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>

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
            data={dataModal}
            keyExtractor={(item) => String(item.key)}
            renderItem={({ item }) => (
              <View style={styles.containerFilm}>
                <Image source={{ uri: item.url}} style={{width: '100%', height: '100%', borderRadius:30}}/>
                <LinearGradient colors={['red', 'transparent']} style={styles.linear}>
                  <Text style={{color: 'white', fontSize: 12}}>{item.name}</Text>
                  <Text style={{color: 'white', fontSize: 12}}></Text>
                  <Text style={{color: 'white', fontSize: 12}}>{item.name}</Text>
                </LinearGradient>
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

  linear: {
    width: 150,
    height: 115,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'column',
    position: 'absolute',
    top: '50%' ,
    padding: 3
  },
  modal: {
    backgroundColor: '#000',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerFilm: {
    backgroundColor: '#1b6e65',
    borderRadius: 30,
    width: 150,
    height: 230,
    margin: 10,
    alignItems: 'center'
  },
})
