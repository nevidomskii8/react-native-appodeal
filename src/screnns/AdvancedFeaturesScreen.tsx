import React from 'react';
import {styles} from '../styles';
import {ScrollView, SafeAreaView, View, Switch, Text} from 'react-native';
import {Row, SectionHeader} from '../components';
// import SegmentedControl from '@react-native-community/segmented-control';
import SegmentedControl from 'rn-segmented-control';
import {
  Appodeal,
  AppodealGDPRConsentStatus,
  AppodealCCPAConsentStatus,
} from 'react-native-appodeal';

let _consentStatusGDPR = AppodealGDPRConsentStatus.UNKNOWN;
let _consentStatusCCPA = AppodealCCPAConsentStatus.UNKNOWN;
let _smartBanners = true;
let _tabletBanners = false;

export const AdvancedFeaturesScreen = () => {
  const [consentStatusGDPR, setConsentStatusGDPR] =
    React.useState(_consentStatusGDPR);

  const [consentStatusCCPA, setConsentStatusCCPA] =
    React.useState(_consentStatusCCPA);

  const [smartBanners, setSmartBanners] = React.useState(_smartBanners);
  const [tabletBanners, setTabletBanners] = React.useState(_tabletBanners);

  let gdpr = ['Unknown', 'Personalized', 'Non personalized'];
  let ccpa = ['Unknown', 'Opt In', 'Opt Out'];

  const smartBannersSwitch = () => (
    <Switch
      value={smartBanners}
      onValueChange={value => {
        Appodeal.setSmartBanners(value);
        _smartBanners = value;
        setSmartBanners(value);
      }}
    />
  );

  const tabletBannersSwitch = () => (
    <Switch
      value={tabletBanners}
      onValueChange={value => {
        Appodeal.setTabletBanners(value);
        _tabletBanners = value;
        setTabletBanners(value);
      }}
    />
  );

  const subtitleAccessory = (value: any) => (
    <Text style={styles.rowRightDetail}>{value}</Text>
  );

  const extrasSections = () => (
    <>
      <SectionHeader value="Extras" />
      {Object.entries(Appodeal.getExtras()).map(entry => (
        <Row title={entry[0]} accessory={() => subtitleAccessory(entry[1])} />
      ))}
    </>
  );

  const customStateSection = () => (
    <>
      <SectionHeader value="Custom State" />
      {Object.entries(Appodeal.getCustomState()).map(entry => (
        <Row title={entry[0]} accessory={() => subtitleAccessory(entry[1])} />
      ))}
    </>
  );

  // @ts-ignore
  return (
    <>
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>
          <SectionHeader value="Appearance" />
          <Row title="Smart banners" accessory={smartBannersSwitch} />
          <Row title="Tablet banners" accessory={tabletBannersSwitch} />
          <SectionHeader value="GDPR Consent Status" />
          <View style={styles.rowContainer}>
            <SegmentedControl
              // segmentedControlBackgroundColor="#86c4fd"
              // activeSegmentBackgroundColor="#0482f7"
              // activeTextColor="white"
              // textColor="black"
              // paddingVertical={18}
              segments={['Unknown', 'Personalized', 'Non personalized']}
              currentIndex={consentStatusGDPR}
              onChange={event => {
                _consentStatusGDPR = event.nativeEvent.selectedSegmentIndex;
                setConsentStatusGDPR(_consentStatusGDPR);
                Appodeal.updateGDPRConsent(_consentStatusGDPR);
              }}
            />
          </View>
          <SectionHeader value="CCPA Consent Status" />
          <View style={styles.rowContainer}>
            <SegmentedControl
              // style={styles.segmentedControl}
              segments={ccpa}
              currentIndex={consentStatusCCPA}
              onChange={(event) => {
                _consentStatusCCPA = event.nativeEvent.selectedSegmentIndex;
                setConsentStatusCCPA(_consentStatusCCPA);
                Appodeal.updateCCPAConsent(_consentStatusCCPA);
              }}
            />
          </View>
          {Object.keys(Appodeal.getExtras()).length > 0
            ? extrasSections()
            : null}
          {Object.keys(Appodeal.getCustomState()).length > 0
            ? customStateSection()
            : null}
        </ScrollView>
      </SafeAreaView>
    </>
  );
};
