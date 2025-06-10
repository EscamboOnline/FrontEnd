import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // para ícone de busca
import BarraNavegacao from '../../components/navegador';

const users = [
  {
    id: '1',
    name: 'Usuário',
    username: '@user_000',
    time: '11:31',
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
    statusColor: 'green',
  },
  {
    id: '2',
    name: 'João D.',
    username: '@user_269',
    time: '11:31',
    image: 'https://randomuser.me/api/portraits/men/23.jpg',
    statusColor: 'red',
  },
  {
    id: '3',
    name: 'Carlos J. S.',
    username: '@user_355',
    time: '11:31',
    image: 'https://randomuser.me/api/portraits/men/41.jpg',
    statusColor: 'red',
  },
  {
    id: '4',
    name: 'Marina L.',
    username: '@user_323',
    time: '11:31',
    image: 'https://randomuser.me/api/portraits/women/68.jpg',
    statusColor: 'green',
  },
  {
    id: '5',
    name: 'César P.',
    username: '@user_771',
    time: '11:31',
    image: 'https://randomuser.me/api/portraits/men/15.jpg',
    statusColor: 'red',
  },
  {
    id: '6',
    name: 'Paula M.',
    username: '@user_643',
    time: '11:31',
    image: 'https://randomuser.me/api/portraits/women/10.jpg',
    statusColor: 'green',
  },
  {
    id: '7',
    name: 'Isaias',
    username: '@user_000',
    time: '11:31',
    image: 'https://randomuser.me/api/portraits/men/9.jpg',
    statusColor: 'red',
  },
];

let chat = [
  {
    "id_chat": 1,
    "id_usuario": 101,
    "id_UResposta": 102,
    "mensagens": [
      { "mensagem": "Olá! Você ainda tem a bicicleta?", "id_usuario": 101 },
      { "mensagem": "Sim, está disponível!", "id_usuario": 102 }
    ],
    "id_item": 1,
    "id_item2": 2,
    "localizacao": "São Paulo - SP"
  },
  {
    "id_chat": 2,
    "id_usuario": 103,
    "id_UResposta": 104,
    "mensagens": [
      { "mensagem": "Gostei da sua cadeira, topa trocar?", "id_usuario": 103 },
      { "mensagem": "Claro! A prateleira me interessa.", "id_usuario": 104 }
    ],
    "id_item": 3,
    "id_item2": 4,
    "localizacao": "Belo Horizonte - MG"
  },
  {
    "id_chat": 3,
    "id_usuario": 105,
    "id_UResposta": 106,
    "mensagens": [
      { "mensagem": "Seu item ainda está novo?", "id_usuario": 105 },
      { "mensagem": "Sim, praticamente sem uso.", "id_usuario": 106 }
    ],
    "id_item": 5,
    "id_item2": 8,
    "localizacao": "Curitiba - PR"
  },
  {
    "id_chat": 4,
    "id_usuario": 101,
    "id_UResposta": 105,
    "mensagens": [
      { "mensagem": "Gostaria de trocar meu iPhone pelo seu Realme.", "id_usuario": 101 },
      { "mensagem": "Acho justo. Podemos marcar um local?", "id_usuario": 105 }
    ],
    "id_item": 1,
    "id_item2": 5,
    "localizacao": "Rio de Janeiro - RJ"
  }
];

const usuarios = [
  {
    "id_usuario": 101,
    "categorias": ["Tecnologia", "Moda"],
    "nome": "Ana Beatriz da Silva",
    "nickname": "ana_b",
    "image": "https://randomuser.me/api/portraits/women/44.jpg",
    "sexo": "Feminino",
    "favoritos": ["1", "5"],
    "endereco": 201
  },
  {
    "id_usuario": 102,
    "categorias": ["Esportes", "Games"],
    "nome": "João Pereira",
    "nickname": "joaogamer",
    "image": "https://randomuser.me/api/portraits/men/23.jpg",
    "sexo": "Masculino",
    "favoritos": ["2", "6"],
    "endereco": 202
  },
  {
    "id_usuario": 103,
    "categorias": ["Cosméticos", "Móveis"],
    "nome": "Maria Oliveira",
    "nickname": "maria_oli",
    "image": "https://randomuser.me/api/portraits/women/68.jpg",
    "sexo": "Feminino",
    "favoritos": ["3", "7"],
    "endereco": 203
  },
  {
    "id_usuario": 104,
    "categorias": ["Automóveis", "Tecnologia"],
    "nome": "Carlos Santos",
    "nickname": "carlao",
    "image": "https://randomuser.me/api/portraits/men/41.jpg",
    "sexo": "Masculino",
    "favoritos": ["4"],
    "endereco": 204
  },
  {
    "id_usuario": 105,
    "categorias": ["Livros", "Tecnologia"],
    "nome": "Juliana Martins",
    "nickname": "juju.reads",
    "image": "https://randomuser.me/api/portraits/women/10.jpg",
    "sexo": "Feminino",
    "favoritos": ["5"],
    "endereco": 205
  },
  {
    "id_usuario": 106,
    "categorias": ["Música", "Games"],
    "nome": "Rafael Costa",
    "nickname": "rafac",
    "image": "https://randomuser.me/api/portraits/men/15.jpg",
    "sexo": "Masculino",
    "favoritos": ["8"],
    "endereco": 206
  }
];

let chats = [
  { "id_usuario": 101, "id_chat": 1 },
  { "id_usuario": 102, "id_chat": 1 },
  { "id_usuario": 103, "id_chat": 2 },
  { "id_usuario": 104, "id_chat": 2 },
  { "id_usuario": 105, "id_chat": 3 },
  { "id_usuario": 106, "id_chat": 3 },
  { "id_usuario": 101, "id_chat": 4 },
  { "id_usuario": 105, "id_chat": 4 }
];



export default function TelaDeChats() {
  const [selectedTab, setSelectedTab] = useState('Chats');

  // Ultima mensagem
  // nome usuário

  let idLogado = 101

  const chatsConectados = chats
    .filter(chats => chats.id_usuario == idLogado)
    .map(c => c.id_chat);

  const tabelaUni = chat
    .filter(ind => chatsConectados.includes(ind.id_chat))
    .map(chat => {
        const ultimaMensagem = chat.mensagens[chat.mensagens.length - 1];

        const idUsuario2 =
          chat.id_usuario == idLogado ? chat.id_UResposta : chat.id_usuario;

        const usuario2 = usuarios.find(id => id.id_usuario == idUsuario2)

        return {
          idChat: chat.id_chat,
          ultimaMensagem: ultimaMensagem.mensagem,
          nomeUsuario: usuario2?.nome,
          nickName: usuario2?.nickname,
          fotoPerfil: usuario2?.image,
          localizacao: chat.localizacao
        }
    })

  // console.log(JSON.stringify(arrayChats, null, 2))


  const renderItem = ({ item }) => (
    <View style={styles.chatItem}>
      <View>
        <Image source={{ uri: item.fotoPerfil }} style={styles.avatar} />
        <View
          style={[styles.statusDot, { backgroundColor: item.statusColor }]}
        />
      </View>
      <View style={styles.userInfo}>
        <Text style={styles.name}>{item.nomeUsuario}</Text>
        <Text style={styles.username}>{item.nickName}</Text>
        <Text style={styles.lastMessage}>{item.ultimaMensagem}</Text>
      </View>
      <Text style={styles.time}>{item.localizacao}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Topo */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Chats</Text>
        <Ionicons name="search" size={24} color="black" />
      </View>

      {/* Abas */}
      <View style={{ paddingHorizontal: 16 }}>
        <View style={styles.tabs}>
          <TouchableOpacity
            onPress={() => setSelectedTab('Chats')}
            style={[
              styles.tab,
              selectedTab === 'Chats' && styles.activeTab,
            ]}
          >
            <Text
              style={[
                styles.tabText,
                selectedTab === 'Chats' && styles.activeTabText,
              ]}
            >
              Chats
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => setSelectedTab('Conjunta')}
            style={[
              styles.tab,
              selectedTab === 'Conjunta' && styles.activeTab,
            ]}
          >
            <Text
              style={[
                styles.tabText,
                selectedTab === 'Conjunta' && styles.activeTabText,
              ]}
            >
              Conjunta
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      

      {/* Lista de Conversas */}
      <FlatList
        data={tabelaUni}
        renderItem={renderItem}
        keyExtractor={(item) => item.idChat.toString()}
        style={styles.chatList}
      />

      <BarraNavegacao />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  tabs: {
    flexDirection: 'row',
    marginVertical: 16,
    backgroundColor: '#e5e5e5',
    borderRadius: 20,
    padding: 4,
    justifyContent: 'center',
  },
  tab: {
    flex: 1,
    paddingVertical: 8,
    alignItems: 'center',
    borderRadius: 20,
  },
  tabText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#555',
  },
  activeTab: {
    backgroundColor: '#fff',
  },
  activeTabText: {
    fontWeight: 'bold',
    color: '#000',
  },
  chatList: {
    marginTop: 8,
    paddingHorizontal: 16
  },
  chatItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    position: 'relative',
  },
  avatar: {
    width: 52,
    height: 52,
    borderRadius: 26,
  },
  statusDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    position: 'absolute',
    bottom: 0,
    left: 38,
    borderWidth: 2,
    borderColor: '#fff',
  },
  userInfo: {
    flex: 1,
    marginLeft: 12,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  username: {
    color: '#c53030',
    fontSize: 13,
  },
  lastMessage: {
    color: '#555',
    fontSize: 12,
  },
  time: {
    color: '#555',
    fontSize: 13,
  },
});
