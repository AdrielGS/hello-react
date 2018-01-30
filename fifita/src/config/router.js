import React from 'react';
import Demo from '../screens/demo';
import Fifita from '../screens/fifita';

import { StackNavigator, TabNavigator } from 'react-navigation';

export const DemoStack = StackNavigator({
  Demo: {
    screen: Demo,
    navigationOptions: ({ navigation }) => ({
      title: 'Demo'
    })
  }
});

export const FifitaStack = StackNavigator({
  Fifita: {
    screen: Fifita,
    navigationOptions: ({ navigation }) => ({
      title: 'Fifita'
    })
  }
});

export const Screens = TabNavigator({
	Demo: {
		screen: DemoStack,
		navigationOptions: {
			tabBarLabel: 'Demo'
		}
	},
  Fifita: {
    screen: FifitaStack,
    navigationOptions: {
      tabBarLabel: 'Fifita'
    }
  }
});