/* eslint-disable no-bitwise */
import {Platform} from 'react-native';
import {
  AppodealAdType,
  AppodealGender,
  AppodealLogLevel,
} from 'react-native-appodeal';

interface User {
  age: number;
  gender: AppodealGender;
  id: string;
}

interface Constants {
  appKey: string;
  adTypes: number;
  logLevel: AppodealLogLevel;
  user: User;
}

export const constants: Constants = {
  appKey: 'd2b4133e7c6cc66962ed3a855cd591e05a141138a4796bc1',
  adTypes:
    AppodealAdType.INTERSTITIAL |
    AppodealAdType.REWARDED_VIDEO |
    AppodealAdType.BANNER |
    AppodealAdType.MREC,
  logLevel: __DEV__ ? AppodealLogLevel.VERBOSE : AppodealLogLevel.NONE,
  user: {
    age: 23,
    gender: AppodealGender.MALE,
    id: 'some attribution id',
  },
};
