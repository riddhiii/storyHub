import React from 'react';
import { Text,
   View,
   TouchableOpacity,
   TextInput,
   Image,
   StyleSheet,
  KeyboardAvoidingView ,
ToastAndroid,Alert} from 'react-native';
import * as Permissions from 'expo-permissions';
import { BarCodeScanner } from 'expo-barcode-scanner';
import * as firebase from 'firebase'
import db from '../config.js'

export default class WriteStoryScreen extends React.Component {
    constructor(){
      super();
      this.state = {
       storyName:"",
       authorName:"",
       story:""
      }
    }

    saveStory=()=>{
      db.collection("stories").add({
        'story_name': this.state.storyName,
        'author_name' : this.state.authorName,
        'date' : firebase.firestore.Timestamp.now().toDate(),
        'story': this.state.story
      })
    }

    render() {
      
      
      return(
        <KeyboardAvoidingView  style={styles.container} behavior="padding" enabled>
          <View>
            <Image
              source={require("../assets/booklogo.jpg")}
              style={{width:200, height: 200}}/>
            <Text style={{textAlign: 'center', fontSize: 30}}>Bed Time Stories</Text>
          </View>
          <View style={styles.inputView}>
          <TextInput 
            style={styles.inputBox}
            placeholder="story name"
            onChangeText={text =>this.setState({storyName:text})}
            value={this.state.storyName}/>
          
          </View>

          <View style={styles.inputView}>
          <TextInput 
            style={styles.inputBox}
            placeholder="Author Name"
            onChangeText ={text => this.setState({authorName:text})}
            value={this.state.authorName}/>
        
          </View>

          <View style={styles.inputView}>
          <TextInput 
            style={styles.inputBox1}
            placeholder="Enter your story"
            multiline={true}
            onChangeText ={text => this.setState({story:text})}
            value={this.state.story}/>
        
          </View>
          <TouchableOpacity
            style={styles.submitButton}
            onPress={()=>{
             this.saveStory()
             
            }}>

        <Text style={styles.submitButtonText}>Submit</Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      );
    }
  }


  

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    displayText:{
      fontSize: 15,
      textDecorationLine: 'underline'
    },
    scanButton:{
      backgroundColor: '#2196F3',
      padding: 10,
      margin: 10
    },
    buttonText:{
      fontSize: 15,
      textAlign: 'center',
      marginTop: 10
    },
    inputView:{
      flexDirection: 'row',
      margin: 20
    },
    inputBox:{
      width: 200,
      height: 40,
      borderWidth: 1.5,
      borderRightWidth: 0,
      fontSize: 20
    },
    scanButton:{
      backgroundColor: '#66BB6A',
      width: 50,
      borderWidth: 1.5,
      borderLeftWidth: 0
    },
    submitButton:{
      backgroundColor: 'pink',
      width: 100,
      height:50
    },
    submitButtonText:{
      padding: 10,
      textAlign: 'center',
      fontSize: 20,
      fontWeight:"bold",
      color: 'white'
    },
    inputBox1:{
      width: 200,
      height: 200,
      borderWidth: 1.5,
      borderRightWidth: 0,
      fontSize: 20
    },
  });
