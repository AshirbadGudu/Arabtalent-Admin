import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from './screens/Login';
import ForgetPassword from './screens/ForgetPassword';
const PublicStack = createStackNavigator();
const PublicRoute = () => {
  return (
    <>
      <PublicStack.Navigator screenOptions={{headerShown: false}}>
        <PublicStack.Screen name="Login" component={Login} />
        <PublicStack.Screen name="ForgetPassword" component={ForgetPassword} />
      </PublicStack.Navigator>
    </>
  );
};

export default PublicRoute;
