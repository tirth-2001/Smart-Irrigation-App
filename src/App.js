import 'react-native-gesture-handler';
import React from 'react';
import Routes from './Routes';
import {MenuProvider} from 'react-native-popup-menu';

const App = () => {
  return (
    <>
      <MenuProvider>
        <Routes />
      </MenuProvider>
    </>
  );
};

export default App;
