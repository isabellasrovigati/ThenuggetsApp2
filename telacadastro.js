


import { screenWidth, screenHeight } from './src/components/dimensions';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { createAppContainer } from 'react-navigation';







import React, {useState, Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Button,
  Textfield,
  StatusBar,
  TextInput,
  Body,
  Br,
  Image,
  TouchableOpacity
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { interfaceDeclaration, stringLiteral } from '@babel/types';


function telacadastro(props){
    
  const handlePress = () => false

  
  return (
    <>
    
        <ScrollView>
         
        <View>
        <View style= {{backgroundColor:props.backgroundcolor, width:screenWidth * 0.2,paddingTop:screenHeight * 0.08}}>
       
       </View>
         <View style ={[styles.post, {backgroundColor:props.backgroundcolor}]}>
           <View style ={{flexDirection:'row'}}>
              <Text style ={{fontWeight:'bold', color:props.textcolor}}>
               {props.name}
         </Text>
           <Text style ={{color:'black', paddingLeft:5}}>
                        
            </Text>
        </View>
      
         
       </View>
 
    </View>
    <View>
     
      
    <Text style ={{color:'black',marginTop:screenHeight * 0.08, textAlign:'center' ,fontFamily:'Verdana', fontSize:21}}>
  Cadastro
</Text>

  <TextInput placeholder='Nome'style={{ height: 40, borderColor: 'gray', borderWidth: 0.8, marginTop:15, width:screenWidth*0.65, marginHorizontal:screenWidth*0.175, borderRadius:10 }} >
  
  </TextInput>
  <TextInput placeholder='Email' style={{ height: 40, borderColor: 'gray', borderWidth: 0.8, marginTop:15, width:screenWidth*0.65, marginHorizontal:screenWidth*0.175, borderRadius:10 }} >

  </TextInput>
  <TextInput placeholder='Senha' style={{ height: 40, borderColor: 'gray', borderWidth: 0.8, marginTop:15, width:screenWidth*0.65, marginHorizontal:screenWidth*0.175, borderRadius:10 }} >

</TextInput>
<TextInput placeholder='Confirmação da senha' style={{ height: 40, borderColor: 'gray', borderWidth: 0.8, marginTop:15, width:screenWidth*0.65, marginHorizontal:screenWidth*0.175, borderRadius:10 }} >

</TextInput>


  <View style = {styles.container}>
         <TouchableOpacity>
            <Text style = {styles.text}>
              Cadastrar
            </Text>
         </TouchableOpacity>
      </View>
   </View>
   <View style = {styles.container}>
        
      </View>
      <Image/>
     
    
   
   
        </ScrollView>
      
    </>
  
  );
}



const styles= StyleSheet.create({
   texto:{
   marginLeft:screenWidth* 0.1,
   fontSize:30,
   fontFamily: 'Verdana',
   fontWeight:"500",
   },
   
   title: {
    
      textAlign: 'center',
      marginVertical: 8,

   },


    
  
  container: {
    alignItems: 'center',
 },
 text: {
   
   
    width:screenWidth*0.65,
    backgroundColor: 'darkorange',
    borderWidth:1,
    borderColor: 'orange',
    marginTop:screenHeight*0.02,
    paddingLeft:screenWidth*0.24,
    fontSize:15,
    color:'white',
    height:screenHeight*0.05,
    paddingTop:screenHeight*0.01,
    borderRadius:8
 },

 text2: {
   color:'darkorange',
   textAlign:'center',
   fontSize:11,
   fontFamily:'Verdana'
 },
 text3: {
  color:'darkorange',
  textAlign:'center',
  fontSize:11,
  fontFamily:'Verdana',
  marginTop:screenHeight*0.02
 },
})


export default telacadastro;