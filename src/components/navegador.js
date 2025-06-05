import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableHighlight, Alert, FlatList, Image} from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { IconButton } from 'react-native-paper';
import MaterialDesignIcons from '@react-native-vector-icons/material-design-icons';

export default function BarraNavegacao() {

    const navigation = useNavigation();

    return(
        <View style={styles.barra}>
            <TouchableHighlight style={styles.botaoBarra} onPress={() => navigation.navigate('Home')}>
                <View style={styles.itemBarra}>
                    <MaterialDesignIcons name="home" color="#fff" size={30}/>
                    <Text style={styles.textoBarra}>Home</Text>
                </View>
            </TouchableHighlight>

            <TouchableHighlight style={styles.botaoBarra} onPress={() => navigation.navigate('Contatos')}>
                <View style={styles.itemBarra}>
                    <MaterialDesignIcons name="message-outline" color="#fff" size={30}/>
                    <Text style={styles.textoBarra}>Chat</Text>
                </View>
            </TouchableHighlight>

            <TouchableHighlight style={styles.botaoBarraADD}>
                <MaterialDesignIcons style={styles.botaoADD} name="plus" color="#e91e63" size={45}/>
            </TouchableHighlight>

            

            <TouchableHighlight style={styles.botaoBarra}>
                <View style={styles.itemBarra}>
                    <MaterialDesignIcons name="magnify" color="#fff" size={30}/>
                    <Text style={styles.textoBarra}>Search</Text>
                </View>
            </TouchableHighlight>

            <TouchableHighlight style={styles.botaoBarra} onPress={() => navigation.navigate('UserPerfil')}>
                <View style={styles.itemBarra}>
                    <MaterialDesignIcons name="account" color="#fff" size={30}/>
                    <Text style={styles.textoBarra}>Perfil</Text>
                </View>
            </TouchableHighlight>
        </View>
    )
}

const styles = StyleSheet.create({
    barra: {
        position: 'absolute',
        left: 0,
        bottom: 0,
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#e91e63',
        borderTopEndRadius: 10,
        borderTopStartRadius: 10
    },
    itemBarra: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    botaoBarra: {
        boxSizing: 'border-box',
    },
    textoBarra: {
        fontFamily: 'arial',
        fontWeight: 'bold',
        color: '#fff' 
    },
    botaoADD: {
        backgroundColor: '#fff',
        borderRadius: 50,
        transform: [{ translateY: '-10%' }]
    }
})