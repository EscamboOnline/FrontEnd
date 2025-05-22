import React, { useState } from 'react';
import axios from 'axios';
import { View, Text, StyleSheet, TextInput, Alert, FlatList, TouchableHighlight, Image } from 'react-native';
import { useNavigation } from "@react-navigation/native";

export default function Inventario() {

    const navigation = useNavigation();

    return (
        <View>
            <Image /> {/*Imagem principal que é mostrada de acordo com a principal imagem selecionada no carrousel em baixo*/}

            <FlatList>
                {/*Carrousel ou mostragem de outros imagens, dependendo da imagem selecionada ela troca a visualização da imagem principal alí em cima*/}
            </FlatList>
            <Text>Lorem ipsum</Text>
            <View></View>
        </View>
    )

}

const styles = StyleSheet.create({

})