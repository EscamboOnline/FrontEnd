import React, { useState } from 'react';
import {
    Keyboard,
    TouchableWithoutFeedback,
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
    FlatList,
    TextInput,
    Dimensions,
} from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { Picker } from '@react-native-picker/picker';
import colors from '../../constants/colors';
import { SafeAreaView } from 'react-native-safe-area-context';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const { width } = Dimensions.get('window');
const baseWidth = 375;
const scale = width / baseWidth;

export default function PerfilConfig() {
    const navigation = useNavigation();

    const [formData, setFormData] = useState({
        name: "Ana Catarina",
        username: "@ana_catarina",
        gender: "feminino",
        cpf: "000.000.000-01",
        email: "ana@email.com",
        zipCode: "00000-001",
        state: "São Paulo",
        cityNeighborhood: "Cajamar, Pajé House",
    });

    const dismissKeyboard = () => Keyboard.dismiss();

    const handleAvatarPress = () => console.log('Avatar pressed');

    const formData_array = [{ id: 'form' }];

    return (
        <SafeAreaView style={styles.container}>
            <TouchableWithoutFeedback onPress={dismissKeyboard}>
                <View style={styles.mainContainer}>
                    <View style={styles.header}>
                        <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate('UserPerfil')}>
                            <MaterialIcons name="play-arrow" size={30 * scale} color="#000" style={{ transform: [{ scaleX: -1 }] }} />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.headerSection}>
                        <TouchableOpacity style={styles.avatarContainer} onPress={handleAvatarPress}>
                            <Image source={require('../../assets/personaImage.png')} style={styles.avatar} />
                            <View style={styles.editIconContainer}>
                                <Image source={require('../../assets/camera.png')} style={styles.editIcon} />
                            </View>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.containerForm}>
                        <FlatList
                            data={formData_array}
                            keyExtractor={item => item.id}
                            style={styles.flatList}
                            contentContainerStyle={styles.contentContainer}
                            showsVerticalScrollIndicator={false}
                            keyboardShouldPersistTaps="handled"
                            bounces={false}
                            renderItem={() => (
                                <View>
                                    <Text style={styles.title2}>Informações base</Text>
                                    <Text style={styles.title}>Seu Nome</Text>
                                    <TextInput placeholder="Seu nome" style={styles.input} value={formData.name} onChangeText={v => updateFormData('name', v)} />
                                    <Text style={styles.title}>Username</Text>
                                    <TextInput placeholder="Seu username" style={styles.input} value={formData.username} onChangeText={v => updateFormData('username', v)} />
                                    <Text style={styles.title}>Sexo</Text>
                                    <View style={styles.pickerContainer}>
                                        <Picker selectedValue={formData.gender} style={styles.picker} onValueChange={v => updateFormData('gender', v)}>
                                            <Picker.Item style={styles.pickerText} label="Selecione o sexo" value="" />
                                            <Picker.Item style={styles.pickerText} label="Masculino" value="masculino" />
                                            <Picker.Item style={styles.pickerText} label="Feminino" value="feminino" />
                                            <Picker.Item style={styles.pickerText} label="Prefiro não informar" value="nao_informar" />
                                        </Picker>
                                    </View>

                                    <Text style={styles.title2}>Somente visualizar</Text>
                                    <Text style={styles.title}>CPF</Text>
                                    <View style={styles.inputContainer}>
                                        <TextInput style={styles.inputReadOnly} value={formData.cpf} editable={false} />
                                        <Image source={require('../../assets/cadeado.png')} style={styles.lockIcon} />
                                    </View>

                                    <Text style={styles.title}>E-Mail</Text>
                                    <View style={styles.inputContainer}>
                                        <TextInput style={styles.inputReadOnly} value={formData.email} editable={false} />
                                        <Image source={require('../../assets/cadeado.png')} style={styles.lockIcon} />
                                    </View>

                                    <Text style={styles.title2}>Endereço</Text>
                                    <Text style={styles.title}>CEP</Text>
                                    <TextInput placeholder="Seu CEP atual" style={styles.input} value={formData.zipCode} onChangeText={v => updateFormData('zipCode', v)} />

                                    <Text style={styles.title}>Estado</Text>
                                    <View style={styles.rowInputs}>
                                        <TextInput style={styles.inputHalf} placeholder="Estado" value={formData.state} onChangeText={v => updateFormData('state', v)} />
                                        <View style={styles.separator} />
                                        <TextInput style={styles.inputHalf} placeholder="Cidade, Bairro" value={formData.cityNeighborhood} onChangeText={v => updateFormData('cityNeighborhood', v)} />
                                    </View>

                                    <TouchableOpacity style={styles.button}>
                                        <Text style={styles.buttonText}>Alterar</Text>
                                    </TouchableOpacity>

                                    <View style={styles.bottomPadding} />
                                </View>
                            )}
                        />
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white
    },
    mainContainer: {
        flex: 1
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15 * scale
    },
    backButton: {
        width: 40 * scale
    },
    headerSection: {
        paddingBottom: 10 * scale
    },
    avatarContainer: {
        alignSelf: 'center',
    },
    avatar: {
        width: 180 * scale,
        height: 180 * scale,
        borderRadius: 90 * scale
    },
    editIconContainer: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        padding: 4 * scale
    },
    editIcon: {
        width: 20 * scale,
        height: 20 * scale
    },
    containerForm: {
        flex: 1,
        backgroundColor: colors.thirdGray,
        paddingTop: 10 * scale,
    },
    flatList: {
        backgroundColor: colors.thirdGray
    },
    contentContainer: {
        paddingHorizontal: 20 * scale,
        paddingBottom: 30 * scale
    },
    title2: {
        textAlign: 'center',
        fontSize: 24 * scale,
        fontWeight: 'bold',
        color: colors.red
    },
    title: {
        fontSize: 20 * scale,
        marginVertical: 8 * scale
    },
    input: {
        height: 50 * scale,
        fontSize: 16 * scale,
        borderRadius: 25 * scale,
        paddingHorizontal: 15 * scale,
        backgroundColor: colors.white,
        marginBottom: 10 * scale
    },
    pickerContainer: {
        height: 52 * scale,
        borderRadius: 25 * scale,
        backgroundColor: colors.white,
        marginBottom: 10 * scale
    },
    picker: {
        height: '100%',
        paddingHorizontal: 8 * scale,
    },
    pickerText:{
       fontSize: 16*scale,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 25 * scale,
        paddingHorizontal: 15 * scale,
        backgroundColor: colors.white,
        height: 50 * scale,
        marginBottom: 10 * scale
    },
    inputReadOnly: {
        flex: 1,
        fontSize: 16 * scale
    },
    lockIcon: {
        width: 20 * scale,
        height: 20 * scale,
        marginLeft: 8 * scale,
        opacity: 0.5
    },
    rowInputs: {
        flexDirection: 'row',
        alignItems: 'center', height: 50 * scale,
        backgroundColor: colors.white, borderRadius: 25 * scale,
        marginBottom: 10 * scale
    },
    inputHalf: {
        flex: 1,
        paddingHorizontal: 15 * scale,
        fontSize: 16 * scale
    },
    separator: {
        width: 1,
        height: '60%',
        backgroundColor: '#ccc'
    },
    button: {
        backgroundColor: colors.red,
        width: '70%',
        borderRadius: 12 * scale,
        paddingVertical: 15 * scale,
        alignSelf: 'center',
        alignItems: 'center',
        marginTop: 30 * scale
    },
    buttonText: {
        color:colors.white,
        fontSize: 18 * scale,
        fontWeight: 'bold'
    },
    bottomPadding: {
        height: 30 * scale
    },
});