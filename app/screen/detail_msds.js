import React, { Component } from 'react';
import {
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
  H1
} from 'native-base';
import Icon from 'react-native-vector-icons/Entypo';
import styles from '../style/detail_msds_style.js';

export default class DetailMsds extends Component {
  render() {

    const { goBack } = this.props.navigation;
    const { id, nama, content} = this.props.navigation.state.params;

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
              <Text style={{textAlign: 'justify'}}>{content}</Text>
            </View>
          </ScrollView>
        </Content>
      </Container>
    );
  }
}
