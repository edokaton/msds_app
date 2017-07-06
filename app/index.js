import React, { Component } from 'react';
import {
	DrawerLayoutAndroid,
	View,
	Text
} from 'react-native';
import {
  List,
  ListItem
} from 'native-base';
// import { MainDrawer } from './screen/maindrawer.js';
import { MainPage } from './config/router.js';
import { withNavigation } from 'react-navigation';

class App extends Component {  
  render() {
    const LoginForm = ({ to, navigation }) => (
        <ListItem
          title={`navigate to ${to}`}
          onPress={() => navigation.navigate(to)}
        >
            <Text>Login</Text>
        </ListItem>
    );

    const RouteToLoginScreen = withNavigation(LoginForm);

  	openDrawerTrigger = () => {
      this.refs['mainDrawer'].openDrawer()
    }

  	var MainDrawer = (
      <View style={{flex: 1, backgroundColor: '#009688'}}>
        <Text style={{marginTop: 50, marginBottom: 50, fontSize: 60, fontWeight: 'bold', textAlign: 'center', color: '#fff'}}>MSDS</Text>

        <View style={{backgroundColor: '#fff', width: '100%', height: '100%'}}>
          <List>
            { LoginForm }
            <ListItem
              onPress={() => withNavigation('LoginScreen')}
            >
              <Text>Login</Text>
            </ListItem>
            <ListItem>
              <Text>Ali Connors</Text>
            </ListItem>
            <ListItem>
              <Text>Bradley Horowitz</Text>
            </ListItem>
          </List>
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
