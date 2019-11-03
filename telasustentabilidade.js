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


function telasustentabilidade(props){
    
  const handlePress = () => false

  return (
    <>
        <ScrollView>
            
            <Text style={styles.head}>
                Nossa Política Verde
            </Text>
            
               
                <View style={styles.card1}>
                    <Text style={styles.sol1}>
                        Neutralização de carbono

                    </Text>
                </View>
                <View style={styles.card}>
                    <Text style={styles.sol}>
                        Recomposição da vegetação para diminuir a poluição visual

                    </Text>
                </View>
                <View style={styles.card}>
                    <Text style={styles.sol}>
                        Evitar trabalhar fora do horário comercial para diminuir a poluição sonora

                    </Text>
                </View>
                <View style={styles.card}>
                    <Text style={styles.sol}>
                        Reciclagem, tratamento e disposição em aterros sanitários de resíduos da produção

                    </Text>
                </View>
                <View style={styles.card}>
                    <Text style={styles.sol}>
                        Adoção de tecnologias mais eficientes em processos de produção específicos

                    </Text>
                </View>
                <Text style={styles.head2}>
                    Metas
                </Text>
                <View style={styles.card2}>
                    <Text style={styles.sol1}>
                       Reduzir a emissão de gases de efeito estufa em 10%

                    </Text>
                </View>
                <View style={styles.card2}>
                    <Text style={styles.sol}>
                        Utilizar materiais de transporte e equipamentos fabricados utilizando fontes de energia renováveis

                    </Text>
                </View>
                <View style={styles.card2}>
                    <Text style={styles.sol}>
                       70% dos refrigeradores adquiridos anualmente devem ser de modelos mais ecológicos

                    </Text>
                </View>
          
               
            

         
   
    
   
            <Image style={{width:screenWidth, height:170, marginTop:screenHeight*0.001}} source={require('./src/assets/images/sustentabilidade.png')}/>
        </ScrollView>
    </>
  
  );
}



const styles= StyleSheet.create({
    head:{
        color:'green',
        fontSize:20,
        textAlign:'center',
        marginTop:screenHeight*0.03

        
    },
    head2:{
        color:'green',
        fontSize:20,
        textAlign:'center',
        marginTop:screenHeight*0.01

    },

    sol:{
        fontSize:12,
        textAlign:'center',
        marginHorizontal:screenHeight*0.01,
        marginTop:screenHeight*0.005
    },
    sol1:{
        fontSize:12,
        textAlign:'center',
        marginHorizontal:screenHeight*0.01,
        marginTop:screenHeight*0.015
    },
    text:{
        textAlign:'center',
        marginTop:screenHeight*0.02,
        marginHorizontal:screenWidth*0.05
        

    },
    card:{
        borderWidth:screenWidth*0.00069,
        width:screenWidth*0.85,
        marginLeft:screenWidth*0.085,
        marginTop:screenHeight*0.015,
        height:screenHeight*0.07,
        borderColor:'greenyellow',
        backgroundColor:'greenyellow'

    },
    card1:{
        borderWidth:screenWidth*0.00069,
        width:screenWidth*0.85,
        marginLeft:screenWidth*0.085,
        marginTop:screenHeight*0.02,
        height:screenHeight*0.065,
        borderColor:'greenyellow',
        backgroundColor:'greenyellow'

    },
    card2:{
        borderWidth:screenWidth*0.00069,
        width:screenWidth*0.85,
        marginLeft:screenWidth*0.085,
        marginTop:screenHeight*0.015,
        height:screenHeight*0.065,
        borderColor:'green',
        backgroundColor:'green'
    },

 
})


export default telasustentabilidade;