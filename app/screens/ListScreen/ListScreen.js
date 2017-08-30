//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet , FlatList, Image, TextInput, TouchableOpacity, Linking, ScrollView} from 'react-native';
import GeralButton from './../../components/GeralButton/';
import GeralTextInput from './../../components/GeralTextInput/';
import * as firebase from "firebase";
import Accordion from 'react-native-collapsible/Accordion';

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: "AIzaSyBhBICcj1AX54I5yMG8__Qox3nJhFguSAI",
    authDomain: "mobilefinalecompjr.firebaseapp.com",
    databaseURL: "https://mobilefinalecompjr.firebaseio.com",
    storageBucket: "mobilefinalecompjr.appspot.com"
  });
}

const SECTIONS = [
    {
      title: 'First',
      content: {user: {name: 'Valmir'}}
    }
];

// create a component
class ListScreen extends Component {
  _renderHeader(section, index, isActive) {
    return (
      <View style={isActive ? styles.activeHeader : styles.inactiveHeader}>
        <Text style={isActive? styles.activeHeaderText : styles.inactiveHeaderText}>{section.title}</Text>
      </View>
    );
  }

  _renderContent(section, index, isActive) {
    return (
      <View style={styles.content}>
        <Text>{section.content.user.name}</Text>
      </View>
    );
  }
    
  render() {
    let {changeScreen} = this.props;
    return (
        <View style={styles.container}>
            <View style={styles.titleWrap}>
                <Text style={styles.titleText}>Empresas Juniores</Text>
                <View style={styles.separator}></View>
            </View>
          
            <View style={styles.listWrap}>
                <ScrollView>
                    <Accordion
                    underlayColor={'#fff'}
                    sections={SECTIONS}
                    renderHeader={this._renderHeader}
                    renderContent={this._renderContent}
                    />
                </ScrollView>
            </View>

            <View style={styles.buttonWrap}>
                <GeralButton buttonName="Logout" clickArguments="" clickFunction={this.register} buttonColor="#18BC41" buttonBorderColor="white"></GeralButton>              
            </View>
        </View>
    );
  }

}

// define your styles
const styles = StyleSheet.create({
    container: {
      backgroundColor: '#FAFAFC',
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    }, titleText: {
      fontSize: 45,
      color: '#EEDB22',
      textAlign: 'center',
      fontFamily: 'AdventPro-Medium'
    }, titleWrap: {
      alignItems: 'center',
      flex: 2,
      paddingVertical: 7
    }, separator: {
      borderBottomColor: '#424242', 
      borderBottomWidth: 2,
      width: 140
    }, buttonWrap: {
      flex: 1,
      paddingVertical: 10
    }, listWrap: {
      flex: 8,
      width: '100%',
      paddingVertical: 4
    }, activeHeader: {
        backgroundColor: '#616161'
    }, inactiveHeader: {
        backgroundColor: '#FAFAFC',
        borderColor: '#000',
        borderWidth: 1
    }, activeHeaderText: {
        color: '#fff',
        fontSize: 18
    }, inactiveHeaderText: {
        color: '#000',
        fontSize: 18
    }
});

//make this component available to the app
export default ListScreen;
