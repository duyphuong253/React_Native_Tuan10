import React from 'react';
import { Provider } from 'react-redux';
import { store } from './components/store'; // adjust path as needed
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Bike from './components/Bike';
import BikeList from './components/BikeList';
import BikeDescription from './components/BikeDescription';
import AddBike from './components/AddBike';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Bike">
          <Stack.Screen name="Bike" component={Bike} />
          <Stack.Screen name="BikeList" component={BikeList} />
          <Stack.Screen name="BikeDescription" component={BikeDescription} />
          <Stack.Screen name="AddBike" component={AddBike} options={{ title: 'Add New Bike' }} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
