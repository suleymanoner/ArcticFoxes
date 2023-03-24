import React from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';
import {MAIN_COLOR, WHITE} from '../utils/Config';
import Icon from 'react-native-vector-icons/MaterialIcons';

interface FloatingActionButtonProps {
  onPress: any;
}

const FloatingActionButton: React.FC<FloatingActionButtonProps> = ({
  onPress,
}) => {
  return (
    <TouchableOpacity style={styles.btn} onPress={onPress}>
      <Icon name="add" size={30} color="white" />
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
