import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {MAIN_COLOR} from '../utils/Config';

interface FoxComponentProps {
  name: string;
  image: string;
  onTap: Function;
}

const FoxComponent: React.FC<FoxComponentProps> = ({name, onTap}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={() => onTap()}>
      <View style={styles.top_container}>
        <Image
          source={require('../assets/foxes/fox0.jpg')}
          style={styles.image}
        />
        <View style={styles.name_container}>
          <Text style={styles.name}>{name}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomColor: 'rgba(0, 0, 0, 0.05)',
    borderBottomWidth: 1,
  },
  top_container: {
    flexDirection: 'row',
    marginBottom: 15,
    marginTop: 15,
  },
  name_container: {
    marginLeft: 30,
    justifyContent: 'center',
  },
  image: {
    width: 100,
    height: 100,
    marginLeft: 15,
    borderRadius: 5,
  },
  name: {
    fontSize: 25,
    color: MAIN_COLOR,
    fontWeight: '500',
  },
});

export default FoxComponent;
