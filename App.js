import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { TailwindProvider } from 'tailwindcss-react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import RestaurantScreen from './screens/RestaurantScreen';
import LoginScreen from './screens/LoginScreen';
import { Calendar } from 'react-native-calendars';
import Calendier from './screens/Calendier';
import EventScreen from './screens/EventScreen';
import EditProfilScreen from './screens/EditProfilScreen';
import ProfileConfig from './screens/ProfileConfig';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
     <TailwindProvider>
      <Stack.Navigator >
        <Stack.Screen name ="Login" component = {LoginScreen } options={{
            headerShown:false,
        }}/>
        <Stack.Screen name ="Home" component = {HomeScreen}/>
        <Stack.Screen name ="Aufgabe" component = {RestaurantScreen} />
        <Stack.Screen name ="Calendar" component = {Calendar} />
        <Stack.Screen name ="Calendrier" component = {Calendier} />
        <Stack.Screen name ="Event" component = {EventScreen} />
        <Stack.Screen name ="Profil" component = {EditProfilScreen} />
        <Stack.Screen name ="ConfigProfil" component = {ProfileConfig} />

      </Stack.Navigator>
     </TailwindProvider>
    </NavigationContainer>
    
  );
}


