//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet , FlatList, Image, TouchableOpacity, Linking} from 'react-native';
import GeralButton from './../../components/GeralButton/';

// create a component
class FirstScreen extends Component {
  render() {
    let {changeScreen} = this.props;   
    return (
        <View style={styles.container}>
          <Text style={styles.titleText}>Movimento{"\n"}Empresa Júnior</Text>
          <View style={styles.separatorParent}>
            <View style={styles.separator}></View>
          </View>
          <View style={styles.buttonParent}>
            <GeralButton clickFunction={this.props.changeScreen} clickArguments="memberRegisterScreen" buttonName="Cadastre-se" buttonColor="#fff" buttonBorderColor="#424242"></GeralButton>
          </View>
          <View style={styles.buttonParent}>          
            <GeralButton clickFunction={this.props.changeScreen} clickArguments="loginScreen" buttonName="Login" buttonColor="#fff" buttonBorderColor="#424242"></GeralButton>
          </View>
        </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
    container: {
      backgroundColor: '#424242',
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    }, titleText: {
      fontSize: 45,
      color: 'white',
      textAlign: 'center',
      fontFamily: 'AdventPro-Medium'
    }, separator: {
      borderBottomColor: 'white', 
      borderBottomWidth: 0.5,
      width: 80
    }, separatorParent: {
      paddingVertical: 20      
    }, buttonParent: {
      paddingVertical: 10
    }
});

//make this component available to the app
export default FirstScreen;
