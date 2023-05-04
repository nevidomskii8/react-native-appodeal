import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import React, {useEffect} from 'react';
import { Appodeal, AppodealAdType } from "react-native-appodeal";


const InterstitialAddsScreen = () => {

  useEffect(() => {
    Appodeal.show(AppodealAdType.INTERSTITIAL);
  }, []);

  return (
    <View style={homeStyle.parentStyle}>
      <Text style={homeStyle.h1}>Interstitial ads</Text>
    </View>
  );
};

export default InterstitialAddsScreen;

const homeStyle = StyleSheet.create({
  parentStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 100,
  },
  h1: {
    marginBottom: 20,
    fontSize: 25,
    color: 'blue',
    textAlign: 'center',
  },
});
