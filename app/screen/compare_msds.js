import React, { Component } from 'react';
import {
  ActivityIndicator,
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableHighlight,
  Dimensions
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
    const { width, height } = Dimensions.get('window')
    this.state = {
      width,
      height,
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

  onLayout(){
    const { width, height } = Dimensions.get('window')
    this.setState({
      width,
      height
    })
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
        <View key={1} style={styles.msds_desc}>
          <Text style={styles.sub_judul}>Deskripsi singkat zat kimia</Text>
          <Text style={{textAlign: 'justify'}}>{this.state.left_content.konten_1}</Text>
        </View>
        <View key={2} style={styles.msds_desc}>
          <Text style={styles.sub_judul}>Bahan dan komposisi zat kimia</Text>
          <Text style={{textAlign: 'justify'}}>{this.state.left_content.konten_2}</Text>
        </View>
        <View key={3} style={styles.msds_desc}>
          <Text style={styles.sub_judul}>Bahaya/risiko zat Kimia</Text>
          <Text style={{textAlign: 'justify'}}>{this.state.left_content.konten_3}</Text>
        </View>
        <View key={4} style={styles.msds_desc}>
          <Text style={styles.sub_judul}>Tindakan pertolongan pertama</Text>
          <Text style={{textAlign: 'justify'}}>{this.state.left_content.konten_4}</Text>
        </View>
        <View key={5} style={styles.msds_desc}>
          <Text style={styles.sub_judul}>Data ledakan dan api</Text>
          <Text style={{textAlign: 'justify'}}>{this.state.left_content.konten_5}</Text>
        </View>
        <View key={6} style={styles.msds_desc}>
          <Text style={styles.sub_judul}>Langkah-langkah jika tumpah</Text>
          <Text style={{textAlign: 'justify'}}>{this.state.left_content.konten_6}</Text>
        </View>
        <View key={7} style={styles.msds_desc}>
          <Text style={styles.sub_judul}>Perawatan dan penyimpanan</Text>
          <Text style={{textAlign: 'justify'}}>{this.state.left_content.konten_7}</Text>
        </View>
        <View key={8} style={styles.msds_desc}>
          <Text style={styles.sub_judul}>Perlindungan diri</Text>
          <Text style={{textAlign: 'justify'}}>{this.state.left_content.konten_8}</Text>
        </View>
        <View key={9} style={styles.msds_desc}>
          <Text style={styles.sub_judul}>Unsur kimia dan fisika</Text>
          <Text style={{textAlign: 'justify'}}>{this.state.left_content.konten_9}</Text>
        </View>
        <View key={10} style={styles.msds_desc}>
          <Text style={styles.sub_judul}>Data reaktivitas dan stabilitas</Text>
          <Text style={{textAlign: 'justify'}}>{this.state.left_content.konten_10}</Text>
        </View>
        <View key={11} style={styles.msds_desc}>
          <Text style={styles.sub_judul}>Informasi racun</Text>
          <Text style={{textAlign: 'justify'}}>{this.state.left_content.konten_11}</Text>
        </View>
        <View key={12} style={styles.msds_desc}>
          <Text style={styles.sub_judul}>Informasi ekologis</Text>
          <Text style={{textAlign: 'justify'}}>{this.state.left_content.konten_12}</Text>
        </View>
        <View key={13} style={styles.msds_desc}>
          <Text style={styles.sub_judul}>Penanganan limbah</Text>
          <Text style={{textAlign: 'justify'}}>{this.state.left_content.konten_13}</Text>
        </View>
        <View key={14} style={styles.msds_desc}>
          <Text style={styles.sub_judul}>Informasi transportasi/pengangkutan</Text>
          <Text style={{textAlign: 'justify'}}>{this.state.left_content.konten_14}</Text>
        </View>
        <View key={15} style={styles.msds_desc}>
          <Text style={styles.sub_judul}>Informasi tambahan</Text>
          <Text style={{textAlign: 'justify'}}>{this.state.left_content.konten_15}</Text>
        </View>
        <View key={16} style={styles.msds_desc}>
          <Text style={styles.sub_judul}>Informasi lain</Text>
          <Text style={{textAlign: 'justify'}}>{this.state.left_content.konten_16}</Text>
        </View>
      </View>
    ];

    var right_side = [
      <View>
        <View key={1} style={styles.msds_desc}>
          <Text style={styles.sub_judul}>Deskripsi singkat Zat Kimia</Text>
          <Text style={{textAlign: 'justify'}}>{this.state.right_content.konten_1}</Text>
        </View>
        <View key={2} style={styles.msds_desc}>
          <Text style={styles.sub_judul}>Bahan dan komposisi zat kimia</Text>
          <Text style={{textAlign: 'justify'}}>{this.state.right_content.konten_2}</Text>
        </View>
        <View key={3} style={styles.msds_desc}>
          <Text style={styles.sub_judul}>Bahaya/risiko zat kimia</Text>
          <Text style={{textAlign: 'justify'}}>{this.state.left_content.konten_3}</Text>
        </View>
        <View key={4} style={styles.msds_desc}>
          <Text style={styles.sub_judul}>Tindakan pertolongan pertama</Text>
          <Text style={{textAlign: 'justify'}}>{this.state.left_content.konten_4}</Text>
        </View>
        <View key={5} style={styles.msds_desc}>
          <Text style={styles.sub_judul}>Data ledakan dan api</Text>
          <Text style={{textAlign: 'justify'}}>{this.state.left_content.konten_5}</Text>
        </View>
        <View key={6} style={styles.msds_desc}>
          <Text style={styles.sub_judul}>Langkah-langkah jika tumpah</Text>
          <Text style={{textAlign: 'justify'}}>{this.state.left_content.konten_6}</Text>
        </View>
        <View key={7} style={styles.msds_desc}>
          <Text style={styles.sub_judul}>Perawatan dan penyimpanan</Text>
          <Text style={{textAlign: 'justify'}}>{this.state.left_content.konten_7}</Text>
        </View>
        <View key={8} style={styles.msds_desc}>
          <Text style={styles.sub_judul}>Perlindungan diri</Text>
          <Text style={{textAlign: 'justify'}}>{this.state.left_content.konten_8}</Text>
        </View>
        <View key={9} style={styles.msds_desc}>
          <Text style={styles.sub_judul}>Unsur kimia dan fisika</Text>
          <Text style={{textAlign: 'justify'}}>{this.state.left_content.konten_9}</Text>
        </View>
        <View key={10} style={styles.msds_desc}>
          <Text style={styles.sub_judul}>Data reaktivitas dan stabilitas</Text>
          <Text style={{textAlign: 'justify'}}>{this.state.left_content.konten_10}</Text>
        </View>
        <View key={11} style={styles.msds_desc}>
          <Text style={styles.sub_judul}>Informasi racun</Text>
          <Text style={{textAlign: 'justify'}}>{this.state.left_content.konten_11}</Text>
        </View>
        <View key={12} style={styles.msds_desc}>
          <Text style={styles.sub_judul}>Informasi ekologis</Text>
          <Text style={{textAlign: 'justify'}}>{this.state.left_content.konten_12}</Text>
        </View>
        <View key={13} style={styles.msds_desc}>
          <Text style={styles.sub_judul}>Penanganan limbah</Text>
          <Text style={{textAlign: 'justify'}}>{this.state.left_content.konten_13}</Text>
        </View>
        <View key={14} style={styles.msds_desc}>
          <Text style={styles.sub_judul}>Informasi transportasi dan pengangkutan</Text>
          <Text style={{textAlign: 'justify'}}>{this.state.left_content.konten_14}</Text>
        </View>
        <View key={15} style={styles.msds_desc}>
          <Text style={styles.sub_judul}>Informasi tambahan</Text>
          <Text style={{textAlign: 'justify'}}>{this.state.left_content.konten_15}</Text>
        </View>
        <View key={16} style={styles.msds_desc}>
          <Text style={styles.sub_judul}>Informasi lain</Text>
          <Text style={{textAlign: 'justify'}}>{this.state.left_content.konten_16}</Text>
        </View>
      </View>
    ];

    return (
      <Container onLayout={() => this.onLayout()}>
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
        <Content>
          <Grid>
            <Col style={{
              borderRightWidth: 1,
              borderRightColor: '#009688',
              borderStyle: 'solid',
              height: '100%'
            }}>
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
                      width: 110,
                      marginLeft: '20%'
                    }
                  }
                >
                  <Text style={{color:'#fff', textAlign: 'center', width: '100%'}}>Bandingkan</Text>
                </Button>
              </View>

              <ScrollView>
                  <View style={{minHeight: this.state.height}}>
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
                      width: 110,
                      marginLeft: '20%'
                    }
                  }
                >
                  <Text style={{
                    color:'#fff',
                    textAlign: 'center',
                    width: '100%'
                  }}>Bandingkan</Text>
                </Button>
              </View>

              <ScrollView>
                  <View style={{minHeight: this.state.height}}>
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
