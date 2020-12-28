import React from 'react';
import Topbar from '../components/Topbar';
const Pricing = (props) => {
  return (
    <>
      <Topbar
        title={'Pricing'}
        left={{onPress: () => props.navigation.toggleDrawer()}}
      />
    </>
  );
};

export default Pricing;
