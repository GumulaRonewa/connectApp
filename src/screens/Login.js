import React, {Component} from 'react';
import { StyleSheet, Text, View, TouchableOpacity,Alert} from 'react-native';
import Form from '../register/Form';
import {Actions} from 'react-native-router-flux';
import App from "../../App";

export default class Login extends React.Component{
    
    
   
    signup(){
        Actions.signup();
    }

     render(){
    
    return(
     
        <View style={styles.container}>

         <Form type="Login" />
         <View style={styles.signupTextCont}>
            <Text style={styles.signupText}>Don't have an account yet? </Text>
           <TouchableOpacity onPress={this.signup}><Text style={styles.signupButton}>Sign Up</Text></TouchableOpacity>
         </View>
        </View>

    )}
}
    



const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#1e88e5',
      alignItems: 'center',
      justifyContent: 'center',
    },
    signupTextCont:{
        flexGrow: 1,
        alignItems: 'flex-end',
        justifyContent: 'center', 
        paddingVertical:16,
        flexDirection:'row'
    },
    signupButton:{
        color:'#ffffff',
        fontSize:16,
        fontWeight:'500'

    },

    signupText:{
        color:'rgba(255, 255, 255, 0.7)',
        fontSize:16
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
    },
  });