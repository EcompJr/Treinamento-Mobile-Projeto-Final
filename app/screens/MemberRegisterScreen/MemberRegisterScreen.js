//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet , FlatList, Image, TextInput, TouchableOpacity, Linking, Picker} from 'react-native';
import GeralButton from './../../components/GeralButton/';
import GeralTextInput from './../../components/GeralTextInput/';
import * as firebase from "firebase";

firebase.initializeApp({
  apiKey: "AIzaSyBhBICcj1AX54I5yMG8__Qox3nJhFguSAI",
  authDomain: "mobilefinalecompjr.firebaseapp.com",
  databaseURL: "https://mobilefinalecompjr.firebaseio.com",
  storageBucket: "mobilefinalecompjr.appspot.com"
});

// create a component
class MemberRegisterScreen extends Component {
  constructor() {
    super();
    this.state = {
        name: '',
        role: '',
        email: '',
        password: '',
        ej: ''
    };
  }

  updateState = (key, value) => {
    const update = {[key]: value};
    this.setState(update);
  } 

  register = () => {
    //auth and send data to database
  }  

  render() {
        return (
            <View style={styles.container}>
              <View style={styles.textWrap}>
                <Text style={styles.titleText}>Junte-se a nós!</Text>
              </View>
              <View style={styles.separator}></View>
              
              <View style={[styles.inputWrap, {marginBottom: 20}]}>
                <Picker style={styles.holderPicker} onValueChange={(itemValue, itemIndex) => this.setState({ej: itemValue})}>
                  <Picker.Item style={styles.pickerItem} label="Java" value="java" />
                  <Picker.Item style={styles.pickerItem} label="JavaScript" value="js" />
                </Picker>
              </View>

              <View style={[styles.inputWrap]}>
                <GeralTextInput placeholderName="Nome" inputKey={'name'} updateState={this.updateState} isPassword={false}></GeralTextInput>
              </View>
              <View style={styles.inputWrap}>
                <GeralTextInput placeholderName="Cargo" inputKey={'role'} updateState={this.updateState} isPassword={false}></GeralTextInput>
              </View>
              <View style={[styles.inputWrap, {marginTop: 50}]}>
                <GeralTextInput placeholderName="Email" inputKey={'email'} updateState={this.updateState}  isPassword={false}></GeralTextInput>
              </View>      
              <View style={[styles.inputWrap]}>
                <GeralTextInput placeholderName="Senha" inputKey={'password'} updateState={this.updateState}  isPassword={true}></GeralTextInput>
              </View>                            
              <View style={styles.buttonWrap}>
                <GeralButton buttonName="Cadastrar" memberRegister={this.register} buttonColor="#18BC41" buttonBorderColor="white"></GeralButton>              
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
      color: '#EEDB22',
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
      marginTop: 80
    }, inputWrap: {
      width: 300,
      marginTop: 10,
      marginLeft: 60,
      height: 40
    }, passwordWrap: {
      marginTop: 20,
    }, holderPicker: {
      backgroundColor: '#424242',      
      color: '#fff'
    }
});

//make this component available to the app
export default MemberRegisterScreen;
