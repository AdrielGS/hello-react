import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const Boxes = ({winner, name}) => {
  // return <View style = {[styles.boxes, winner ? styles.winner: '' ]} />;

  return (
    <View style = {[styles.boxes, winner ? styles.winner: '' ]} >
      <Text style = {styles.name}> {name} </Text>
    </View>
  )

}

const styles = StyleSheet.create({

	boxes: {
		width: 70,
		height: 70,  
		backgroundColor: 'gray'
	},
	winner: {
		backgroundColor: '#01C30C'    
  },
  name: {
    flex: 1,
    padding: 10,
    top: 15,
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white'
  }

});

export default Boxes;