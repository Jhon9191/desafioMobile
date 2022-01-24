import { View, StyleSheet, TouchableOpacity } from 'react-native';
import React, { useContext } from 'react';
import { CharactersView, ListInLine, TextSubtitle } from '.';
import { Context } from '../../Context/Context';
import Modal from '../../screens/Modal';
import { FontAwesome } from '@expo/vector-icons';
type ApparitionsProps = {
    data: String[];
}

export default function Characters({ data }: ApparitionsProps) {
    const { active, setActiveModal, activeModal, setDataModal }: any = useContext(Context);

    const openModal = (data: any) => {
        setActiveModal(!activeModal);
        setDataModal(data);
    }
    return (
        <View style={{ left: 15 }}>
            <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
                {active == "Characters" && (<TextSubtitle style={{ marginBottom: 0 }}>Personagens:</TextSubtitle>)}
                {active == "Films" && (<TextSubtitle style={{ marginBottom: 0 }}>Filmes:</TextSubtitle>)}
                {active == "Comics" && (<TextSubtitle style={{ marginBottom: 0 }}>Quadrinhos:</TextSubtitle>)}
                <TouchableOpacity onPress={openModal} style={{ flexDirection: 'row' }}>
                    <FontAwesome name="plus" size={18} color="white" style={{ bottom: 3 }} />
                    <TextSubtitle style={{ marginBottom: 0, marginStart: 5 }}>Ver mais</TextSubtitle>
                </TouchableOpacity>
            </View>
            <ListInLine
                horizontal
                data={data}
                keyExtractor={(item: any) => String(item)}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => ((
                    <View style={{ alignItems: 'center' }}>
                        <CharactersView style={{ marginRight: 15 }} source={{ uri: item.url }} />
                        <TextSubtitle>{item.name}</TextSubtitle>
                    </View>
                ))}
            />
            <Modal />
        </View>
    );
}

const styles = StyleSheet.create({

})