//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import * as firebase from "firebase";

firebase.initializeApp({
  apiKey: "AIzaSyBhBICcj1AX54I5yMG8__Qox3nJhFguSAI",
  authDomain: "mobilefinalecompjr.firebaseapp.com",
  databaseURL: "https://mobilefinalecompjr.firebaseio.com",
  storageBucket: "mobilefinalecompjr.appspot.com"
});
var database = firebase.database();

// create a component
class GeralButton extends Component {
    render() {
        let {buttonName, buttonColor, buttonBorderColor, buttonFunction} = this.props;

        return (
            <TouchableOpacity style={[styles.buttonWrap, {backgroundColor: buttonColor, borderColor: buttonBorderColor}]}>
                <Text style={styles.buttonText}>{buttonName}</Text>
            </TouchableOpacity>            
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    buttonWrap: {
        marginTop: 20,
        marginLeft: 130,
        width: 150,
        height: 60,      
        borderRadius: 28,
        borderWidth: 1
    }, buttonText: {
        marginTop: 15,
        fontSize: 20,
        fontFamily: 'AdventPro-Medium',       
        color: 'black',
        textAlign: 'center'      
      }
});

export default GeralButton;
