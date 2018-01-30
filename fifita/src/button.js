import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';

const Button = ({onPress, label, subLabel}) => {
  
  if(subLabel >= 0){

    return (
      <View style = {styles.container}>
        <TouchableOpacity style = {styles.button} onPress = {onPress}>
          <Text style = {styles.label}> {label} </Text>
          <Text style = {styles.label}> {subLabel} </Text>
        </TouchableOpacity>      
      </View>
    );

  } else {

    return (
      <View style = {styles.container}>
        <TouchableOpacity style = {styles.button} onPress = {onPress}>
          <Text style = {styles.label}> {label} </Text>
        </TouchableOpacity>      
      </View>
    );

  }

}

const styles = StyleSheet.create({
  container: {
    flex: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  },
  button: {
    backgroundColor: 'black',
    paddingHorizontal: 50,
    paddingVertical: 30,
    alignItems: 'center'
  },
  label: {
    color: 'white'
  }
});


export default Button;