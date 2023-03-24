import {Platform, ToastAndroid, AlertIOS} from 'react-native';

export const toast = (msg: string) => {
  if (Platform.OS === 'android') {
    ToastAndroid.show(msg, ToastAndroid.SHORT);
  } else {
    AlertIOS.alert(msg);
  }
};

export const MAIN_COLOR = '#00C6D3';
export const WHITE = '#FFFFFF';
