import {View, Text, StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';
import SimpleButton from '../components/SimpleButton';
import {
  Appodeal,
  AppodealAdType,
  AppodealBanner,
  AppodealSdkEvent,
} from 'react-native-appodeal';

// @ts-ignore
const HomeScreen = ({navigation}) => {
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    Appodeal.addEventListener(AppodealSdkEvent.INITIALIZED, () =>
      setInitialized(true),
    );
    Appodeal.show(AppodealAdType.BANNER);
  }, []);

  const onBannerAdsPress = () => {
    navigation.navigate('InterstitialAdsScreen');
  };
  const onRewardAdsPress = () => {
    navigation.navigate('RewardedAdsScreen');
  };

  return (
    <View style={homeStyle.sectionContainer}>
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
