// components/TrocaResumo.js
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function requisitarTroca() {
  return (
    <View style={styles.container}>
      {/* Você */}
      <View style={styles.card}>
        <View style={styles.voceTag}>
          <Text style={styles.voceText}>Você</Text>
        </View>
        <View style={styles.imagePlaceholder} />
        <Text style={styles.desc}>Caloi - Bicicleta Mojave Aro 29...</Text>
      </View>

      {/* Ícone central */}
      <View style={styles.iconArea}>
        <Text style={{ fontSize: 24 }}>🔁</Text>
      </View>

      {/* Outro usuário */}
      <View style={styles.card}>
        <View style={styles.imagePlaceholder} />
        <Text style={styles.desc}>
          Nintendo, Console, Switch Oled + Super Mario...
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flexDirection: 'row', justifyContent: 'center', marginBottom: 10 },
  card: {
    width: 120,
    alignItems: 'center',
    marginHorizontal: 5,
  },
  imagePlaceholder: {
    width: 100,
    height: 80,
    backgroundColor: '#ccc',
    borderRadius: 8,
  },
  desc: {
    fontSize: 12,
    marginTop: 4,
    textAlign: 'center',
  },
  voceTag: {
    backgroundColor: '#000',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 10,
    position: 'absolute',
    top: -12,
    zIndex: 2,
  },
  voceText: {
    color: '#fff',
    fontSize: 10,
  },
  iconArea: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
