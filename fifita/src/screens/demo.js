import React, { Component } from 'react'
import {
  AppRegistry,
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
} from 'react-native'

export default class Demo extends Component {
  constructor(props) {
    super(props)
    this.state = { count: 0 }
  }

  onPress = () => {
    this.setState({
      count: this.state.count+1
    })
  }

 render() {
   return (
    <View style={styles.window}>
     <View style={styles.container}>
       <TouchableOpacity
         style={styles.button}
         onPress={this.onPress}
       >
         <Text> Touch Here </Text>
       </TouchableOpacity>
       <View style={[styles.countContainer]}>
         <Text style={[styles.countText]}>
            { this.state.count !== 0 ? this.state.count: 0}
          </Text>
        </View>
      </View>
    </View>
    )
  }
}

const styles = StyleSheet.create({
  window: {
    flex: 1,
    borderColor: 'blue',
    borderWidth: 20
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
    borderColor: 'green',
    borderWidth: 20
    
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10
  },
  countContainer: {
    alignItems: 'center',
    padding: 10
  },
  countText: {
    color: '#FF00FF'
  }
})
