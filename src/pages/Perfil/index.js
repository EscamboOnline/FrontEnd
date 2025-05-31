import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
    FlatList,
    Dimensions,
    Modal,
    Alert
} from 'react-native';
import { useNavigation } from "@react-navigation/native";
import colors from '../../constants/colors';
import { useFonts, Baloo2_400Regular, Baloo2_700Bold } from '@expo-google-fonts/baloo-2';
import { popupStyles } from '../../constants/popup';


const { width } = Dimensions.get('window');
const BUTTON_COUNT = 4;
const BUTTON_MARGIN = 8;
const buttonSize = (width - 25 - BUTTON_MARGIN * (BUTTON_COUNT - 1)) / BUTTON_COUNT;

const avatarSize = buttonSize * 1.75;

const baseWidth = 375;
const scale = width / baseWidth;


const notificationsData = [
    { id: 1, userImg: 'https://i.pravatar.cc/40?img=1', title: 'Seu pedido foi enviado' },
    { id: 2, userImg: 'https://i.pravatar.cc/40?img=2', title: 'Nova mensagem recebida' },
    { id: 3, userImg: 'https://i.pravatar.cc/40?img=3', title: 'Atualização disponível' },
];

const reviewsData = [
    { id: 1, userImg: 'https://i.pravatar.cc/60?img=4', name: 'João Silva', username: '@joaosilva', comment: 'Ótimo serviço, super recomendo!' },
    { id: 2, userImg: 'https://i.pravatar.cc/60?img=5', name: 'Maria Oliveira', username: '@mariaoliveira', comment: 'Gostei muito da experiência!' },
    { id: 3, userImg: 'https://i.pravatar.cc/60?img=6', name: 'Rui Braga', username: '@albraga', comment: 'Pode melhorar, mas no geral é bom. YaaaaaaaHuuuHaaaaaaaaaaaaaaaa' },
];

export default function UserPerfil() {
    const [selectedTab, setSelectedTab] = useState('notificacoes');
    const [exitModalVisible, setExitModalVisible] = useState(false);

    const navigation = useNavigation();

    let [fontsLoaded] = useFonts({
        Baloo2_400Regular,
        Baloo2_700Bold,
    });

    if (!fontsLoaded) {
        return <Text>Carregando fontes...</Text>;
    }

    const handleLogout = () => {

        Alert.alert('Logout', 'Você foi desconectado com sucesso!');

    };

    return (
        <View style={styles.container}>
            {/* Exit Modal */}
            <Modal visible={exitModalVisible} transparent animationType="fade">
                <View style={popupStyles.centeredView}>
                    <View style={popupStyles.modalView}>
                        <Text style={popupStyles.modalText}>Tem certeza que deseja sair?</Text>

                        <View style={popupStyles.modalButtons}>
                            <TouchableOpacity
                                style={[popupStyles.modalButton, popupStyles.noButton]}
                                onPress={() => setExitModalVisible(false)}
                            >
                                <Text style={popupStyles.noButtonText}>Não</Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={[popupStyles.modalButton, popupStyles.yesButton]}
                                onPress={handleLogout}
                            >
                                <Text style={popupStyles.yesButtonText}>Sim</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>


            {/* Botão Exit */}
            <TouchableOpacity
                style={styles.buttonExit}
                onPress={() => setExitModalVisible(true)}
            >
                <Image
                    source={require('../../assets/logout.png')}
                    style={styles.exitIcon}
                />
            </TouchableOpacity>

            {/* Avatar e Nome */}
            <Image
                source={require('../../assets/personaImage.png')}
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
                    <Text style={styles.textButton}>Config. Perfil</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonBox1} onPress={() => navigation.navigate('EscambosFeitos')}>
                    <Image
                        source={require('../../assets/escambos.png')}
                        style={styles.buttonIcon}
                    />
                    <Text style={styles.textButton}>Escambos</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonBox2} onPress={() => navigation.navigate('Inventario')}>
                    <Image
                        source={require('../../assets/inventario.png')}
                        style={styles.buttonIcon}
                    />
                    <Text style={styles.textButton}>Inventário</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonBox3} onPress={() => navigation.navigate('Suporte')}>
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
            <View style={styles.content}>
                {selectedTab === 'notificacoes' && (
                    <FlatList
                        data={notificationsData}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({ item }) => (
                            <View style={styles.notificationItem}>
                                <Image source={{ uri: item.userImg }} style={styles.notificationImage} />
                                <Text style={styles.notificationText}>{item.title}</Text>
                            </View>
                        )}
                        showsVerticalScrollIndicator={false}
                    />
                )}

                {selectedTab === 'reviews' && (
                    <FlatList
                        data={reviewsData}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({ item }) => (
                            <View style={styles.reviewItem}>
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
                        )}
                        showsVerticalScrollIndicator={false}
                    />
                )}
            </View>

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
        width: 45 * scale,
        height: 45 * scale,
        position: 'absolute',
        top: 30 * scale,
        right: 20 * scale,
        backgroundColor: colors.red,
        borderRadius: 25 * scale,
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
        width: avatarSize,
        height: avatarSize,
        borderRadius: 75,
        alignSelf: 'center',
        marginTop: 10 * scale,
        marginBottom: 12,
    },
    title: {
        textAlign: 'center',
        fontSize: 24 * scale,
        fontWeight: 'bold',
        color: colors.black,
        fontFamily: 'Montserrat',
    },
    username: {
        textAlign: 'center',
        fontSize: 16 * scale,
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
        fontSize: 16 * scale,
        textAlign: 'center',
        zIndex: 1,
        fontFamily: 'Baloo2_700Bold',
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
        width: 1 * scale,
        height: 30 * scale,
        backgroundColor: colors.secondGray,
        marginHorizontal: 10,
    },
    optionButtonSelected: {
        borderColor: colors.red,
    },
    textOptions: {
        fontSize: 18 * scale,
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
        width: 40 * scale,
        height: 40 * scale,
        borderRadius: 20 * scale,
        marginRight: 12,
    },
    notificationText: {
        fontSize: 16 * scale,
        color: colors.black,
    },

    // Reviews
    reviewItem: {
        flexDirection: 'row',
        paddingVertical: 16 * scale,
        borderBottomWidth: 1,
        borderBottomColor: colors.secondGray,
        position: 'relative',
    },
    reviewImage: {
        width: 60 * scale,
        height: 60 * scale,
        borderRadius: 30 * scale,
        marginRight: 12,
    },
    reviewTextContainer: {
        flex: 1,
        justifyContent: 'center',
    },
    reviewName: {
        fontWeight: 'bold',
        fontSize: 16 * scale,
        color: colors.black,
    },
    reviewUsername: {
        fontSize: 14 * scale,
        color: colors.black,
        opacity: 0.7,
        marginBottom: 6,
    },
    reviewComment: {
        fontSize: 15 * scale,
        color: '#333',
    },
    estralasIcon: {
        width: 100 * scale,
        height: 16 * scale,
        position: 'absolute',
        top: 15,
        right: 10,
    }
});