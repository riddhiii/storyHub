import React from 'react';
import { Text,
   View,
   TouchableOpacity,
   TextInput,
   Image,
   StyleSheet,
   KeyboardAvoidingView,
ToastAndroid,Alert} from 'react-native';
import * as firebase from 'firebase'
import db from '../config.js'


export default class LoginScreen extends React.Component{
   constructor(){
       super()    
       this.state={
           emailId:"",
           password:""
       }
   }
   login=async(email,password)=>{
    if (email && password){
      try{
        const response = await firebase.auth().signInWithEmailAndPassword(email,password)
        if(response){
          this.props.navigation.navigate('ReadStory')
        }
      }
      catch(error){
        switch (error.code) {
          case 'auth/user-not-found':
            Alert.alert("user dosen't exists")
            console.log("doesn't exist")
            break
          case 'auth/invalid-email':
            Alert.alert('incorrect email or password')
            console.log('invaild')
            break
        }
      }
    }
    else{
        Alert.alert('enter email and password');
    }
  }
    render(){
        return(
            <KeyboardAvoidingView style={{alignItems:"center",marginTop:20, marginLeft:10}}>
                <View>
                    <Image source={require("../assets/booklogo.jpg")}
                    style={{width:200,height:200}}>
                     </Image>
                     <Text style={{fontSize:30,textAlign:'center'}}>Bed Time Stories</Text>
                </View>
                <View>
                <TextInput style={styles.loginBox}
                 placeholder="abc@example.com"
                  keyboardType ='email-address'
                   onChangeText={(text)=>{ this.setState({ emailId: text }) }} />   
                 
                 <TextInput style={styles.loginBox}
                 placeholder="password"
                  secureTextEntry={true}
                   onChangeText={(text)=>{ this.setState({ password: text }) }} />
                
                </View>
                <View>
                <TouchableOpacity style={{height:30,
                    width:90,
                    borderWidth:1,
                    marginTop:20,
                    paddingTop:5,
                    borderRadius:7}} 
                   onPress={()=>{this.login(this.state.emailId,this.state.password)}}>
                   
                        <Text>
                            Login
                        </Text>
                </TouchableOpacity>
                <TouchableOpacity style={{height:30,
                    width:90,
                    borderWidth:1,
                    marginTop:20,
                    paddingTop:5,
                    borderRadius:7}}>
                        <Text>
                            sign up
                        </Text>
                </TouchableOpacity>

                </View>
            </KeyboardAvoidingView>
        )
        
    }
}
const styles =StyleSheet.create({
    loginBox:{
    width: 300,
    height: 40,
    borderWidth: 1.5,
    fontSize: 20,
    margin:10,
    paddingLeft:10
    }
})
