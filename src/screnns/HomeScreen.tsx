import {View, Text, StyleSheet, Switch} from 'react-native';
import React, {useEffect, useState} from 'react';
import SimpleButton from '../components/SimpleButton';
import {
  Appodeal,
  AppodealAdType,
  AppodealBanner,
  AppodealSdkEvent,
} from 'react-native-appodeal';
import {initialize, isInitialized, SDKState} from '../advertising';
import {InitialisationSection} from '../components/sections/InitialisationSection';
import {Row} from '../components';

// @ts-ignore
const HomeScreen = ({navigation}) => {
  const [initialized, setInitialized] = useState(false);
  const [testMode, setTestMode] = React.useState(true);

  const [state, setState] = React.useState(
    isInitialized() ? SDKState.INITIALIZED : SDKState.PENDING,
  );

  const initSDK = () => {
    if (state === SDKState.INITIALIZING) {
      return;
    }

    if (state !== SDKState.INITIALIZED) {
      setState(SDKState.INITIALIZING);
      Appodeal.addEventListener(AppodealSdkEvent.INITIALIZED, () => {
        setState(SDKState.INITIALIZED);
        Appodeal.show(AppodealAdType.BANNER);
        setInitialized(true)
      });
    }

    initialize(true);
  };

  const onBannerAdsPress = () => {
    navigation.navigate('InterstitialAdsScreen');
  };
  const onRewardAdsPress = () => {
    navigation.navigate('RewardedAdsScreen');
  };

  const testModeSwitch = () => (
    <Switch value={testMode} onValueChange={setTestMode} />
  );

  return (
    <View style={homeStyle.sectionContainer}>
      <InitialisationSection state={state} onInitialize={initSDK} />
      <Row title="Test mode" accessory={testModeSwitch} />
      {initialized && (
        <>
          <SimpleButton
            title={'Interstitial Ads'}
            onBtnPress={() => onBannerAdsPress()}
          />
          <SimpleButton
            title={'Rewarded Ads'}
            onBtnPress={() => onRewardAdsPress()}
          />
        </>
      )}
      <Text style={{fontSize: 34}}>
        Appodeal is {initialized ? 'ready' : 'loading'}
      </Text>
      {initialized && (
        <AppodealBanner
          style={{
            height: 200,
            width: '100%',
            backgroundColor: 'hsl(0, 0%, 97%)',
            alignContent: 'stretch',
          }}
          adSize="phone"
          usesSmartSizing // (iOS specific) on Android smart banners are enabled by default.
          onAdLoaded={() => console.log('Banner view did load')}
          onAdExpired={() => console.log('Banner view expired')}
          onAdClicked={() => console.log('Banner view is clicked')}
          onAdFailedToLoad={() => console.log('Banner view is failed to load')}
        />
      )}
      <Text style={{fontSize: 20}}>Banner Ads</Text>
    </View>
  );
};

export default HomeScreen;

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
  sectionContainer: {
    paddingHorizontal: 20,
    paddingVertical: 200,
    height: 800,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FCBD47',
  },
});
