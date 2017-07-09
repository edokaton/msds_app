import React, { Component } from 'react';
import {
	View,
	Text
} from 'react-native';
import {
  List,
  ListItem
} from 'native-base';
import { MainPage } from './config/router.js';

class App extends Component {  
  render() {
    return(
	    	<MainPage />
    );
  }
}

export default App;
