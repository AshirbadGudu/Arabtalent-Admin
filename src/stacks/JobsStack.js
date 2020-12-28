import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Jobs from '../screens/Jobs';
const Stack = createStackNavigator();

const JobsStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Jobs" component={Jobs} />
    </Stack.Navigator>
  );
};

export default JobsStack;
