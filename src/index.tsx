import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { createDrawerNavigator } from '@react-navigation/drawer';
import { StyleSheet } from 'react-native';
import { enableScreens } from 'react-native-screens'
import 'react-native-gesture-handler';
enableScreens();

const Stack = createNativeStackNavigator();
// const Drawer = createDrawerNavigator();

import Splash from '../src/screens/splash';
import Characters from './screens/Characters';
import ContextProvider from "./Context/Context";

export default function App() {
  return (
    <NavigationContainer >
      <ContextProvider>
        <Stack.Navigator initialRouteName="Splash" screenOptions={{ headerShown: false }}>
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
