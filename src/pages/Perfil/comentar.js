import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
    Modal,
    Dimensions,
    TextInput,
    Alert,
} from 'react-native';
import colors from '../../constants/colors';
import { useNavigation } from "@react-navigation/native";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { popupStyles } from '../../components/popup';
import { buttonsStyles } from '../../components/buttons';
import { headerStyles } from '../../components/header';
import StarRating from 'react-native-star-rating-widget';

import { useFocusEffect } from '@react-navigation/native';
import * as NavigationBar from 'expo-navigation-bar';
import * as SystemUI from 'expo-system-ui';



const { width } = Dimensions.get('window');

const baseWidth = 375;
const scale = width / baseWidth;

export default function Comentar() {

    //estrelas
    const [rating, setRating] = useState(0);

    //navegação
    const navigation = useNavigation();

    //dado
    const receiptData = {
        user: {
            name: 'Usuario1',
            handle: '@user_000',
            avatar: 'https://randomuser.me/api/portraits/men/32.jpg'
        },
    };

    //Navegação android

    useFocusEffect(
        React.useCallback(() => {
            NavigationBar.setBackgroundColorAsync('#ffffff');
            NavigationBar.setButtonStyleAsync('dark');
            SystemUI.setBackgroundColorAsync('#ffffff');

            return () => {
                NavigationBar.setBackgroundColorAsync('#e91e63');
                NavigationBar.setButtonStyleAsync('light');
                SystemUI.setBackgroundColorAsync('#e91e63');
            };
        }, [])
    );


    //popup
    const [exitModalVisible, setExitModalVisible] = useState(false);

    //alert
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

            {/* Header */}
            <View style={headerStyles.header}>
                <TouchableOpacity style={headerStyles.backButton} onPress={() => navigation.navigate('PerfilX')}>
                    <MaterialIcons name="play-arrow" size={30 * scale} color="#000" style={{ transform: [{ scaleX: -1 }] }} />
                </TouchableOpacity>
            </View>

            <View style={styles.userConteiner}>
                <Image source={{ uri: receiptData.user.avatar }} style={styles.userAvatar} />

                <View style={styles.userTextArea}>
                    <Text style={styles.userQuestion}>Como é esse usuário?</Text>

                    <StarRating
                        rating={rating}
                        onChange={setRating}
                        starSize={30}
                        color="gold"
                    />
                </View>
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
        marginBottom: 40
    },

    flatList: {
        flex: 1,
        padding: 10 * scale,
        paddingBottom: 40 * scale,
    },
    userConteiner: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        paddingHorizontal: 10,
        marginBottom: 20,
    },

    userAvatar: {
        width: 60 * scale,
        height: 60 * scale,
        borderRadius: 30 * scale,
        marginRight: 15 * scale,
    },

    userTextArea: {
        flex: 1,
    },

    userQuestion: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 8,
        color: colors.black,
    },

    commentConteiner: {
        paddingHorizontal: 10,
    },

    titleComment: {
        fontSize: 18,
        color: colors.black,
    },

    textArea: {
        height: 570,
        padding: 15,
        borderColor: '#E0E0E0',
        borderWidth: 1,
        borderRadius: 15,
        backgroundColor: colors.thirdGray,
        textAlignVertical: 'top',
        fontSize: 16,
    },

});
