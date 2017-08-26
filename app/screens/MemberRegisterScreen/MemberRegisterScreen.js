//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet , FlatList, Image, TextInput, TouchableOpacity, Linking} from 'react-native';
import GeralButton from './../../components/GeralButton/';
import GeralTextInput from './../../components/GeralTextInput/';

// create a component
class MemberRegisterScreen extends Component {
    render() {
        return (
            
            <View style={styles.container}>
              <View style={styles.textWrap}>
                <Text style={styles.titleText}>Junte-se a nós!</Text>
              </View>
              <View style={styles.separator}></View>
              <View style={styles.inputWrap}>
                <GeralTextInput placeholderName="Empresa Júnior" isPassword={false}></GeralTextInput>
              </View>
              <View style={[styles.inputWrap]}>
                <GeralTextInput placeholderName="Nome" isPassword={false}></GeralTextInput>
              </View>
              <View style={styles.inputWrap}>
                <GeralTextInput placeholderName="Cargo" isPassword={false}></GeralTextInput>
              </View>
              <View style={[styles.inputWrap, {marginTop: 50}]}>
                <GeralTextInput placeholderName="Email" isPassword={false}></GeralTextInput>
              </View>      
              <View style={[styles.inputWrap]}>
                <GeralTextInput placeholderName="Senha" isPassword={true}></GeralTextInput>
              </View>                            
              <View style={styles.buttonWrap}>
                <GeralButton buttonName="Cadastrar" buttonColor="#18BC41" buttonBorderColor="white"></GeralButton>              
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
    }, holderText: {
      backgroundColor: '#424242',      
      fontFamily: 'AdventPro-Medium',
      fontSize: 18    
    }
});

//make this component available to the app
export default MemberRegisterScreen;
