import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity, ScrollView, TouchableHighlight, FlatList } from 'react-native';
import { IconButton } from 'react-native-paper';
import { useNavigation } from "@react-navigation/native";
import MaterialDesignIcons from '@react-native-vector-icons/material-design-icons';
import BarraNavegacao from '../../components/navegador';

let items = [
  {
    id: 1,
    image: require('../../assets/phone.png')
  },
  {
    id: 2,
    image: require('../../assets/bike.png')
  },
  {
    id: 3,
    image: require('../../assets/cadeira.png')
  },
  {
    id: 4,
    image: require('../../assets/prateleiras.jpg')
  },
  {
    id: 5,
    image: require('../../assets/bike.png')
  }
]

export default function AddItem() {

  let [selecao, setSelecao] = useState(1);
  let [selecionado, setSelecionado] = useState(items[0].image)
  let [DDC, setMDDC] = useState(false)

  function imagemSelecionada(posicao) {
    items.forEach((item) => {
      if (posicao == item.id) {
        setSelecao(item.id)

        setSelecionado(item.image)
      }
    })
  }

  const navigation = useNavigation();

  return (
    <View style={styles.container}>

      <IconButton
          style={styles.botaoVoltar}
          icon={() => <MaterialDesignIcons style={{ transform: [{ scaleX: -1 }] }} name="play" color="#000" size={30}/>}
          size={20}
          onPress={() => navigation.navigate('Inventario')}
      />

      <View style={{ padding: 20 }}>
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
            <View>

              <TouchableHighlight style={styles.dropdown} onPress={() => setMDDC(!DDC)}>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', height: '20'}}>
                  <Text style={styles.dropdownText}>Condição</Text>
                  <IconButton icon={() => <MaterialDesignIcons style={DDC ? "" : {transform: [{ rotateZ: "90deg"}]}} name="play" color="#000" size={20}/>}/>
                </View>
              </TouchableHighlight>
              
              <View style={DDC ? styles.MDD : styles.escondido}>
                <TouchableHighlight style={{width: '100%', height: 'auto'}}>
                  <View style={styles.categoriaMDD}>
                    <IconButton icon={() => <MaterialDesignIcons name="circle" color="#00ff00" size={15}/>}> </IconButton>
                    <Text style={styles.textoMDD}>Ótimo</Text>
                  </View>
                </TouchableHighlight>

                <TouchableHighlight style={{width: '100%', height: 'auto'}}>
                  <View style={styles.categoriaMDD}>
                    <IconButton icon={() => <MaterialDesignIcons name="circle" color="#ffaa00" size={15}/>}> </IconButton>
                    <Text style={styles.textoMDD}>Regular</Text>
                  </View>
                </TouchableHighlight>

                <TouchableHighlight style={{width: '100%', height: 'auto'}}>
                  <View style={styles.categoriaMDD}>
                    <IconButton icon={() => <MaterialDesignIcons name="circle" color="#ff0000" size={15}/>}> </IconButton>
                    <Text style={styles.textoMDD}>Irregular</Text>
                  </View>
                </TouchableHighlight>
                
              </View>
            
            </View>
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
            <Image source={selecionado} style={styles.imagemPrincipal}/>
          </View>

          <FlatList style={styles.thumbnailArea}
            contentContainerStyle={{
              alignItems: 'center',
              justifyContent: 'center',
            }}
            data={items}
            numColumns={1}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <TouchableHighlight onPress={() => imagemSelecionada(item.id)} underlayColor="#e91e63" style={{borderRadius: 6}}>
                <Image
                  source={item.image}
                  style={selecao == item.id ? styles.selecionado : styles.thumbnail}
                />
              </TouchableHighlight>
            )}
          />
        </View>

        {/* Descrição do produto*/}
        <Text style={styles.label}>Descrição do Produto</Text>
        <TextInput
          style={[styles.input, styles.textarea]}
          placeholder="descrição do produto"
          multiline
        />

        {/* Botão para concluir e adicionar o item */}
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('inventario')}>
          <Text style={styles.buttonText}>Adicionar</Text>
        </TouchableOpacity>
      </View>

      <BarraNavegacao />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
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
    position: 'relative',
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
    width: '100%',
    height: 200,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 16,
    alignItems: 'flex-start',
    alignSelf: 'flex-end',
  },
  imageUpload: {
    width: '200',
    height: '100%',
    backgroundColor: '#e91e63',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageText: {
    fontSize: 30,
    color: '#fff',
    fontWeight: 'bold',
  },
  imagemPrincipal: {
    position: 'absolute',
    width: 200,
    height: 200,
    backgroundColor: '#fff',
  },
  thumbnailArea: {
    width: '20%',
    marginInline: 'auto'
  },
  thumbnail: {
    width: 100,
    height: 100,
    backgroundColor: '#eee',
    marginBottom: 8,
    borderRadius: 6,
  },
  selecionado: {
    width: 100,
    height: 100,
    backgroundColor: '#fff',
    marginBottom: 8,
    borderColor: '#e91e63',
    borderRadius: 6,
    borderWidth: 5,
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
  escondido: {
    display: 'none'
  },
  MDD: {
    position: 'absolute',
    top: '110%',
    height: 'auto',
    width: '100%',
    padding: 3,
    backgroundColor: '#ffffff',
    borderRadius: 8,
    boxShadow: '3px 3px 6px 0.5px #a0a0a0',
    zIndex: 1
  },
  textoMDD: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  categoriaMDD: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'start',
    alignItems: 'center'
  }
});