import React, {useContext, useState} from 'react';
import {
  Text,
  View,
  Image,
  TextInput,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {ButtonWithText} from '../components/ButtonWithText';
import {MAIN_COLOR, toast} from '../utils/Config';
import ImageCropPicker from 'react-native-image-crop-picker';
import DataContext from '../utils/DataContext';
import Icon from 'react-native-vector-icons/MaterialIcons';

interface DetailScreenProps {
  navigation: any;
  route: any;
}

const DetailScreen: React.FC<DetailScreenProps> = ({navigation, route}) => {
  const {data, setData} = useContext(DataContext);
  const {id, name, age, image, updateFox} = route?.params;

  const [stateName, setStName] = useState(name);
  const [stateAge, setStAge] = useState(age);
  const [stateImg, setStImg] = useState(image);

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
        })
        .catch(err => {
          console.log(err);
        });
    } catch (error) {
      console.log(error);
    }
  };

  const onSave = () => {
    updateFox(id, stateName, stateAge, stateImg);
    goBack();
    toast('Editted!');
  };

  const onDelete = () => {
    Alert.alert(
      'Delete',
      'Are you sure?',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Delete cancelled!'),
          style: 'cancel',
        },
        {
          text: 'Delete',
          onPress: () => {
            const newData = data.filter(fox => fox.id !== id);
            setData(newData);
            goBack();
            toast('Deleted!');
          },
        },
      ],
      {cancelable: false},
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.top_container}>
        <TouchableOpacity onPress={goBack} style={styles.back_button}>
          <Icon name="arrow-back" size={30} color={MAIN_COLOR} />
        </TouchableOpacity>
        <Text style={styles.top_container_title}>Edit Details</Text>
        <TouchableOpacity onPress={onDelete} style={styles.delete_btn}>
          <Icon name="delete" size={30} color={MAIN_COLOR} />
        </TouchableOpacity>
      </View>
      <View style={styles.img_container}>
        <TouchableOpacity onPress={choosePhoto}>
          <Image
            source={
              typeof stateImg === 'string' && stateImg.includes('file')
                ? {uri: stateImg}
                : stateImg
            }
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
        <ButtonWithText title="Save" onTap={onSave} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  top_container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  top_container_title: {
    fontSize: 30,
    marginTop: 10,
    color: MAIN_COLOR,
    textAlign: 'center',
  },
  img_container: {
    alignItems: 'center',
    marginTop: 10,
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
  back_button: {
    width: 25,
    height: 25,
    marginTop: 10,
    marginLeft: 20,
  },
  delete_btn: {
    width: 25,
    height: 25,
    marginTop: 10,
    marginRight: 20,
  },
});

export {DetailScreen};
