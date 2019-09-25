import React from 'react';
import {FlatList, TouchableOpacity, View, Text, StyleSheet, Button, Alert, Image, RefreshControl ,ScrollView, Modal} from 'react-native';
import {List, ListItem } from 'react-native-elements';
import axios from 'axios';
import RNCalendarEvents from 'react-native-calendar-events';
import {faPlusCircle} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';


export default class Posts extends React.Component {
    constructor(props) {
        super(props);
        global.Province = "WC";
        global.City="null";
        global.Suburb='null';
            this.state = {
                seed: 1,
                page: 1,
                list: [],
                refreshing: false,

               postDataSource: [],
                isLoading: false,
                isRefreshing: false,
            };
      }

    handleRefresh = () => {
        this.setState({
            isRefreshing: true,
           }, () => {
                          this.getDetails();
           });
                 
    };

    _requestCalendarPermissions = async () => {
    try {
      let requestCalendarPermission = await RNCalendarEvents.authorizeEventStore();
      Alert.alert("Calendar Permission", requestCalendarPermission, ["OK"]);
    } catch (error) {
      Alert.alert("Failed to ask permission");
    }
  };
   AddEvent = (title,start,end) =>{
     this._requestCalendarPermissions;
      RNCalendarEvents.saveEvent(title, {
      startDate: start,
      endDate: end
  })
  }
   

    componentWillMount() {
                this.getDetails();

    };
 getDetails =() =>{
        var url='http://196.24.172.173:3000/location/details/:email='+(global.Email).toLowerCase();
        axios.get(url)
        .then(response => {
          infos = response.data;
          global.Province=infos[0].Province;
          global.City=infos[0].City;
          this.loadposts();

        })

    }

    loadposts =() => {
        var infos=null;
        var loc=global.Province+","+global.City+","+global.Suburb;
        var url='http://196.24.172.173:3000/approved/:loc='+loc;
        axios.get(url)
        .then(response => {
          infos = response.data;
          this.setState({list:infos,isRefreshing:false});
          this.getItems();
        })
    
    };
     // Get posts with the selected category from database
    getItems(){
        var arrayLength = this.state.list.length;
        var use = this.state.list;
        let items = [];

       for (var i = 0; i < arrayLength; i++) {
           items.push({
                    copy: use[i],
                    title: use[i].title,
                    body:  use[i].description,
                    start: use[i].starttime,
                    end:use[i].endtime,
                    id: use[i]._id,
                    imageUrl:'http://196.24.172.173:3000/images/retrieve/:name='+ use[i].image,
                    _key: "1",
                });
        
      }
        this.setState({postDataSource: items});
    }
  

    render() {

        return (      
                <FlatList
                    data={this.state.postDataSource}
                    renderItem={({ item }) => 
                         <ScrollView>
                            <View style={styles.card}>
                                <Image 
                                    style={{width: '100%', height: 300}}
                                    source={{uri: item.imageUrl}}
                                />
                                <View style={{margin: 20}}>
                                    <Text style={{fontSize: 20}}>{item.title}</Text>
                                    <View
                                        style={{
                                            borderBottomColor: 'grey',
                                            borderBottomWidth: 1,
                                            marginBottom: 5,
                                        }}/>
                                    <Text style={{fontSize: 17}}>{item.body}</Text>
                                </View>
                                <View>
                                    <Button title='Add to Calendar' onPress={this.AddEvent(item.title,item.start,item.end)}/> 
                                </View>
                            </View>
                                
                        </ScrollView>

                }
                
                    refreshControl={
                            <RefreshControl
                             refreshing={this.state.isRefreshing}
                             onRefresh={this.handleRefresh}
                        />
                    }
                    
                />
           
        
        )
    }
}
const styles = StyleSheet.create({
    card: {
        //backgroundColor: 'lightgrey',
        borderWidth: 1, 
        borderRadius: 8,
        overflow: "hidden",
        //height: 150,
        margin: 15,
    },
    buttonViewContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    container: {
    flexDirection: 'row',

  },
  list: {
        flex: 1,

  },
   fab:{
    height: 50,
    width: 50,
    borderRadius: 200,
    position: 'absolute',
    bottom: 20,
    right: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#686cc3',
  },
  text:{
    fontSize:30,
    color:'white'
  },
  icon:{
    paddingBottom:30,
    position:"absolute"
  },
   buttonStyle: {
    backgroundColor: 'rgb(255,255,255)',
    borderRadius: 5,
    borderColor: '#007aff',
    borderWidth: 1,
    height: 40,
    top: 5,
    bottom: 5,
    flex: 0.4,
    marginLeft: 5,
    marginRight: 5
  },
  buttonContainer: {
        borderRadius: 4,
         borderColor: '#007aff',
        borderWidth: 1,
        flex: 0.4,
        marginLeft: 5,
  }
})


 