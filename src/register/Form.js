import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';
import {Actions} from 'react-native-router-flux';
import axios from 'axios';


export default class Form extends React.Component {
      state = {Password:"",
     Email:"",
    };
    handleEmail = (text) => {
     var str=text+"";
      var txt=str.toLowerCase()
      this.setState({Email:txt })
   }
   handlePassword = (text) => {
      this.setState({ Password : text })
   }


    
    onSubmit = () =>{  
      var url='http://196.24.172.173:3000/users/user/:email='+this.state.Email;
      global.Email=this.state.Email;
       axios.get(url)
        .then(response => {
          infos = response.data;
           if(this.state.Password===infos[0].password){
                         Alert.alert("Login sucessful")

             this.main();
           }
         else{
             Alert.alert("Login failed")
           }
        })
       

      
        

   }
     main=() =>{
        //global.Email=this.state.email;
        Actions.App();
    }
    render() {
        return (<View style={styles.container}>
            <TextInput style={styles.inputBox} underlineColorAndroid='rgba(0,0,0,0)' placeholder="Email" placeholderTextColor='#ffffff' selectionColor="#fff" keyboardType="email-address" onChangeText = {this.handleEmail} />

            <TextInput style={styles.inputBox} underlineColorAndroid='rgba(0,0,0,0)' placeholder="Password" secureTextEntry={true} placeholderTextColor='#ffffff' onChangeText = {this.handlePassword} />

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