import React, { Component } from 'react';
import {
  StyleSheet
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
  msds_desc:{
    // padding: 10
  },
  reportModalWrapper: {
    width: '200 !important'
  }
});

export default styles;
