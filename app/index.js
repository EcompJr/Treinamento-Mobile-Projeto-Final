//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet , FlatList, Image, TouchableOpacity, Linking} from 'react-native';
import GeralButton from './components/GeralButton';

// create a component
class FirstScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
              <View style={styles.textWrap}>
                <Text style={styles.titleText}>Movimento{"\n"}Empresa Júnior</Text>
              </View>
              <View style={styles.separator}></View>
              <GeralButton buttonName="Cadastre-se" buttonColor="#fff" buttonBorderColor="#424242"></GeralButton>
              <GeralButton buttonName="Login" buttonColor="#fff" buttonBorderColor="#424242"></GeralButton>
            </View>
        );
    }

}

// define your styles
const styles = StyleSheet.create({
    container: {
      backgroundColor: '#424242',
      flex: 1
    }, titleText: {
      fontSize: 45,
      color: 'white',
      textAlign: 'center',
      fontFamily: 'AdventPro-Medium'
    }, textWrap: {
      marginTop: 200
    }, separator: {
      marginTop: 20,
      marginLeft: 160,
      marginBottom: 60,
      borderBottomColor: 'white', 
      borderBottomWidth: 0.5,
      width: 80
    }
});

//make this component available to the app
export default FirstScreen;
