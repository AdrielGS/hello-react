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
		backgroundColor: 'gray',
    padding: 20,
  },
  winner: {
    backgroundColor: '#01C30C'    
  },
  name: {
    color: 'white'
  }

});

export default Boxes;