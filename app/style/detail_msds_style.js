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
  msds_desc:{
    padding: 10    
  }
});

export default styles;
