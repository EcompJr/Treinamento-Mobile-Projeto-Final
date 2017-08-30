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
      alert('Login efetuado!');
      this.props.changeScreen('listScreen');
    } catch(error) {
      alert(error.toString());
    }
  }
    render() {
      let {changeScreen} = this.props;
        return (
            <View style={styles.container}>
              <View style={styles.titleWrap}>
                <Text style={styles.titleText}>Conecte-se!</Text>
                <View style={styles.separator}></View>
              </View>
              <View style={styles.inputsWrap}>
                <View style={styles.inputWrap}>
                  <GeralTextInput placeholderName="Email" inputKey={'email'} updateState={this.updateState} isPassword={false}></GeralTextInput>
                </View>
                <View style={styles.inputWrap}>
                  <GeralTextInput placeholderName="Senha" inputKey={'password'} updateState={this.updateState} isPassword={true}></GeralTextInput>
                </View>              
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
      flex: 1,
      backgroundColor: '#FAFAFC',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    }, titleText: {
      fontSize: 45,
      color: '#18BC41',
      textAlign: 'center',
      fontFamily: 'AdventPro-Medium',
      alignItems: 'flex-start'
    }, titleWrap: {
      alignItems: 'center',
      flex: 4,
      paddingVertical: 7
    }, separator: {
      borderBottomColor: '#424242', 
      borderBottomWidth: 2,
      width: 140
    }, buttonWrap: {
      flex: 2
    }, inputsWrap: {
      flex: 5,
      width: 300,
      paddingVertical: 4
    }, holderText: {
      backgroundColor: '#424242',      
      fontFamily: 'AdventPro-Medium',
      fontSize: 18    
    }, inputWrap: {
      paddingVertical: 5
    }
});

//make this component available to the app
export default LoginScreen;
