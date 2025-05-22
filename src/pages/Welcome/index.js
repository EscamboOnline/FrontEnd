import React from "react";
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

import { useNavigation } from "@react-navigation/native";

export default function Welcome() {

  const navigation = useNavigation();

    return(
       <View style={styles.container}>
         
         <View style={styles.containerForm}>
            <Text style={styles.title}>Olá, Bem vindo de volta</Text>
            <Text style={styles.text}>Muito bom te ver denovo</Text>
         </View>

         <TouchableOpacity style={styles.button}
         onPress={() => navigation.navigate('SignIn')}>
            <Text style={styles.buttonText}>Entrar</Text>
         </TouchableOpacity>
       </View>
    );
}

const styles = StyleSheet.create({
  container:{
     flex:1,
     backgroundColor: '#38a69d'
  },

  containerForm:{
    flex: 1, 
    backgroundColor: "#FFF",
    borderTopLeftRadius:25,
    borderTopRightRadius: 25,
    paddingStart: "5%",
    paddingEnd: '5%'
  },

  title:{
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 28,
    marginBottom: 12,
  },

  text:{
    color: "#alalal"
  },

  button:{
    position: "absolute",
    backgroundColor: "#38a69d",
    borderRadius: 50,
    paddingVertical: 8,
    width: '60%',
    alignSelf: 'center',
    bottom: '15%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText:{
    fontSize: 18,
    color: "FFF",
    fontWeight: 'bold'
  }
})