import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import Leandro from './src/screens/ActivityIndicator';
import { useFonts, Inter_400Regular, Inter_500Medium } from '@expo-google-fonts/inter';
import { theme } from './src/theme';
import Widget from './src/components/Widget';
//import React from 'react-native/node_modules/@types/react';


export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium
  });

  if (!fontsLoaded) {
    return <Leandro />;
  }

  return (
    <View style={{
      flex: 1,
      backgroundColor: theme.colors.background
    }}
    >
      
      

      <StatusBar 
      style="light" 
      backgroundColor="transparent"
      translucent
      />
      <Widget />
    </View>
  );
}


