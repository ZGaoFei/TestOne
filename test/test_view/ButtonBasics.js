import React, { Component } from 'react';
import { AppRegistry, Alert, Button, StyleSheet, View } from 'react-native';

export default class ButtonBasics extends Component {
    onPressButton() {
        Alert.alert('You tapped the button!');
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.buttonContainer}>
                    <Button
                        onPress={this.onPressButton}
                        title="press me"
                    />
                </View>
                <View style={styles.buttonContainer}>
                    <Button
                        onPress={this.onPressButton}
                        title="press me"
                        color="#841584"
                    />
                </View>
                <View style={styles.alternativeLayoutButtonContainer}>
                    <Button
                        onPress={this.onPressButton}
                        title="this look is great"
                    />
                    <Button
                        onPress={this.onPressButton}
                        title={'OK!'}
                        color="#841584" />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    buttonContainer: {
        margin: 20
    },
    alternativeLayoutButtonContainer: {
        margin: 20,
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
})

AppRegistry.registerComponent('AwesomeProject', () => ButtonBasics);