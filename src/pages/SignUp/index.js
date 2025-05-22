import React, { useState } from 'react';
import axios from 'axios';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from "@react-navigation/native";

export default function SignUp() {

  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleSignUp() {
    console.log('handleSignUp chamado');

    try {
      const response = await axios.post('http://10.0.2.2:3000/api/users/register', {
        email,
        password,
      });

      Alert.alert('Sucesso', 'Usuário cadastrado!');

      navigation.navigate('SignIn');

    } catch (error) {
      if (error.response) {
        
        Alert.alert('Erro', error.response.data.message || 'Erro no cadastro');
      } else if (error.request) {
       
        Alert.alert('Erro', 'Sem resposta do servidor.');
      } else {
        // Outro tipo de erro (ex: erro de código)
        Alert.alert('Erro', error.message);
      }
    }
  }


  return (
    <View style={styles.container}>

      <View style={styles.containerHeader}>
        <Text style={styles.message}>Bem-Vindo(a), faça o cadastro abaixo</Text>
      </View>

      <View style={styles.containerForm}>
        <Text style={styles.title}>Email</Text>
        <TextInput placeholder="Digite um email..."
          style={styles.input} value={email} onChangeText={setEmail} keyboardType="email-address" />

        <Text style={styles.title}>Senha</Text>
        <TextInput placeholder="Digite uma senha..."
          style={styles.input} value={password} onChangeText={setPassword} secureTextEntry />

        <TouchableOpacity style={styles.button} onPress={handleSignUp}>
          <Text style={styles.buttonText}>Cadastrar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonRegister}>

        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#38a69d"
  },
  containerHeader: {
    marginTop: '14%',
    marginBottom: '8%',
    paddingStart: '5%'
  },
  message: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff'
  },
  containerForm: {
    backgroundColor: '#fff',
    flex: 1,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingStart: '5%',
    paddingEnd: '5%'
  },
  title: {
    fontSize: 20,
    marginTop: 28
  },
  input: {
    borderBottomWidth: 1,
    height: 40,
    marginBottom: 12,
    fontSize: 16
  },
  button: {
    backgroundColor: '#38a69d',
    width: '100%',
    borderRadius: 4,
    paddingVertical: 8,
    marginTop: 14,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold'
  },
  buttonRegister: {
    marginTop: 14,
    alignSelf: 'center'
  },
  registerText: {
    color: 'alalal'
  }
})

