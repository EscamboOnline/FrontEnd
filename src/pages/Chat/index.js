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
import chat from "../../Jsons/chat.json";
import chats from "../../Jsons/chats.json";
import usuarios from "../../Jsons/usuario.json";

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
