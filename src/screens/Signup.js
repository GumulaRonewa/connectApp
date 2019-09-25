import React, {Component} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import SignupForm from '../register/SignupForm';
import {Actions} from 'react-native-router-flux';

export default class Signup extends React.Component{

    goBack(){
        Actions.pop();

    }

    render(){
    return(
        <KeyboardAvoidingView style={styles.container}>
         <SignupForm type="Sign Up"/>
         <View style={styles.signupTextCont}>
            <Text style={styles.signupText}>Already have an account?</Text>
            <TouchableOpacity onPress={this.goBack}><Text style={styles.signupButton}>Sign In</Text></TouchableOpacity>
         </View>
        </KeyboardAvoidingView>

    )
    }
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#1e88e5',
      flex: 1,
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