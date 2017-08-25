//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

// create a component
class GeralTextInput extends Component {
    render() {
        let {placeholderName, isPassword} = this.props;

        return (
            <TextInput placeholderTextColor='#fff' style={styles.holderText} placeholder={placeholderName} secureTextEntry={isPassword}></TextInput>         
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    holderText: {
        backgroundColor: '#424242',      
        fontFamily: 'AdventPro-Medium',
        fontSize: 18    
    }
});

export default GeralTextInput;
