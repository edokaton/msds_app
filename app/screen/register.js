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
  Col
} from 'native-base';
import styles from '../style/msds_style.js';
import { NavigationActions } from 'react-navigation';

export default class Login extends Component {
  render() {
    const { navigate } = this.props.navigation;

    const resetAction = NavigationActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({ routeName: 'LoginScreen'})
      ]
    })

    return(
      <Container>
          <Header style={{backgroundColor: '#009688'}}>
            <Left>
              <TouchableHighlight>
                <View transparent>
                  <Icon name='menu' />
                </View>
              </TouchableHighlight>
            </Left>
            <Body>
              <Title style={{paddingLeft: 25}}>Register</Title>
            </Body>
          </Header>
          <Content style={{backgroundColor: '#00BFA5'}}>
            <View style={styles.centerColumn}>
                <View style={styles.centerColumn}>
                    <Text style={styles.TitleLogo}>Register</Text>
                </View>
                <View style={{width: '90%'}}>
                  <Item regular style={{backgroundColor: '#fff', marginTop: 50, marginBottom: 10}}>
                    <Input placeholder='Username' />
                  </Item>
                  
                  <Item regular style={{backgroundColor: '#fff', marginBottom: 10}}>
                    <Input placeholder='Password' />
                  </Item>

                  <Item regular style={{backgroundColor: '#fff', marginBottom: 30}}>
                    <Input placeholder='Confirm Password' />
                  </Item>

                  <Button block>
                    <Text style={{ color: '#fff' }}>Register</Text>
                  </Button>

                  <TouchableHighlight
                    onPress={() => this.props.navigation.dispatch(resetAction)}
                    style={{ padding: 20 }}
                  >
                    <Text style={{ textAlign: 'center' }}>Sudah punya akun?</Text>
                  </TouchableHighlight>
                </View>
            </View>            
          </Content>
        </Container>
    )
  }
}
