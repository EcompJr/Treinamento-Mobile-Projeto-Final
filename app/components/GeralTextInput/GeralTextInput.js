//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

// create a component
class GeralTextInput extends Component {
    handleInput(inputKey, text) {
        this.props.updateState(inputKey, text);
    }

    render() {
        let {placeholderName, isPassword, inputKey} = this.props;

        return (
            <TextInput placeholderTextColor='#fff' onChangeText={(text) => this.handleInput(this.props.inputKey, text)} style={styles.holderText} placeholder={placeholderName} secureTextEntry={isPassword}></TextInput>         
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
