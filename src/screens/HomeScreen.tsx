import React from 'react';
import {Text, View, FlatList} from 'react-native';
import foxes from '../assets/foxes.json';
import foxImages from '../assets/foxes';
import FoxComponent from '../components/FoxComponent';

interface HomeScreenProps {
  navigation: any;
}

const HomeScreen: React.FC<HomeScreenProps> = ({navigation}) => {
  const goDetails = (id: string, name: string, age: string, image: string) => {
    navigation.navigate('DetailScreen', {id, name, age, image});
  };

  return (
    <View>
      <FlatList
        data={foxes}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <FoxComponent
            name={item.name}
            image={item.image}
            onTap={() => goDetails(item.id, item.name, item.age, item.image)}
          />
        )}
      />
    </View>
  );
};

export {HomeScreen};
