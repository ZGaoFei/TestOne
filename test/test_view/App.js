/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Button, StyleSheet, ScrollView, View } from 'react-native';
import { createAppContainer, createStackNavigator, createNavigator } from 'react-navigation';
import FadeInView from './FadeInView';



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
        <Button color='blue' title='ImageLoad' onPress={() => { navigation.navigate('ImageLoad') }} />
        <Button color='red' title='FadeInView' onPress={() => { navigation.navigate('FadeInView') }} />
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

export const AppStackNavigator = createStackNavigator(
  {
    Page3: {
      screen: App
  },
    FadeInView: {
      screen: FadeInView
    }
  }, {
    headerMode:'none'
  }
)

export default createAppContainer(AppStackNavigator);
