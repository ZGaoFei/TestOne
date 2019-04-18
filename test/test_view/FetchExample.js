import React from 'react';
import { Alert, FlatList, ActivityIndicator, Text, View } from 'react-native';

export default class FetchExample extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isLoading: true };
    }

    componentDidMount() {
        return fetch('https://facebook.github.io/react-native/movies.json')
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    isLoading: false,
                    dataSource: responseJson.movies,
                }, function () {

                })
            })
            .catch((error) => { console.error(error) });
    }

    render() {
        if (this.state.isLoading) {
            return (
                <View style={{ flex: 1, padding: 20 }}>
                    <ActivityIndicator />
                </View>
            );
        }

        return (
            <View style={{ flex: 1, padding: 20 }}>
                <FlatList
                    data={this.state.dataSource}
                    renderItem={({ item }) => <Text onPress={this.onPressButton}>{item.title}, {item.releaseYear}</Text>}
                    keyExtractor={(item, index) => item.id}
                />
            </View>
        );
    }

    onPressButton(){
        Alert.alert('press button');
    }
}