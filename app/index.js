import React, { Component } from 'react';
import {
	DrawerLayoutAndroid,
	View,
	Text
} from 'react-native';
// import { MainDrawer } from './screen/maindrawer.js';
import { MainPage } from './config/router.js';

class App extends Component {
  render() {
  	
  	openDrawerTrigger = () => {
      this.refs['mainDrawer'].openDrawer()
    }

  	var MainDrawer = (
      <View style={{flex: 1, backgroundColor: '#fff'}}>
        <Text style={{margin: 10, fontSize: 15, textAlign: 'left'}}>I'm in the Drawer!</Text>
      </View>
    );
    // return <Root />;
    return(
	    <DrawerLayoutAndroid
			drawerWidth={300}
			drawerPosition={DrawerLayoutAndroid.positions.Left}
	    	ref={'mainDrawer'}
	    	renderNavigationView={() => MainDrawer}>
	    		<MainPage />
	    </DrawerLayoutAndroid>
    );
  }
}

export default App;
