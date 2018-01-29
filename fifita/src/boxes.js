import React from 'react';
import { StyleSheet, View } from 'react-native';

const Boxes = ({winner}) => {
  return <View style = {[styles.boxes, winner ? styles.winner: '' ]} />;

}

const styles = StyleSheet.create({

	boxes: {
		width: 70,
		height: 70,  
		backgroundColor: 'gray'
	},
	winner: {
		backgroundColor: '#01C30C'    
}

});

export default Boxes;