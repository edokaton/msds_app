import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableHighlight,
  ActivityIndicator
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
  Item,
  Label,
  InputGroup,
  Input,
  Grid,
  Col,
  H1
} from 'native-base';
import Icon from 'react-native-vector-icons/Entypo';
import axios from 'axios';
import styles from '../style/detail_msds_style.js';

export default class DetailMsds extends Component {
  constructor(props){
    super(props);

    this.state = {
      isLoading: true,
      konten : [],
      zat : this.props.navigation.state.params.nama
    }
  }

  componentDidMount() {
    axios({
      method: 'get',
      url: 'http://edokaton.tk/api/detail/' + this.state.zat,
      headers: {
        'Accept'        : 'application/json',
        'Authorization' : 'Bearer qDcJtmiSugMC6lplhWJT8a0t8Q3PteWUXKBaMe5iuTtlBHIrHL8cq7Rr4Tiz7httGO5dspblNAqSR7NW1dCVqwcriyKGxerzRR39'
      }
    })
    .then((response) => {
      this.setState({
        isLoading: false,
        konten : JSON.parse(response.data.msds)
      })
    })
    .catch((error) => {
      console.error(error);
    });
  }

  componentWillUnmount() {
    this.unmounted = true;
  }

  render() {
    /*{ console.log(this.state.konten); }*/
    const { goBack } = this.props.navigation;
    const { id, nama, content} = this.props.navigation.state.params;
    console.log(this.state.konten);

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
            <Title>Data Zat</Title>
          </Body>
        </Header>
        <Content>
          {/* <Text>halaman detail</Text> */}
          <ScrollView>
            <View style={styles.button_wrapper}>
              <Button
                transparent
                style={
                  {
                    backgroundColor:'#009688',
                    borderRadius: 5,
                    marginLeft: 5,
                    marginRight: 5,
                    width: '28%'
                  }
                }
              >
                <Text style={{color:'#fff', textAlign: 'center', width: '100%'}}>Share</Text>
              </Button>

              <Button
                transparent
                style={
                  {
                    backgroundColor:'#009688',
                    borderRadius: 5,
                    marginLeft: 5,
                    marginRight: 5,
                    width: '28%'
                  }
                }
              >
                <Text style={{color:'#fff', textAlign: 'center', width: '100%'}}>Report</Text>
              </Button>

              <Button
                transparent
                style={
                  {
                    backgroundColor:'#009688',
                    borderRadius: 5,
                    marginLeft: 5,
                    marginRight: 5,
                    width: '28%'
                  }
                }
              >
                <Text style={{color:'#fff', textAlign: 'center', width: '100%'}}>Simpan</Text>
              </Button>
            </View>

            <View style={styles.msds_title}>
              <H1 style={{textAlign: 'center'}}>{nama}</H1>
            </View>

            <View style={styles.msds_desc}>
                <View>
                  <Text>Nama Zat Kimia</Text>
                  <Text style={{textAlign: 'justify'}}>
                    { this.state.konten.konten_1 }
                  </Text>
                </View>
                <View>
                  <Text>Nama Zat Kimia</Text>
                  <Text style={{textAlign: 'justify'}}>
                    { this.state.konten.konten_1 }
                  </Text>
                </View>
                <View>
                  <Text>Nama Zat Kimia</Text>
                  <Text style={{textAlign: 'justify'}}>
                    { this.state.konten.konten_1 }
                  </Text>
                </View>
                <View>
                  <Text>Nama Zat Kimia</Text>
                  <Text style={{textAlign: 'justify'}}>
                    { this.state.konten.konten_1 }
                  </Text>
                </View>
                <View>
                  <Text>Nama Zat Kimia</Text>
                  <Text style={{textAlign: 'justify'}}>
                    { this.state.konten.konten_1 }
                  </Text>
                </View>
                <View>
                  <Text>Nama Zat Kimia</Text>
                  <Text style={{textAlign: 'justify'}}>
                    { this.state.konten.konten_1 }
                  </Text>
                </View>
                <View>
                  <Text>Nama Zat Kimia</Text>
                  <Text style={{textAlign: 'justify'}}>
                    { this.state.konten.konten_1 }
                  </Text>
                </View>
                <View>
                  <Text>Nama Zat Kimia</Text>
                  <Text style={{textAlign: 'justify'}}>
                    { this.state.konten.konten_1 }
                  </Text>
                </View>
                <View>
                  <Text>Nama Zat Kimia</Text>
                  <Text style={{textAlign: 'justify'}}>
                    { this.state.konten.konten_1 }
                  </Text>
                </View>
                <View>
                  <Text>Nama Zat Kimia</Text>
                  <Text style={{textAlign: 'justify'}}>
                    { this.state.konten.konten_1 }
                  </Text>
                </View>
                <View>
                  <Text>Nama Zat Kimia</Text>
                  <Text style={{textAlign: 'justify'}}>
                    { this.state.konten.konten_1 }
                  </Text>
                </View>
                <View>
                  <Text>Nama Zat Kimia</Text>
                  <Text style={{textAlign: 'justify'}}>
                    { this.state.konten.konten_1 }
                  </Text>
                </View>
                <View>
                  <Text>Nama Zat Kimia</Text>
                  <Text style={{textAlign: 'justify'}}>
                    { this.state.konten.konten_1 }
                  </Text>
                </View>
                <View>
                  <Text>Nama Zat Kimia</Text>
                  <Text style={{textAlign: 'justify'}}>
                    { this.state.konten.konten_1 }
                  </Text>
                </View>
                <View>
                  <Text>Nama Zat Kimia</Text>
                  <Text style={{textAlign: 'justify'}}>
                    { this.state.konten.konten_1 }
                  </Text>
                </View>
                <View>
                  <Text>Nama Zat Kimia</Text>
                  <Text style={{textAlign: 'justify'}}>
                    { this.state.konten.konten_1 }
                  </Text>
                </View>
            </View>
          </ScrollView>
        </Content>
      </Container>
    );
  }
}
