import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import Router from './src/router';
import {Provider} from 'react-redux';
import store from './src/context/store';

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Router />
      </NavigationContainer>
    </Provider>
  );
};

export default App;

// Copyright - Kelompok 1 Project 3 - RCTN-KS05 Hactiv8

// =======================
// Nama: Muhammad Irfan Zidni
// Kode Peserta : RCTN-KS05-002
// =======================
// Nama: Muhaemin Iskandar
// Kode Peserta : RCTN-KS05-001
// =======================
// Nama: Vika Alpiana
// Kode Peserta : RCTN-KS05-004
