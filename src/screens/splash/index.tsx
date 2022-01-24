import { View, Image, Animated, ImageBackground, SafeAreaView, StyleSheet, Dimensions } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useNavigation, CommonActions } from '@react-navigation/core';
import { Button, Input, Text, TextRed, TextCheck } from '../../components/input';
import Checkbox from 'expo-checkbox';
import { LinearGradient } from 'expo-linear-gradient';

export default function Splash() {

    const navigation = useNavigation();

    const [imageSelected, setImageSelected] = useState("");
    const firtBackground = require('../../assets/e62565ab99a0c36d4db5583b0ef01339.png');
    const secondBackground = require('../../assets/ultimato-b-1-e1553606166939.png')
    const logo = require('../../assets/marvel.png')

    useEffect(() => {
        setTimeout(() => {
            setImageSelected(firtBackground);
            firstAnimation.start();
            setTimeout(() => {
                setImageSelected(secondBackground);
                secondAnimation.start();
                setTimeout(() => {
                    thirdAnimation.start();
                    setTimeout(() => {
                        // navigation.dispatch(CommonActions.navigate({
                        //     name: 'Login'
                        // }))
                    }, 1000)
                }, 2000)
            }, 2000)
        }, 2000)
    }, []);

    const [posx] = useState(new Animated.Value(((Dimensions.get('screen').width / 2) * 0.5) * -1));
    const [posy] = useState(new Animated.Value(((Dimensions.get('screen').height / 2) * 0.5) * -1));
    const [scale] = useState(new Animated.Value(1));

    const [backposx] = useState(new Animated.Value(0));
    const [backposy] = useState(new Animated.Value(0));

    const [principalBackX] = useState(new Animated.Value(Dimensions.get('screen').height));
    const [principalBackY] = useState(new Animated.Value(1));

    const [isChecked, setChecked] = useState(false);

    const def = {
        transform: [
            { translateX: posx },
            { translateY: posy },
            { scaleX: scale },
            { scaleY: scale },
        ],
        // backgroundColor: 'red',
        width: 100,
        height: 70,
        paddingTop: 30,
        margin: 10,
        position: 'absolute'
    }

    //FIRST ANIMATION
    const firstAnimation = Animated.parallel([
        Animated.timing(posy, {
            toValue: ((Dimensions.get('screen').height / 2) * 0.5),
            duration: 700,
            useNativeDriver: true,
        }),
        Animated.timing(posx, {
            toValue: ((Dimensions.get('screen').width / 2) * 0.5) * 1,
            duration: 700,
            useNativeDriver: true,
        }),
    ]);

    const secondAnimation = Animated.parallel([
        Animated.timing(posy, {
            toValue: ((Dimensions.get('screen').height / 7) * 0.5),
            duration: 700,
            useNativeDriver: true,
        }),

        Animated.timing(posx, {
            toValue: (Dimensions.get('screen').width / 2) * 0.005,
            duration: 700,
            useNativeDriver: true,
        }),
    ])

    const thirdAnimation = Animated.parallel([
        Animated.timing(posy, {
            toValue: ((Dimensions.get('screen').height / 7) * 0.5) * -4.25,
            duration: 700,
            useNativeDriver: true,
        }),
        ///final animation from background
        Animated.timing(backposy, {
            toValue: Dimensions.get('screen').height * 0.60,
            duration: 700,
            useNativeDriver: false,
        }),
        Animated.timing(backposx, {
            toValue: Dimensions.get('screen').width,
            duration: 700,
            useNativeDriver: false,
        }),
        Animated.timing(principalBackX, {
            toValue: Dimensions.get('screen').height * 0.40,
            duration: 700,
            useNativeDriver: false,
        }),
    ]);

    const form = {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#000',
        width: backposx,
        height: backposy
    }

    const background = {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#000',
        width: '100%',
        height: principalBackX
    }

    const navigateToHome = () => {
        navigation.dispatch(CommonActions.reset({
            index: 0,
            routes: [{ name: 'Characters' }]
        }))
    }

    return (
        <SafeAreaView style={[styles.container, { backgroundColor: '#000' }]}>

            <>
                <Animated.View style={form}>
                    <View style={[styles.image, styles.form]}>
                        <Input placeholderTextColor="#ADACAC" placeholder="E-mail" />
                        <Input placeholderTextColor="#ADACAC" placeholder="Senha" />
                        <Button onPress={navigateToHome}><Text>Entrar</Text></Button>
                        <View style={{ flexDirection: 'row' }}>
                            <Checkbox
                                style={{ marginBottom: 3 }}
                                value={isChecked}
                                onValueChange={setChecked}
                                color={isChecked ? '#FF0000' : undefined}
                            />
                            <TextCheck>Salvar dados de login entre automaticamente</TextCheck>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text>É novo(a) aqui</Text>
                            <TextRed>Cadastre-se</TextRed>
                        </View>
                    </View>
                </Animated.View>

                <Animated.View style={background}>
                    <ImageBackground resizeMethod='auto' source={imageSelected} resizeMode='cover' style={styles.image}>
                        <LinearGradient
                            // Background Linear Gradient
                            colors={['black', 'transparent']}
                            style={styles.container}
                        >
                        </LinearGradient>
                    </ImageBackground>
                </Animated.View>
            </>

            <>
                <Animated.View style={def}>
                    <Image source={logo} resizeMode='stretch' style={{ width: '100%', height: '100%' }} />
                </Animated.View>
            </>
        </SafeAreaView >

    )
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: "center",
        width: '100%',
        height: '100%',
    },
    image: {
        backgroundColor: '#000000',
        justifyContent: "flex-end",
        alignItems: 'center',
        width: '100%', height: '100%',

    },
    form: {
        flexDirection: 'column'
    }
})

