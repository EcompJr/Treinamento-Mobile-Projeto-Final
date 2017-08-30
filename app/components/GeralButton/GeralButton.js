//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Initialize from './../../router/router.js';

// create a component
class GeralButton extends Component {
    handleClick(clickArguments) {
        {this.props.clickFunction(clickArguments)};
    }

    render() {
        let {buttonName, buttonColor, buttonBorderColor, clickFunction, clickArguments} = this.props;

        return (
            <TouchableOpacity onPress={() => {this.handleClick(this.props.clickArguments)}} style={[styles.buttonWrap, {backgroundColor: buttonColor, borderColor: buttonBorderColor}]}>
                <Text style={styles.buttonText}>{buttonName}</Text>
            </TouchableOpacity>
        );
    }


}

// define your styles
const styles = StyleSheet.create({
    buttonWrap: {
        width: 150,
        height: 60,      
        borderRadius: 28,
        borderWidth: 1
    }, buttonText: {
        paddingVertical: 13,
        paddingHorizontal: 2,
        fontSize: 20,
        fontFamily: 'AdventPro-Medium',       
        color: 'black',
        textAlign: 'center'      
      }
});

export default GeralButton;
