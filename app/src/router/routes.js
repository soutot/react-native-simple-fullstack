import React from 'react';
import { View, Text } from 'react-native';
import { StackNavigator } from 'react-navigation';

import Home from '../components/Home';
import Detail from '../components/Detail';
import Add from '../components/Add';
import Edit from '../components/Edit';

export default StackNavigator(
  {
    Home: {
      screen: Home,
    },
    Detail: {
      screen: Detail,
    },
    Add: {
      screen: Add,
    },
    Edit: {
      screen: Edit,
    },
  },
  {
    initialRouteName: 'Home',
  }
);
