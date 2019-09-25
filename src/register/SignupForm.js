import React, {Component} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';
import {Actions} from 'react-native-router-flux';
import axios from 'axios';

export default class SignupForm extends React.Component {
    
    state = {Password:"",
     CPassword:"",
     Email:"",
    };
  handleEmail = (text) => {
      var str=text+"";
      var txt=str.toLowerCase()
      global.Email=txt;
      this.setState({Email:txt })
   }
   handlePassword = (text) => {
      this.setState({ Password : text })
   }
   handleCPassword = (text) => {
      this.setState({ CPassword : text })
   }
    goBack(){
        Actions.pop();

    }
   onSubmit = () =>{  
      const details={
        email: this.state.Email,
        Province: "Any",
        City:"Any"
      } 
       const users= {
           email: this.state.Email,
           password: this.state.Password,
        }
        if(this.state.CPassword===this.state.Password){
           axios({
         method: 'post',
         url: 'http://196.24.172.173:3000/users/add',
        data:users
        });
        axios({
         method: 'post',
         url: 'http://196.24.172.173:3000/location/add',
        data:details
        });


          this.goBack();
         }
        else{
          Alert.alert("Creating account failed")
        }
      
        

   }
    render() {
        return (<View style={styles.container}>
            <TextInput style={styles.inputBox} underlineColorAndroid='rgba(0,0,0,0)' placeholder="Email" placeholderTextColor='#ffffff' selectionColor="#fff" keyboardType="email-address" onChangeText = {this.handleEmail} />
            <TextInput style={styles.inputBox} underlineColorAndroid='rgba(0,0,0,0)' placeholder="Password" secureTextEntry={true} placeholderTextColor='#ffffff' onChangeText = {this.handlePassword} />
            <TextInput style={styles.inputBox} underlineColorAndroid='rgba(0,0,0,0)' placeholder="Confirm Password" secureTextEntry={true} placeholderTextColor='#ffffff' onChangeText = {this.handleCPassword} />
            <TouchableOpacity style={styles.button} onPress={this.onSubmit}>
                <Text style={styles.buttonText}>{this.props.type}</Text>

            </TouchableOpacity>
        </View>);
    }
}
const styles = StyleSheet.create({
    container: {
      flexGrow: 1,
      justifyContent: 'center',
      alignItems:'center',
      
    },

    inputBox: {
        width:300,
        backgroundColor: 'rgba(255,255,255,0.2)',
        borderRadius:25,
        paddingHorizontal:16,
        fontSize:16,
        color:'#ffffff',
        marginVertical: 10
    },
    buttonText:{
        fontSize:16,
        fontWeight:'500',
        color:'#ffffff',
        textAlign:'center'

    },

    button: {
        width:300,
        backgroundColor: '#005cb2',  
        borderRadius:25,
        marginVertical: 10,
        paddingVertical:13
    }


    
  });