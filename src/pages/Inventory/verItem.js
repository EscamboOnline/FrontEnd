import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

export default function DetalhesDoItem() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Imagem Principal */}
      <Image
        source={{ uri: 'https://via.placeholder.com/300' }} // Substitua pela imagem real
        style={styles.mainImage}
      />

      {/* Miniaturas */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.thumbnailScroll}>
        {[...Array(8)].map((_, index) => (
          <View key={index} style={styles.thumbnail} />
        ))}
      </ScrollView>

      {/* Título e Condição */}
      <Text style={styles.title}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>

      <View style={styles.conditionRow}>
        <View style={styles.conditionBox}>
          <Text style={styles.conditionText}>Ótimo</Text>
        </View>
        <Text style={styles.valorText}>vlr. estimado: 00000</Text>
      </View>

      {/* Botão Editar */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Editar</Text>
      </TouchableOpacity>

      {/* Sobre o Produto */}
      <Text style={styles.sectionTitle}>Sobre o produto</Text>

      <Text style={styles.subTitle}>Descrição ▶</Text>
      <Text style={styles.description}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </Text>

      {/* Detalhes Técnicos */}
      <View style={styles.detailsRow}>
        <Text style={styles.detailLabel}>condição</Text>
        <View style={styles.detailCondition}>
          <Text style={styles.detailConditionText}>Ótimo</Text>
        </View>
      </View>
      <Text style={styles.description}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </Text>

      <Text style={styles.detailLabel}>categorias</Text>
      <Text style={styles.description}>Categoria,categoria e categoria</Text>

      <Text style={styles.detailLabel}>Ano</Text>
      <Text style={styles.description}>2000</Text>

      <Text style={styles.detailLabel}>Listado</Text>
      <Text style={styles.description}>00/00/00</Text>

      <View style={styles.footerStats}>
        <Text style={styles.stat}>00 watchers</Text>
        <Text style={styles.stat}>00 Views</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fff',
  },
  mainImage: {
    width: '100%',
    height: 250,
    borderRadius: 8,
    backgroundColor: '#eee',
  },
  thumbnailScroll: {
    marginTop: 12,
    flexDirection: 'row',
  },
  thumbnail: {
    width: 50,
    height: 50,
    backgroundColor: '#ccc',
    marginRight: 8,
    borderRadius: 6,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
    marginVertical: 12,
  },
  conditionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  conditionBox: {
    backgroundColor: '#00c853',
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 6,
  },
  conditionText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  valorText: {
    marginLeft: 10,
    color: '#555',
  },
  button: {
    marginTop: 12,
    backgroundColor: '#e91e63',
    paddingVertical: 12,
    borderRadius: 30,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  sectionTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    marginTop: 20,
  },
  subTitle: {
    fontWeight: 'bold',
    marginTop: 12,
    marginBottom: 4,
  },
  description: {
    color: '#555',
    lineHeight: 20,
    marginBottom: 10,
  },
  detailsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    gap: 10,
  },
  detailLabel: {
    fontWeight: 'bold',
    marginTop: 10,
    textTransform: 'capitalize',
  },
  detailCondition: {
    backgroundColor: '#00c853',
    borderRadius: 6,
    paddingVertical: 4,
    paddingHorizontal: 10,
  },
  detailConditionText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  footerStats: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 12,
  },
  stat: {
    color: '#aaa',
    fontSize: 13,
  },
});
