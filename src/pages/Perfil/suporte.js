import React, { useState, useCallback } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
  Keyboard,
  Modal,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import * as ImagePicker from 'expo-image-picker';
import * as NavigationBar from 'expo-navigation-bar';
import * as SystemUI from 'expo-system-ui';

import colors from '../../constants/colors';
import { headerStyles } from '../../components/header';
import { buttonsStyles } from '../../components/buttons';
import { popupStyles } from '../../components/popup';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default function Suporte() {
  const navigation = useNavigation();
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', description: '' });
  const [image, setImage] = useState(null);
  const [exitModalVisible, setExitModalVisible] = useState(false);

  useFocusEffect(
    useCallback(() => {
      NavigationBar.setButtonStyleAsync("light");
      SystemUI.setBackgroundColorAsync(colors.green);

      return () => {
        NavigationBar.setButtonStyleAsync("light");
        SystemUI.setBackgroundColorAsync("#e91e63");
      };
    }, [])
  );

  const updateFormData = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const pickImage = async () => {
    try {
      Keyboard.dismiss();
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

      if (!result.canceled) {
        setImage(result.assets[0].uri);
      }
    } catch (error) {
      console.error("Erro ao escolher imagem:", error);
      alert("Erro ao escolher a imagem.");
    }
  };

  const handleSend = () => {
    Keyboard.dismiss();
    setExitModalVisible(true);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <Modal
        visible={exitModalVisible}
        transparent
        animationType="fade"
        onRequestClose={() => setExitModalVisible(false)}>
        <View style={popupStyles.centeredView}>
          <View style={popupStyles.modalView}>
            <Text style={popupStyles.modalText}>Sua mensagem foi enviada para o suporte</Text>
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
      </Modal>

      <View style={[headerStyles.header, { backgroundColor: colors.green }]}>
        <TouchableOpacity style={headerStyles.backButton} onPress={() => navigation.navigate('UserPerfil')}>
          <MaterialIcons name="play-arrow" size={30} color="#fff" style={{ transform: [{ scaleX: -1 }] }} />
        </TouchableOpacity>
        <Text style={[headerStyles.headerTitle, { color: colors.white }]}>Suporte</Text>
        <View style={{ width: 50 }} />
      </View>
      
      <Image source={require('../../assets/suporte.png')} style={styles.imageHeader} />

      <KeyboardAwareScrollView
        style={styles.scrollContainer}
        contentContainerStyle={styles.formContainer}
        enableOnAndroid
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        

        <Text style={styles.label}>Seu Nome</Text>
        <TextInput
          style={styles.input}
          placeholder="Seu nome"
          value={formData.name}
          onChangeText={(text) => updateFormData('name', text)}
        />

        <Text style={styles.label}>E-mail</Text>
        <TextInput
          style={styles.input}
          placeholder="Seu email"
          keyboardType="email-address"
          autoCapitalize="none"
          value={formData.email}
          onChangeText={(text) => updateFormData('email', text)}
        />

        <Text style={styles.label}>Telefone</Text>
        <TextInput
          style={styles.input}
          placeholder="Seu telefone"
          keyboardType="phone-pad"
          value={formData.phone}
          onChangeText={(text) => updateFormData('phone', text)}
        />

        <Text style={styles.label}>Descrição do problema</Text>
        <TextInput
          style={styles.textArea}
          placeholder="Digite sua mensagem..."
          multiline
          numberOfLines={4}
          textAlignVertical="top"
          value={formData.description}
          onChangeText={(text) => updateFormData('description', text)}
        />

        <Text style={styles.label}>Comprovante ou print do erro</Text>
        {image ? (
          <View style={styles.imageInfoContainer}>
            <Image source={{ uri: image }} style={styles.imagePreview} />
            <TouchableOpacity onPress={() => setImage(null)}>
              <Text style={styles.removeText}>Remover</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <TouchableOpacity style={styles.addImageContainer} onPress={pickImage}>
            <Image source={require('../../assets/addImagem.png')} style={styles.addIcon} />
          </TouchableOpacity>
        )}

        <TouchableOpacity style={buttonsStyles.buttonForm} onPress={handleSend}>
          <Text style={buttonsStyles.buttonFormText}>Enviar</Text>
        </TouchableOpacity>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.green,
    paddingHorizontal: 10
  },
  scrollContainer: {
    flex: 1,
    backgroundColor: colors.white,
    borderRadius: 20,
    paddingHorizontal: 20,
  },
  formContainer: {
    paddingBottom: 30,

  },
  imageHeader: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginBottom: 5,
  },
  label: {
    fontSize: 18,
    fontWeight: '600',
    marginTop: 15,
    color: colors.black,
  },
  input: {
    height: 50,
    backgroundColor: colors.thirdGray,
    borderRadius: 25,
    paddingHorizontal: 15,
    fontSize: 16,
    marginTop: 5,
  },
  textArea: {
    height: 120,
    backgroundColor: colors.thirdGray,
    borderRadius: 15,
    padding: 15,
    fontSize: 16,
    marginTop: 5,
  },
  addImageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: colors.red,
    borderStyle: 'dashed',
    borderRadius: 12,
    backgroundColor: 'rgba(255, 23, 68, 0.1)',
    height: 80,
    marginVertical: 10,
  },
  addIcon: {
    width: 60,
    height: 60,
    tintColor: colors.red,
    resizeMode: 'contain',
  },
  imageInfoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.gray,
    padding: 15,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#ddd',
    marginVertical: 10,
  },
  imagePreview: {
    width: 70,
    height: 70,
  },
  removeText: {
    color: colors.red,
    fontWeight: 'bold',
    fontSize: 16,
  },
});
