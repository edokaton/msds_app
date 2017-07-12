import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Alert,
  Text,
  View,
  Image,
  TouchableHighlight,
  DrawerLayoutAndroid
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
  Col,
  List,
  ListItem
} from 'native-base';
import styles from '../../style/msds_style.js';
// import MsdsList from './app/daftar_msds.js';
import { StackNavigator, NavigationActions } from 'react-navigation';
import Database from "../firebase/database";
import DismissKeyboard from "dismissKeyboard";


class MSDS extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text : '',
      uid: "",
      mobile: "",
      mobileForm: ""
    }

    this.logout = this.logout.bind(this);
    this.saveMobile = this.saveMobile.bind(this);
  }

  async logout() {

    try {

      await firebase.auth().signOut();

      this.props.navigator.push({
        name: "Login"
      })

    } catch (error) {
      console.log(error);
    }

  }

  async componentDidMount() {

    try {

            // Get User Credentials
            let user = await firebase.auth().currentUser;
            console.log(user);

            // Listen for Mobile Changes
            Database.listenUserMobile(user.uid, (mobileNumber) => {
              this.setState({
                mobile: mobileNumber,
                mobileForm: mobileNumber
              });
            });

            this.setState({
              uid: user.uid
            });

          } catch (error) {
            console.log(error);
          }

        }

        saveMobile() {

        // Set Mobile
        if (this.state.uid && this.state.mobileForm) {
          Database.setUserMobile(this.state.uid, this.state.mobileForm);
          DismissKeyboard();
        }

      }

  render() {
    const { navigate } = this.props.navigation;
    var search = this.state.text;
    var firstsearch = "";
    var secondsearch = "";

    openDrawerTrigger = () => {
      this.refs['mainDrawer'].openDrawer()
    }

    const resetToLogin = NavigationActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({ routeName: 'LoginScreen'})
      ]
    })

    const resetToRegister = NavigationActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({ routeName: 'RegisterScreen'})
      ]
    })

    var MainDrawer = (
      <View style={{flex: 1, backgroundColor: '#009688'}}>
        <Text style={{marginTop: 50, marginBottom: 50, fontSize: 60, fontWeight: 'bold', textAlign: 'center', color: '#fff'}}>MSDS</Text>

        <View style={{backgroundColor: '#fff', width: '100%', height: '100%'}}>
          <List>
            <ListItem
              onPress={() => this.props.navigation.dispatch(resetToLogin)}
            >
              <Text>Logout</Text>
            </ListItem>
            {/*<ListItem
              onPress={() => this.props.navigation.dispatch(resetToRegister)}
            >
              <Text>Register</Text>
            </ListItem>*/}
          </List>
        </View>
      </View>
    );

    return (
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
                <Title style={{paddingLeft: 25}}>Home</Title>
              </Body>
            </Header>
            <Content style={{backgroundColor: '#00BFA5'}}>
              <View>
                <View style={styles.search}>
                  <Content>
                    <View style={styles.centerColumn}>
                      <Text style={styles.TitleLogo}>MSDS</Text>

                      <Item style={
                        {
                          backgroundColor: '#fff',
                          paddingLeft: 10,
                          paddingRight: 10,
                          marginBottom: 30,
                          borderRadius: 5
                        }
                      }>
                        <Icon active name='search' />
                        <Input placeholder='Cari Zat Kimia' onChangeText={(text) => this.setState({text})} />
                      </Item>

                      <View>
                        <Button
                          transparent
                          onPress={() => navigate('SearchScreen', { search })}
                          style={
                            {
                              backgroundColor:'#009688',
                              borderRadius: 5,
                              width: 150
                            }
                          }
                        >
                          <Text style={{color:'#fff', textAlign: 'center', width: '100%'}}>Cari</Text>
                        </Button>
                      </View>
                    </View>
                  </Content>
                </View>
                <View style={styles.inlinerview}>
                  <Content>
                    <Grid>
                      <Col style={{paddingLeft: 10, paddingRight: 5}}>
                        <TouchableHighlight onPress={() => navigate('MsdsListScreen')}>
                          <View style={styles.homeMenuWrapper}>
                            <View style={styles.menuInnerWrapper}>
                              <Image
                                style={styles.btnImage}
                                source={require('../img/list.png')}
                              />
                              <Button
                                transparent
                                block
                                onPress={() => navigate('MsdsListScreen')}
                                style={{backgroundColor:'#009688'}}
                              >
                                <Text style={{color:'#ffffff'}}>Daftar Zat Kimia</Text>
                              </Button>
                            </View>
                          </View>
                        </TouchableHighlight>
                      </Col>
                      <Col style={{paddingLeft: 5, paddingRight: 10}}>
                        <TouchableHighlight onPress={() => navigate('CompareMsdsScreen', { firstsearch, secondsearch})}>
                          <View style={styles.homeMenuWrapper}>
                            <View style={styles.menuInnerWrapper}>
                              <Image
                                style={styles.btnImage}
                                source={require('../img/compare.png')}
                              />
                              <Button
                                transparent
                                block
                                onPress={() => navigate('CompareMsdsScreen', { firstsearch, secondsearch})}
                                style={{backgroundColor:'#009688'}}
                              >
                                <Text style={{color:'#ffffff', fontSize: 14}}>Bandingkan MSDS</Text>
                              </Button>
                            </View>
                          </View>
                        </TouchableHighlight>
                      </Col>
                    </Grid>
                  </Content>
                </View>

              </View>
            </Content>
          </Container>
      </DrawerLayoutAndroid>
    );
  }
}

export default MSDS;
