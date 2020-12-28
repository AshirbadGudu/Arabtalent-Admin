import React from 'react';
import Topbar from '../components/Topbar';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import SkillsCategory from './SkillsCategory';
import JobsCategory from './JobsCategory';
const Tab = createMaterialTopTabNavigator();

const Categories = (props) => {
  return (
    <>
      <Topbar
        title={'Categories'}
        left={{onPress: () => props.navigation.toggleDrawer()}}
      />
      <Tab.Navigator>
        <Tab.Screen
          name="JobsCategory"
          component={JobsCategory}
          options={{title: 'Jobs Category'}}
        />
        <Tab.Screen
          name="SkillsCategory"
          component={SkillsCategory}
          options={{title: 'Skills Category'}}
        />
      </Tab.Navigator>
    </>
  );
};

export default Categories;
