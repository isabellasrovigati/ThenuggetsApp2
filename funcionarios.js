

import React, { Component } from 'react';
 
import { Text, StyleSheet, View, FlatList, TextInput, ActivityIndicator, Alert } from 'react-native';
import axios from 'axios';
 
export default class MyProject extends Component {
 
  constructor(props) {
 
    super(props);
 
    this.state = {
 
      isLoading: false,
      text: '',
    
    }
 
    this.arrayholder = [] ;
  }
 
  componentDidMount() {
 
   axios.get('https://randomuser.me/api?reuslts=10')
   .then(function(response){
     console.log(response);
   })
   .catch(function(error){
     console.log(error);
   })
      
  }
 
  GetListViewItem (func_name) {
    
   Alert.alert(func_name);
  
  }
  
   SearchFilterFunction(text){
     
     const newData = this.arrayholder.filter(function(item){
         const itemData = item.func_name.toUpperCase()
         const textData = text.toUpperCase()
         return itemData.indexOf(textData) > -1
     })
     this.setState({
         
     })
 }
 
  ListViewItemSeparator = () => {
    return (
      <View
        style={{
          height: .5,
          width: "100%",
          backgroundColor: "#000",
        }}
      />
    );
  }
 
 
  render() {
    if (this.state.isLoading) {
      return (
        <View style={{flex: 1, paddingTop: 20}}>
          <ActivityIndicator />
          
        </View>
      );
    }
    else{
    return (
      <View style={styles.MainContainer}>
 
      <TextInput 
       style={styles.TextInputStyleClass}
       onChangeText={(text) => this.SearchFilterFunction(text)}
       value={this.state.text}
       underlineColorAndroid='transparent'
       placeholder="Procure por um funcionário"
        />
 
        <FlatList
 
          dataSource={this.state.dataSource}
 
          renderSeparator= {this.ListViewItemSeparator}
 
          renderRow={(rowData) => <Text style={styles.rowViewContainer} 
 
          onPress={this.GetListViewItem.bind(this, rowData.func_name)} >{rowData.func_name}</Text>}
 
          enableEmptySections={true}
 
          style={{marginTop: 10}}
 
        />
 
      </View>
    );
  }
}
}
 
const styles = StyleSheet.create({
 
 MainContainer :{
 
  justifyContent: 'center',
  flex:1,
  margin: 7,
 
  },
 
 rowViewContainer: {
   fontSize: 17,
   padding: 10
  },
 
  TextInputStyleClass:{
        
   textAlign: 'center',
   height: 40,
   borderWidth: 1,
   borderColor: 'darkorange',
   borderRadius: 7 ,
   backgroundColor : "#FFFFFF"
        
   }
 
});
