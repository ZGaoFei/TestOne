import React, {Component} from 'react';
import {AppRegistry, View} from 'react-native';

export default class JustifyContentBasics extends Component {
    render() {
        return(
            <View style={{flex:1, flexDirection:'row', justifyContent:'space-around'}}>
                <View style={{width:50, height:50, backgroundColor:'powderblue'}}/>
                <View style={{width:100, height:100, backgroundColor:'skyblue'}}/>
                <View style={{width:150, height:150, backgroundColor:'steelblue'}}/>
            </View>
        );
    }
}