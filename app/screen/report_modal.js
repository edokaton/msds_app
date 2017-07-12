import React, { Component } from 'react';
import {
  Modal,
  Text,
  TouchableHighlight,
  View,
  KeyboardAvoidingView
} from 'react-native';
/*import {
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
} from 'native-base';*/
import styles from '../style/detail_msds_style.js';
import axios from 'axios';
import { StackNavigator, NavigationActions } from 'react-navigation';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default class ReportModal extends Component {

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
    return (
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
    );
  }
}