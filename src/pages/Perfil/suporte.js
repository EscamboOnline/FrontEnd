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
    SafeAreaView,
    Dimensions,
    Modal,
    Platform,
    KeyboardAvoidingView
} from 'react-native';
import { useNavigation } from "@react-navigation/native";
import * as ImagePicker from 'expo-image-picker';
import colors from '../../constants/colors';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { popupStyles } from '../../components/popup';
import { buttonsStyles } from '../../components/buttons';
import { headerStyles } from '../../components/header';

const { width } = Dimensions.get('window');
const baseWidth = 375;
const scale = width / baseWidth;

export default function Suporte() {
    const navigation = useNavigation();
    const [formData, setFormData] = useState({ name: '', email: '', phone: '', description: '' });
    const [isPickingImage, setIsPickingImage] = useState(false);
    const [image, setImage] = useState(null);
    const [exitModalVisible, setExitModalVisible] = useState(false);

    const pickImage = async () => {
        try {
            Keyboard.dismiss();
            setIsPickingImage(true);
            const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
            if (status !== 'granted') {
                alert('Permissão para acessar a galeria foi negada.');
                return;
            }
            const result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                allowsEditing: true,
                aspect: [4, 3],
                quality: 1,
            });
            if (!result.canceled) setImage(result.assets[0].uri);
        } catch (error) {
            console.error("Erro ao escolher imagem:", error);
            alert("Ocorreu um erro ao escolher a imagem.");
        } finally {
            setIsPickingImage(false);
        }
    };

    const updateFormData = (field, value) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    const dismissKeyboard = () => Keyboard.dismiss();

    return (
         <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 100 : 0}
    >
        <TouchableWithoutFeedback onPress={dismissKeyboard}>
            <SafeAreaView style={styles.container}>
                <Modal
                    visible={exitModalVisible}
                    transparent={true}
                    animationType="fade"
                    onRequestClose={() => setExitModalVisible(false)}>
                    <View style={popupStyles.centeredView}>
                        <View style={popupStyles.modalView}>
                            <Text style={popupStyles.modalText}>Sua mensagem foi enviada pro suporte</Text>
                            <View style={popupStyles.modalButtons}>
                                <TouchableOpacity
                                    style={[popupStyles.modalButton, popupStyles.okButton]}
                                    onPress={() => {
                                        setExitModalVisible(false);
                                        navigation.navigate('UserPerfil');
                                    }}>
                                    <Text style={popupStyles.okButtonText}>OK</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </Modal>

                <View style={styles.innerContainer}>
                    <View style={[headerStyles.header, { backgroundColor: colors.green }]}>
                        <TouchableOpacity style={headerStyles.backButton} onPress={() => navigation.navigate('UserPerfil')}>
                            <MaterialIcons name="play-arrow" size={30 * scale} color="#fff" style={{ transform: [{ scaleX: -1 }] }} />
                        </TouchableOpacity>
                        <Text style={[headerStyles.headerTitle, { color: colors.white }]}>Suporte</Text>
                        <View style={{ width: 40 * scale }} />
                    </View>

                    <View style={styles.suporteContainerContainer}>
                        <Image source={require('../../assets/suporte.png')} style={styles.suporteIcon} />
                    </View>

                    <View style={styles.containerForm}>
                        <FlatList
                            data={[{ key: 'form' }]}
                            renderItem={() => (
                                <View>
                                    <Text style={styles.title}>Seu Nome</Text>
                                    <TextInput
                                        placeholder="Seu nome"
                                        style={styles.input}
                                        value={formData.name}
                                        onChangeText={(value) => updateFormData('name', value)}
                                    />
                                    <Text style={styles.title}>E-Mail</Text>
                                    <TextInput
                                        placeholder="Seu email"
                                        style={styles.input}
                                        keyboardType="email-address"
                                        autoCapitalize="none"
                                        value={formData.email}
                                        onChangeText={(value) => updateFormData('email', value)}
                                    />
                                    <Text style={styles.title}>Telefone</Text>
                                    <TextInput
                                        placeholder="Seu telefone"
                                        style={styles.input}
                                        keyboardType='phone-pad'
                                        value={formData.phone}
                                        onChangeText={(value) => updateFormData('phone', value)}
                                    />
                                    <Text style={styles.title}>Descrição do problema</Text>
                                    <TextInput
                                        placeholder="Digite sua mensagem..."
                                        multiline
                                        numberOfLines={4}
                                        style={styles.textArea}
                                        textAlignVertical="top"
                                        value={formData.description}
                                        onChangeText={(value) => updateFormData('description', value)}
                                    />
                                    <Text style={styles.title}>Comprovante ou print do erro</Text>
                                    {image ? (
                                        <View style={styles.imageInfoContainer}>
                                            <Image source={{ uri: image }} style={{ width: 70, height: 70 }} />
                                            <TouchableOpacity onPress={() => setImage(null)}>
                                                <Text style={styles.removeText}>Remover</Text>
                                            </TouchableOpacity>
                                        </View>
                                    ) : (
                                        <View style={styles.addImageContainer}>
                                            <TouchableOpacity onPress={pickImage}>
                                                <Image
                                                    source={require('../../assets/addImagem.png')}
                                                    style={styles.addIcon}
                                                />
                                            </TouchableOpacity>
                                        </View>
                                    )}
                                    <TouchableOpacity
                                        style={buttonsStyles.buttonForm}
                                        onPress={() => {
                                            Keyboard.dismiss();
                                            setExitModalVisible(true);
                                        }}>
                                        <Text style={buttonsStyles.buttonFormText}>Enviar</Text>
                                    </TouchableOpacity>
                                    <View style={styles.bottomPadding} />
                                </View>
                            )}
                            contentContainerStyle={styles.formFlatContent}
                            keyboardShouldPersistTaps="handled"
                            showsVerticalScrollIndicator={false}
                        />
                    </View>
                </View>
            </SafeAreaView>
        </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.green,
    },
    innerContainer: {
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
    containerForm: {
        backgroundColor: colors.white,
        borderRadius: 15,
        margin: 20,
        paddingBottom: 10,
        flex: 1,
    },
    formFlatContent: {
        paddingHorizontal: 20,
        paddingBottom: 20,
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
        fontSize: 16,
        marginBottom: 12,
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
        backgroundColor: colors.gray,
        padding: 15,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: '#ddd',
        marginVertical: 10,
        elevation: 2,
    },
    removeText: {
        color: colors.red,
        fontWeight: 'bold',
        fontSize: 16,
    },
    bottomPadding: {
        height: 20,
    },
});
