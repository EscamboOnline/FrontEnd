import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    Keyboard,
    Image,
    TouchableWithoutFeedback,
    FlatList,
    Platform,
    SafeAreaView,
    Dimensions,
    Modal
} from 'react-native';
import { useNavigation } from "@react-navigation/native";
import colors from '../../constants/colors';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { popupStyles } from '../../constants/popup';
import { buttonsStyles } from '../../constants/buttons';
import { headerStyles } from '../../constants/header';

const { height: screenHeight } = Dimensions.get('window');

export default function Suporte() {
    const navigation = useNavigation();
    const [imageUri, setImageUri] = useState(null);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        description: ''
    });

    const [exitModalVisible, setExitModalVisible] = useState(false);

    const handleAddImage = async () => {
        const simulatedImage = '../../assets/addImage.png';
        const fileName = 'addImage.png';
        setImageUri({ uri: simulatedImage, name: fileName });
    };

    const handleRemoveImage = () => {
        setImageUri(null);
    };

    const dismissKeyboard = () => {
        Keyboard.dismiss();
    };


    return (
        <SafeAreaView style={styles.container}>

            <Modal
                visible={exitModalVisible}
                transparent={true}
                animationType="fade"
                onRequestClose={() => setExitModalVisible(false)}
            >
                <View style={popupStyles.centeredView}>
                    <View style={popupStyles.modalView}>
                        <Text style={popupStyles.modalText}>Sua mensagem foi enviada pro suporte</Text>

                        <View style={popupStyles.modalButtons}>

                            <TouchableOpacity
                                style={[popupStyles.modalButton, popupStyles.okButton]}
                                onPress={() => {
                                    setExitModalVisible(false);
                                    navigation.navigate('UserPerfil');
                                }}
                            >
                                <Text style={popupStyles.okButtonText}>OK</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>


            <View style={styles.mainContainer}>

                <View style={[headerStyles.header, { backgroundColor: colors.green, paddingTop: 20, }]}>
                    <TouchableOpacity
                        style={headerStyles.buttonVoltar}
                        onPress={() => navigation.navigate('UserPerfil')}
                    >
                        <MaterialIcons name="play-arrow" size={30} color="#fff" style={{ transform: [{ scaleX: -1 }] }} />
                    </TouchableOpacity>
                </View>

                {/* Support Icon */}
                <View style={styles.suporteContainerContainer}>
                    <Image
                        source={require('../../assets/suporte.png')}
                        style={styles.suporteIcon}
                    />
                </View>

                <View style={styles.formWrapper}>
                    <View style={styles.containerForm}>

                        <FlatList
                            data={[{ key: 'form' }]}
                            renderItem={() => (
                                <TouchableWithoutFeedback onPress={dismissKeyboard}>
                                    <View>
                                        <Text style={styles.title}>Seu Nome</Text>
                                        <TextInput
                                            placeholder="Seu nome"
                                            style={styles.input}
                                            value={formData.name}
                                            onChangeText={(value) => updateFormData('name', value)}
                                            returnKeyType="next"
                                        />

                                        <Text style={styles.title}>E-Mail</Text>
                                        <TextInput
                                            placeholder="Seu email"
                                            style={styles.input}
                                            keyboardType="email-address"
                                            autoCapitalize="none"
                                            value={formData.email}
                                            onChangeText={(value) => updateFormData('email', value)}
                                            returnKeyType="next"
                                        />

                                        <Text style={styles.title}>Telefone</Text>
                                        <TextInput
                                            placeholder="Seu telefone"
                                            style={styles.input}
                                            keyboardType='phone-pad'
                                            value={formData.phone}
                                            onChangeText={(value) => updateFormData('phone', value)}
                                            returnKeyType="next"
                                        />

                                        <Text style={styles.title}>Descrição do problema</Text>
                                        <TextInput
                                            placeholder="Digite sua mensagem..."
                                            multiline={true}
                                            numberOfLines={4}
                                            style={styles.textArea}
                                            textAlignVertical="top"
                                            value={formData.description}
                                            onChangeText={(value) => updateFormData('description', value)}
                                            returnKeyType="done"
                                        />

                                        <View style={styles.imageSection}>
                                            <Text style={styles.title}>
                                                Mandar foto do comprovante da troca ou print do erro:
                                            </Text>

                                            {imageUri ? (
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
                                            )}
                                        </View>

                                        <TouchableOpacity style={buttonsStyles.buttonForm} onPress={() => setExitModalVisible(true)}>
                                            <Text style={buttonsStyles.buttonFormText}>Enviar</Text>
                                        </TouchableOpacity>

                                        <View style={styles.bottomPadding} />

                                    </View>
                                </TouchableWithoutFeedback>
                            )}
                            style={styles.formFlatView}
                            contentContainerStyle={styles.formFlatContent}
                            showsVerticalScrollIndicator={false}
                            keyboardShouldPersistTaps="handled"
                            bounces={false}
                            nestedScrollEnabled={true}
                        />
                    </View>

                </View>
            </View>

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.green,
    },

    mainContainer: {
        flex: 1,
    },

    suporteContainerContainer: {
        alignItems: 'center',
        backgroundColor: colors.green,
        paddingVertical: 10,
        width: 100,
        height: 100,
        alignSelf: 'center',
    },

    suporteIcon: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
    },

    formWrapper: {
        flex: 1,
        marginTop: 20,
        justifyContent: 'center',
        paddingHorizontal: 15,
        paddingBottom: 20,
        maxHeight: screenHeight * 0.75,
    },

    containerForm: {
        backgroundColor: colors.white,
        borderRadius: 15,
        flex: 1,
        minHeight: 600,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },


    formFlatView: {
        flex: 1,
        backgroundColor: colors.white,
        borderRadius: 15,
    },


    formFlatContent: {
        paddingHorizontal: 20,
        paddingVertical: 20,
        paddingBottom: 20,
        flexGrow: 1,
        justifyContent: 'flex-start',
    },

    title: {
        fontSize: 18,
        marginTop: 18,
        marginBottom: 8,
        fontWeight: '600',
        color: colors.black,
    },

    input: {
        height: 50,
        fontSize: 16,
        backgroundColor: colors.thirdGray,
        borderRadius: 25,
        paddingHorizontal: 15,
        marginBottom: 12,
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

    imageSection: {
        marginTop: 10,
    },

    addImageContainer: {
        height: 80,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 10,
        padding: 20,
        borderWidth: 2,
        borderColor: colors.red,
        borderStyle: 'dashed',
        borderRadius: 12,
        backgroundColor: 'rgba(255, 23, 68, 0.1)',
    },

    addIcon: {
        width: 60,
        height: 60,
        resizeMode: 'contain',
        tintColor: colors.red,
    },

    imageInfoContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
        padding: 15,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: '#ddd',
        marginVertical: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 2,
    },

    imageName: {
        fontSize: 16,
        color: '#333',
        flex: 1,
        fontWeight: '500',
    },

    removeText: {
        color: colors.red,
        fontWeight: 'bold',
        fontSize: 16,
    },

    button: {
        backgroundColor: colors.red,
        width: 160,
        borderRadius: 12,
        paddingVertical: 15,
        marginTop: 25,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
    },

    buttonText: {
        color: colors.white,
        fontSize: 18,
        fontWeight: 'bold'
    },

    bottomPadding: {
        height: 10,
    },
});