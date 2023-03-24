import React, {useState} from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen} from './src/screens/HomeScreen';
import {DetailScreen} from './src/screens/DetailScreen';
import {AddNewFoxScreen} from './src/screens/AddNewFoxScreen';
import {foxData} from './src/utils/initialData';
import DataContext from './src/utils/DataContext';
import {MAIN_COLOR} from './src/utils/Config';

const RootStack = createNativeStackNavigator();

const App = () => {
  const [data, setData] = useState(foxData);

  return (
    <DataContext.Provider value={{data, setData}}>
      <NavigationContainer>
        <RootStack.Navigator screenOptions={{headerShown: false}}>
          <RootStack.Screen name="HomeScreen" component={HomeScreen} />
          <RootStack.Screen name="DetailScreen" component={DetailScreen} />
          <RootStack.Screen
            name="AddNewFoxScreen"
            component={AddNewFoxScreen}
          />
        </RootStack.Navigator>
        <StatusBar backgroundColor={MAIN_COLOR} />
      </NavigationContainer>
    </DataContext.Provider>
  );
};

export default App;
