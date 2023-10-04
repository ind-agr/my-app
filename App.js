import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ListProduct from './screens/ListProduct';
import CreateProduct from './screens/CreateProduct';
import ShowProduct from './screens/ShowProduct';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';


export default function App() {

  const Stack = createStackNavigator();

  function MyStack(){
    return(
      <Stack.Navigator>
        <Stack.Screen name='List' component={ListProduct} />
        <Stack.Screen name='Create' component={CreateProduct} />
        <Stack.Screen name='Show' component={ShowProduct} />
      </Stack.Navigator>
    )
  }
  return (
    <NavigationContainer>
      <MyStack/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
