import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert, FlatList, Image} from 'react-native';
import { Searchbar,FAB } from 'react-native-paper';
import { useNavigation } from "@react-navigation/native";

const items = [
  {
    id: '1',
    image: require('../../../assets/phone.png'),
    titulo: 'Apple iPhone 16 Pro Max (512 GB) – Titânio natural',
    favoritos: 1015,
    status: 'Ótimo',
  },
  {
    id: '2',
    image: require('../../../assets/bike.png'),
    titulo: 'Caloi Bicicleta Vulcan, Aro 29, Câmbio Shimano 21 Velocidades',
    favoritos: 563,
    status: 'Ótimo',
  },
  {
    id: '3',
    image: require('../../../assets/prateleiras.jpg'),
    titulo: 'Kit 3 Prateleiras Grossas Madeira Maciça Suporte Invisível',
    favoritos: 254,
    status: 'Ótimo',
  },
  {
    id: '4',
    image: require('../../../assets/cadeira.png'),
    titulo: 'Cadeira de Jantar Madeira Maciça Larissa Para Sala de Jantar',
    favoritos: 45,
    status: 'Ótimo',
  },
  {
    id: '5',
    image: require('../../../assets/phone.png'),
    titulo: 'Smartphone Realme Note 60x RMX3938 3 GB de RAM/ 64 GB/Bateria de 5000mAh e tela de 6,74" 90Hz HD/Midnight Black (Preto)',
    favoritos: 156,
    status: 'Ótimo',
  },
  {
    id: '6',
    image: require('../../../assets/bike.png'),
    titulo: 'Bicicleta Aro 29 Ravok 21v Aço Carbono Freios a Disco',
    favoritos: 358,
    status: 'Ótimo',
  },
  {
    id: '7',
    image: require('../../../assets/prateleiras.jpg'),
    titulo: 'Bicicleta Aro 29 Ravok 21v Aço Carbono Freios a Disco',
    favoritos: 518,
    status: 'Ótimo',
  },
  {
    id: '8',
    image: require('../../../assets/cadeira.png'),
    titulo: 'Cadeira Peônia Assento de Madeira Maciça na cor Imbuia - Cód: CAD6',
    favoritos: 765,
    status: 'Ótimo',
  },
];

export default function Inventario() {

    const navigation = useNavigation();
    let contador;

    return(
        <View style={styles.container}>
        {/* Título da página */}
        <Text style={styles.header}>Inventário</Text>

        {/* Barra de pesquisa */}
        <Searchbar placeholder="Buscar" style={styles.barraPesquisa} />

        {/* Estástiticas e dados */}
        <View style={styles.status}>
            <Text style={styles.statusTexto}><Text style={styles.statusValor}>{contador = items.length}</Text> Itens</Text>
            <Text style={styles.statusTexto}><Text style={styles.statusValor}>3</Text> Escambos</Text>
            <Text style={styles.statusTexto}><Text style={styles.statusValor}>39</Text> Favoritados</Text>
        </View>

        {/* Último Update + alterar layout */}
        <View style={styles.update}>
            <Text style={styles.updateTexto}>🕒 Último Update</Text>
            {/* <img name="grid-view" size={24} /> */}
        </View>

        {/* Lista de items */}
        <FlatList
            data={items}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
            <View style={styles.item}>
                <Image source={item.image} style={styles.itemImage} />
                <View style={styles.itemDetalhes}>
                  <Text style={styles.itemTitulo}>{item.titulo}</Text>
                  <Text style={styles.itemFav}>★ {item.favoritos} Favoritados</Text>
                  <Text style={styles.itemStatus}>🟩 {item.status}</Text>
                </View>
                {/* <img name="edit" size={20} color="#888" /> */}
            </View>
            )}
        />

        {/* ADD Novo Item */}
        <FAB
            style={styles.addItem}
            icon="plus"
            onPress={() => console.log('Add item')}
        />
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginBottom: 10,
  },
  barraPesquisa: {
    marginBottom: 12,
    borderRadius: 12,
  },
  status: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  statusTexto: {
    fontSize: 14,
    color: '#888',
  },
  statusValor: {
    fontWeight: 'bold',
    color: '#000',
  },
  update: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  updateTexto: {
    color: '#888',
  },
  item: {
    flexDirection: 'row',
    backgroundColor: '#f8f8f8',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    alignItems: 'center',
  },
  itemImage: {
    width: 60,
    height: 60,
    borderRadius: 8,
    marginRight: 12,
  },
  itemDetalhes: {
    flex: 1,
  },
  itemTitulo: {
    fontWeight: 'bold',
    marginBottom: 4,
  },
  itemFav: {
    color: '#666',
    fontSize: 12,
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
  addItem: {
    position: 'absolute',
    right: 16,
    bottom: 16,
    backgroundColor: '#E91E63',
  },
});