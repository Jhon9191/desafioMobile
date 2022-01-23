import { View,Text, FlatList, StyleSheet } from 'react-native';
import React from 'react';
import { ListInLine, SecondImage, TextHeader } from '.';

type ApparitionsProps = {
    data: String[];
}

export default function Apparitions({ data }: ApparitionsProps) {

    return (
        <View style={{ left: 15 }}>
            <TextHeader style={{marginBottom: 0}}>Aparições:</TextHeader>
            <ListInLine
                horizontal
                data={data}
                renderItem={({item}) => ((
                    <SecondImage style={{marginLeft:3}} source={{ uri: item }} />
                ))}
            />
        </View>
    );
}

const styles = StyleSheet.create({

})