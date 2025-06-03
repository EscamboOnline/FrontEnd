import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
    Modal,
    SafeAreaView,
    StatusBar,
    Dimensions,
    TextInput
} from 'react-native';
import colors from '../../constants/colors';
import { useNavigation } from "@react-navigation/native";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import { popupStyles } from '../../components/popup';
import { buttonsStyles } from '../../components/buttons';
import { headerStyles } from '../../components/header';


const { width } = Dimensions.get('window');

const baseWidth = 375;
const scale = width / baseWidth;

export default function Comentar() {

    const navigation = useNavigation();

    const receiptData = {
        user: {
            name: 'Usuario1',
            handle: '@user_000',
            avatar: 'https://randomuser.me/api/portraits/men/32.jpg'
        },
    };

    const [exitModalVisible, setExitModalVisible] = useState(false);

    const handleComment = () => {

        Alert.alert('Comentário enviado com sucesso!');
        navigation.navigate('PerfilX');

    };

    return (
        <SafeAreaView style={styles.container}>

            <Modal visible={exitModalVisible} transparent animationType="fade">
                <View style={popupStyles.centeredView}>
                    <View style={popupStyles.modalView}>
                        <Text style={popupStyles.modalText}>Enviar comentário?</Text>

                        <View style={popupStyles.modalButtons}>
                            <TouchableOpacity
                                style={[popupStyles.modalButton, popupStyles.noButton]}
                                onPress={() => setExitModalVisible(false)}
                            >
                                <Text style={popupStyles.noButtonText}>Não</Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={[popupStyles.modalButton, popupStyles.yesButton]}
                                onPress={handleComment}
                            >
                                <Text style={popupStyles.yesButtonText}>Sim</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>

            <StatusBar barStyle="dark-content" backgroundColor="#fff" />

            {/* Header */}
            <View style={headerStyles.header}>
                <TouchableOpacity style={headerStyles.backButton} onPress={() => navigation.navigate('PerfilX')}>
                    <MaterialIcons name="play-arrow" size={30 * scale} color="#000" style={{ transform: [{ scaleX: -1 }] }} />
                </TouchableOpacity>
            </View>

            <View style={styles.userConteiner}>

                <Image source={{ uri: receiptData.user.avatar }} style={styles.userAvatar} />
                <Text>Como é esse usuário?</Text>

            </View>

            <View style={styles.commentConteiner}>
                <Text style={styles.titleComment}>Comentário</Text>
                <TextInput
                    placeholder="Digite aqui..."
                    multiline={true}
                    numberOfLines={15}
                    style={styles.textArea}
                    textAlignVertical="top"
                    returnKeyType="done"
                />
            </View>

            <TouchableOpacity style={buttonsStyles.buttonForm} onPress={() => setExitModalVisible(true)}>
                <Text style={buttonsStyles.buttonFormText}>Enviar</Text>
            </TouchableOpacity>

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
        fontFamily: 'Montserrat',
    },

    flatList: {
        flex: 1,
        padding: 10 * scale,
        paddingBottom: 40 * scale,
    },

    userInfoContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20 * scale,
    },

    userConteiner:{
        paddingHorizontal: 10,
    },

    userAvatar: {
        width: 60 * scale,
        height: 60 * scale,
        borderRadius: 35 * scale,
        marginRight: 15 * scale,
    },

    userTextContainer: {
        justifyContent: 'center',
    },

    userName: {
        fontSize: 15 * scale,
        fontWeight: 'bold',
        color: colors.black,
    },

    userHandle: {
        fontSize: 13 * scale,
        color: '#666',
    },

    commentConteiner: {
        paddingHorizontal: 10,
    },

    titleComment: {
        fontSize: 14,
        color: colors.black,

    },

    textArea: {
        height: 120,
        padding: 15,
        borderColor: '#E0E0E0',
        borderWidth: 1,
        borderRadius: 15,
        backgroundColor: colors.thirdGray,
        textAlignVertical: 'top',
        fontSize: 16,
        marginBottom: 12,
    },



});
