import React from 'react';
import { View, Text } from 'react-native';
import { StackNavigator } from 'react-navigation';

class NavigationExample extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Home Screen</Text>
            </View>
        );
    }
}

class DetailsScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Details Screen</Text>
            </View>
        );
    }
}

export default App = StackNavigator({ //这里导出的需要注册的
    Home: {
        screen: NavigationExample,
    },
    Details: {
        screen: DetailsScreen,
    }
}, {
        initialRouteName: 'Home',
        navigationOptions: ({
            headerStyle: {
                backgroundColor: 'white',
            },
            headerTitleStyle: {
                color: 'white',
                fontSize: 20,
                flex: 1,
                textAlign: 'center',
                alignSelf: 'center',
            },
            headerTintColor: 'white',

        }),
        mode: 'card',
        headerMode: 'screen',

    })