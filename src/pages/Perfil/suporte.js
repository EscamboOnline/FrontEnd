import React, { useState } from 'react';
import axios from 'axios';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Keyboard, Image, TouchableWithoutFeedback, ScrollView } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import colors from '../../constants/colors';
import { KeyboardAvoidingView, Platform } from 'react-native';

export default function Suporte() {

    const navigation = useNavigation();

    const [imageUri, setImageUri] = useState(null);

    const handleAddImage = async () => {

        const simulatedImage = '../../assets/addImage.png';
        const fileName = 'addImage.png';

        setImageUri({ uri: simulatedImage, name: fileName });
    };

    const handleRemoveImage = () => {
        setImageUri(null);
    };

    return (
        <View style={{ flex: 1 }}>
            <View style={styles.container}>

                <View style={styles.header}>
                    <TouchableOpacity style={styles.buttonVoltar} onPress={() => navigation.navigate('UserPerfil')}>
                        <Image
                            source={require('../../assets/voltar.png')}
                            style={styles.voltarIcon}
                        />
                    </TouchableOpacity>

                </View>


                <View style={styles.suporteContainerContainer}>
                    <Image
                        source={require('../../assets/suporte.png')}
                        style={styles.suporteIcon}
                    />
                </View>
                <ScrollView style={styles.scrollForm}
                    contentContainerStyle={styles.scrollContent}
                    keyboardShouldPersistTaps="handled">
                    <View style={styles.containerForm}>

                        <Text style={styles.title}>Seu Nome</Text>
                        <TextInput placeholder="Seu nome"
                            style={styles.input} />


                        <Text style={styles.title}>E-Mail</Text>
                        <TextInput placeholder="Seu email"
                            style={styles.input} keyboardType="email-address" />

                        <Text style={styles.title}>Telefone</Text>
                        <TextInput placeholder="Seu telefone"
                            style={styles.input} keyboardType='phone-pad' />

                        <Text style={styles.title}>Descrição do problema</Text>

                        <TextInput
                            placeholder="Digite sua mensagem..."
                            multiline={true}
                            numberOfLines={4}
                            style={styles.textArea}
                        />

                        <View>
                            <Text style={styles.title}>Mandar foto do comprovante da troca ou print do erro:</Text>

                            {
                                imageUri ? (
                                    <View style={styles.imageInfoContainer}>
                                        <Text style={styles.imageName}>{imageUri.name}</Text>
                                        <TouchableOpacity onPress={handleRemoveImage}>
                                            <Text style={styles.removeText}>Remover</Text>
                                        </TouchableOpacity>
                                    </View>
                                ) : (
                                    <View style={styles.addImageContainer}>
                                        <TouchableOpacity onPress={handleAddImage}>
                                            <Image
                                                source={require('../../assets/addImagem.png')}
                                                style={styles.addIcon}
                                            />
                                        </TouchableOpacity>
                                    </View>
                                )
                            }
                        </View>

                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.buttonText}>Enviar</Text>
                        </TouchableOpacity>

                    </View>
                </ScrollView>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: colors.green,
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 20
    },
    scrollForm: {
        width: '100%',
    },
    scrollContent: {
        paddingBottom: Platform.OS === 'ios' ? 100 : 20,
        alignItems: 'center',
    },
    header: {
        width: '100%',
        paddingTop: 20,
        paddingBottom: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.green,
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
    suporteContainer: {
        position: 'absolute',
        marginTop: 20,
        zIndex: 10,
        alignSelf: 'center',
        backgroundColor: colors.green,
    },
    suporteIcon: {
        width: 100,
        height: 100,
        borderRadius: 50,
        resizeMode: 'contain',
    },
    containerForm: {
        backgroundColor: colors.white,
        width: '90%',
        borderRadius: 10,
        paddingHorizontal: '5%',
        paddingBottom: 20,
        paddingTop: 10,
    },
    title: {
        fontSize: 20,
        marginTop: 28
    },
    input: {
        height: 50,
        marginBottom: 12,
        fontSize: 16,
        backgroundColor: colors.thirdGray,
        borderRadius: 20,
        padding: 15,
        dropShadow: 6,
        shadowColor: colors.black,
        shadowOpacity: 0.5,
    },
    textArea: {
        height: 120,
        padding: 12,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 12,
        backgroundColor: colors.thirdGray,
        textAlignVertical: 'top',
    },

    addImageContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 10,
        padding: 20,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 12,
        backgroundColor: colors.red,
    },
    addIcon: {
        width: 60,
        height: 60,
        resizeMode: 'contain',
    },
    imageInfoContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#e0e0e0',
        padding: 15,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#aaa',
        marginVertical: 10,
    },
    imageName: {
        fontSize: 16,
        color: '#333',
    },
    removeText: {
        color: 'red',
        fontWeight: 'bold',
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
    registerText: {
        color: 'alalal'
    },
})

