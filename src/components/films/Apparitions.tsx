import { View, Text, FlatList, StyleSheet } from 'react-native';
import React, { useContext } from 'react';
import { ListInLine, SecondImage, TextSubtitle } from '.';
import { Context } from '../../Context/Context';
import Modal from '../Modal';

type ApparitionsProps = {
    data: String[];
}

export default function Apparitions({ data }: ApparitionsProps) {
    const { active }: any = useContext(Context);

    return (
        <View style={{ left: 15 }}>
            {active == "Characters" && (<TextSubtitle style={{ marginBottom: 0 }}>Apariões:</TextSubtitle>)}
            {active == "Films" && (<TextSubtitle style={{ marginBottom: 0 }}>Personagens:</TextSubtitle>)}
            {active == "Comics" && (<TextSubtitle style={{ marginBottom: 0 }}>Criadores:</TextSubtitle>)}
            <ListInLine
                horizontal
                data={data}
                renderItem={({ item }) => ((
                    <SecondImage style={{ marginLeft: 3 }} source={{ uri: item }} />
                ))}
            />
        </View>
    );
}

const styles = StyleSheet.create({

})