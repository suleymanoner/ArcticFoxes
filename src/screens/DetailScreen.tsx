import React, {useState} from 'react';
import {
  Text,
  View,
  Image,
  TextInput,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {ButtonWithText} from '../components/ButtonWithText';
import {MAIN_COLOR} from '../utils/Config';

interface DetailScreenProps {
  navigation: any;
  route: any;
}

const DetailScreen: React.FC<DetailScreenProps> = ({navigation, route}) => {
  const {id, name, age, image} = route?.params;

  const [stateName, setStateName] = useState(name);
  const [stateAge, setStateAge] = useState(age);
  const [stateImg, setStateImg] = useState(image);

  const onChangeVariable = (type: string, newVariable: string) => {
    if (type === 'name') {
      setStateName(newVariable);
    } else if (type === 'age') {
      setStateAge(newVariable);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.img_container}>
        <TouchableOpacity>
          <Image
            source={require('../assets/foxes/fox0.jpg')}
            style={styles.image}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.info_container}>
        <Text style={styles.headerText}>Name:</Text>
        <TextInput
          style={styles.input}
          onChangeText={txt => onChangeVariable('name', txt)}
          value={stateName}
          placeholder="Please enter name of the fox!"
        />
        <Text style={[styles.headerText, {marginTop: 10}]}>Age:</Text>
        <TextInput
          style={styles.input}
          onChangeText={txt => onChangeVariable('age', txt)}
          value={stateAge}
          placeholder="Please enter age of the fox!"
        />
      </View>
      <View style={styles.btn_container}>
        <ButtonWithText title="Save" onTap={() => {}} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  img_container: {
    alignItems: 'center',
    marginTop: 15,
  },
  info_container: {
    alignItems: 'flex-start',
    marginTop: 10,
    marginLeft: 15,
  },
  btn_container: {
    alignSelf: 'flex-end',
    marginRight: 5,
  },
  image: {
    width: Dimensions.get('screen').width / 1.08,
    height: Dimensions.get('screen').height / 2.5,
    borderRadius: 5,
  },
  name: {
    fontSize: 35,
    color: MAIN_COLOR,
    fontWeight: '500',
  },
  input: {
    borderWidth: 0.8,
    borderRadius: 10,
    borderColor: MAIN_COLOR,
    padding: 10,
    width: Dimensions.get('screen').width / 1.08,
    fontSize: 30,
    color: MAIN_COLOR,
    marginTop: 10,
  },
  headerText: {
    fontSize: 17,
    color: MAIN_COLOR,
  },
});

export {DetailScreen};
