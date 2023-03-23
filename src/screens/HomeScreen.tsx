import React, {useContext} from 'react';
import {View, FlatList} from 'react-native';
import FoxComponent from '../components/FoxComponent';
import DataContext from '../utils/DataContext';

import FloatingActionButton from '../components/FloatingActionButton';

interface Fox {
  id: string;
  name: string;
  age: string;
  image: string;
}

interface HomeScreenProps {
  navigation: any;
}

const HomeScreen: React.FC<HomeScreenProps> = ({navigation}) => {
  const {data, setData} = useContext(DataContext);

  const goDetails = (id: string, name: string, age: string, image: string) => {
    navigation.navigate('DetailScreen', {id, name, age, image, updateFox});
  };

  const goAddNew = () => {
    navigation.navigate('AddNewFoxScreen');
  };

  const updateFox = (id: string, name: string, age: string, image: string) => {
    const updatedData = data.map(fox => {
      if (fox.id === id) {
        return {...fox, name, age, image};
      }
      return fox;
    });
    setData(updatedData);
  };

  return (
    <View>
      <FlatList
        data={data}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <FoxComponent
            name={item.name}
            image={item.image}
            onTap={() => goDetails(item.id, item.name, item.age, item.image)}
          />
        )}
      />
      <FloatingActionButton onPress={() => goAddNew()} />
    </View>
  );
};

export {HomeScreen};
