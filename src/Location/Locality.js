import React, { Component } from 'react';
import { View, Picker, Text, StyleSheet, TouchableOpacity, ScrollView , Alert} from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import PickerCheckBox from 'react-native-picker-checkbox';
import Header from '../header/Header'
import axios from 'axios';

export default class Locality extends Component {
    state = {choosenLabel: 'Choose province', 
    choosenindex: '0',
    choosen: '0',
    choosenCity: "Choose a City",
    cities:["Choose a City"]

  } 
  update =() =>{
    this.handleUpdate();
  }
   componentDidMount() {
     this.state.cities=[];
     this.state.cities.push(global.City)
    };
handleUpdate = () => {
        const details={
        email: (global.Email).toLowerCase(),
        Province: this.state.choosenLabel,
        City:this.state.cities[this.state.choosenCity]
      }
       axios({
         method: 'post',
         url: 'http://196.24.172.173:3000/location/update',
        data:details
        });     
              Alert.alert("Updated!");
             
    }; 
  onPickerValueChange=(value, index)=>{
    global.City=this.state.cities[value];
    this.setState({choosenCity:value})  
  }
  onPickerChange=(value, index)=>{
    this.setState(
      {
        choosenLabel: value, 
        choosenindex: index
      },
      () => {
         global.Province = this.state.choosenLabel;
         var prov=Provinces[this.state.choosenindex]
         var arr=[];
         this.state.cities=[];
      for (i in prov.Cities) {
        arr.push(prov.Cities[i].name)
     }
     this.setState({cities : arr});
      }
    );
  }
  render(){
  	return (

     <View style={styles.vStyle}>
            <Header headerText={'Region'} />
       <ScrollView
          contentInsetAdjustmentBehavior="automatic" >
      <Card>
         <Text style={styles.texts}> Provinces</Text>
      </Card>
      <Picker selectedValue={global.Province} onValueChange={this.onPickerChange}>
    	<Picker.Item label="Western Cape" value="WC" />
      <Picker.Item label="Gauteng" value="GP" />
      <Picker.Item label="KwaZulu-Natal" value="KZN" />
      <Picker.Item label="Free State" value="FS" /> 
      <Picker.Item label="Mpumalanga" value="MP" /> 	 
       <Picker.Item label="Eastern Cape" value="EC" />
    	<Picker.Item label="North West" value="NW" />
    	<Picker.Item label="Limpopo" value="LP" />
      <Picker.Item label="Northern Cape" value="NC" />

    </Picker>
    <Card>
         <Text style={styles.texts}> City/Town </Text>
      </Card>
     <Picker mode="dropdown" selectedValue={global.City} onValueChange={this.onPickerValueChange}>
      	{this.state.cities.map((item, index) => {
              return (< Picker.Item label={item} value={index} key={index} />);
          })} 
      </Picker>
     <CardSection>
       <TouchableOpacity style={styles.buttonStyle} onPress={this.update}>
         <Text style={styles.textStyle}>Select</Text>
      </TouchableOpacity>
     </CardSection>
     <CardSection />
     <CardSection />
     <CardSection />
     <CardSection />
     <CardSection />

   </ScrollView>  
    </View>
  )
  }
}
  const styles = {
   vStyle: {
      backgroundColor:'rgb(255,255,255)',
      flex:1
  }
  ,
  texts: {
    fontSize: 24,
    textAlignVertical: "center",
    textAlign: "center",
    fontWeight: '500'
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
  textStyle: {
    alignSelf: 'center',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10
  }
};
var Wc = {
  "name":"Western Cape",
  "Cities": [
    {"name":"Cape Town", "surburb":[ "Gardens","Sea Point","Philadelphia","Rondebosch","Claremont","Muizenberg" ] },
    {"name":"Somerset West", "surburb":[ "Croydon","Heritage Park","Heldervue","Schonenberg Estate","Roundhay","Rome Glen"] },
    { "name":"Stellenbosch", "surburb":["Klapmuts","De Wijnlanden Residential Estate","Paradyskloof","Jamestown","Welgevonden Estate","Kylemore"] },
    { "name":"Hout Bay", "surburb":["Beach Estate","Victorskloof","Northshore","Ruyteplaats","Kenrock Country Estate"] },
    { "name":"Strand", "surburb":["Greenways Golf Estate","Broadlands Village","Onverwacht","Die Bos","Brackenfell","Kuils River","George","Plettenberg Bay"] },
    { "name":"Durbanville", "surburb":["Aurora","Kenridge","Sonstraal","Parow","Blouberg","Knysna","Oudtshoor"] },
    { "name":"Paarl", "surburb":["Val De Vie Estate","Boschenmeer Golf & Country Estate","Pearl Valley at Val de Vie","De Zoete Inval","Hermanus","Milnerton","West Coast","Worcester"] },
    { "name":"Bellville", "surburb":["Boston","Welgedacht","Loevenstein","Welgemoed","Langebaan","Gordons Bay","Mossel Bay","Hartenbos"] },
  ]
 };
 var Gp = {
  "name":"Gauteng",
  "Cities": [
    {"name":"Pretoria", "surburb":["Montana","Sunnyside","Equestria","Silver Lakes Golf Estate","Waterkloof"] },
    {"name":"Midrand", "surburb":["Kyalami","Kyalami Estate","Clayville","Klipfontein View","Noordwyk" ] },
    {"name":"Centurion", "surburb":["Midstream Estate","Heuwelsig Estate","Eldoraigne","Rooihuiskraal","The Reeds","Wierda Park" ] },
    {"name":"Johannesburg", "surburb":["Braamfontein","Parktown","Kensington","Rosebank","Naturena","Houghton Estate" ] },
    {"name":"Randburg", "surburb":["Randpark Ridge","Linden","Northcliff","North Riding","Mabopane","Vanderbijlpark","Krugersdorp","Bedfordview","East Rand"] },
    {"name":"Soweto", "surburb":[ "Diepkloof","Jabulani","Eldorado Park","Dobsonville","Boksburg","Benoni","Westonaria","Vereeniging","Bronkhorstspruit"] },
    {"name":"Sandton", "surburb":["Morningside","Dainfern","Bryanston","Fourways","Kempton Park","Roodepoort","Randfontein","Brakpan","Heidelberg" ] },
    {"name":"Alberton", "surburb":["Meyersdal","Brackenhurst","Brackendowns","Randhart","Fochville","Edenvale","Germiston","Springs" ] },
    
  ]
 };
  var KZN = {
  "name":"KwaZulu-Natal",
  "Cities": [
    {"name":"Durban", "surburb":["Morningside","Kenville","Reservoir Hills","North Beach","Durban Central","Glenwood"] },
    {"name":"Pietermaritzburg", "surburb":["Wembley","Scottsville","Northdale","Clarendon","Pelham","Ashburton"] },
    {"name":"Umhlanga", "surburb":["Umhlanga Rocks","La Lucia","Umhlanga Ridge","Somerset Park","Sunningdale"] },
    {"name":"Phoenix", "surburb":["Brookdale","Southgate","Trenance Manor","Longcroft","Lenham","Palmview"] },
    {"name":"Ballito", "surburb":["Simbithi Eco Estate","Zimbali Coastal Resort & Estate","Sheffield Beach","Seaward Estates","Hillcrest","Newcastle","Ladysmith","Midlands"] },
    {"name":"Westville", "surburb":["Berea West","Dawncliffe","Atholl Heights","Chiltern Hills","Pinetown","Umdloti","Kloof","Scottburgh"] },
    {"name":"Richards Bay", "surburb":["Meer En See","Arboretum","Birdswood","Veld En Vlei","Queensburgh","Empangeni","Mount Edgecombe"] },
    {"name":"Amanzimtoti", "surburb":["Margate","Howick","Port Shepstone"] },
    
  ]
 };
 var FS= {
  "name":"FS",
  "Cities": [
    {"name":"Bloemfontein", "surburb":["Langenhovenpark","Willows","Fauna","Westdene","Woodland Hills Wildlife Estate","Grasslands"] },
    {"name":"Welkom", "surburb":["Riebeeckstad","Bedelia","Flamingo Park","Dagbreek","Naudeville","Jan Cillierspark"] },
    {"name":"Sasolburg", "surburb":["Vaalpark","Roodia","Sasolburg Central","Uitvlught","Mullersrust","Vaal Power A H"] },
    {"name":"Parys", "surburb":["Parys","Parys Golf & Country Estate","Vaal de Grace Golf Estate"] },
    {"name":"Bethlehem", "surburb":["Panorama","La Provance","Eureka","Bohlokong"] },
    {"name":"Virginia", "surburb":["Harmony","Saaiplaas","Merriespruit","Kitty"] },
    {"name":"Odendaalsrus", "surburb":["Residentia","Kutlwanong","Eldorie","Hospitaalpark"] },
    {"name":"Harrismith", "surburb":["Bergsig","Kings Hill","Wilgepark"] },
   
    
  ]
 };
  var MP= {
  "name":"MP",
  "Cities": [
    {"name":"Nelspruit", "surburb":["Sonheuwel","West Acres","Stonehenge","Steiltes","Karino","Kamagugu"] },
    {"name":"Witbank", "surburb":["Reyno Ridge","Del Judor","Die Heuwel","Tasbet Park","Kwaguqa Ext 7","Ben Fleur"] },
    {"name":"Middelburg", "surburb":["Aerorand","Gholfsig","Clubville","Kanonkop","Dennesig","Groenkol"] },
    {"name":"Secunda", "surburb":["Evander","Trichardt","Kinross","Embalenhle","Thistle Grove"] },
    {"name":"White River", "surburb":["White River Country Estate","Rocky Drift","Kingsview","White River Central"] },
    {"name":"Ermelo", "surburb":["Chrissiesmeer","Ermelo","Breyten","Kwazanele"] },
    {"name":"Delmas", "surburb":["Botleng","Eloff","Droogefontein","Hazyview","Belfast","Komatipoort","Balfour"] },
    {"name":"Lydenburg", "surburb":["Lydenburg","Mashishing","Bethal","Kriel","Waterval Boven"] },
  
   
    
  ]
 };
 var EC= {
  "name":"EC",
  "Cities": [
    {"name":"Port Elizabeth", "surburb":["Summerstrand","Walmer","Lorraine","Humewood","Bluewater Bay","Mill Park"]},
    {"name":"East London", "surburb":["Gonubie","Mdantsane","Beacon Bay","Selborne","Vincent","Amalinda"]},
    {"name":"Jeffreys Bay", "surburb": ["Wavecrest","Paradise Beach","Marina Martinique","Aston Bay","C Place","Fountains Estate"]},
    {"name":"Uitenhage", "surburb":["Vanes Estate","Mosel","Fairbridge Heights","Penford","Van Riebeeck Hoogte","Winterhoek Park"]},
    {"name":"Grahamstown", "surburb":["Sunnyside","Oatlands","West Hill","Grahamstown Central"] },
    {"name":"Port Alfred", "surburb": ["West Bank","East Bank","Royal Alfred Marina","West Beach"]},
    {"name":"St Francis Bay", "surburb":["Canals","St Francis Bay Village","Santareme","St Francis Links","Queenstown","Cape St Francis","Somerset East","Steytlerville"] },
    {"name":"King Williams Town", "surburb":["Kaffrarian Heights","Club View","West Bank","Headlands"] },
    
 
  
   
    
  ]
 };
 var NW= {
  "name":"NW",
  "Cities": [
    
    {"name":"Rustenburg", "surburb":["Waterval East","Oos Einde","Rustenburg Central","Safari Gardens","Protea Park"] },
    {"name":"Potchefstroom", "surburb":["Baillie Park","Die Bult","Van Der Hoff Park","Grimbeeck Park","Miederpark"] },
    {"name":"Klerksdorp", "surburb":["Wilkoppies","Flamwood","Doringkruin","La Hoff","Meiringspark","Adamayview"] },
    {"name":"Hartbeespoort", "surburb":["Melodie","Xanadu Eco Park","Zilkaats Estate","Birdwood Estate","Schoemansville","Ifafi"] },
    {"name":"Brits", "surburb":["Elandsrand","Brits Central","De Wildt","Mamogaleskraal A H"] },
    {"name":"Stilfontein", "surburb":["Stilfontein","Khuma","Stilfontein Industrial","Stilfontein Ext 1"]},
    {"name":"Vryburg", "surburb":["Vryburg","Vryburg Rural","Kismet Park","Zeerust","Groot Marico","Koster"] },
    {"name":"Mafikeng", "surburb": ["Mooinooi","Swartruggens","Wolmaransstad"]}, 
  
   
    
  ]
 };
 var LP= {
  "name":"LP",
  "Cities": [
    
    {"name":"Polokwane", "surburb":["Seshego","Bendor","Flora Park","Ivy Park","Serala View","Welgelegen"] },
    {"name":"Tzaneen", "surburb":["Aquapark","Haenertsburg","Arborpark","Premierpark","Medi Park","Lushof A H"] },
    {"name":"Hoedspruit", "surburb":["Raptors View Wildlife Estate","Hoedspruit Wildlife Estate","Kampersrus","Moditlo Nature Reserve","Leopard Rock Nature Reserve","Zandspruit Bush & Aero Estate"]},
    {"name":"Mokopane", "surburb":["Impala Park","Kameeldoringpark","Chroompark","Mokopane Central","Akasia","Sterkrivier A H"] },
    {"name":"Bela Bela", "surburb":["Radium","Mabalingwe Nature Reserve","Pienaars River","Rust De Winter"]},
    {"name":"Thabazimbi", "surburb":["Rooiberg","Dwaalboom","Leeupoort","Modimolle","Northam","Marble Hall","Musina"] },
    {"name":"Lephalale", "surburb":["Lephalale Rural","Onverwacht","Phalaborwa","Alldays","Ohrigstad"] },
    {"name":"Makhado", "surburb":["Louis Trichardt","Waterpoort","Eltivillas","Thohoyandou"]},  
  ]
 };

  var NC= {
  "name":"NC",
  "Cities": [
    {"name":"Kimberley", "surburb":["Hillcrest","New Park","Royldene","Belgravia","De Aar","Colesberg"] },   
    {"name":"Upington", "surburb":["Die Rand","Marchand","Keidebees","Augrabies"] },   
    {"name":"Springbok", "surburb":["Carolusberg","Komaggas","Calvinia","Loxton","Keimoes","Kakamas"] },   
  ]
 };
 var Provinces=[Wc,Gp,KZN,FS,MP,EC,NW,LP,NC]
