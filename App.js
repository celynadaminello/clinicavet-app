import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import RegisterPet from './screens/RegisterPet';
import ScheduleAppointment from './screens/ScheduleAppointment';
import ViewAppointments from './screens/ViewAppointments';
import ViewPets from './screens/ViewPets';

const Stack = createStackNavigator();

export default function App() {
  const [registeredPets, setRegisteredPets] = useState([]); // Estado compartilhado

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="RegisterPet">
          {(props) => (
            <RegisterPet
              {...props}
              registeredPets={registeredPets}
              setRegisteredPets={setRegisteredPets}
            />
          )}
        </Stack.Screen>
        <Stack.Screen name="ScheduleAppointment">
          {(props) => (
            <ScheduleAppointment
              {...props}
              registeredPets={registeredPets}
            />
          )}
        </Stack.Screen>
        <Stack.Screen name="ViewAppointments" component={ViewAppointments} />
        <Stack.Screen name="ViewPets">
          {(props) => (
            <ViewPets {...props} registeredPets={registeredPets} />
          )}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
