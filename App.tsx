import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {YellowBox} from 'react-native';
// import InterstitialAddsScreen from './src/screnns/InterStitialAddsScreen';
import HomeScreen from './src/screnns/HomeScreen';
import RewardedAddsScreen from './src/screnns/RewardedAddsScreen';
import { HomeScreenAppodealExample } from "./src/screnns/HomeScreenAppodealExample";

const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={'HomeScreen'} component={HomeScreenAppodealExample} />
        <Stack.Screen
          name={'InterstitialAdsScreen'}
          component={HomeScreenAppodealExample}
        />
        <Stack.Screen
          name={'RewardedAdsScreen'}
          component={RewardedAddsScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

YellowBox.ignoreWarnings(['']);
