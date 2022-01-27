import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import React, { useState, useContext } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation, CommonActions } from '@react-navigation/core';
import { Context } from '../../Context/Context';
export default function HeaderButttonNavigation() {

    const { active, setActive }: any = useContext(Context);

    const navigateToCharacters = () => {
        setActive("Characters");
    }
    const navigateToFilms = () => {
        setActive("Films");
    }
    const navigateToComics = () => {
        setActive("Comics");
    }


    return (
        <View style={styles.container}>

            <TouchableOpacity onPress={navigateToCharacters}>
                <LinearGradient colors={['transparent', 'red']} style={[styles.linear, { opacity: `${active}` == "Characters" ? 1 : 0.3 }]}>
                    <View style={styles.ViewLinear}>
                        <Text style={{ color: 'white', fontSize: 12 }} >Personagens</Text>
                    </View>
                </LinearGradient>
            </TouchableOpacity>

            <TouchableOpacity onPress={navigateToFilms}>
                <LinearGradient colors={['rgba(0, 0, 0, 0.5)', 'red']} style={[styles.linear, , { opacity: `${active}` == "Films" ? 1 : 0.3 }]}>
                    <View style={styles.ViewLinear}>
                        <Text style={{ color: 'white', fontSize: 12 }} >Filmes</Text>
                    </View>
                </LinearGradient>
            </TouchableOpacity>

            <TouchableOpacity onPress={navigateToComics}>
                <LinearGradient colors={['rgba(0, 0, 0, 0.5)', 'red']} style={[styles.linear, , { opacity: `${active}` == "Comics" ? 1 : 0.3 }]}>
                    <View style={styles.ViewLinear}>
                        <Text style={{ color: 'white', fontSize: 12 }} >Quadrinhos</Text>
                    </View>
                </LinearGradient>
            </TouchableOpacity>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        transform: [{ rotate: '90deg' }],
        flexDirection: 'row',
        marginTop: 130
    },
    ViewLinear: {
        width: 100,
        height: 50,
        transform: [{ rotate: '90deg' }],
        // backgroundColor: 'blue',
        justifyContent: 'center',
        alignItems: 'center',
    },

    linear: {
        width: 50,
        height: 100,
        transform: [{ rotate: '270deg' }],
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
        margin: 25
    },
})  
