import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function PetProfile({ route }) {
  const { petName, ownerName, species, photo } = route.params;

  return (
    <View style={styles.container}>
      {photo && <Image source={{ uri: photo }} style={styles.photo} />}
      <Text style={styles.title}>{petName}</Text>
      <Text style={styles.detail}>Tutor: {ownerName}</Text>
      <Text style={styles.detail}>Espécie: {species}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
  },
  photo: {
    width: 150,
    height: 150,
    borderRadius: 10,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#637a4e',
    marginBottom: 20,
  },
  detail: {
    fontSize: 18,
    marginBottom: 10,
  },
});
