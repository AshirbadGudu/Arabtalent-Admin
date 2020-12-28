import React from 'react';
import HomeStack from './stacks/HomeStack';
import UsersStack from './stacks/UsersStack';
import JobsStack from './stacks/JobsStack';
import SettingStack from './stacks/SettingStack';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {COLORS} from './config/Colors';
import CategoryStack from './stacks/CategoryStack';
const Tab = createMaterialBottomTabNavigator();

const PrivateRoute = () => {
  return (
    <Tab.Navigator shifting={true} initialRouteName="HomeTab">
      <Tab.Screen
        name="SearchTab"
        options={{
          tabBarLabel: 'Jobs',
          tabBarIcon: ({color}) => (
            <AntDesign name="pluscircleo" color={color} size={24} />
          ),
          tabBarColor: COLORS.LIGHTER,
        }}
        component={JobsStack}
      />
      <Tab.Screen
        name="CategoryTab"
        options={{
          tabBarLabel: 'Categories',
          tabBarIcon: ({color}) => (
            <AntDesign name="appstore-o" color={color} size={24} />
          ),
          tabBarColor: COLORS.SOFTER,
        }}
        component={CategoryStack}
      />
      <Tab.Screen
        name="HomeTab"
        options={{
          tabBarLabel: 'HOME',
          tabBarIcon: ({color}) => (
            <AntDesign name="home" color={color} size={24} />
          ),
          tabBarColor: COLORS.LIGHT,
        }}
        component={HomeStack}
      />
      <Tab.Screen
        name="ProfileTab"
        options={{
          tabBarLabel: 'Users',
          tabBarIcon: ({color}) => (
            <AntDesign name="addusergroup" color={color} size={24} />
          ),
          tabBarColor: COLORS.SOFTER,
        }}
        component={UsersStack}
      />
      <Tab.Screen
        name="CartTab"
        options={{
          tabBarLabel: 'Settings',
          tabBarIcon: ({color}) => (
            <AntDesign name="setting" color={color} size={24} />
          ),
          tabBarColor: COLORS.SOFTER,
        }}
        component={SettingStack}
      />
    </Tab.Navigator>
  );
};

export default PrivateRoute;
