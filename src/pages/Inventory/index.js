import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableHighlight, Alert, FlatList, Image, TouchableOpacity } from 'react-native';
import { Searchbar, FAB, IconButton } from 'react-native-paper';
import { useNavigation } from "@react-navigation/native";
import MaterialDesignIcons from '@react-native-vector-icons/material-design-icons';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import BarraNavegacao from '../../components/navegador';

//adcionei ai
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { headerStyles } from '../../components/header';

var gridList = false;

function limitarTextoList(texto) {
  if (texto.length > 60) {
    texto = texto.substring(0, 50)
    texto = texto + "..."
  }
  return texto
}

const items = [
  {
    "id": "1",
    "nome": "Apple iPhone 16 Pro Max (512 GB) – Titânio natural",
    "valor": 3000,
    "status": "Ótimo",
    "categoria": "Tecnologia",
    "imagens": [
      require("../../assets/phone1/phone.png"),
      require("../../assets/phone1/phone2.png"),
      require("../../assets/phone1/phone3.png"),
      require("../../assets/phone1/phone4.png")
    ],
    "descricao": "Lorem ipsum dolor sit amet...",
    "usuario_id": 101
  },
  {
    "id": "2",
    "nome": "Caloi Bicicleta Vulcan, Aro 29, Câmbio Shimano 21 Velocidades",
    "valor": 1500,
    "status": "Ótimo",
    "categoria": "Esportes",
    "imagens": [
      require("../../assets/bike1/bike.png"),
      "../../assets/bike1/bike2.png",
      "../../assets/bike1/bike3.png",
      "../../assets/bike1/bike4.png"
    ],
    "descricao": "Lorem ipsum dolor sit amet...",
    "usuario_id": 102
  },
  {
    "id": "3",
    "nome": "Kit 3 Prateleiras Grossas Madeira Maciça Suporte Invisível",
    "valor": 299,
    "status": "Ótimo",
    "categoria": "Móveis",
    "imagens": [
      require("../../assets/prateleiras1/prateleiras.jpg"),
      "../../assets/prateleiras1/prateleiras2.png",
      "../../assets/prateleiras1/prateleiras3.png",
      "../../assets/prateleiras1/prateleiras4.png"
    ],
    "descricao": "Lorem ipsum dolor sit amet...",
    "usuario_id": 103
  },
  {
    "id": "4",
    "nome": "Cadeira de Jantar Madeira Maciça Larissa Para Sala de Jantar",
    "valor": 449,
    "status": "Ótimo",
    "categoria": "Móveis",
    "imagens": [
      require("../../assets/cadeira1/cadeira.png"),
      "../../assets/cadeira1/cadeira2.png",
      "../../assets/cadeira1/cadeira3.png",
      "../../assets/cadeira1/cadeira4.png"
    ],
    "descricao": "Lorem ipsum dolor sit amet...",
    "usuario_id": 104
  },
  {
    "id": "5",
    "nome": "Smartphone Realme Note 60x RMX3938 3 GB RAM / 64 GB / Bateria 5000mAh",
    "valor": 1099,
    "status": "Ótimo",
    "categoria": "Tecnologia",
    "imagens": [
      require("../../assets/phone2/phone.png"),
      require("../../assets/phone2/phone2.png"),
      require("../../assets/phone2/phone3.png"),
      require("../../assets/phone2/phone4.png")
    ],
    "descricao": "Lorem ipsum dolor sit amet...",
    "usuario_id": 105
  },
  {
    "id": "6",
    "nome": "Bicicleta Aro 29 Ravok 21v Aço Carbono Freios a Disco",
    "valor": 1299,
    "status": "Ótimo",
    "categoria": "Esportes",
    "imagens": [
      require("../../assets/bike2/bikeV2.webp"),
      "../../assets/bike2/bike2V2.png",
      "../../assets/bike2/bike3V2.png",
      "../../assets/bike2/bike4V2.png"
    ],
    "descricao": "Lorem ipsum dolor sit amet...",
    "usuario_id": 102
  },
  {
    "id": "7",
    "nome": "Kit Prateleiras Rústicas em Madeira Maciça",
    "valor": 349,
    "status": "Ótimo",
    "categoria": "Móveis",
    "imagens": [
      require("../../assets/prateleiras2/prateleiras.jpg"),
      "../../assets/prateleiras2/prateleiras2V2.png",
      "../../assets/prateleiras2/prateleiras3V2.png",
      "../../assets/prateleiras2/prateleiras4V2.png"
    ],
    "descricao": "Lorem ipsum dolor sit amet...",
    "usuario_id": 103
  },
  {
    "id": "8",
    "nome": "Cadeira Peônia Madeira Maciça Imbuia - Cód: CAD6",
    "valor": 599,
    "status": "Ótimo",
    "categoria": "Móveis",
    "imagens": [
      require("../../assets/cadeira2/cadeiraV2.webp"),
      "../../assets/cadeira2/cadeira2V2.png",
      "../../assets/cadeira2/cadeira3V2.png",
      "../../assets/cadeira2/cadeira4V2.png"
    ],
    "descricao": "Lorem ipsum dolor sit amet...",
    "usuario_id": 106
  }
]




export default function Inventario() {

  var [grid, setGrid] = useState(<MaterialDesignIcons name='view-grid' color='#111' size={20} />)

  function mudarLayout() {
    gridList = !gridList

    if (gridList) {
      setGrid(
        <MaterialDesignIcons name='format-list-checkbox' color='#111' size={20} />
      )
    } else {
      setGrid(
        <MaterialDesignIcons name='view-grid' color='#111' size={20} />
      )
    }
  }

  const navigation = useNavigation();
  let contador;


  return (
    <SafeAreaProvider style={styles.container}>
      <SafeAreaView>
        {/* Título da página */}

        <View style={headerStyles.header}>
          <TouchableOpacity style={headerStyles.backButton} onPress={() => navigation.navigate('UserPerfil')}>
            <MaterialIcons name="play-arrow" size={30} color="#000" style={{ transform: [{ scaleX: -1 }] }} />
          </TouchableOpacity>

          <Text style={headerStyles.headerTitle}>Inventário</Text>

          {/* Espaço vazio para balancear layout e centralizar o título */}
          <View style={{ width: 40}} />
        </View>

        {/* Barra de pesquisa */}
        <Searchbar placeholder="" style={styles.barraPesquisa} inputStyle={{ minHeight: 0 }} />

        {/* Estástiticas e dados */}
        <View style={styles.status}>
          <View style={styles.statusCatg}>
            <Text style={styles.statusTexto}> Items </Text>
            <Text style={styles.statusValor}>{contador = items.length}</Text>
          </View>

          <View style={styles.statusCatg}>
            <Text style={styles.statusTexto}> Escambos </Text>
            <Text style={styles.statusValor}>3</Text>
          </View>

          <View style={styles.statusCatg}>
            <Text style={styles.statusTexto}> Favoritados </Text>
            <Text style={styles.statusValor}>39</Text>
          </View>
        </View>

        <View style={styles.barraSeparatoria}>
        </View>

        {/* Último Update + alterar layout */}
        <View style={styles.update}>
          <Text style={styles.updateTexto}>🕒 Último Update </Text>
          <IconButton
            style={{ margin: 0, padding: 0, height: 20 }}
            icon={() => grid}
            onPress={() => {
              mudarLayout()
              console.log("Deu bom")
            }}
          />
        </View>

        {/* Lista de items */}

        {/* ADD Novo Item */}

      </SafeAreaView>

        <FlatList
          key={gridList ? 'grid' : 'list'}
          style={gridList ? styles.listaQd : styles.listaList}
          data={items}
          numColumns={gridList ? 2 : 1}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableHighlight onPress={() => navigation.navigate("verItem", {id: item.id})}>
              <View style={gridList ? styles.item : styles.itemList}>
                <Image source={item.imagens[0]} style={gridList ? styles.itemImage : styles.itemImageList} />
                <View style={gridList ? styles.itemDetalhes : styles.itemDetalhesList}>
                  <Text style={gridList ? styles.itemTitulo : styles.itemTituloList}>{limitarTextoList(item.nome)}</Text>
                  <Text style={gridList ? styles.itemFav : styles.itemFavList}>★ 4 Favoritados</Text>
                  <Text style={gridList ? styles.itemStatus : styles.itemStatusList}>🟩 {item.status}</Text>
                </View>
              </View>
            </TouchableHighlight>
          )}
        />
      <FAB
        style={styles.addItem}
        icon="plus"
        color="white"
        onPress={() => navigation.navigate('addItem')}
      />
      <BarraNavegacao />
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginBottom: 10,
    marginTop: 15,
  },
  barraPesquisa: {
    borderRadius: 10,
    height: 40,
    marginBlock: 20,
    marginInline: 20,
  },
  status: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
  },
  statusCatg: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '30%'
  },
  statusTexto: {
    fontSize: 17,
    color: '#888',
  },
  statusValor: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  barraSeparatoria: {
    height: 3,
    width: '120%',
    left: '-20',
    marginBottom: 0,
    backgroundColor: '#c0c0c0',
  },
  update: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
    marginInline: 10,
  },
  updateTexto: {
    height: 20,
    color: '#101010',
    margin: 0,
    padding: 0
  },



  listaQd: {
    flex: 1,
    marginBottom: 50
  },
  item: {
    height: 'auto',
    width: '50%',
    flexDirection: 'collum',
    alignItems: 'center',
    borderRadius: 5,
    padding: 5,
    marginBottom: 30,
  },
  itemImage: {
    width: 200,
    height: 200,
    borderRadius: 8,
    marginRight: 10
  },
  itemDetalhes: {
    flex: 1,
  },
  itemTitulo: {
    maxWidth: '10ch',
    fontWeight: 'bold',
    fontSize: 15,
    marginBottom: 4,
  },
  itemFav: {
    color: '#666',
    fontSize: 13,
  },
  itemStatus: {
    backgroundColor: '#00c853',
    color: '#fff',
    paddingHorizontal: 6,
    borderRadius: 4,
    fontSize: 12,
    alignSelf: 'flex-start',
    marginTop: 4,
  },


  listaList: {
    marginBottom: 70
  },
  itemList: {
    height: 140,
    flexDirection: 'row',
    borderRadius: 5,
    padding: 5,
    marginBottom: 1,
    borderBottomWidth: 1,
    borderColor: '#c0c0c0',
    alignItems: 'center',
  },
  itemImageList: {
    width: 100,
    height: 100,
    borderRadius: 8,
    marginRight: 10
  },
  itemDetalhesList: {
    flex: 1,
  },
  itemTituloList: {
    maxWidth: '10ch',
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 4,
  },
  itemFavList: {
    color: '#666',
    fontSize: 14,
  },
  itemStatusList: {
    backgroundColor: '#00c853',
    color: '#fff',
    paddingHorizontal: 6,
    borderRadius: 4,
    fontSize: 15,
    alignSelf: 'flex-start',
    marginTop: 4,
  },



  addItem: {
    position: 'absolute',
    right: 16,
    bottom: 100,
    borderRadius: '50%',
    backgroundColor: '#E91E63',
  },
});