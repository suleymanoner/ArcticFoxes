import React, {useContext, useState} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  StyleSheet,
  Dimensions,
  TextInput,
} from 'react-native';
import ImageCropPicker from 'react-native-image-crop-picker';
import {ButtonWithText} from '../components/ButtonWithText';
import DataContext from '../utils/DataContext';
import {MAIN_COLOR} from '../utils/Config';
import {Fox} from '../utils/initialData';
import uuid from 'react-native-uuid';

interface AddNewFoxScreenProps {
  navigation: any;
}

const AddNewFoxScreen: React.FC<AddNewFoxScreenProps> = ({navigation}) => {
  const {data, setData} = useContext(DataContext);

  const [stateImg, setStImg] = useState(require('../assets/foxes/fox0.jpg'));
  const [isPhotoChanged, setIsPhotoChanged] = useState(false);

  const [stateName, setStName] = useState('');
  const [stateAge, setStAge] = useState('');

  const goBack = () => {
    navigation.goBack();
  };

  const onChangeVariable = (type: string, newVariable: string) => {
    if (type === 'name') {
      setStName(newVariable);
    } else if (type === 'age') {
      setStAge(newVariable);
    }
  };

  const choosePhoto = () => {
    try {
      ImageCropPicker.openPicker({
        width: Dimensions.get('screen').width / 1.08,
        height: Dimensions.get('screen').height / 2.5,
        cropping: true,
      })
        .then(img => {
          setStImg(img.path);
          setIsPhotoChanged(true);
        })
        .catch(err => {
          console.log(err);
        });
    } catch (error) {
      console.log(error);
    }
  };

  const addNewFox = () => {
    const newFox: Fox = {
      id: uuid.v4().toString(),
      name: stateName,
      age: stateAge,
      image: stateImg,
    };
    const updatedData = [...data, newFox];
    setData(updatedData);
    goBack();
  };

  return (
    <View style={styles.container}>
      <View style={styles.top_container}>
        <TouchableOpacity onPress={goBack}>
          <Image
            source={require('../assets/left-arrow.png')}
            style={styles.back_button}
          />
        </TouchableOpacity>
        <Text style={styles.top_container_title}>Add New Fox</Text>
      </View>
      <View style={styles.img_container}>
        <TouchableOpacity onPress={choosePhoto}>
          <Image
            source={
              isPhotoChanged
                ? {uri: stateImg}
                : require('../assets/add_photo.png')
            }
            style={styles.image}
            resizeMode="contain"
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
        <ButtonWithText title="Save" onTap={addNewFox} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  top_container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  top_container_title: {
    fontSize: 30,
    marginTop: 10,
    color: 'black',
    textAlign: 'center',
  },
  btn_container: {
    alignSelf: 'flex-end',
    marginRight: 5,
  },
  info_container: {
    alignItems: 'flex-start',
    marginTop: 10,
    marginLeft: 15,
  },
  input: {
    borderWidth: 0.8,
    borderRadius: 10,
    borderColor: MAIN_COLOR,
    padding: 10,
    width: Dimensions.get('screen').width / 1.08,
    fontSize: 23,
    color: MAIN_COLOR,
    marginTop: 10,
  },
  headerText: {
    fontSize: 16,
    color: MAIN_COLOR,
  },
  img_container: {
    alignItems: 'center',
    marginTop: 15,
  },
  back_button: {
    width: 25,
    height: 25,
    right: 60,
    position: 'absolute',
    bottom: -20,
  },
  image: {
    width: Dimensions.get('screen').width / 1.08,
    height: Dimensions.get('screen').height / 2.5,
    borderRadius: 5,
  },
});

export {AddNewFoxScreen};
