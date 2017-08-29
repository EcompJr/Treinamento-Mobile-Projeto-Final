//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet , FlatList, Image, TouchableOpacity, Linking} from 'react-native';
import Router from './../app/router/router.js';

// create a component
class App extends Component {
  render() {
    return (
      <Router/>
    );
  }
}

//make this component available to the app
export default App;
