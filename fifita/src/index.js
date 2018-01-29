import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Boxes from './boxes';
import Button from './button';

export default class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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

  render() {
    return (
      <View>
        <View style = {styles.container}>
          {this.state.players.map((player, index) => {
              return <Boxes key = {index} winner = {player}/>   
          })}
        </View>
        <Button 
          onPress = {this.shuffle} 
          label = "LET'S PLAY !!" 
          count = {this.state.count}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 50,
    marginHorizontal: 20
  }
});
