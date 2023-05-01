import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import React, {useEffect} from 'react';
import { Appodeal, AppodealAdType } from "react-native-appodeal";


const InterstitialAddsScreen = () => {

  // Appodeal.initialize(
  //   'd2b4133e7c6cc66962ed3a855cd591e05a141138a4796bc1',
  //   AppodealAdType.INTERSTITIAL,
  // );

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
