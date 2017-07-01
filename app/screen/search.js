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

  // const { search } = this.props.navigation.state.params;

  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      msdsarray : [],
      search : this.props.navigation.state.params.search
    }
  }

  componentDidMount() {
    axios({
      method: 'get',
      url: 'http://edokaton.tk/api/msds/' + this.state.search,
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
      console.error(error);
    });
  }

  componentWillUnmount() {
    this.unmounted = true;
  }

  render() {
    const { navigate, goBack } = this.props.navigation;
    // const { search } = this.props.navigation.state.params;

    if (this.state.isLoading) {
      return (
        <View style={{flex: 1, paddingTop: 20}}>
          <ActivityIndicator />
        </View>
      );
    }

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
            <Title>Search Zat Kimia</Title>
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
