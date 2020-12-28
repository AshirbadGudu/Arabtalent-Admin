import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Home from '../screens/Home';
import Reviews from '../screens/Reviews';
import About from '../screens/About';
import Pricing from '../screens/Pricing';

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Reviews" component={Reviews} />
      <Stack.Screen name="About" component={About} />
      <Stack.Screen name="Pricing" component={Pricing} />
    </Stack.Navigator>
  );
};

export default HomeStack;
