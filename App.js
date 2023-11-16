import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Principal from './components/Principal.jsx'
import FlatlistComponent from './components/Flatlist.jsx'
import PushNotification from './components/PushNotificacion.jsx';
const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Principal" component={Principal}/>
        <Stack.Screen name="Flatlist" component={FlatlistComponent}/>
        <Stack.Screen name="PushNotification" component={PushNotification}/>
      </Stack.Navigator>
    </NavigationContainer>

  );
};

export default App;