//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet , FlatList, Image, TextInput, TouchableOpacity, Linking, Picker} from 'react-native';
import GeralButton from './../../components/GeralButton/';
import GeralTextInput from './../../components/GeralTextInput/';
import * as firebase from "firebase";

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: "AIzaSyBhBICcj1AX54I5yMG8__Qox3nJhFguSAI",
    authDomain: "mobilefinalecompjr.firebaseapp.com",
    databaseURL: "https://mobilefinalecompjr.firebaseio.com",
    storageBucket: "mobilefinalecompjr.appspot.com"
  });
}

const PICKERITEM_COMPONENTS = [];

PICKERITEM_COMPONENTS.push(React.createElement(
  Picker.Item,
  {label: "Empresa Júnior", value: "Empresa Júnior"},
  ''
));

var ref = firebase.database().ref();

ref.on("value", function(snapshot) {
  if(snapshot.val().ej != null) {
    ejs = snapshot.val().ej;        
    for(var key in ejs) {
      PICKERITEM_COMPONENTS.push(React.createElement(
        Picker.Item,
        {label: ejs[key].ejName, value: ejs[key].ejName},
        ''
      ));
    }
  }
}, function (error) {
  console.log("Error: " + error.code) ;
});

PICKERITEM_COMPONENTS.push(React.createElement(
  Picker.Item,
  {label: "Cadastre Sua EJ", value:"Cadastre sua EJ"},
  ''
));


// create a component
class MemberRegisterScreen extends Component {
  constructor() {
    super();
    this.state = {
        ej: 'Empresa Júnior',      
        name: '',
        role: '',
        email: '',
        password: ''
    };
  }

  updateState = (key, value) => {
    const update = {[key]: value};
    this.setState(update);
  } 

  register = async () => {
    try {
  
      if(this.state.password.length < 6) {
        alert("A senha deve conter ao menos 6 caracteres!");
        return;        
      }

      if(this.state.email.indexOf('.com') == -1 || this.state.email.indexOf('@') == -1) {
        alert("O seu endereço de email está em formato incorreto!");
        return;        
      }

      if(this.state.ej == 'Empresa Júnior') {
        alert("Escolha uma EJ válida!");
        return;
      }

      var email = this.state.email;
      var password = this.state.password;
      var name = this.state.name;
      var ej = this.state.ej;
      var role = this.state.role;
      var changeScreenFunction = this.props.changeScreen;

      firebase.auth().createUserWithEmailAndPassword(email, password).then(function(user) {
        var root = firebase.database().ref();
        var uid = user.uid;
        var postData = {
           email: email,
           password: password,
           name: name,
           ej: ej,
           role: role
        };
        root.child("users").child(uid).set(postData);
        alert('Cadastro realizado!');
        changeScreenFunction('firstScreen');
     })
    } catch(error) {
      alert(error.toString());
    }
  }

  pickerFunction(itemIndex, itemValue) {
    if(itemIndex == "Cadastre sua EJ") {
      this.props.changeScreen('ejRegisterScreen');
    } else {
      this.setState({ej: itemIndex});
    }
  }
    
  render() {
    let {changeScreen} = this.props;
    return (
        <View style={styles.container}>
          <View style={styles.titleWrap}>
            <Text style={styles.titleText}>Junte-se a nós!</Text>
            <View style={styles.separator}></View>
          </View>
          
          <View style={styles.inputsWrap}>
            <View style={[styles.inputWrap]}>
              <GeralTextInput placeholderName="Nome" inputKey={'name'} updateState={this.updateState} isPassword={false}></GeralTextInput>
            </View>
            <View style={styles.inputWrap}>
              <GeralTextInput placeholderName="Cargo" inputKey={'role'} updateState={this.updateState} isPassword={false}></GeralTextInput>
            </View>
            <View style={styles.inputWrap}>
              <Picker style={styles.holderPicker} selectedValue={this.state.ej} onValueChange={(itemValue, itemIndex) => this.pickerFunction(itemValue, itemIndex)}>
                {PICKERITEM_COMPONENTS}
              </Picker>
            </View>            
            <View style={styles.inputWrap}>
              <GeralTextInput placeholderName="Email" inputKey={'email'} updateState={this.updateState}  isPassword={false}></GeralTextInput>
            </View>      
            <View style={[styles.inputWrap]}>
              <GeralTextInput placeholderName="Senha" inputKey={'password'} updateState={this.updateState}  isPassword={true}></GeralTextInput>
            </View>      
          </View>                      
          <View style={styles.buttonWrap}>
            <GeralButton buttonName="Cadastrar" clickArguments="" clickFunction={this.register} buttonColor="#18BC41" buttonBorderColor="white"></GeralButton>              
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
    }, inputWrap: {
      paddingVertical: 3
    }, holderPicker: {
      backgroundColor: '#424242',      
      color: '#fff'
    }, inputsWrap: {
      flex: 8,
      width: 300,
      paddingVertical: 4
    }
});

//make this component available to the app
export default MemberRegisterScreen;
