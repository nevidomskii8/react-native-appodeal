import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React, {FC} from 'react';

export interface SimpleButtonProps {
  title: string;
  onBtnPress: () => void;
}
const SimpleButton: FC<SimpleButtonProps> = ({title, onBtnPress}) => {
  return (
    <View style={btnStyles.borderStyle}>
      <TouchableOpacity onPress={() => onBtnPress()}>
        <Text style={btnStyles.buttonStyle}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SimpleButton;

const btnStyles = StyleSheet.create({
  buttonStyle: {
    fontSize: 24,
    paddingVertical: 10,
    width: 250,
    textAlign: 'center',
  },
  borderStyle: {
    borderRadius: 50,
    borderWidth: 1,
    backgroundColor: 'pink',
    marginTop: 20,
    marginBottom: 20,
  },
});
