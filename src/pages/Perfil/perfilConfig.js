import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, TextInput } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { Picker } from '@react-native-picker/picker';
import colors from '../../constants/colors';
import { KeyboardAvoidingView, Platform } from 'react-native';


export default function PerfilConfig() {

    const navigation = useNavigation();

    return (
        <View style={styles.container}>

            <TouchableOpacity style={styles.buttonVoltar} onPress={() => navigation.navigate('UserPerfil')}>
                <Image
                    source={require('../../assets/voltar.png')}
                    style={styles.voltarIcon}
                />
            </TouchableOpacity>

            {/* Avatar*/}
            <TouchableOpacity style={styles.avatarContainer}>
                <Image
                    source={{ uri: 'https://i.pravatar.cc/150?img=12' }}
                    style={styles.avatar}
                />
                <View style={styles.editIconContainer}>
                    <Image
                        source={require('../../assets/camera.png')}
                        style={styles.editIcon}
                    />
                </View>
            </TouchableOpacity>

            {/*Formulário*/}

                <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
                    <View style={styles.containerForm}>


                        {/*Informações base*/}

                        <Text style={styles.title2}>Informações base</Text>

                        <Text style={styles.title}>Seu Nome</Text>
                        <TextInput placeholder="Seu nome"
                            style={styles.input} value={"Ana Catarina"} />

                        <Text style={styles.title}>Username</Text>
                        <TextInput placeholder="Seu username"
                            style={styles.input} value={"@ana_catarina"} />

                        <Text style={styles.title}>Sexo</Text>
                        <View style={styles.pickerContainer}>
                            <Picker
                                value="feminino"
                                style={styles.picker}
                            >
                                <Picker.Item label="Selecione o sexo" value="" />
                                <Picker.Item label="Masculino" value="masculino" />
                                <Picker.Item label="Feminino" value="feminino" />
                                <Picker.Item label="Prefiro não informar" value="nao_informar" />
                            </Picker>
                        </View>

                        {/*Somente Visualizar*/}
                        <Text style={styles.title2}>Somente visualizar</Text>

                        <Text style={styles.title}>CPF</Text>
                        <View style={styles.inputContainer}>

                            <TextInput
                                placeholder="Seu CPF"
                                style={styles.inputReadOnly}
                                value="000.000.000-01"
                                editable={false}
                            />
                            <Image
                                source={require('../../assets/cadeado.png')}
                                style={styles.lockIcon}
                            />
                        </View>

                        <Text style={styles.title}>E-Mail</Text>
                        <View style={styles.inputContainer}>

                            <TextInput
                                placeholder="Seu e-mail"
                                style={styles.inputReadOnly}
                                value="@ana_catarina"
                                editable={false}
                            />
                            <Image
                                source={require('../../assets/cadeado.png')}
                                style={styles.lockIcon}
                            />
                        </View>

                        {/*Endereço*/}

                        <Text style={styles.title2}>Endereço</Text>

                        <Text style={styles.title}>CEP</Text>
                        <TextInput placeholder="Seu CEP atual"
                            style={styles.input} value={"00000-001"} />

                        <Text style={styles.title}>Estado</Text>
                        <View style={styles.rowInputs}>
                            <TextInput
                                style={styles.inputHalf}
                                placeholder="Estado"
                                value="São Paulo"
                            />
                            <View style={styles.separator} />
                            <TextInput
                                style={styles.inputHalf}
                                placeholder="Cidade, Bairro"
                                value="Cajamar, Pajé House"
                            />
                        </View>

                        {/*Envio*/}
                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.buttonText}>Alterar</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
        </View>
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
    avatarContainer: {
        alignSelf: 'center',
        marginTop: 30,
        marginBottom: 12,
        position: 'relative',
    },
    avatar: {
        width: 150,
        height: 150,
        borderRadius: 75,
        borderWidth: 2,
    },
    editIconContainer: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        backgroundColor: '#fff',
        borderRadius: 20,
        padding: 4,
        elevation: 5,
        shadowColor: colors.black,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 3,
    },

    editIcon: {
        width: 20,
        height: 20,
        tintColor: colors.black,
    },
    content: {
        paddingBottom: 60,
    },
    title: {
        textAlign: 'center',
        fontSize: 24,
        fontWeight: '600',
        color: colors.black,
    },
    title2: {
        textAlign: 'center',
        fontSize: 24,
        fontWeight: 'bold',
        color: colors.red,
        marginTop: 20,
    },
    username: {
        textAlign: 'center',
        fontSize: 16,
        color: '#666',
        marginBottom: 30,
    },
    containerForm: {
        backgroundColor: colors.thirdGray,
        flex: 1,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        paddingStart: '5%',
        paddingEnd: '5%',
        paddingBottom: 20,
        marginBottom: 0,
    },
    title: {
        fontSize: 20,
        marginTop: 28
    },
    input: {
        height: 50,
        marginBottom: 8,
        fontSize: 16,
        backgroundColor: colors.white,
        borderRadius: 20,
        padding: 15,
        dropShadow: 6,
        shadowColor: colors.black,
        shadowOpacity: 0.5,
    },
    button: {
        backgroundColor: colors.red,
        width: '60%',
        borderRadius: 8,
        paddingVertical: 8,
        marginTop: 14,
        justifyContent: 'center',
        alignItems: 'center',
        dropShadow: 6,
        shadowColor: colors.red,
        shadowOpacity: 0.5,
        alignSelf: 'center',
    },
    buttonText: {
        color: colors.white,
        fontSize: 18,
        fontWeight: 'bold'
    },
    buttonRegister: {
        marginTop: 14,
        alignSelf: 'center'
    },
    registerText: {
        color: 'alalal'
    },
    pickerContainer: {
        height: 50,
        backgroundColor: colors.white,
        borderRadius: 20,
        overflow: 'hidden',
        marginBottom: 12,
    },
    picker: {
        height: '100%',
        paddingHorizontal: 8,
        color: colors.black,
    },
    rowInputs: {
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: '#ccc',
        marginBottom: 12,
        height: 50,
        backgroundColor: colors.white,
        borderRadius: 12
    },
    inputHalf: {
        flex: 1,
        paddingHorizontal: 8,
        fontSize: 16,
    },
    separator: {
        width: 1,
        height: '100%',
        backgroundColor: '#ccc',
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 20,
        paddingHorizontal: 10,
        marginBottom: 8,
        backgroundColor: colors.white,
    },

    inputReadOnly: {
        flex: 1,
        height: 50,
        fontSize: 16,
        color: '#666',
    },

    lockIcon: {
        width: 20,
        height: 20,
        tintColor: '#999',
        marginLeft: 8,
    },


})

