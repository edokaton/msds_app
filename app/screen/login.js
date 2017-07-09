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
        NavigationActions.navigate({ routeName: 'RegisterScreen'})
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
              <Title style={{paddingLeft: 25}}>Login</Title>
            </Body>
          </Header>
          <Content style={{backgroundColor: '#00BFA5'}}>
            <View style={styles.centerColumn}>
                <View style={styles.centerColumn}>
                    <Text style={styles.TitleLogo}>Login</Text>
                </View>
                <View style={{width: '90%'}}>
                  <Item regular style={{backgroundColor: '#fff', marginTop: 50, marginBottom: 10}}>
                    <Input placeholder='Username' />
                  </Item>
                  
                  <Item regular style={{backgroundColor: '#fff', marginBottom: 30}}>
                    <Input placeholder='Password' />
                  </Item>

                  <Button block>
                    <Text style={{ color: '#fff' }}>Login</Text>
                  </Button>

                  <TouchableHighlight
                    onPress={() => this.props.navigation.navigate('RegisterScreen')}
                    style={{ padding: 20 }}
                  >
                    <Text style={{ textAlign: 'center' }}>Belum Daftar?</Text>
                  </TouchableHighlight>
                </View>
            </View>            
          </Content>
        </Container>
    )
  }
}
