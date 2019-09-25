import React, { Component } from 'react';
import { View, Picker, Text, TouchableOpacity, TextInput, Image, KeyboardAvoidingView, Alert, ScrollView } from 'react-native';
import ImagePicker from 'react-native-image-picker';
import CardSection from './CardSection';
import Header from '../header/Header';
import { faImage, faCamera, faMapPin, faClock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import axios from 'axios';
import choosePhoto from './choosePhoto';
import upload from './uploader';
import TimePicker from "react-native-24h-timepicker";
import DatePicker from 'react-native-datepicker';


//cd Videos/react/new/comunityconnect
export default class Event extends Component{
	state = {
		photo :null,
    datain:null,
    imagename:null,
    img:"image-"+Date.now(),
    end:'',
    title:'',
    text: '',
    date:'',
    time:'',
 
	}
   

   
  
	show =() =>{
    choosePhoto((source, data) => {this.setState({photo: source, datain: data})});
  }
 imageupload(title){
    var name=this.state.img+title.split(' ').join('')+".jpg";
    upload([
      { name : 'info', data : 'image/jpeg'},
      { name: 'image', filename: name, data: this.state.datain }
    ])

    
  }
  onCancel() {
      this.TimePicker.close();
    }

formatting(hr,minute) {
       hr -=2;
        var en=hr+2;
        if(hr<10){
          en ='0'+en;
         this.setState({ end: `${en}:${minute}` });
         return '0' + hr;
        }
        else{
          
          this.setState({ end: `${en}:${minute}` });
          return hr; 
        }
      }
    onConfirm(hour, minute) {
      this.setState({ time: `${this.formatting(hour,minute)}:${minute}` });
      this.TimePicker.close();
      }
  onSubmit = () =>{
      var t= this.state.title;  
      starttime=this.state.date+"T"+this.state.time+':00.000Z+02:00';
      endtime=this.state.date+"T"+this.state.end+':70.000Z+02:00';
       const users= {
            email:global.Email,
            title : this.state.title,
            description : this.state.text,
            venue : this.state.place,
            start:starttime,
            end :endtime,
            image : this.state.img+t.split(' ').join('')+".jpg",
            Province:global.Province,
            City:global.City
            
        }
       axios({
         method: 'post',
        url: 'http://196.24.172.173:3000/approved/add',
        data:users
        });
        this.imageupload(t);  

        

   };

render(){
	const { photo } = this.state;
  	return (
     <View style={styles.Viewstyle}>
      
         <TextInput
         onChangeText={(title) => this.setState({title})}
         top={0}
         bottom={5}
         maxLength={50}
         backgroundColor="#686cc3"
         placeholder="title of Event"
         height={45}
        />
        <TextInput
         onChangeText={(text) => this.setState({text})}
         maxLength={50}
         placeholder="Write a Post"
         style={styles.textArea} 
         multiline={true}
        />  
      
      <CardSection>
       <TimePicker
          ref={ref => {this.TimePicker = ref;}}
          onCancel={() => this.onCancel()}
          onConfirm={(hour, minute) => this.onConfirm(hour, minute)}
        />
         
         <TouchableOpacity onPress={this.show.bind(this)}>
         <FontAwesomeIcon icon={ faImage} style={styles.iconStyle} size={30} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.TimePicker.open()} >
         <FontAwesomeIcon icon={ faClock } style={styles.iconStyle} size={30} />
        </TouchableOpacity>
        <DatePicker
                style={{width: 30,    paddingBottom:20}}
                date={this.state.date}
                mode="date"
                placeholder="select date"
                hideText={true}
                format="YYYY-MM-DD"
                minDate="2019-09-10"
                maxDate="2090-06-01"
                confirmBtnText="Confirm"
                cancelBtnText="Cancel"
                customStyles={{
                  dateInput: {
                    backgroundColor: 'rgb(255,255,255)',
                    color:'black',
                    height:35,
                    marginLeft: 2,
                    borderRadius: 5,
                borderColor: '#007aff',
                borderWidth: 1
                  }
                }}
                onDateChange={(date) => {this.setState({date: date})}}
          />
        <TouchableOpacity style={styles.buttonStyle} onPress={this.onSubmit}>
         <Text style={styles.textStyle}>Post</Text>
        </TouchableOpacity>
      </CardSection>
     </View>
  )
 }
};
const styles = {
   textArea: {
   	fontSize: 14,
    height:80,
    borderRadius: 5,
    marginLeft: 3,
    marginRight: 3,
   	textAlignVertical: "top",
   	borderColor: '#007aff',
    borderWidth: 1
    },
  Viewstyle:{
    backgroundColor:'#686cc3',
    borderRadius: 55,
    borderWidth: 1,
    marginLeft: 5,
    marginRight: 5,
    top:6
  
  }, 
  iconStyle: {
  	width: 120,
  	height: 40,
  	marginLeft: 8,
  	color:'rgb(0,0,0)'
  },
   buttonStyle: {
   	backgroundColor: 'rgb(255,255,255)',
    borderRadius: 5,
    borderColor: '#007aff',
    borderWidth: 1,
    flex: 0.35,
    height: 35,
    paddingBottom:3,
    marginLeft: 8,
    marginRight: 8 
  },
  textStyle: {
    alignSelf: 'center',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 6,
    paddingBottom: 12
  }
  
};
