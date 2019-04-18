import { View, Text } from 'react-native';
import { StackNavigator } from 'react-navigation';
import React from 'react';
class NavigatorTest extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Home Screen</Text>
            </View>
        )
    }
}

export default  MyApp = StackNavigator({
    MyTab:{
        screen:NavigatorTest,
    },
},{

});