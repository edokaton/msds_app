import React, { Component } from 'react';
import {
  Modal,
  Text,
  TouchableHighlight,
  View,
  KeyboardAvoidingView
} from 'react-native';
import styles from '../style/detail_msds_style.js';

export default class ReportModal extends Component {

  constructor(props){
    super(props);

    this.state = {
      text: 'Tulis report mengenai zat',
      zat : this.props.navigation.state.params.nama
    }
  }

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  render() {
    return (
        <KeyboardAvoidingView
          behavior="position"
          style={styles.modalContainer}
          key={1}
        >
          <Modal
            animationType={"slide"}
            transparent={true}
            visible={this.state.modalVisible}
            onRequestClose={() => {
              this.setModalVisible(!this.state.modalVisible)
            }}
            style={styles.mainModal}
            position={"bottom"}
            entry={"bottom"}
          >
              <View style={styles.modalShadow}>
               <View style={styles.reportModalWrapper}>
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
                      <H3>Kirim Report Kesalahan Data</H3>
                    </View>
                  </View>

                  <View style={{ marginTop: 50 }}>
                    <Item regular style={{ marginBottom: 10}}>
                      <Input
                        placeholder='Subjek report/laporan'
                        returnKeyType='next'
                      />
                    </Item>

                    <TextInput
                      multiline = {true}
                      numberOfLines = {10}
                      style={{height: 200, borderColor: '#ccc', borderWidth: 1, marginBottom: 20}}
                      onChangeText={(text) => this.setState({text})}
                      returnKeyType='go'
                      placeholder='kamvret'
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
                      onPress={() => {
                        this.setModalVisible(!this.state.modalVisible)
                      }}
                    >
                      <Text style={{color:'#fff', textAlign: 'center', width: '100%'}}>Kirim</Text>
                    </Button>
                  </View>
               </View>
              </View>
          </Modal>
        </KeyboardAvoidingView>
    );
  }
}