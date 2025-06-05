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
import chats from '../../Jsons/chats.json';
import chat from '../../Jsons/chat.json';
import usuarios from '../../Jsons/usuario.json';

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

export default function TelaDeChats() {
  const [selectedTab, setSelectedTab] = useState('Chats');

  // Eu sou o usuario1
  // Eu preciso que apareça os chats atribuidos a mim isso inclui o id_usuario e o id_UResposta
  // Eu preciso buscar as informações do usuário que estou conversando
  // Preciso do nome, imagem, nickname
  // Por ultimo necessito também das mensagens do chat

  let meusChats = chat.filter(i => i.id_usuario === 101)

  console.log(JSON.stringify(meusChats, null, 2))

  const renderItem = ({ item }) => (
    <View style={styles.chatItem}>
      <View>
        <Image source={{ uri: item.image }} style={styles.avatar} />
        <View
          style={[styles.statusDot, { backgroundColor: item.statusColor }]}
        />
      </View>
      <View style={styles.userInfo}>
        <Text style={styles.name}>{item.nome}</Text>
        <Text style={styles.username}>{item.nickname}</Text>
        <Text style={styles.lastMessage}>ultima mensagem</Text>
      </View>
      <Text style={styles.time}>{item.time}</Text>
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
        data={usuarios}
        renderItem={renderItem}
        keyExtractor={(item) => item.id_usuario.toString()}
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
