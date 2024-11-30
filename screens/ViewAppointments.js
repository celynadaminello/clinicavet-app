import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

export default function ViewAppointments({ route }) {
  const { appointments } = route.params;

  const renderAppointment = ({ item }) => (
    <View style={styles.appointmentItem}>
      <Text style={styles.appointmentText}>Animal: {item.petName}</Text>
      <Text style={styles.appointmentText}>Data: {item.date}</Text>
      <Text style={styles.appointmentText}>Tutor: {item.tutor}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Agendamentos</Text>
      {appointments && appointments.length > 0 ? (
        <FlatList
          data={appointments}
          renderItem={renderAppointment}
          keyExtractor={(item, index) => index.toString()}
        />
      ) : (
        <Text style={styles.noAppointments}>Nenhum agendamento encontrado.</Text>
      )}
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
  appointmentItem: {
    padding: 15,
    borderWidth: 1,
    borderColor: '#637a4e',
    borderRadius: 5,
    marginBottom: 10,
  },
  appointmentText: {
    fontSize: 16,
    color: '#111111',
  },
  noAppointments: {
    fontSize: 16,
    color: '#e80f24',
    textAlign: 'center',
  },
});
