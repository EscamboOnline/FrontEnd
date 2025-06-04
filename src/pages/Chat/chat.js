import requisitarTroca from './components/requisicao';
// Depois é só usar <requisitarTroca /> que ele puxa direto o código dos components

import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

export default function ChatScreen() {
  const [mensagem, setMensagem] = useState('');
  const [mensagens, setMensagens] = useState([
    {
      id: '1',
      texto: 'Lorem ipsum dolor sit a ipsum lorem.',
      enviadoPorMim: true,
    },
    {
      id: '2',
      texto: 'Lorem ipsum dolor sit htrhrthr lorem. Ullamco la reprehenderit in.',
      enviadoPorMim: false,
    },
    {
      id: '3',
      texto: 'Lorem ipsum dolor sit a ipsum lorem.m dolor sit htrhrthr lorem. Ullamco la reprehenderit in.',
      enviadoPorMim: true,
    },
    {
      id: '4',
      texto: 'Lorem ipsum dolor sit a ipsum lorem.',
      enviadoPorMim: false,
    },
    {
      id: '5',
      texto: 'Lorem ipsum dolor sit a ipsum lorem',
      enviadoPorMim: true,
    },
  ]);

  const enviarMensagem = () => {
    if (mensagem.trim() === '') return;

    const novaMensagem = {
      id: Date.now().toString(),
      texto: mensagem,
      enviadoPorMim: true,
    };

    setMensagens([...mensagens, novaMensagem]);
    setMensagem('');
  };

  const renderItem = ({ item }) => (
    <View
      style={[
        styles.balao,
        item.enviadoPorMim ? styles.balaoAzul : styles.balaoVermelho,
      ]}
    >
      <Text style={styles.textoMensagem}>{item.texto}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={mensagens}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingVertical: 10, paddingHorizontal: 10 }}
      />

      <View style={styles.inputArea}>
        <TextInput
          style={styles.input}
          placeholder="Mensagem"
          value={mensagem}
          onChangeText={setMensagem}
        />
        <TouchableOpacity style={styles.icone}>
          <Text style={{ fontSize: 20 }}>📎</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.icone}>
          <Text style={{ fontSize: 20 }}>🔁</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.enviarBtn} onPress={enviarMensagem}>
          <Text style={styles.setaEnviar}>▶</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  balao: {
    maxWidth: '75%',
    padding: 10,
    borderRadius: 18,
    marginVertical: 4,
  },
  balaoAzul: {
    backgroundColor: '#5DA9E9',
    alignSelf: 'flex-start',
  },
  balaoVermelho: {
    backgroundColor: '#F02D5E',
    alignSelf: 'flex-end',
  },
  textoMensagem: {
    color: '#fff',
    fontSize: 14,
  },
  inputArea: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderTopWidth: 1,
    borderColor: '#ddd',
    backgroundColor: '#fff',
  },
  input: {
    flex: 1,
    backgroundColor: '#F02D5E',
    color: '#fff',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 25,
    marginRight: 5,
  },
  icone: {
    marginHorizontal: 5,
  },
  enviarBtn: {
    marginLeft: 5,
  },
  setaEnviar: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
