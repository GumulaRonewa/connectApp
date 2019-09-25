import React, { Component } from 'react';
import {Modal, Text, TouchableHighlight, View, Alert, TouchableOpacity, StyleSheet} from 'react-native';
import Event from '../post/Event'

export default class AddScreen extends Component {
 
  render(){
  	return (
  			<View style={styles.Viewstyle}>
  			<Event>
  			</Event>
  			</View>
  		 );
  }
}
const styles = {
   
 Viewstyle:{
    backgroundColor:'#686cc3',
    flex:1
  }
};