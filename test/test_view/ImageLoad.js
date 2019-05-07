import React, { Component } from 'react';
import { Image, View, StyleSheet, AppRegistry } from 'react-native';

export default class ImageLoad extends Component {
	render() {
		return(
			<View style={styles.container}>
				<Image source={require('../image/timo.jpg')} style={{width: 100, height: 100}}/>
				<Image source={{uri: 'ic_launcher'}} style={{width: 40, height: 40}} />
				<Image source={{uri: 'https://facebook.github.io/react/logo-og.png'}} 
				style={{width: 200, height: 200}} />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex:1,
		justifyContent: 'center'
	}
})
// 没有这句话时报错，当运行起来后，注释这句话又没问题了？？？
// AppRegistry.registerComponent('ImageLoad', () => ImageLoad);