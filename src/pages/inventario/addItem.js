import React from 'react';
import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity, ScrollView, TouchableHighlight } from 'react-native';
import { IconButton } from 'react-native-paper';
import { useNavigation } from "@react-navigation/native";
import MaterialDesignIcons from '@react-native-vector-icons/material-design-icons'; 

export default function AdicionarItem() {

  const navigation = useNavigation();

  return (
    <ScrollView contentContainerStyle={styles.container}>

      <IconButton
          style={styles.botaoVoltar}
          icon={() => <MaterialDesignIcons style={{ transform: [{ scaleX: -1 }] }} name="play" color="#000" size={30}/>}
          size={20}
          onPress={() => navigation.navigate('inventario')}
      />

      <Text style={styles.header}>Adicionar Item</Text>

      {/* Nome do Item */}
      <Text style={styles.label}>Nome do item</Text>
      <TextInput style={styles.input} placeholder="Nome do produto" />

      {/* Valor e Estado do item */}
      <View style={styles.row}>
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Valor Estimado</Text>
          <View style={styles.currencyInput}>
            <Text style={styles.currencySymbol}>R$</Text>
            <TextInput style={styles.valorInput} keyboardType="numeric" placeholder="00,00" />
          </View>
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Condição</Text>
          <TouchableHighlight style={styles.dropdown}>
            <Text style={styles.dropdownText}>Condição</Text>
          </TouchableHighlight>
        </View>
      </View>

      {/* Categoria do item */}
      <Text style={styles.label}>Categoria</Text>
      <TouchableHighlight style={styles.dropdown}>
        <Text style={styles.dropdownText}>Categorias</Text>
      </TouchableHighlight>

      {/* Lista de Imagens */}
      <View style={styles.imageSection}>
        <View style={styles.imageUpload}>
          {/* imagem principal */}
          <Text style={styles.imageText}>Imagem</Text>
        </View>

        <View style={styles.thumbnailColumn}>
          {[...Array(3)].map((_, i) => (
            <View key={i} style={styles.thumbnail} />
          ))}
        </View>
      </View>

      {/* Descrição do produto*/}
      <Text style={styles.label}>Descrição do Produto</Text>
      <TextInput
        style={[styles.input, styles.textarea]}
        placeholder="descrição do produto"
        multiline
      />

      {/* Botão para concluir e adicionar o item */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Adicionar</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fff',
  },
  botaoVoltar: {
    position: 'absolute',
    top: 10,
    left: 10,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginBottom: 16,
  },
  label: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 4,
    marginTop: 12,
  },
  input: {
    fontSize: 16,
    borderBottomWidth: 1,
    borderColor: '#e91e63',
    paddingVertical: 6,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  inputGroup: {
    flex: 1,
    marginRight: 10,
  },
  currencyInput: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#e91e63',
  },
  currencySymbol: {
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 4,
  },
  valorInput: {
    flex: 1,
    paddingVertical: 4,
  },
  dropdown: {
    backgroundColor: '#eee',
    padding: 10,
    borderRadius: 6,
    marginTop: 2,
  },
  dropdownText: {
    fontSize: 14,
    color: '#e91e63',
  },
  imageSection: {
    flexDirection: 'row',
    marginTop: 16,
    alignItems: 'flex-start',
  },
  imageUpload: {
    width: 130,
    height: 130,
    backgroundColor: '#e91e63',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  thumbnailColumn: {
    marginLeft: 10,
    justifyContent: 'space-between',
  },
  thumbnail: {
    width: 50,
    height: 50,
    backgroundColor: '#ddd',
    marginBottom: 8,
    borderRadius: 6,
  },
  textarea: {
    height: 100,
    textAlignVertical: 'top',
    borderWidth: 1,
    borderColor: '#e91e63',
    borderRadius: 6,
    padding: 8,
    marginTop: 4,
  },
  button: {
    marginTop: 20,
    backgroundColor: '#e91e63',
    paddingVertical: 12,
    borderRadius: 25,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});