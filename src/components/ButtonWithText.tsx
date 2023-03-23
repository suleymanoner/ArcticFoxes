import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {MAIN_COLOR, WHITE} from '../utils/Config';

interface ButtonProps {
  title: string;
  onTap: Function;
}

const ButtonWithText: React.FC<ButtonProps> = ({title, onTap}) => {
  return (
    <TouchableOpacity style={styles.button} onPress={() => onTap()}>
      <View>
        <Text style={styles.button_text}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 50,
    margin: 10,
    borderRadius: 10,
    backgroundColor: MAIN_COLOR,
  },
  button_text: {
    fontSize: 16,
    color: WHITE,
    fontWeight: '600',
  },
});

export {ButtonWithText};
