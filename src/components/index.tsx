import React from 'react';
import {styles} from '../styles';
import {Text, View, TouchableHighlight} from 'react-native';
import {Link} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

export const SectionHeader = (props: {value: string}) => {
  return <Text style={styles.sectionHeader}>{props.value}</Text>;
};

export const Row = (props: {
  title: string;
  onClick?(): void;
  accessory?(): any;
}) => {
  return (
    <TouchableHighlight style={{width: '100%'}} onPress={() => props.onClick && props.onClick()}>
      <View style={styles.rowContainer}>
        <View style={styles.contentRowContainer}>
          <View style={styles.titlesRowContainer}>
            <Text style={styles.rowTitle}>{props.title}</Text>
          </View>
          <View style={styles.accessoryContainer}>
            {props.accessory && props.accessory()}
          </View>
        </View>
        <View style={styles.borderContainer}>
          <View style={styles.border} />
        </View>
      </View>
    </TouchableHighlight>
  );
};

export const LinkRow = (props: {title: string; route: string}) => {
  return (
    <TouchableHighlight>
      <View style={styles.rowContainer}>
        <View style={styles.contentRowContainer}>
          <View style={styles.titlesRowContainer}>
            <Text style={styles.rowTitle}>{props.title}</Text>
          </View>
          <View style={styles.accessoryContainer}>
            <Icon name="chevron-forward-outline" color="#ccc" size={24} />
          </View>
        </View>
        <View style={styles.borderContainer}>
          <View style={styles.border} />
        </View>
        <Link style={styles.link} to={props.route}>
          <Text />
        </Link>
      </View>
    </TouchableHighlight>
  );
};
