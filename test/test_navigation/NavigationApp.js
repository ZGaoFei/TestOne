import { createAppContainer, createStackNavigator, createNavigator, createNavigationContainer } from 'react-navigation';
import HomeScreen from '../test_navigation/HomeScreen';
import Page1 from '../test_navigation/Page1';
import Page2 from '../test_navigation/Page2';
import Page3 from '../test_view/App';

import AlignItemsBasics from '../test_view/AlignItemsBasics';
import Blink from '../test_view/Blink';
import ButtonBasics from '../test_view/ButtonBasics';
import FetchExample from '../test_view/FetchExample';
import FixedDimensionsBasics from '../test_view/FixedDimensionsBasics';
import FlatListBasics from '../test_view/FlatListBasics';
import FlexDirectionBasics from '../test_view/FlexDirectionBasics';
import Greeting from '../test_view/Greeting';
import ImageTest from '../test_view/ImageTest';
import JustifyContentBasics from '../test_view/JustifyContentBasics';
import LotsOfStyle from '../test_view/LotsOfStyle';
import PizzaTranslator from '../test_view/PizzaTranslator';
import SampleAppMovies from '../test_view/SampleAppMovies';
import ScrollViewTest from '../test_view/ScrollViewTest';
import SectionListBasics from '../test_view/SectionListBasics';
import Touchables from '../test_view/Touchables';
import ImageLoad from '../test_view/ImageLoad';

export const AppStackNavigator = createStackNavigator(
    {
        HomeScreen: {
            screen: HomeScreen
        },
        Page1: {
            screen: Page1
        },
        Page2: {
            screen: Page2
        },
        Page3: {
            screen: Page3
        },

        AlignItemsBasics: {
            screen: AlignItemsBasics
        },
        Blink: {
            screen: Blink
        },
        ButtonBasics: {
            screen: ButtonBasics
        },
        FetchExample: {
            screen: FetchExample
        },
        FixedDimensionsBasics: {
            screen: FixedDimensionsBasics
        },
        FlatListBasics: {
            screen: FlatListBasics
        },
        FlexDirectionBasics: {
            screen: FlexDirectionBasics
        },
        Greeting: {
            screen: Greeting
        },
        ImageTest: {
            screen: ImageTest
        },
        JustifyContentBasics: {
            screen: JustifyContentBasics
        },
        LotsOfStyle: {
            screen: LotsOfStyle
        },
        PizzaTranslator: {
            screen: PizzaTranslator
        },
        SampleAppMovies: {
            screen: SampleAppMovies
        },
        ScrollViewTest: {
            screen: ScrollViewTest
        },
        SectionListBasics: {
            screen: SectionListBasics
        },
        Touchables: {
            screen: Touchables
        },
        ImageLoad: {
            screen: ImageLoad
        },
    },
    {
        headerMode: 'none'
    }
)

const NavigationApp = createAppContainer(AppStackNavigator);

export default NavigationApp;