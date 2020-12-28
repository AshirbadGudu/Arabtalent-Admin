import React from 'react';
import Topbar from '../components/Topbar';

const Home = (props) => {
  return (
    <>
      <Topbar
        title={'Home'}
        left={{onPress: () => props.navigation.toggleDrawer()}}
      />
    </>
  );
};

export default Home;
