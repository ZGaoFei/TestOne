/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Button, StyleSheet, ScrollView, View } from 'react-native';
import { createAppContainer, createStackNavigator } from 'react-navigation';
import AlignItemsBasics from './test/test_view/AlignItemsBasics';
import Blink from './test/test_view/Blink';
import ButtonBasics from './test/test_view/ButtonBasics';
import FetchExample from './test/test_view/FetchExample';
import FixedDimensionsBasics from './test/test_view/FixedDimensionsBasics';
import FlatListBasics from './test/test_view/FlatListBasics';
import FlexDirectionBasics from './test/test_view/FlexDirectionBasics';
import Greeting from './test/test_view/Greeting';
import ImageTest from './test/test_view/ImageTest';
import JustifyContentBasics from './test/test_view/JustifyContentBasics';
import LotsOfStyle from './test/test_view/LotsOfStyle';
import PizzaTranslator from './test/test_view/PizzaTranslator';
import SampleAppMovies from './test/test_view/SampleAppMovies';
import ScrollViewTest from './test/test_view/ScrollViewTest';
import SectionListBasics from './test/test_view/SectionListBasics';
import Touchables from './test/test_view/Touchables';


type Props = {};
export class App extends Component<Props> {
  render() {
    const { navigation } = this.props;

    return (
      <ScrollView style={styles.container}>
        <Button color='blue' onPress={() => { navigation.navigate('AlignItemsBasics') }} title='Align items basics' />
        <Button color='red' title='Blink' onPress={() => { navigation.navigate('Blink') }} />
        <Button color='blue' title='ButtonBasics' onPress={() => { navigation.navigate('ButtonBasics') }} />
        <Button color='red' title='FetchExample' onPress={() => { navigation.navigate('FetchExample') }} />
        <Button color='blue' title='FixedDimensionsBasics' onPress={() => { navigation.navigate('FixedDimensionsBasics') }} />
        <Button color='red' title='FlatListBasics' onPress={() => { navigation.navigate('FlatListBasics') }} />
        <Button color='blue' title='FlexDirectionBasics' onPress={() => { navigation.navigate('FlexDirectionBasics') }} />
        <Button color='red' title='Greeting' onPress={() => { navigation.navigate('Greeting') }} />
        <Button color='blue' title='ImageTest' onPress={() => { navigation.navigate('ImageTest') }} />
        <Button color='red' title='JustifyContentBasics' onPress={() => { navigation.navigate('JustifyContentBasics') }} />
        <Button color='blue' title='LotsOfStyle' onPress={() => { navigation.navigate('LotsOfStyle') }} />
        <Button color='red' title='PizzaTranslator' onPress={() => { navigation.navigate('PizzaTranslator') }} />
        <Button color='blue' title='SampleAppMovies' onPress={() => { navigation.navigate('SampleAppMovies') }} />
        <Button color='red' title='ScrollViewTest' onPress={() => { navigation.navigate('ScrollViewTest') }} />
        <Button color='blue' title='SectionListBasics' onPress={() => { navigation.navigate('SectionListBasics') }} />
        <Button color='red' title='Touchables' onPress={() => { navigation.navigate('Touchables') }} />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  btone: {
    height: 70,
    fontSize: 18,
  },
  bttwo: {
    height: 50,
    fontSize: 18,
  }
});

export const AppPage = createStackNavigator({
  App: {
    screen: App
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
});

export default HomeScreen = createAppContainer(AppPage);
