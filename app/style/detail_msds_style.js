import React, { Component } from 'react';
import {
  StyleSheet,
  Dimensions
} from 'react-native';

const styles = StyleSheet.create({
  button_wrapper: {
    marginTop: 20,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 0,
    // backgroundColor: '#fff',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  msds_title:{
    width: '100%',
    paddingTop: 50,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 20
  },
  each_description:{
    marginTop: 10,
    marginBottom: 10,
    marginRight: 20,
    marginLeft: 20
  },
  desc_title:{
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#009688',
    borderStyle: 'solid',
    marginBottom: 10
  },
  modalContainer: {
    // position: 'absolute',
    // bottom: 0,
    // left: 0,
    // flex: 1,
    // width: Dimensions.get('window').width,
    // height: Dimensions.get('window').height,
  },
  mainModal: {
    // height: Dimensions.get('window').height * .3,
    // width: Dimensions.get('window').width
  },
  modalShadow:{
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,.5)'
  },
  reportModalWrapper: {
    borderRadius: 10,
    marginLeft: 10,
    marginRight: 10,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 20,
    backgroundColor: '#fff'
  },
  modalCloseBtnWrapper:{
    flexDirection:'row',
    justifyContent:'flex-end',
    alignItems:'center',
    marginBottom: 30,
    marginTop: 10
  }
});

export default styles;
