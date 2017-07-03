import React, { Component } from 'react';
import {
  ActivityIndicator,
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableHighlight
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
  H3
} from 'native-base';
import axios from 'axios';
import Icon from 'react-native-vector-icons/Entypo';
import Icons from 'react-native-vector-icons/EvilIcons';
import styles from '../style/compare_style.js';
import { StackNavigator, NavigationActions } from 'react-navigation';

export default class CompareMsds extends Component {

  constructor(props){
    super(props);

    this.state = {
      isLoading: true,
      left_name : [],
      left_content : [],
      right_name : [],
      right_content : [],
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
          left_name: response.data.msds_name,
          left_content: ( response.data.msds_content !== null && typeof response.data.msds_content === 'object' ? response.data.msds_content : JSON.parse(response.data.msds_content)),
          right_name: response.data.msdstwo_name,
          right_content: ( response.data.msdstwo_content !== null && typeof response.data.msdstwo_content === 'object' ? response.data.msdstwo_content : JSON.parse(response.data.msdstwo_content))
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

    const resetAction = NavigationActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({ routeName: 'HomeScreen'})
      ]
    })

    if (this.state.isLoading) {
      return (
        <View style={{flex: 1, paddingTop: 20}}>
          <ActivityIndicator />
        </View>
      );
    }

    var firstsearch = (this.state.firstinput == '' ? 'asdf' : this.state.firstinput);
    var secondsearch = this.state.secondinput;

    var left_side = [
      <View>
        <View style={styles.msds_desc}>
          <Text style={styles.sub_judul}>Deskripsi singkat Zat Kimia</Text>
          <Text style={{textAlign: 'justify'}}>{this.state.left_content.konten_1}</Text>
        </View>
        <View style={styles.msds_desc}>
          <Text style={styles.sub_judul}>Nama Zat Kimia</Text>
          <Text style={{textAlign: 'justify'}}>{this.state.left_content.konten_2}</Text>
        </View>
      </View>
    ];

    var right_side = [
      <View>
        <View style={styles.msds_desc}>
          <Text style={styles.sub_judul}>Deskripsi singkat Zat Kimia</Text>
          <Text style={{textAlign: 'justify'}}>{this.state.right_content.konten_1}</Text>
        </View>
        <View style={styles.msds_desc}>
          <Text style={styles.sub_judul}>Nama Zat Kimia</Text>
          <Text style={{textAlign: 'justify'}}>{this.state.right_content.konten_2}</Text>
        </View>
      </View>
    ]

    return (
      <Container>
        <Header style={{backgroundColor: '#009688'}}>
          <Left>
            <TouchableHighlight onPress={() => this.props.navigation.dispatch(resetAction)}>
              <View transparent>
                <Icon name='chevron-left' size={30} />
              </View>
            </TouchableHighlight>
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
                  marginBottom: 10,
                  borderRadius: 5
                }
              }>
                      <Icons active name='search' size={30} />
                      <Input placeholder='Cari Zat Kimia' onChangeText={(firstinput) => this.setState({firstinput})} />
              </Item>

              <View style={styles.compareBtnWrapper}>
                <Button
                  transparent
                  onPress={() => navigate('CompareMsdsScreen', { firstsearch, secondsearch })}
                  style={
                    {
                      backgroundColor:'#009688',
                      borderRadius: 5,
                      width: 110
                    }
                  }
                >
                  <Text style={{color:'#fff', textAlign: 'center', width: '100%'}}>Bandingkan</Text>
                </Button>
              </View>

              <ScrollView>
                  <View>
                    <View style={styles.msds_title}>
                      <H3 style={{textAlign: 'center'}}>{this.state.left_name}</H3>
                    </View>

                    { this.state.left_content.konten_1 !== '' ? left_side : <Text></Text> }
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
                  marginBottom: 10,
                  borderRadius: 5
                }
              }>
                      <Icons active name='search' size={30} />
                      <Input placeholder='Cari Zat Kimia' onChangeText={(secondinput) => this.setState({secondinput})} />
              </Item>

              <View style={styles.compareBtnWrapper}>
                <Button
                  transparent
                  onPress={() => navigate('CompareMsdsScreen', { firstsearch, secondsearch })}
                  style={
                    {
                      backgroundColor:'#009688',
                      borderRadius: 5,
                      width: 110
                    }
                  }
                >
                  <Text style={{color:'#fff', textAlign: 'center', width: '100%'}}>Bandingkan</Text>
                </Button>
              </View>

              <ScrollView>
                  <View>
                    <View style={styles.msds_title}>
                      <H3 style={{textAlign: 'center'}}>{this.state.right_name}</H3>
                    </View>

                    { this.state.right_content.konten_1 !== '' ? right_side : <Text></Text> }
                  </View>
              </ScrollView>

            </Col>
          </Grid>
        </Content>
      </Container>
    );
  }
}
