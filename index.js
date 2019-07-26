/**
 * @format
 */

// Import a library to help create a component
import React from 'react';
import { AppRegistry, View }from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/Albums/AlbumList';


// Create a component
const App = () =>
  <View>
    <Header headerText={'Albums'}/>
    <AlbumList />
  </View>


// Render it to the device
AppRegistry.registerComponent('albums', () => App)


// NOTES //

//react vs react native - each have distinct jobs
  //react lib:
    // knows how a component should behave
    // knows how to take a bunch of components and make them work together
  //react native lib:
    // Knows how to take the output from a components and place it on the screen
    // Provides default core components (img, txt *primitive?)