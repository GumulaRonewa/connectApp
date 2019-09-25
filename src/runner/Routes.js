import React from 'react';
import {Router, Scene} from 'react-native-router-flux';
import Login from './src/screens/Login';
import Signup from './src/screens/Signup';
import App from './App';


export default class Routes extends React.Component{
    
    
    
    render(){
        return(
            
            <Router>
                <Scene key="root" hideNavBar={true}>
                    <Scene key="login" component={Login} title="Login"/>
                    <Scene key="signup" component={Signup} title="Signup"/>
                    <Scene key="App" component={App} title="CNS"/>
                </Scene>
            </Router>  
        )
    }
}