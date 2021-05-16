import React from 'react';
import { Text, View ,ScrollView, StyleSheet,FlatList,TextInput,TouchableOpacity} from 'react-native';
import db from "../config"
export default class Searchscreen extends React.Component {
  constructor(){
    super()
    this.state={
      allTransactions:[],
      search:"",
      lastVisibleTransaction: null
    }
  }
  
       
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.searchBar}>
      <TextInput 
        style ={styles.bar}
        placeholder = "Enter story name"
        onChangeText={(text)=>{this.setState({search:text})}}/>
        <TouchableOpacity
          style = {styles.searchButton}
     //     onPress={()=>{this.searchTransactions(this.state.search)}}
        >
          <Text>Search</Text>
        </TouchableOpacity>
        </View>
     
      </View>
    );
  }
}

    const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: 20
    },
    searchBar:{
      flexDirection:'row',
      height:40,
      width:'auto',
      borderWidth:0.5,
      alignItems:'center',
      backgroundColor:'grey',
  
    },
    bar:{
      borderWidth:2,
      height:30,
      width:300,
      paddingLeft:10,
    },
    searchButton:{
      borderWidth:1,
      height:30,
      width:50,
      alignItems:'center',
      justifyContent:'center',
      backgroundColor:'green'
    }
  })