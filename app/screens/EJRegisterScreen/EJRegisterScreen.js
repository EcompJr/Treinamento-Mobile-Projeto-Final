//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet , FlatList, Image, TextInput, TouchableOpacity, Linking} from 'react-native';
import GeralButton from './../../components/GeralButton/';
import GeralTextInput from './../../components/GeralTextInput/';
import * as firebase from "firebase";
import Router from './../../router/router.js';


if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: "AIzaSyBhBICcj1AX54I5yMG8__Qox3nJhFguSAI",
    authDomain: "mobilefinalecompjr.firebaseapp.com",
    databaseURL: "https://mobilefinalecompjr.firebaseio.com",
    storageBucket: "mobilefinalecompjr.appspot.com"
  });
}

// create a component
class EJRegisterScreen extends Component {
  constructor() {
    super();
    this.state = {
      ejName: '',
      cityState: ''
    };
  }

  updateState = (key, value) => {
    const update = {[key]: value};
    this.setState(update);
  } 

  register = () => {
    var root = firebase.database().ref();
    var postData = {
      ejName: this.state.ejName,
      cityState: this.state.cityState
    };
    changeScreenFunction = this.props.changeScreen;
    root.child("ej").child(this.state.ejName).set(postData).then(function () {
      changeScreenFunction('memberRegisterScreen');
    });
  }

  render() {
    let {changeScreen} = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.titleWrap}>
          <View style={styles.textWrap}>
            <Text style={styles.titleText}>Cadastre sua EJ</Text>
          </View>
          <View style={styles.separator}></View>
        </View>
        <View style={styles.inputsWrap}>
          <View style={styles.inputWrap}>
            <GeralTextInput placeholderName="Nome da Empresa" inputKey={'ejName'} updateState={this.updateState} isPassword={false}></GeralTextInput>
          </View>
          <View style={styles.inputWrap}>
            <GeralTextInput placeholderName="Cidade - Estado" inputKey={'cityState'} updateState={this.updateState} isPassword={false}></GeralTextInput>
          </View>
        </View>
        <View style={styles.buttonWrap}>
          <GeralButton buttonName="Cadastrar" clickFunction={this.register} buttonColor="#EEDB22" buttonBorderColor="white"></GeralButton>              
        </View>
      </View>
    );
  }

}

// define your styles
const styles = StyleSheet.create({
    container: {
      backgroundColor: '#FAFAFC',
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    }, titleText: {
      fontSize: 45,
      color: '#18BC41',
      textAlign: 'center',
      fontFamily: 'AdventPro-Medium'
    }, textWrap: {
    }, separator: {
      borderBottomColor: '#424242', 
      borderBottomWidth: 2,
      width: 140
    }, buttonWrap: {
      flex: 2
    }, inputWrap: {
      paddingVertical: 3      
    }, holderText: {
      backgroundColor: '#424242',      
      fontFamily: 'AdventPro-Medium',
      fontSize: 18    
    }, titleWrap: {
      alignItems: 'center',
      flex: 4,
      paddingVertical: 7
    }, inputsWrap: {
      flex: 4,
      width: 300,
      paddingVertical: 4
    }
});

//make this component available to the app
export default EJRegisterScreen;
