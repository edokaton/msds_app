import React, { Component } from 'react';
import {
  ActivityIndicator,
  AppRegistry,
  StyleSheet,
  Alert,
  Button,
  Text,
  View,
  ListView,
  TouchableHighlight
} from 'react-native';
import {
  Container,
  Header,
  Title,
  Content,
  Left,
  Body,
  List,
  ListItem
} from 'native-base';
import Icon from 'react-native-vector-icons/Entypo';
import styles from '../style/daftarmsds_style.js';
import axios from 'axios';
import { StackNavigator } from 'react-navigation';

class DaftarMsds extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      msdsarray : []
    }
  }

  componentDidMount() {
    axios({
      method: 'get',
      url: 'http://edokaton.tk/api/msds',
      headers: {
        'Accept'        : 'application/json',
        'Authorization' : 'Bearer qDcJtmiSugMC6lplhWJT8a0t8Q3PteWUXKBaMe5iuTtlBHIrHL8cq7Rr4Tiz7httGO5dspblNAqSR7NW1dCVqwcriyKGxerzRR39'
      }
    })
    .then((response) => {
        this.setState({
            isLoading: false,
            msdsarray: response.data.msds
        });
    })
    .catch((error) => {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        // http.ClientRequest in node.js
        console.log(error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log('Error', error.message);
      }
      console.log(error.config);
    });

  }

  componentWillUnmount() {
      this.unmounted = true;
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View style={{flex: 1, paddingTop: 20}}>
          <ActivityIndicator />
        </View>
      );
    }

    const { navigate, goBack } = this.props.navigation;

    return (
      <Container>
        <Header style={{backgroundColor: '#009688'}}>
          <Left>
            <TouchableHighlight onPress={() => goBack()}>
              <View transparent>
                <Icon name='chevron-left' size={30} />
              </View>
            </TouchableHighlight>
          </Left>
          <Body>
            <Title>Daftar Zat Kimia</Title>
          </Body>
        </Header>
        <Content>
          <List>
            {/*<ListItem itemDivider>
              <Text>A</Text>
            </ListItem>*/}
            {this.state.msdsarray.map((msds, key) => {
               return (
                  <ListItem
                    key={key}
                    onPress={() => navigate('DetailMsdsScreen', { ...msds })}
                  >
                    <Text>{msds.nama}</Text>
                  </ListItem>
                )
            })}
          </List>
        </Content>
      </Container>
    );
  }
}

export default DaftarMsds;
