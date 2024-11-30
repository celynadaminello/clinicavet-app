import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image, TouchableOpacity } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export default function RegisterPet({ navigation, registeredPets, setRegisteredPets }) {
  const [petName, setPetName] = useState('');
  const [ownerName, setOwnerName] = useState('');
  const [species, setSpecies] = useState('');
  const [breed, setBreed] = useState('');
  const [age, setAge] = useState('');
  const [photo, setPhoto] = useState(null);

  const handleImagePick = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.cancelled) {
      setPhoto(result.uri);
    }
  };

  const handleRegister = () => {
    if (!petName || !ownerName || !species || !breed || !age) {
      alert('Por favor, preencha todos os campos antes de registrar.');
      return;
    }

    const newPet = {
      petName,
      ownerName,
      species,
      breed,
      age,
      photo,
    };

    setRegisteredPets([...registeredPets, newPet]);
    alert(`Animal ${petName} registrado com sucesso!`);

    // Limpar os campos
    setPetName('');
    setOwnerName('');
    setSpecies('');
    setBreed('');
    setAge('');
    setPhoto(null);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registrar Animal</Text>
      <TextInput
        style={styles.input}
        placeholder="Nome do Animal"
        value={petName}
        onChangeText={setPetName}
      />
      <TextInput
        style={styles.input}
        placeholder="Nome do Tutor"
        value={ownerName}
        onChangeText={setOwnerName}
      />
      <TextInput
        style={styles.input}
        placeholder="Espécie (Ex: Cachorro, Gato)"
        value={species}
        onChangeText={setSpecies}
      />
      <TextInput
        style={styles.input}
        placeholder="Raça do Animal"
        value={breed}
        onChangeText={setBreed}
      />
      <TextInput
        style={styles.input}
        placeholder="Idade do Animal (em anos)"
        value={age}
        onChangeText={setAge}
        keyboardType="numeric"
      />
      <TouchableOpacity style={styles.imagePicker} onPress={handleImagePick}>
        <Text style={styles.imagePickerText}>
          {photo ? 'Alterar Foto do Animal' : 'Selecionar Foto do Animal'}
        </Text>
      </TouchableOpacity>
      {photo && <Image source={{ uri: photo }} style={styles.photoPreview} />}
      <Button title="Registrar" onPress={handleRegister} color="#e80f24" />

      <TouchableOpacity
        style={[styles.button, styles.secondaryButton]}
        onPress={() => navigation.navigate('ViewPets')}
      >
        <Text style={styles.buttonText}>Ver Animais Registrados</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#FFFFFF' },
  title: { fontSize: 24, marginBottom: 20, fontWeight: 'bold', color: '#637a4e', textAlign: 'center' },
  input: { borderWidth: 1, borderColor: '#637a4e', marginBottom: 15, padding: 10, borderRadius: 5 },
  imagePicker: { backgroundColor: '#637a4e', padding: 10, borderRadius: 5, marginBottom: 15 },
  imagePickerText: { color: '#FFFFFF', fontSize: 16 },
  photoPreview: { width: 100, height: 100, borderRadius: 10, alignSelf: 'center', marginBottom: 15 },
  button: { backgroundColor: '#e80f24', padding: 15, borderRadius: 8, marginVertical: 10, alignItems: 'center' },
  buttonText: { color: '#FFFFFF', fontSize: 16, fontWeight: 'bold' },
  secondaryButton: { backgroundColor: '#637a4e' },
});
