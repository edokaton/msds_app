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
      <View style={{flex: 1, backgroundColor: '#009688'}}>
        <Text style={{marginTop: 50, marginBottom: 50, fontSize: 60, fontWeight: 'bold', textAlign: 'center', color: '#fff'}}>MSDS</Text>

        <View style={{backgroundColor: '#fff', width: '100%', height: '100%'}}>
          
        </View>
      </View>
    );
    
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
