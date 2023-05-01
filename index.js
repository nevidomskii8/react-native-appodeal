/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {
  Appodeal,
  AppodealAdType,
  AppodealLogLevel,
  AppodealSdkEvent,
} from 'react-native-appodeal';

Appodeal.setAutoCache(AppodealAdType.INTERSTITIAL, true);

Appodeal.setTesting(false);
Appodeal.setLogLevel(AppodealLogLevel.VERBOSE);
Appodeal.setChildDirectedTreatment(false);
Appodeal.setTriggerPrecacheCallbacks(true, AppodealAdType.BANNER);

const adTypes =
  AppodealAdType.INTERSTITIAL |
  AppodealAdType.REWARDED_VIDEO |
  AppodealAdType.BANNER;
Appodeal.initialize(
  'd2b4133e7c6cc66962ed3a855cd591e05a141138a4796bc1',
  adTypes,
);

AppRegistry.registerComponent(appName, () => App);


// d2b4133e7c6cc66962ed3a855cd591e05a141138a4796bc1
