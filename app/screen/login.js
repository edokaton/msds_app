import React, { Component } from 'react';
import {
	AppRegistry,
  StyleSheet,
  Alert,
  Text,
  View,
  Image,
  TouchableHighlight,
  DrawerLayoutAndroid,
  KeyboardAvoidingView
} from 'react-native';
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Left,
  Right,
  Body,
  Icon,
  Item,
  Label,
  InputGroup,
  Input,
  Grid,
  List,
  ListItem,
  Col
} from 'native-base';
import styles from '../style/msds_style.js';
import { NavigationActions } from 'react-navigation';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import * as firebase from "firebase";
import DismissKeyboard from "dismissKeyboard";

export default class Login extends Component {

    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: "",
            response: ""
        };

        this.login = this.login.bind(this);
    }

    async login() {

        DismissKeyboard();

        try {
            await firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password);

            this.setState({
                response: "Logged In!"
            });

            setTimeout(() => {
                this.props.navigator.push({
                    name: "Home"
                })
            }, 1500);

        } catch (error) {
            this.setState({
                response: error.toString()
            })
        }

    }

  render() {
    const { navigate } = this.props.navigation;

    const resetToHome = NavigationActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({ routeName: 'HomeScreen'})
      ]
    })

    const resetToRegister = NavigationActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({ routeName: 'RegisterScreen'})
      ]
    })

    openDrawerTrigger = () => {
      this.refs['mainDrawer'].openDrawer()
    }

    var MainDrawer = (
      <View style={{flex: 1, backgroundColor: '#009688'}}>
        <Text style={{marginTop: 50, marginBottom: 50, fontSize: 60, fontWeight: 'bold', textAlign: 'center', color: '#fff'}}>MSDS</Text>

        <View style={{backgroundColor: '#fff', width: '100%', height: '100%'}}>
          <List>
            <ListItem
              onPress={() => this.props.navigation.dispatch(resetToHome)}
            >
              <Text>Home</Text>
            </ListItem>
            <ListItem
              onPress={() => this.props.navigation.dispatch(resetToRegister)}
            >
              <Text>Register</Text>
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
          <Container>
              <Header style={{backgroundColor: '#009688'}}>
                <Left>
                  <TouchableHighlight
                    onPress={() => openDrawerTrigger()}
                    style={{paddingTop:20, paddingBottom:20, paddingLeft: 10, paddingRight: 10}}
                  >
                    <View transparent>
                      <Icon name='menu' />
                    </View>
                  </TouchableHighlight>
                </Left>
                <Body>
                  <Title style={{paddingLeft: 25}}>Login</Title>
                </Body>
              </Header>
              <Content style={{backgroundColor: '#00BFA5'}}>
                <KeyboardAvoidingView behavior="padding" style={styles.centerColumn}>
                    <View style={styles.centerColumn}>
                        <Text style={styles.TitleLogo}>MSDS</Text>
                    </View>
                    <View style={{width: '90%'}}>
                      <Item regular style={{backgroundColor: '#fff', marginTop: 50, marginBottom: 10}}>
                        <Entypo active name='email' size={25} style={{marginLeft: 10, color: '#000'}} />
                        <Input
                            placeholder='Email'
                            keyboardType='email-address'
                            onChangeText={(email) => this.setState({email})}
                            autoCapitalize="none"
                        />
                      </Item>

                      <Item regular style={{backgroundColor: '#fff', marginBottom: 30}}>
                        <MaterialCommunityIcons active name='account-key' size={25} style={{marginLeft: 10, color: '#000'}} />
                        <Input
                            placeholder='Password'
                            secureTextEntry={true}
                            onChangeText={(password) => this.setState({password})}
                            autoCapitalize="none"
                        />
                      </Item>

                      <Button
                        block
                        onPress={this.login}
                      >
                        <Text style={{ color: '#fff' }}>Login</Text>
                      </Button>

                      <TouchableHighlight
                        onPress={() => this.props.navigation.dispatch(resetToRegister)}
                        style={{ padding: 20 }}
                      >
                        <Text style={{ textAlign: 'center' }}>Belum Daftar?</Text>
                      </TouchableHighlight>
                    </View>
                </KeyboardAvoidingView>
              </Content>
          </Container>
      </DrawerLayoutAndroid>
    )
  }
}
