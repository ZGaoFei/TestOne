import {createAppContainer, createStackNavigator} from 'react-navigation';
import HomeScreen from '../test_navigation/HomeScreen';
import Page1 from '../test_navigation/Page1';
import Page2 from '../test_navigation/Page2';

export const AppStackNavigator = createStackNavigator({
    HomeScreen: {
        screen: HomeScreen
    },
    Page1: {
        screen: Page1
    },
    Page2: {
        screen: Page2
    }
})

const App = createAppContainer(AppStackNavigator);

export default App;