import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Boxes from './boxes'

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
        <View style = {styles.outerContainer}>
          {this.state.players.map((player, index) => {
              return <Boxes key = {index} winner = {player}/>   
          })}
        </View>
        <View style = {styles.container}>
          <TouchableOpacity style = {styles.button} onPress = {this.shuffle}>
            <Text style = {styles.label}> LET'S PLAY !!! </Text>
            <Text style = {styles.label}> {this.state.count} </Text>
          </TouchableOpacity>      
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 300,
  },
  outerContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 50,
    marginHorizontal: 20
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
