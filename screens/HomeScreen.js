import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/logo1.png')} style={styles.logo} />
      <Text style={styles.title}>Bem-vindo à Clínica Veterinária!</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('RegisterPet')}
      >
        <Text style={styles.buttonText}>Registrar Animal</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('ScheduleAppointment')}
      >
        <Text style={styles.buttonText}>Agendar Consulta</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF', // Fundo branco
    padding: 20,
  },
  logo: {
    width: 200, // Largura da logo aumentada
    height: 200, // Altura da logo aumentada
    marginBottom: 30,
    resizeMode: 'contain', // Mantém as proporções e evita cortes
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#637a4e', // Verde para os títulos
    marginBottom: 20,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#e80f24', // Vermelho para os botões
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 8,
    marginVertical: 10,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
