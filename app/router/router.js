//import liraries
import React, { Component } from 'react';
import {View, Text} from 'react-native';
import LoginScreen from './../screens/LoginScreen/';
import EJRegisterScreen from './../screens/EJRegisterScreen/';
import MemberRegisterScreen from './../screens/MemberRegisterScreen/';
import FirstScreen from './../screens/FirstScreen/';


// create a component
class Router extends Component {
    constructor() {
        super();
        this.state = {
            selectedScreen: 'firstScreen'
        };
      }
    
    changeScreen = (value) => {
        stateUpdate = true;
        const update = {selectedScreen: value};
        this.setState(update);
    } 

    renderScreen = (screenName) => {
        if(screenName == 'loginScreen') {
            return <LoginScreen changeScreen={this.changeScreen} />;
        } else if (screenName == 'ejRegisterScreen') {
            return <EJRegisterScreen changeScreen={this.changeScreen} />;            
        } else if (screenName == 'memberRegisterScreen') {
            return <MemberRegisterScreen changeScreen={this.changeScreen} />;            
        } else if(screenName == 'firstScreen') {
            return <FirstScreen changeScreen={this.changeScreen} />;
        }
    }

    render() {
        return (
            this.renderScreen(this.state.selectedScreen)
        );
    }

}


//make this component available to the app
export default Router;
