import React, { useState } from 'react';
import axios from 'axios';
import { View, Text, StyleSheet, TextInput, Alert, FlatList, TouchableHighlight, Image } from 'react-native';
import { useNavigation } from "@react-navigation/native";

export default function Inventario() {

    const navigation = useNavigation();

    return (
        <View>
            <Text>Inventário</Text>
            
            <label> {/*Aqui ficará a barra de pesquisa para poder pesquisar por outros itens na tela de inventário*/}
                <input name="pesquisa"/>
            </label>

            <View> {/*Aqui estará o layout para organizar os dados e a quantidade de cada caegoria dos itens no inventário de acordo com o perfil.*/}
                <View>
                    <Text>Itens</Text>
                    <Text>12/25</Text>
                </View>
                
                <View>
                    <Text>Escambos</Text>
                    <Text>8</Text>
                </View>

                <View>
                    <Text>Favoritados</Text>
                    <Text>39</Text>
                </View>
            </View>

            <View>
                {/*Aqui ficará os itens para mudar a postura do layout, sendo ou em bloco ou em lista.*/}
            </View>
            
            <FlatList>
                <TouchableHighlight>
                    <Image/>

                    <Text>
                        {/*Texto do título*/}
                    </Text>

                    <Text>
                        {/*Texto da quantidade de favoritados*/}
                    </Text>

                    <TouchableHighlight>
                        <Text> {/*Texto sobre a qualidade do produto*/} </Text>
                    </TouchableHighlight>

                    <TouchableHighlight>
                        <Image /> {/*Imagem para editar o item (De forma mais direta)*/}
                    </TouchableHighlight>
                </TouchableHighlight>
            </FlatList>
            <TouchableHighlight>
            </TouchableHighlight>
        </View>
    )

}

const styles = StyleSheet.create({

})