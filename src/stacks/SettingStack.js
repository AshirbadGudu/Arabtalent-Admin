import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Settings from '../screens/Settings';
import ChangeEmail from '../screens/ChangeEmail';
import ChangePassword from '../screens/ChangePassword';

const Stack = createStackNavigator();

const SettingStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Settings" component={Settings} />
      <Stack.Screen name="ChangeEmail" component={ChangeEmail} />
      <Stack.Screen name="ChangePassword" component={ChangePassword} />
    </Stack.Navigator>
  );
};

export default SettingStack;
