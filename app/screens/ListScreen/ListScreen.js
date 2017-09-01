//import liraries
import React, { Component } from 'react';
import { View, Text, AsyncStorage, StyleSheet , FlatList, Image, TextInput, TouchableOpacity, Linking, ScrollView} from 'react-native';
import GeralButton from './../../components/GeralButton/';
import GeralTextInput from './../../components/GeralTextInput/';
import * as firebase from "firebase";
import Accordion from 'react-native-collapsible/Accordion';

if (!firebase.apps.length) {
  firebase.initializeApp({
    apikeyEj: "AIzaSyBhBICcj1AX54I5yMG8__Qox3nJhFguSAI",
    authDomain: "mobilefinalecompjr.firebaseapp.com",
    databaseURL: "https://mobilefinalecompjr.firebaseio.com",
    storageBucket: "mobilefinalecompjr.appspot.com"
  });
}
const SECTIONS = [
    {
      title: 'Atualizar lista',
      content: ''
    }
];

var ref = firebase.database().ref();

ref.on("value", function(snapshot) {
    if(snapshot.val() != null && snapshot.val().ej != null && snapshot.val().users != null) {
        ejs = snapshot.val().ej;
        users = snapshot.val().users;
        var update = [];
        var cont = 0;
        for(keyEj in ejs) {
            update = {title: ejs[keyEj].ejName};
            for(keyUser in users) {
                if(users[keyUser].ej == ejs[keyEj].ejName) {
                    nameKey = 'user' + cont + '_name';
                    roleKey = 'user' + cont + '_role';
                    emailKey = 'user' + cont + '_email';
                    
                    update[nameKey] = users[keyUser].name;
                    update[roleKey] = users[keyUser].role;
                    update[emailKey] = users[keyUser].email;
                    
                    cont = cont + 1;
                }
            }
            cont = 0;

            SECTIONS.push(update);
        }
    }
}, function (error) {
    console.log("Error: " + error.code) ;
});

// create a component
class ListScreen extends Component {
    componentWillMount() {
        // get the current user from firebase
        // const userData = this.props.firebaseApp.auth().currentUser;
        AsyncStorage.getItem('userData').then((user_data_json) => {
            let userData = JSON.parse(user_data_json);
            this.setState({
            user: userData,
            loading: false
            });
        });

    }
  _renderHeader(section, index, isActive) {
    return (
      <View style={isActive ? styles.activeHeader : styles.inactiveHeader}>
        <Text style={isActive? styles.activeHeaderText : styles.inactiveHeaderText}>{section.title}</Text>
      </View>
    );
  }

  _renderContent(section, index, isActive) {
    var cont = 0;
    var components = [];
    while(true) {
        firstKey = 'user' + cont + '_name';
        if(firstKey in section) {
            nameKey = 'user' + cont + '_name';
            roleKey = 'user' + cont + '_role';
            emailKey = 'user' + cont + '_email';
            
            components.push(React.createElement(
                Text,
                {},
                'Nome: ' + section[nameKey] + '\n' + 'Cargo: ' + section[roleKey] + '\n' + 'Email: ' + section[emailKey] +'\n\n'
            ));

            cont = cont + 1;
        } else {
            break;
        }
    }

    return (
      <View style={styles.content}>
          {components}
      </View>
    );
  }
  
  logout = () => {
    var changeScreenFunction = this.props.changeScreen;
    // logout, once that is complete, return the user to the login screen.
    AsyncStorage.removeItem('userData').then(() => {
        firebase.auth().signOut().then(() => {
            changeScreenFunction('firstScreen');
        });  
      });
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
                <GeralButton buttonName="Logout" clickArguments="" clickFunction={this.logout} buttonColor="#18BC41" buttonBorderColor="white"></GeralButton>              
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