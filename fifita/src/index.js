import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Boxes from './boxes';
import Button from './button';

export default class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      names: ['Adriel', 'Icaro', 'Luis'],
      players: [false, false, false],
      count: 0
    };
  }

  shuffle = () => {
    let index = Math.floor(Math.random() * 3);
    let players = [true, true, true];
    players[index] = false;
    this.setState({
      players: players,
      count: this.state.count+1
    });
  };

  reset = () => {
    this.setState({
      players: [false, false, false],
      count: 0
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <View style = {styles.top}>
          {this.state.players.map((player, index) => {
              return <Boxes key = {index} winner = {player} name = {this.state.names[index]}/>   
          })}
        </View>
        <Button
          onPress = {this.shuffle} 
          label = "LET'S PLAY !!" 
          subLabel = {this.state.count}
        />
        <Button
          onPress = {this.reset} 
          label = "RESET"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10
  },
  top: {
    flex: 0.2,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 20
  }
});
