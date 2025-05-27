import React, { useState } from 'react';
import axios from 'axios';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, Dimensions } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import colors from '../../constants/colors';
import { useFonts, Baloo2_400Regular, Baloo2_700Bold } from '@expo-google-fonts/baloo-2';

const { width } = Dimensions.get('window');
const BUTTON_COUNT = 4;
const BUTTON_MARGIN = 8;
const buttonSize = (width - 40 - BUTTON_MARGIN * (BUTTON_COUNT - 1)) / BUTTON_COUNT;

const notificationsData = [
    { id: 1, userImg: 'https://i.pravatar.cc/40?img=1', title: 'Seu pedido foi enviado' },
    { id: 2, userImg: 'https://i.pravatar.cc/40?img=2', title: 'Nova mensagem recebida' },
    { id: 3, userImg: 'https://i.pravatar.cc/40?img=3', title: 'Atualização disponível' },
];

const reviewsData = [
    { id: 1, userImg: 'https://i.pravatar.cc/60?img=4', name: 'João Silva', username: '@joaosilva', comment: 'Ótimo serviço, super recomendo!' },
    { id: 2, userImg: 'https://i.pravatar.cc/60?img=5', name: 'Maria Oliveira', username: '@mariaoliveira', comment: 'Gostei muito da experiência!' },
    { id: 3, userImg: 'https://i.pravatar.cc/60?img=6', name: 'Carlos Souza', username: '@carlossouza', comment: 'Pode melhorar, mas no geral é bom.' },
];

export default function UserPerfil() {
    const [selectedTab, setSelectedTab] = useState('notificacoes');

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

            {/* Botão Exit */}
            <TouchableOpacity style={styles.buttonExit}>
                <Image
                    source={require('../../assets/logout.png')}
                    style={styles.exitIcon}
                />
            </TouchableOpacity>

            {/* Avatar e Nome */}
            <Image
                source={{ uri: 'https://i.pravatar.cc/150?img=12' }}
                style={styles.avatar}
            />
            <Text style={styles.title}>Ana Catarina</Text>
            <Text style={styles.username}>@ana_catarina</Text>

            {/* Botões do containerButton */}
            <View style={styles.containerButton}>
                <TouchableOpacity style={styles.buttonBox} onPress={() => navigation.navigate('PerfilConfig')}>
                    <Image
                        source={require('../../assets/perfilConfig.png')}
                        style={styles.buttonIcon}
                    />
                    <Text style={styles.textButton}>Configurar Perfil</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonBox1} onPress={() => navigation.navigate('EscamboFeitos')}>
                    <Image
                        source={require('../../assets/escambos.png')}
                        style={styles.buttonIcon}
                    />
                    <Text style={styles.textButton}>Escambos</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonBox2}>
                    <Image
                        source={require('../../assets/inventario.png')}
                        style={styles.buttonIcon}
                    />
                    <Text style={styles.textButton}>Inventário</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonBox3}  onPress={() => navigation.navigate('Suporte')}>
                    <Image
                        source={require('../../assets/suporte.png')}
                        style={styles.buttonIcon}
                    />
                    <Text style={styles.textButton}>Suporte</Text>
                </TouchableOpacity>
            </View>

            {/* Aba de seleção Notificações / Reviews */}
            <View style={styles.containerOptions}>
                <TouchableOpacity
                    style={[
                        styles.optionButton,
                        selectedTab === 'notificacoes' && styles.optionButtonSelected
                    ]}
                    onPress={() => setSelectedTab('notificacoes')}
                >
                    <Text
                        style={[
                            styles.textOptions,
                            selectedTab === 'notificacoes' && styles.textOptionsSelected
                        ]}
                    >
                        Notificações
                    </Text>
                </TouchableOpacity>

                <View style={styles.verticalDivider} />

                <TouchableOpacity
                    style={[
                        styles.optionButton,
                        selectedTab === 'reviews' && styles.optionButtonSelected
                    ]}
                    onPress={() => setSelectedTab('reviews')}
                >

                    <Text
                        style={[
                            styles.textOptions,
                            selectedTab === 'reviews' && styles.textOptionsSelected
                        ]}
                    >
                        Reviews
                    </Text>
                </TouchableOpacity>
            </View>


            {/* Conteúdo da aba selecionada */}
            <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
                {selectedTab === 'notificacoes' && (
                    notificationsData.map(item => (
                        <View key={item.id} style={styles.notificationItem}>
                            <Image source={{ uri: item.userImg }} style={styles.notificationImage} />
                            <Text style={styles.notificationText}>{item.title}</Text>
                        </View>
                    ))
                )}

                {selectedTab === 'reviews' && (
                    reviewsData.map(item => (
                        <View key={item.id} style={styles.reviewItem}>
                            <Image source={{ uri: item.userImg }} style={styles.reviewImage} />
                            <Image
                                source={require('../../assets/estrelas.png')}
                                style={styles.estralasIcon}
                            />
                            <View style={styles.reviewTextContainer}>
                                <Text style={styles.reviewName}>{item.name}</Text>
                                <Text style={styles.reviewUsername}>{item.username}</Text>
                                <Text style={styles.reviewComment}>{item.comment}</Text>
                            </View>
                        </View>
                    ))
                )}
            </ScrollView>

        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
        paddingHorizontal: 10,
        paddingTop: 60,
        fontFamily: 'Montserrat',
    },
    buttonExit: {
        width: 50,
        height: 50,
        position: 'absolute',
        top: 40,
        right: 20,
        backgroundColor: colors.red,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 10,
    },
    exitIcon: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
    },
    avatar: {
        width: 130,
        height: 130,
        borderRadius: 65,
        borderWidth: 2,
        alignSelf: 'center',
        marginTop: 30,
        marginBottom: 12,
    },
    title: {
        textAlign: 'center',
        fontSize: 24,
        fontWeight: 'bold',
        color: colors.black,
        fontFamily: 'Montserrat',
    },
    username: {
        textAlign: 'center',
        fontSize: 16,
        color: colors.black,
        opacity: 0.7,
        marginBottom: 30,

    },
    containerButton: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        marginBottom: 30,
    },
    buttonBox: {
        width: buttonSize,
        height: buttonSize,
        backgroundColor: colors.blue,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 8,
        overflow: 'hidden',
        position: 'relative',
    },
    buttonBox1: {
        width: buttonSize,
        height: buttonSize,
        backgroundColor: colors.secondRed,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 8,
        overflow: 'hidden',
        position: 'relative',
    },
    buttonBox2: {
        width: buttonSize,
        height: buttonSize,
        backgroundColor: colors.secondOrange,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 8,
        overflow: 'hidden',
        position: 'relative',
    },
    buttonBox3: {
        width: buttonSize,
        height: buttonSize,
        backgroundColor: colors.green,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 8,
        overflow: 'hidden',
        position: 'relative',
    },
    buttonIcon: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
        opacity: 0.7,
    },
    textButton: {
        color: colors.white,
        fontWeight: '600',
        fontSize: 14,
        textAlign: 'center',
        zIndex: 1,
        fontFamily: 'Baloo2_700Bold'
    },
    containerOptions: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10,
        marginBottom: 20,
    },
    optionButton: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 20,
        borderColor: colors.secondBlue,
        backgroundColor: 'transparent',
    },

    verticalDivider: {
        width: 1,
        height: 30,
        backgroundColor: colors.secondGray,
        marginHorizontal: 10,
    },
    optionButtonSelected: {
        borderColor: colors.red,
    },
    textOptions: {
        fontSize: 16,
        color: colors.black,
        fontWeight: '600',
    },
    textOptionsSelected: {
        color: colors.red,
        fontWeight: 'bold',
    },

    content: {
        flex: 1,
    },

    // Notificações
    notificationItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderBottomColor: colors.secondGray,
    },
    notificationImage: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginRight: 12,
    },
    notificationText: {
        fontSize: 16,
        color: colors.black,
    },

    // Reviews
    reviewItem: {
        flexDirection: 'row',
        paddingVertical: 16,
        borderBottomWidth: 1,
        borderBottomColor: colors.secondGray,
        position: 'relative',
    },
    reviewImage: {
        width: 60,
        height: 60,
        borderRadius: 30,
        marginRight: 12,
    },
    reviewTextContainer: {
        flex: 1,
        justifyContent: 'center',
    },
    reviewName: {
        fontWeight: 'bold',
        fontSize: 16,
        color: colors.black,
    },
    reviewUsername: {
        fontSize: 14,
        color: colors.black,
        opacity: 0.7,
        marginBottom: 6,
    },
    reviewComment: {
        fontSize: 15,
        color: '#333',
    },
    estralasIcon: {
        width: 100,
        height: 15,
        position: 'absolute',
        top: 15,
        right: 10,
    }
});