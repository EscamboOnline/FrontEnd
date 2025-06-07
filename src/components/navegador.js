import React from 'react';
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function BarraNavegacao() {
    const navigation = useNavigation();
    const insets = useSafeAreaInsets(); 

    return (
        <View style={[styles.barra, { paddingBottom: insets.bottom > 0 ? insets.bottom : 10 }]}>
            <TouchableHighlight style={styles.botaoBarra} onPress={() => navigation.navigate('Home')} underlayColor="transparent">
                <View style={styles.itemBarra}>
                    <MaterialCommunityIcons name="home-outline" color="#fff" size={35} />
                    <Text style={styles.textoBarra}>Home</Text>
                </View>
            </TouchableHighlight>

            <TouchableHighlight style={styles.botaoBarra} onPress={() => navigation.navigate('Contatos')} underlayColor="transparent">
                <View style={styles.itemBarra}>
                    <MaterialCommunityIcons name="message-outline" color="#fff" size={32} style={styles.baixarIcone}/>
                    <Text style={styles.textoBarra}>Chat</Text>
                </View>
            </TouchableHighlight>

            <TouchableHighlight style={styles.botaoBarraADD} underlayColor="transparent">
                <MaterialCommunityIcons style={styles.botaoADD} name="plus-circle-outline" color="#fff" size={55} />
            </TouchableHighlight>

            <TouchableHighlight style={styles.botaoBarra} onPress={() => navigation.navigate('Search')} underlayColor="transparent">
                <View style={styles.itemBarra}>
                    <MaterialCommunityIcons name="magnify" color="#fff" size={32} style={styles.baixarIcone}/>
                    <Text style={styles.textoBarra}>Search</Text>
                </View>
            </TouchableHighlight>

            <TouchableHighlight style={styles.botaoBarra} onPress={() => navigation.navigate('UserPerfil')} underlayColor="transparent">
                <View style={styles.itemBarra}>
                    <MaterialCommunityIcons name="account-outline" color="#fff" size={35} />
                    <Text style={styles.textoBarra}>Perfil</Text>
                </View>
            </TouchableHighlight>
        </View>
    );
}

const styles = StyleSheet.create({
    barra: {
        position: 'absolute',
        left: 0,
        bottom: 0,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        paddingTop: 10,
        backgroundColor: '#e91e63',
        borderTopEndRadius: 10,
        borderTopStartRadius: 10,
    },
    itemBarra: {
        flexDirection: 'column',
        alignItems: 'center'
    },
    botaoBarra: {
        padding: 5,
    },
    textoBarra: {
        fontWeight: 'bold',
        color: '#fff'
    },

    botaoBarraADD: {
        marginTop: -5,
    },

    botaoADDIcone: {
        backgroundColor: '#fff',
        borderRadius: 50,
        overflow: 'hidden',
    },

    baixarIcone: {
        marginTop: 5,
    },

});
