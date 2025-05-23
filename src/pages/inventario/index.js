import React, { useState } from 'react';
import axios from 'axios';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from "@react-navigation/native";

const items = [
  {
    id: '1',
    image: require('../assets/phone.png'),
    titulo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    favoritos: 10,
    status: 'Ótimo',
  },
  {
    id: '2',
    image: require('../assets/bike.png'),
    titulo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    favoritos: 10,
    status: 'Ótimo',
  },
  {
    id: '3',
    image: require('../assets/prateleira.png'),
    titulo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    favoritos: 10,
    status: 'Ótimo',
  },
  {
    id: '4',
    image: require('../assets/cadeiras.png'),
    titulo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    favoritos: 10,
    status: 'Ótimo',
  },
];

export default function Inventario() {

    const navigation = useNavigation();

    return(
        <View style={styles.container}>
        {/* Título da página */}
        <Text style={styles.header}>Inventário</Text>

        {/* Barra de pesquisa */}
        <Searchbar placeholder="Buscar" style={styles.barraPesquisa} />

        {/* Estástiticas e dados */}
        <View style={styles.status}>
            <Text style={styles.statusTexto}><Text style={styles.statusValor}>12/25</Text> Itens</Text>
            <Text style={styles.statusTexto}><Text style={styles.statusValor}>8</Text> Escambos</Text>
            <Text style={styles.statusTexto}><Text style={styles.statusValor}>39</Text> Favoritados</Text>
        </View>

        {/* Último Update + alterar layout */}
        <View style={styles.update}>
            <Text style={styles.updateTexto}>🕒 Último Update</Text>
            <Icon name="grid-view" size={24} />
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
                <Icon name="edit" size={20} color="#888" />
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