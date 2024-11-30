import React from 'react';
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';

export default function ViewPets({ registeredPets }) {
  const renderPet = ({ item }) => (
    <View style={styles.petItem}>
      {item.photo && <Image source={{ uri: item.photo }} style={styles.petPhoto} />}
      <Text style={styles.petText}>Nome: {item.petName}</Text>
      <Text style={styles.petText}>Espécie: {item.species}</Text>
      <Text style={styles.petText}>Raça: {item.breed}</Text>
      <Text style={styles.petText}>Idade: {item.age} anos</Text>
      <Text style={styles.petText}>Tutor: {item.ownerName}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Animais Registrados</Text>
      <FlatList
        data={registeredPets}
        renderItem={renderPet}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FFFFFF',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: 'bold',
    color: '#637a4e',
    textAlign: 'center',
  },
  petItem: {
    padding: 15,
    borderWidth: 1,
    borderColor: '#637a4e',
    borderRadius: 5,
    marginBottom: 10,
    alignItems: 'center',
  },
  petPhoto: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginBottom: 10,
  },
  petText: {
    fontSize: 16,
    color: '#111111', // Texto na cor preta
  },
});
