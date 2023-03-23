import React from 'react';
import {TouchableOpacity, StyleSheet, Text} from 'react-native';
import {MAIN_COLOR, WHITE} from '../utils/Config';

interface FloatingActionButtonProps {
  onPress: any;
}

const FloatingActionButton: React.FC<FloatingActionButtonProps> = ({
  onPress,
}) => {
  return (
    <TouchableOpacity style={styles.btn} onPress={onPress}>
      <Text style={styles.btn_txt}>Add</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btn_txt: {
    color: WHITE,
  },
  btn: {
    position: 'absolute',
    right: 16,
    bottom: 16,
    backgroundColor: MAIN_COLOR,
    borderRadius: 30,
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 3,
  },
});

export default FloatingActionButton;
