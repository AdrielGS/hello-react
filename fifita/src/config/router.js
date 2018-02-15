import React from 'react';
import Demo from '../screens/demo';
import Fifita from '../screens/fifita';

import { StackNavigator, TabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

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
			tabBarLabel: 'Demo',
      tabBarIcon: ({ tintColor }) => <Icon name='ios-disc' size={30} color={tintColor}/>
		}
	},
  Fifita: {
    screen: FifitaStack,
    navigationOptions: {
      tabBarLabel: 'Fifita',
      tabBarIcon: ({ tintColor }) => <Icon name='ios-game-controller-b' size={30} color={tintColor}/>
    }
  }
});