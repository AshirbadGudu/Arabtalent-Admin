import React from 'react';
import Topbar from '../components/Topbar';
import Empty from '../components/Empty';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Employers from './Employers';
import JobSeekers from './JobSeekers';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
const Tab = createMaterialTopTabNavigator();

const Users = (props) => {
  return (
    <>
      <Topbar
        title={'Users'}
        left={{onPress: () => props.navigation.toggleDrawer()}}
      />
      <Tab.Navigator>
        <Tab.Screen
          name="Employers"
          component={Employers}
          options={{title: 'Employers'}}
        />
        <Tab.Screen
          name="JobSeekers"
          component={JobSeekers}
          options={{title: 'Job Seekers'}}
        />
      </Tab.Navigator>
    </>
  );
};

export default Users;
