import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
  TouchableHighlight,
  ActivityIndicator,
  Modal,
  KeyboardAvoidingView
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
  H1,
  H3
} from 'native-base';
import Icon from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FaIcon from 'react-native-vector-icons/FontAwesome';
import axios from 'axios';
import styles from '../style/detail_msds_style.js';

export default class DetailMsds extends Component {
  constructor(props){
    super(props);

    this.state = {
      isLoading: true,
      konten : [],
      modalVisible: false,
      marginTops: '15%',
      feedback: '',
      success_response: '',
      id_msds : this.props.navigation.state.params.id,
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

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  onFocus() {
    this.setState({
        marginTops: '50%'
    })
  }

  onBlur() {
    this.setState({
      marginTops: '15%'
    })
  }

  submitFeedback(){
    this.setModalVisible(!this.state.modalVisible);
    axios({
        method: 'post',
        url: 'http://edokaton.tk/api/user/feedback/1/' + this.state.id_msds + '/' + this.state.feedback,
        headers: {
          'Accept'        : 'application/json',
          'Authorization' : 'Bearer qDcJtmiSugMC6lplhWJT8a0t8Q3PteWUXKBaMe5iuTtlBHIrHL8cq7Rr4Tiz7httGO5dspblNAqSR7NW1dCVqwcriyKGxerzRR39'
        }
      })
      .then((response) => {
          this.setState({
              success_response: response.data.success_feed
          });
          alert(this.state.success_response);
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          console.log(error.request);
        } else {
          console.log('Error', error.message);
        }
        console.log(error.config);
      });
  }

  render() {
    const { goBack } = this.props.navigation;
    const { id, nama, content} = this.props.navigation.state.params;

    if (this.state.isLoading) {
      return (
        <View style={{flex: 1, paddingTop: 20}}>
          <ActivityIndicator />
        </View>
      );
    }

    var reportModal = [
        <Modal
          animationType="fade"
          transparent={true}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            this.setModalVisible(!this.state.modalVisible)
          }}
          key={1}
          >
            <KeyboardAvoidingView behavior="position" style={styles.modalShadow}>

               <View style={[styles.reportModalWrapper, { marginTop: this.state.marginTops }]}>
                  <View style={styles.modalCloseBtnWrapper}>
                    <View>
                      <TouchableHighlight
                        onPress={() => {
                          this.setModalVisible(!this.state.modalVisible)
                        }}
                        style={styles.modalCloseBtn}
                      >
                        <FaIcon name='close' size={25} />
                      </TouchableHighlight>
                    </View>
                  </View>

                  <View style={{ flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
                    <View>
                      <H3>Kirim Feedback</H3>
                    </View>
                  </View>

                  <View style={{ marginTop: 50 }}>
                    {/*<Item regular style={{ marginBottom: 10}}>
                      <Input
                        placeholder='Subjek Feedback'
                        onBlur={() => this.onBlur()}
                        onEndEditing={() => this.onBlur()}
                        onFocus={() => this.onFocus()}
                        value={this.state.feedback}
                        returnKeyType='next'
                      />
                    </Item>*/}

                    <TextInput
                      multiline = {true}
                      editable = {true}
                      numberOfLines = {10}
                      style={{minHeight: 200, marginBottom: 20}}
                      onChangeText={(feedback) => this.setState({feedback})}
                      onBlur={() => this.onBlur()}
                      onEndEditing={() => this.onBlur()}
                      onFocus={() => this.onFocus()}
                      placeholder='Tuliskan feedback Anda'
                    />

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
                      onPress={this.submitFeedback.bind(this)}
                    >
                      <Text style={{color:'#fff', textAlign: 'center', width: '100%'}}>Kirim</Text>
                    </Button>
                  </View>
               </View>
            </KeyboardAvoidingView>
        </Modal>
    ]

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
        { reportModal }
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
                    padding: 5,
                    marginBottom: 10,
                    width: '100%'
                  }
                }
              >
                <Text style={{color:'#fff', textAlign: 'center', width: '100%', fontSize: 20}}>
                    <MaterialCommunityIcons name="share-variant" size={25} /> Share MSDS
                </Text>
              </Button>

              <Button
                transparent
                style={
                  {
                    backgroundColor:'#009688',
                    borderRadius: 5,
                    padding: 5,
                    marginBottom: 10,
                    width: '100%'
                  }
                }
              >
                <Text style={{color:'#fff', textAlign: 'center', width: '100%', fontSize: 20}}>
                  <Icon name="save" size={25} /> Simpan MSDS
                </Text>
              </Button>

                <Button
                  transparent
                  style={
                    {
                      backgroundColor:'#009688',
                      borderRadius: 5,
                      padding: 5,
                      marginBottom: 10,
                      width: '100%'
                    }
                  }
                  onPress={() => {
                    this.setModalVisible(true)
                  }}
                >
                  <Text style={{color:'#fff', textAlign: 'center', width: '100%', fontSize: 20}}>
                    <Icon name="pencil" size={25} /> Kirim Feedback
                  </Text>
                </Button>
            </View>

            <View style={styles.msds_title}>
              <H1 style={{textAlign: 'center'}}>Material Safety Data Sheet</H1>
              <H1 style={{textAlign: 'center'}}>{nama}</H1>
            </View>

            <View style={styles.msds_desc}>
                <View style={styles.each_description}>
                  <Text style={styles.desc_title}>Deskripsi singkat zat kimia</Text>
                  <Text style={{textAlign: 'justify'}}>
                    { this.state.konten.konten_1 }
                  </Text>
                </View>
                <View style={styles.each_description}>
                  <Text style={styles.desc_title}>Bahan dan komposisi zat kimia</Text>
                  <Text style={{textAlign: 'justify'}}>
                    { this.state.konten.konten_2 }
                  </Text>
                </View>
                <View style={styles.each_description}>
                  <Text style={styles.desc_title}>Bahaya/risiko zat Kimia</Text>
                  <Text style={{textAlign: 'justify'}}>
                    { this.state.konten.konten_3 }
                  </Text>
                </View>
                <View style={styles.each_description}>
                  <Text style={styles.desc_title}>Tindakan pertolongan pertama</Text>
                  <Text style={{textAlign: 'justify'}}>
                    { this.state.konten.konten_4 }
                  </Text>
                </View>
                <View style={styles.each_description}>
                  <Text style={styles.desc_title}>Data ledakan dan api</Text>
                  <Text style={{textAlign: 'justify'}}>
                    { this.state.konten.konten_5 }
                  </Text>
                </View>
                <View style={styles.each_description}>
                  <Text style={styles.desc_title}>Langkah-langkah jika tumpah</Text>
                  <Text style={{textAlign: 'justify'}}>
                    { this.state.konten.konten_6 }
                  </Text>
                </View>
                <View style={styles.each_description}>
                  <Text style={styles.desc_title}>Perawatan dan penyimpanan</Text>
                  <Text style={{textAlign: 'justify'}}>
                    { this.state.konten.konten_7 }
                  </Text>
                </View>
                <View style={styles.each_description}>
                  <Text style={styles.desc_title}>Perlindungan diri</Text>
                  <Text style={{textAlign: 'justify'}}>
                    { this.state.konten.konten_8 }
                  </Text>
                </View>
                <View style={styles.each_description}>
                  <Text style={styles.desc_title}>Unsur kimia dan fisika</Text>
                  <Text style={{textAlign: 'justify'}}>
                    { this.state.konten.konten_9 }
                  </Text>
                </View>
                <View style={styles.each_description}>
                  <Text style={styles.desc_title}>Data reaktivitas dan stabilitas</Text>
                  <Text style={{textAlign: 'justify'}}>
                    { this.state.konten.konten_10 }
                  </Text>
                </View>
                <View style={styles.each_description}>
                  <Text style={styles.desc_title}>Informasi racun</Text>
                  <Text style={{textAlign: 'justify'}}>
                    { this.state.konten.konten_11 }
                  </Text>
                </View>
                <View style={styles.each_description}>
                  <Text style={styles.desc_title}>Informasi ekologis</Text>
                  <Text style={{textAlign: 'justify'}}>
                    { this.state.konten.konten_12 }
                  </Text>
                </View>
                <View style={styles.each_description}>
                  <Text style={styles.desc_title}>Penanganan limbah</Text>
                  <Text style={{textAlign: 'justify'}}>
                    { this.state.konten.konten_13 }
                  </Text>
                </View>
                <View style={styles.each_description}>
                  <Text style={styles.desc_title}>Informasi transportasi/pengangkutan</Text>
                  <Text style={{textAlign: 'justify'}}>
                    { this.state.konten.konten_14 }
                  </Text>
                </View>
                <View style={styles.each_description}>
                  <Text style={styles.desc_title}>Informasi tambahan</Text>
                  <Text style={{textAlign: 'justify'}}>
                    { this.state.konten.konten_15 }
                  </Text>
                </View>
                <View style={styles.each_description}>
                  <Text style={styles.desc_title}>Informasi lain</Text>
                  <Text style={{textAlign: 'justify'}}>
                    { this.state.konten.konten_16 }
                  </Text>
                </View>
            </View>
          </ScrollView>
        </Content>
      </Container>
    );
  }
}
