//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet , FlatList, Image, TextInput, TouchableOpacity, Linking} from 'react-native';
import GeralButton from './../../components/GeralButton/';
import GeralTextInput from './../../components/GeralTextInput/';
import * as firebase from "firebase";

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: "AIzaSyBhBICcj1AX54I5yMG8__Qox3nJhFguSAI",
    authDomain: "mobilefinalecompjr.firebaseapp.com",
    databaseURL: "https://mobilefinalecompjr.firebaseio.com",
    storageBucket: "mobilefinalecompjr.appspot.com"
  });
}

// create a component
class LoginScreen extends Component {
  constructor() {
    super();
    this.state = {
        email: '',
        password: ''
    };
  }

  updateState = (key, value) => {
    const update = {[key]: value};
    this.setState(update);
  } 

  login = () => {
    try {
      if(this.state.password.length < 6) {
        alert("A senha deve conter ao menos 6 caracteres!");
        return;        
      }

      if(this.state.email.indexOf('.com') == -1 || this.state.email.indexOf('@') == -1) {
        alert("O seu endereço de email está em formato incorreto!");
        return;        
      }

      firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password);
      //redirecionar
    } catch(error) {
      alert(error.toString());
    }
  }
    render() {
        return (
            <View style={styles.container}>
              <View style={styles.textWrap}>
                <Text style={styles.titleText}>Conecte-se!</Text>
              </View>
              <View style={styles.separator}></View>
              <View style={styles.inputWrap}>
                <GeralTextInput placeholderName="Email" inputKey={'email'} updateState={this.updateState} isPassword={false}></GeralTextInput>
              </View>
              <View style={[styles.inputWrap, styles.passwordWrap]}>
                <GeralTextInput placeholderName="Senha" inputKey={'password'} updateState={this.updateState} isPassword={true}></GeralTextInput>
              </View>
              <View style={styles.buttonWrap}>
                <GeralButton clickFunction={this.login} clickArguments="" buttonName="Conectar" buttonColor="#EEDB22" buttonBorderColor="white"></GeralButton>              
              </View>
            </View>
        );
    }

}

// define your styles
const styles = StyleSheet.create({
    container: {
      backgroundColor: '#FAFAFC',
      flex: 1
    }, titleText: {
      fontSize: 45,
      color: '#18BC41',
      textAlign: 'center',
      fontFamily: 'AdventPro-Medium'
    }, textWrap: {
      marginTop: 60
    }, separator: {
      marginTop: 20,
      marginLeft: 135,
      marginBottom: 60,
      borderBottomColor: '#424242', 
      borderBottomWidth: 2,
      width: 140
    }, buttonWrap: {
      marginTop: 150
    }, inputWrap: {
      width: 300,
      marginTop: 80,
      marginLeft: 60,
      height: 40
    }, passwordWrap: {
      marginTop: 20,
    }, holderText: {
      backgroundColor: '#424242',      
      fontFamily: 'AdventPro-Medium',
      fontSize: 18    
    }
});

//make this component available to the app
export default LoginScreen;
