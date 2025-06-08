"use client"

import React, { useState, useRef } from "react"
import { Keyboard, View, Text, StyleSheet, TouchableOpacity, Image, TextInput, Dimensions, Modal } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { Picker } from "@react-native-picker/picker"
import colors from "../../constants/colors"
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import { popupStyles } from "../../components/popup"
import { buttonsStyles } from "../../components/buttons"
import { headerStyles } from "../../components/header"
import * as ImagePicker from "expo-image-picker"
import { useFocusEffect } from "@react-navigation/native"
import * as NavigationBar from "expo-navigation-bar"
import * as SystemUI from "expo-system-ui"
import { SafeAreaView } from "react-native-safe-area-context"
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view"

const { width } = Dimensions.get("window")
const baseWidth = 375
const scale = width / baseWidth

export default function PerfilConfig() {
  const navigation = useNavigation()

  const [formData, setFormData] = useState({
    name: "Ana Catarina",
    username: "@ana_catarina",
    gender: "feminino",
    cpf: "000.000.000-01",
    email: "ana@email.com",
    zipCode: "00000-001",
    state: "São Paulo",
    cityNeighborhood: "Cajamar, Pajé House",
  })

  const [isPickingImage, setIsPickingImage] = useState(false)
  const [image, setImage] = useState(null)
  const [focusedInput, setFocusedInput] = useState(null)

  const pickImage = async () => {
    try {
      Keyboard.dismiss()

      setIsPickingImage(true)

      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync()
      if (status !== "granted") {
        alert("Permissão para acessar a galeria foi negada.")
        setIsPickingImage(false)
        return
      }

      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaType,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      })

      if (!result.canceled && result.assets?.length > 0) {
        setImage(result.assets[0].uri)
      }

      setIsPickingImage(false)
    } catch (error) {
      console.error("Erro ao escolher imagem:", error)
      alert("Ocorreu um erro ao escolher a imagem.")
      setIsPickingImage(false)
    }
  }

  const [exitModalVisible, setExitModalVisible] = useState(false)

  //cor da navegação android
  useFocusEffect(
    React.useCallback(() => {
      NavigationBar.setButtonStyleAsync("dark")
      SystemUI.setBackgroundColorAsync("#ffffff")

      return () => {
        NavigationBar.setButtonStyleAsync("light")
        SystemUI.setBackgroundColorAsync("#e91e63")
      }
    }, []),
  )

  const dismissKeyboard = () => Keyboard.dismiss()

  //resolvendo o problema do imagepicker e os inputs

  const scrollViewRef = useRef(null)
  const inputRefs = useRef({})

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const handleInputFocus = (inputName) => {
    setFocusedInput(inputName)

    const inputRef = inputRefs.current[inputName]
    if (inputRef && scrollViewRef.current) {
      setTimeout(() => {
        inputRef.measureLayout(
          scrollViewRef.current.getScrollableNode(),
          (x, y) => {
            scrollViewRef.current.scrollTo({
              y: y - 150,
              animated: true,
            })
          },
          (error) => {
            console.warn("Erro ao medir layout:", error)
          },
        )
      }, 300)
    }
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        {/* Header */}
        <View style={headerStyles.header}>
          <TouchableOpacity style={headerStyles.backButton} onPress={() => navigation.navigate("UserPerfil")}>
            <MaterialIcons name="play-arrow" size={30 * scale} color="#000" style={{ transform: [{ scaleX: -1 }] }} />
          </TouchableOpacity>
          <Text style={headerStyles.headerTitle}>Config. Perfil</Text>
          <View style={{ width: 40 * scale }} />
        </View>

        {/* Modal */}
        <Modal
          visible={exitModalVisible}
          transparent
          animationType="fade"
          onRequestClose={() => setExitModalVisible(false)}
        >
          <View style={popupStyles.centeredView}>
            <View style={popupStyles.modalView}>
              <Text style={popupStyles.modalText}>Seus dados foram alterados!</Text>
              <View style={popupStyles.modalButtons}>
                <TouchableOpacity
                  style={[popupStyles.modalButton, popupStyles.okButton]}
                  onPress={() => {
                    setExitModalVisible(false)
                    navigation.navigate("UserPerfil")
                  }}
                >
                  <Text style={popupStyles.okButtonText}>OK</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>

        {/* Conteúdo principal */}
        <View style={styles.mainContainer}>
          {/* Avatar */}
          <View style={styles.headerSection}>
            <TouchableOpacity style={styles.avatarContainer} onPress={pickImage} disabled={isPickingImage}>
              <Image source={image ? { uri: image } : require("../../assets/personaImage.png")} style={styles.avatar} />
              <View style={styles.editIconContainer}>
                <Image source={require("../../assets/camera.png")} style={styles.editIcon} />
              </View>
            </TouchableOpacity>
          </View>

          {/* Formulário */}
          <KeyboardAwareScrollView
            style={styles.scrollView}
            contentContainerStyle={styles.contentContainer}
            showsVerticalScrollIndicator={false}
            enableOnAndroid={true}
            keyboardShouldPersistTaps="handled"
            extraScrollHeight={100}
            extraHeight={150}
            enableAutomaticScroll={true}
            keyboardOpeningTime={250}
            bounces={false}
          >
            <Text style={styles.title2}>Informações base</Text>
            <Text style={styles.title}>Seu Nome</Text>
            <TextInput
              placeholder="Seu nome"
              style={styles.input}
              value={formData.name}
              onChangeText={(text) => handleInputChange("name", text)}
            />
            <Text style={styles.title}>Username</Text>
            <TextInput
              placeholder="Seu username"
              style={styles.input}
              value={formData.username}
              onChangeText={(text) => handleInputChange("username", text)}
            />
            <Text style={styles.title}>Sexo</Text>
            <View style={styles.pickerContainer}>
              <Picker
                selectedValue={formData.gender}
                style={styles.picker}
                onValueChange={(value) => handleInputChange("gender", value)}
              >
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
              <Image source={require("../../assets/cadeado.png")} style={styles.lockIcon} />
            </View>

            <Text style={styles.title}>E-Mail</Text>
            <View style={styles.inputContainer}>
              <TextInput style={styles.inputReadOnly} value={formData.email} editable={false} />
              <Image source={require("../../assets/cadeado.png")} style={styles.lockIcon} />
            </View>

            <Text style={styles.title2}>Endereço</Text>
            <Text style={styles.title}>CEP</Text>
            <TextInput
              placeholder="Seu CEP atual"
              style={styles.input}
              value={formData.zipCode}
              onChangeText={(text) => handleInputChange("zipCode", text)}
              ref={(ref) => (inputRefs.current["zipCode"] = ref)}
              onFocus={() => handleInputFocus("zipCode")}
            />

            <Text style={styles.title}>Estado</Text>
            <View style={styles.rowInputs}>
              <TextInput
                style={styles.inputHalf}
                placeholder="Estado"
                value={formData.state}
                onChangeText={(text) => handleInputChange("state", text)}
                ref={(ref) => (inputRefs.current["state"] = ref)}
                onFocus={() => handleInputFocus("state")}
              />
              <View style={styles.separator} />
              <TextInput
                style={styles.inputHalf}
                placeholder="Cidade, Bairro"
                value={formData.cityNeighborhood}
                onChangeText={(text) => handleInputChange("cityNeighborhood", text)}
                ref={(ref) => (inputRefs.current["cityNeighborhood"] = ref)}
                onFocus={() => handleInputFocus("cityNeighborhood")}
              />
            </View>

            <TouchableOpacity
              style={buttonsStyles.buttonForm}
              onPress={() => {
                Keyboard.dismiss()
                setExitModalVisible(true)
              }}
            >
              <Text style={buttonsStyles.buttonFormText}>Alterar</Text>
            </TouchableOpacity>

            <View style={styles.bottomPadding} />
          </KeyboardAwareScrollView>
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  mainContainer: {
    flex: 1,
  },
  headerSection: {
    paddingBottom: 10 * scale,
  },
  avatarContainer: {
    alignSelf: "center",
  },
  avatar: {
    width: 180 * scale,
    height: 180 * scale,
    borderRadius: 90 * scale,
  },
  editIconContainer: {
    position: "absolute",
    bottom: 0,
    right: 0,
    padding: 4 * scale,
  },
  editIcon: {
    width: 20 * scale,
    height: 20 * scale,
  },
  containerForm: {
    flex: 1,
    paddingTop: 10 * scale,
  },
  scrollView: {
    backgroundColor: colors.thirdGray,
    flex: 1,
  },
  contentContainer: {
    paddingHorizontal: 20 * scale,
    paddingBottom: 50 * scale, 
    paddingTop: 10 * scale,
  },
  title2: {
    textAlign: "center",
    fontSize: 20 * scale,
    fontWeight: "bold",
    color: colors.red,
    paddingTop: 8 * scale,
  },
  title: {
    fontSize: 18 * scale,
    marginVertical: 8 * scale,
  },
  input: {
    height: 50 * scale,
    fontSize: 15 * scale,
    borderRadius: 25 * scale,
    paddingHorizontal: 15 * scale,
    backgroundColor: colors.white,
    marginBottom: 10 * scale,
  },
  pickerContainer: {
    height: 52 * scale,
    borderRadius: 25 * scale,
    backgroundColor: colors.white,
    marginBottom: 10 * scale,
  },
  picker: {
    height: "100%",
    paddingHorizontal: 8 * scale,
  },
  pickerText: {
    fontSize: 15 * scale,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 25 * scale,
    paddingHorizontal: 15 * scale,
    backgroundColor: colors.white,
    height: 50 * scale,
    marginBottom: 10 * scale,
  },
  inputReadOnly: {
    flex: 1,
    fontSize: 15 * scale,
  },
  lockIcon: {
    width: 20 * scale,
    height: 20 * scale,
    marginLeft: 8 * scale,
    opacity: 0.5,
  },
  rowInputs: {
    flexDirection: "row",
    alignItems: "center",
    height: 50 * scale,
    backgroundColor: colors.white,
    borderRadius: 25 * scale,
    marginBottom: 10 * scale,
  },
  inputHalf: {
    flex: 1,
    paddingHorizontal: 15 * scale,
    fontSize: 15 * scale,
  },
  separator: {
    width: 1,
    height: "60%",
    backgroundColor: "#ccc",
  },

  bottomPadding: {
    height: 20 * scale, 
  },
})
