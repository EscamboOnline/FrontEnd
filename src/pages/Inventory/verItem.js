import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useRoute } from '@react-navigation/native';

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

export default function DetalhesDoItem() {

  const route = useRoute();
  const { id } = route.params;

  const item = items.filter(p => p.id == id)

  console.log(item)

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
