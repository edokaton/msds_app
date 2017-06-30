import React, { Component } from 'react';
import {
  ActivityIndicator,
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView
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
  H1
} from 'native-base';
import axios from 'axios';
import styles from '../style/compare_style.js';
import { StackNavigator } from 'react-navigation';

export default class CompareMsds extends Component {

  constructor(props){
    super(props);

    this.state = {
      isLoading: true,
      msdsarray : [],
      msdsarraytwo : [],
      firstinput : this.props.navigation.state.params.firstsearch,
      secondinput : this.props.navigation.state.params.secondsearch,
    }
  }

  componentDidMount() {
    axios({
        method: 'get',
        url: 'http://edokaton.tk/api/compare/' + this.state.firstinput + '/' + this.state.secondinput,
        headers: {
          'Accept'        : 'application/json',
          'Authorization' : 'Bearer qDcJtmiSugMC6lplhWJT8a0t8Q3PteWUXKBaMe5iuTtlBHIrHL8cq7Rr4Tiz7httGO5dspblNAqSR7NW1dCVqwcriyKGxerzRR39'
        }
    })
    .then((response) => {
        this.setState({
          isLoading: false,
          msdsarray: response.data.msds,
          msdsarraytwo: response.data.msdstwo
        });
    })
    .catch((error) => {
      console.error(error);
    });
  }

  componentWillUnmount() {
    this.unmounted = true;
  }

  render() {
    const { navigate, goBack } = this.props.navigation;

    if (this.state.isLoading) {
      return (
        <View style={{flex: 1, paddingTop: 20}}>
          <ActivityIndicator />
        </View>
      );
    }

    var firstsearch = this.state.firstinput;
    var secondsearch = this.state.secondinput;

    return (
      <Container>
        <Header style={{backgroundColor: '#009688'}}>
          <Left>
            <View transparent>
              <Icon name='menu' />
            </View>
          </Left>
          <Body>
            <Title>Bandingkan Zat Kimia</Title>
          </Body>
        </Header>
        <Content style={{backgroundColor: '#00BFA5'}}>
          <Grid>
            <Col style={{borderRightWidth: 1, borderRightColor: '#009688', borderStyle: 'solid', height: '100%'}}>
              <Item style={
                {
                  backgroundColor: '#fff',
                  paddingLeft: 10,
                  paddingRight: 10,
                  marginTop: 20,
                  marginLeft: 5,
                  marginRight: 5,
                  marginBottom: 30,
                  borderRadius: 5
                }
              }>
                      <Icon active name='search' />
                      <Input placeholder='Cari Zat Kimia' onChangeText={(firstinput) => this.setState({firstinput})} />
              </Item>

              <View>
                <Button
                  transparent
                  onPress={() => navigate('CompareMsdsScreen', { firstsearch, secondsearch })}
                  style={
                    {
                      backgroundColor:'#009688',
                      borderRadius: 5,
                      width: 150
                    }
                  }
                >
                  <Text style={{color:'#fff', textAlign: 'center', width: '100%'}}>Bandingkan</Text>
                </Button>
              </View>

              <ScrollView>
                  <View>
                    <View style={styles.msds_title}>
                      <H1 style={{textAlign: 'center'}}>{this.state.msdsarray.nama}</H1>
                    </View>

                    <View style={styles.msds_desc}>
                      <Text style={{textAlign: 'justify'}}>{this.state.msdsarray.content}</Text>
                    </View>
                  </View>                  
              </ScrollView>

            </Col>
            <Col>
              <Item style={
                {
                  backgroundColor: '#fff',
                  paddingLeft: 10,
                  paddingRight: 10,
                  marginTop: 20,
                  marginLeft: 5,
                  marginRight: 5,
                  marginBottom: 30,
                  borderRadius: 5
                }
              }>
                      <Icon active name='search' />
                      <Input placeholder='Cari Zat Kimia' onChangeText={(secondinput) => this.setState({secondinput})} />
              </Item>

              <View>
                <Button
                  transparent
                  onPress={() => navigate('CompareMsdsScreen', { firstsearch, secondsearch })}
                  style={
                    {
                      backgroundColor:'#009688',
                      borderRadius: 5,
                      width: 150
                    }
                  }
                >
                  <Text style={{color:'#fff', textAlign: 'center', width: '100%'}}>Bandingkan</Text>
                </Button>
              </View>

              <ScrollView>              
                  <View>
                    <View style={styles.msds_title}>
                      <H1 style={{textAlign: 'center'}}>{this.state.msdsarraytwo.nama}</H1>
                    </View>

                    <View style={styles.msds_desc}>
                      <Text style={{textAlign: 'justify'}}>{this.state.msdsarraytwo.content}</Text>
                    </View>
                  </View>                
              </ScrollView>

            </Col>
          </Grid>
        </Content>
      </Container>
    );
  }
}
