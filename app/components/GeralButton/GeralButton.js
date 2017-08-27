//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

// create a component
class GeralButton extends Component {
    handleClick() {
        this.props.memberRegister();
    }

    render() {
        let {buttonName, buttonColor, buttonBorderColor, memberRegister} = this.props;

        return (
            <TouchableOpacity onPress={() => this.handleClick()} style={[styles.buttonWrap, {backgroundColor: buttonColor, borderColor: buttonBorderColor}]}>
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
