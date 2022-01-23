import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet } from 'react-native';
import { enableScreens } from 'react-native-screens'
enableScreens();

const Stack = createNativeStackNavigator();

import Splash from '../src/screens/splash';
import Characters from './screens/Characters';
import ContextProvider from "./Context/Context";

export default function App() {
  return (
    <NavigationContainer >
      <ContextProvider>
        <Stack.Navigator initialRouteName="Characters" screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Splash" component={Splash} />
          <Stack.Screen name="Characters" component={Characters} />
        </Stack.Navigator>
      </ContextProvider>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center'
  }
})
