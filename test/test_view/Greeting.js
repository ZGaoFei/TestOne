import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

class Greeting extends Component {
  render() {
    return(
      <View style={{aliginItems:'center'}}>
      <Text>Hello {this.props.name}</Text>
      </View>
    );
  }
}

export default class LotsOfGreetings extends Component {
  render(){
    return(
      <View style={{aliginItems:'center'}}>
      <Greeting name='zhao' />
      <Greeting name='wang' />
      <Greeting name='li' />
      </View>
    );
  }
}
