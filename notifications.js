
import { screenWidth, screenHeight } from './src/components/dimensions';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { createAppContainer } from 'react-navigation';
import {Checkbox }from 'react-native-elements';




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
  TouchableOpacity,
  
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { interfaceDeclaration, stringLiteral } from '@babel/types';


function note(props){
    
  

  
  return (
    <>
    
        <ScrollView>
         
        <View style={{flexDirection: 'row',justifyContent:'space-around', backgroundColor:'orange', height:screenHeight*0.08, paddingBottom:screenHeight*0.005}}>
        <TouchableOpacity>
            <Text style = {styles.text}>
              Maquinário
            </Text>
         </TouchableOpacity>
         <TouchableOpacity>
            <Text style = {styles.comp2}>
              Materiais
            </Text>
         </TouchableOpacity>
        </View>
        <View style={styles.view}>
          <Text style={styles.hey2}>
              Esteira com defeito na ala 2B. Verificar e chamar o conserto.
          </Text>
          <Text style={styles.hey}>
              Precisa-se de 2 ganchos na ala 1A. Verificar disponibilidade no estoque.
          </Text>
          <Text style={styles.hey3}>
              Esteira lenta com velocidade de 0.5 km/h. Verificar o problema e chamar o conserto.
          </Text>
          <Text style={styles.hey3}>
              Falta de tempero para mixagem. Pedir mais para os fornecedores.
          </Text>
          <Text style={styles.hey}>
              Trituradora emperrada. Chamar o conserto.
          </Text>
          <Text style={styles.hey3}>
              Falta de água. Comprar mais urgente.
          </Text>
          <Text style={styles.hey3}>
          Diminuir a temperatura dos congeladores. Nuggets mantidos próximos a zona de temperatura de risco.
          </Text>
          <Text style={styles.hey3}>
              Sem óleo de fritura. Encomendar mais.
          </Text>
          <Text style={styles.hey}>
              Empacotadora com defeito. Chamar o conserto.
          </Text>
          <Text style={styles.hey3}>
              Moldadora com pequena deformação. Checar grau de urgência.
          </Text>

         

        </View>
    
  
   
   
    
    
   
   
        </ScrollView>
      
    </>
  
  );
}



const styles= StyleSheet.create({
   
   
 

hey:{
    borderBottomWidth:screenWidth*0.0015,
    marginTop:screenHeight*0.02,
    paddingBottom:screenHeight*0.02,
    paddingHorizontal:screenWidth*0.05,
    borderBottomColor:'orange'
    
},
hey2:{
    borderBottomWidth:screenWidth*0.0015,
    marginTop:screenHeight*0.03,
    paddingBottom:screenHeight*0.02,
    paddingHorizontal:screenWidth*0.05,
    borderBottomColor:'orange'
},
hey3:{
    borderBottomWidth:screenWidth*0.0020,
    marginTop:screenHeight*0.02,
    paddingBottom:screenHeight*0.02,
    paddingHorizontal:screenWidth*0.05,
    borderBottomColor:'orange'
},
    
  
  container: {
    alignItems: 'center',
 },
 text: {
   
   
    width:screenWidth*0.45,
    backgroundColor: 'darkorange',
    borderWidth:1,
    borderColor: 'orange',
    marginTop:screenHeight*0.02,
    fontSize:15,
    color:'white',
    height:screenHeight*0.05,
    paddingTop:screenHeight*0.01,
    borderRadius:12,
    textAlign:'center'
 },
 comp2:{
    width:screenWidth*0.45,
    backgroundColor: 'darkorange',
    borderWidth:1,
    borderColor: 'orange',
    marginTop:screenHeight*0.02,
    fontSize:15,
    color:'white',
    height:screenHeight*0.05,
    paddingTop:screenHeight*0.01,
    borderRadius:12,
    textAlign:'center'

 },

 

})


export default note;