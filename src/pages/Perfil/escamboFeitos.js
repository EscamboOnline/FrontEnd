import React, { useState } from 'react';
import axios from 'axios';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import colors from '../../constants/colors';
import { useFonts, Baloo2_400Regular, Baloo2_700Bold } from '@expo-google-fonts/baloo-2';


export default function UserPerfil() {

    const navigation = useNavigation();

    let [fontsLoaded] = useFonts({
        Baloo2_400Regular,
        Baloo2_700Bold,
    });

    if (!fontsLoaded) {
        return <Text>Carregando fontes...</Text>;
    }

    return (
        <View style={styles.container}>

            <TouchableOpacity style={styles.buttonVoltar} onPress={() => navigation.navigate('UserPerfil')}>
                <Image
                    source={require('../../assets/voltar.png')}
                    style={styles.voltarIcon}
                />
            </TouchableOpacity>



        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
        paddingTop: 60,
        fontFamily: 'Montserrat',
    },
    buttonVoltar: {
        position: 'absolute',
        top: 50,
        left: 20,
        width: 50,
        height: 50,
        zIndex: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    voltarIcon: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
    },
});