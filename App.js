import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Principal from './components/Principal.jsx'
import FlatlistComponent from './components/Flatlist.jsx'
import PushNotification from './components/PushNotificacion.jsx';
import Camara from './components/Camara.jsx';
import Qr from './components/Qr.jsx';
const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Principal" component={Principal}/>
        <Stack.Screen name="Flatlist" component={FlatlistComponent}/>
        <Stack.Screen name="PushNotification" component={PushNotification}/>
        <Stack.Screen name="Camara" component={Camara}/>
        <Stack.Screen name="Qr" component={Qr}/>
      </Stack.Navigator>
    </NavigationContainer>

  );
};

export default App;