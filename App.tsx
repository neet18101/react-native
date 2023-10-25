import { StyleSheet, Text, View } from 'react-native';
import React,{useEffect} from 'react'
import DetailsScreen from './src/screens/DetailsScreen';
import PaymentScreen from './src/screens/PaymentScreen';
import HomeScreen from './src/screens/HomeScreen';
import OrderHistoryScreen from './src/screens/OrderHistoryScreen';
import FavoriateScreen from './src/screens/FavoriateScreen';
import CartScreen from './src/screens/CartScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabNavigator from './src/navigators/TabNavigator';
import SplashScreen from 'react-native-splash-screen';
const Stack = createNativeStackNavigator();

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen   
        name='Tab' 
        component={TabNavigator}
         options={{ animation: 'slide_from_bottom' }}>

        </Stack.Screen>
        <Stack.Screen   
        name='details' 
        component={DetailsScreen}
         options={{ animation: 'slide_from_bottom' }}>

        </Stack.Screen>
        <Stack.Screen 
        name='PaymentScreen' 
        component={PaymentScreen}
         options={{ animation: 'slide_from_bottom' }}>

        </Stack.Screen>

      </Stack.Navigator >

    </NavigationContainer>
  )
}

export default App
