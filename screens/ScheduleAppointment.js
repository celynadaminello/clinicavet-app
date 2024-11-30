import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

export default function ScheduleAppointment({ navigation, registeredPets }) {
  const [selectedPet, setSelectedPet] = useState(null);
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [appointments, setAppointments] = useState([]);

  const handleSelectPet = (pet) => {
    setSelectedPet(pet);
  };

  const handleSchedule = () => {
    if (!selectedPet) {
      Alert.alert('Erro', 'Por favor, selecione um animal antes de agendar.');
      return;
    }

    const newAppointment = {
      petName: selectedPet.petName,
      date: date.toLocaleDateString(),
      tutor: selectedPet.ownerName,
    };

    setAppointments([...appointments, newAppointment]);
    Alert.alert('Sucesso', `Consulta para ${selectedPet.petName} agendada para ${date.toLocaleDateString()}.`);
    setSelectedPet(null);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Agendar Consulta</Text>

      <Text style={styles.subtitle}>Selecione um Animal:</Text>
      <FlatList
        data={registeredPets}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[
              styles.petItem,
              selectedPet?.petName === item.petName && styles.selectedPetItem,
            ]}
            onPress={() => handleSelectPet(item)}
          >
            <Text style={styles.petText}>Nome: {item.petName}</Text>
            <Text style={styles.petText}>Tutor: {item.ownerName}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item, index) => index.toString()}
      />

      <Text style={styles.subtitle}>
        Data Selecionada: {date.toLocaleDateString()}
      </Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => setShowDatePicker(true)}
      >
        <Text style={styles.buttonText}>Alterar Data</Text>
      </TouchableOpacity>

      {showDatePicker && (
        <DateTimePicker
          value={date}
          mode="date"
          display="default"
          onChange={(event, selectedDate) => {
            setShowDatePicker(false);
            if (selectedDate) setDate(selectedDate);
          }}
        />
      )}

      <TouchableOpacity style={styles.button} onPress={handleSchedule}>
        <Text style={styles.buttonText}>Confirmar Agendamento</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, styles.secondaryButton]}
        onPress={() => navigation.navigate('ViewAppointments', { appointments })}
      >
        <Text style={styles.buttonText}>Ver Agendamentos</Text>
      </TouchableOpacity>
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
  subtitle: {
    fontSize: 18,
    marginBottom: 10,
    color: '#111111',
  },
  petItem: {
    padding: 15,
    borderWidth: 1,
    borderColor: '#637a4e',
    borderRadius: 5,
    marginBottom: 10,
  },
  selectedPetItem: {
    backgroundColor: '#e80f24',
    borderColor: '#e80f24',
  },
  petText: {
    fontSize: 16,
    color: '#111111', // Alterado para preto
  },
  button: {
    backgroundColor: '#e80f24',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 8,
    marginVertical: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  secondaryButton: {
    backgroundColor: '#637a4e',
  },
});
