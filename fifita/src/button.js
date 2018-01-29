import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';

const Button = ({onPress, label, count}) => {
	
	return (
    <View style = {styles.container}>
  	  <TouchableOpacity style = {styles.button} onPress = {onPress}>
  	    <Text style = {styles.label}> {label} </Text>
  	    <Text style = {styles.label}> {count} </Text>
  	  </TouchableOpacity>      
  	</View>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 300,
  },
  button: {
    backgroundColor: 'black',
    padding: 50,
    alignItems: 'center'
  },
  label: {
    color: 'white'
  }
});


export default Button;