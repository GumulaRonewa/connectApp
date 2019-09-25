import React, { Component } from 'react';
import {Modal, Text, TouchableHighlight, View, Alert, TouchableOpacity, StyleSheet} from 'react-native';
import Posts from '../components/Posts';
import Event from '../post/Event'

export default class ViewPosts extends Component {
   state = {
    modalVisible: false,
  };

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }
  render(){
  	return (
  		   <View>
  			<Posts>
  			</Posts>
  			<Modal
		          animationType="slide"
		          transparent={true}
		          visible={this.state.modalVisible}
		          >
		            <View>
		   			<Event style={styles.Event}>
  					</Event>
  					<TouchableOpacity style={styles.ext}  onPress={() => { this.setModalVisible(false); }}>
                    	<Text style={styles.txt}>x</Text>
                    </TouchableOpacity>
  					</View>       
             </Modal>

  			  <TouchableOpacity style={styles.add}  onPress={() => { this.setModalVisible(true); }}>
                    <Text style={styles.text}>+</Text>
              </TouchableOpacity>
  		   </View>
  		 );
  }
}
const styles = StyleSheet.create({
     add:{
    height: 50,
    width: 50,
    borderRadius: 200,
    position: 'absolute',
    bottom: 10,
    right: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#686cc3',
  },
  Event:{
  	height:150,
  	top:10,
  	left:20,
  	right:20,
  	borderRadius:5

  },
  text:{
    fontSize:30,
    color:'white'
  },
   ext:{
    height: 35,
    width: 35,
    borderRadius: 200,
    position: 'absolute',
    borderWidth: 1,
    top: 12,
    borderColor: 'red',
    right: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',

  },
  txt:{
  	alignSelf: 'center',
  	paddingBottom: 7,
    fontSize:20,
    color:'white'
  }
})


