import {View, Text, StyleSheet} from 'react-native';
import React, {useEffect} from 'react';
import { Appodeal, AppodealAdType } from "react-native-appodeal";

const RewardedAddsScreen = () => {
  // Appodeal.initialize(
  //   'd2b4133e7c6cc66962ed3a855cd591e05a141138a4796bc1',
  //   AppodealAdType.REWARDED_VIDEO,
  // );
  useEffect(() => {
    Appodeal.show(AppodealAdType.REWARDED_VIDEO);
  }, []);

  return (
    <View style={homeStyle.parentStyle}>
      <Text style={homeStyle.h1}>Integrate Rewarded ads</Text>
    </View>
  );
};

export default RewardedAddsScreen;

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
