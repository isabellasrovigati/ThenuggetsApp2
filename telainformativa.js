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


function telainformativa(props){
    
  

  
  return (
    <>
    
        <ScrollView>

            <View style={styles.grid}>
            <Text style={styles.head}>Thenuggets</Text>
            <Text style={styles.since}>Desde 1990 trazendo mais sabor ao Brasil</Text>


            <View style={styles.all}>
                <View style={styles.mis}>
            <Image   style={{width: 34, height: 34, }} source={require('./src/assets/images/missão-png-1.png')}/>
            <Text style={styles.text1}>Nossa Missão </Text>
            </View>
            
            <Text style={styles.missao}>Fazer nuggets destinados a atender às necessidades de nossos clientes no Brasil, com qualidade, confiabilidade e custos adequados a nossos negócios.</Text>
            </View>

            <View style={styles.all2}>
                <View style={styles.vis}>
               <Image style={{width:40, height:40}} source={require('./src/assets/images/iconVisao.png')}/>
            <Text style={styles.text2}>Nossa Visão</Text>
            </View>
            <Text style={styles.visao}>Ser a nuggeteria líder em performance, reconhecidamente sólida e confiável, destacando-se pelo uso agressivo de tecnologia avançada e por equipes capacitadas, comprometidas com a qualidade total, meio ambiente, cuidado e satisfação dos clientes.</Text>
               
           </View>

            <View style={styles.all3}>
                <View style={styles.val}>
                    <Image style={{width:45, height:45}} source={require('./src/assets/images/valores.jpg')}/>
            <Text style={styles.text3}>Nossos Valores</Text>
            </View>
            <Text style={styles.valores}> Compromisso, ética, confiabilidade, dedicação, inovação e nuggets.</Text>
            </View>
            


           </View>
        </ScrollView>
      
    </>
  
  );
}



const styles= StyleSheet.create({
    head:{
        color:'orange',
        fontSize:22,
        textAlign:'center',
        marginTop:screenHeight*0.033
       
    },
    val:{
        flexDirection:'row',

    },
    vis:{
        flexDirection:'row',

    },
    mis:{
        
        flexDirection:'row',

    },
    grid:{
        backgroundColor:'white',
        paddingBottom:screenHeight*0.18

    },
    all:{
        borderWidth:1,
        borderColor:'orange',
        borderRadius:5,
        width:screenWidth*0.75,
        marginTop:15,
        marginLeft:screenWidth*0.13,
        paddingHorizontal:20,
        textAlign:'center',
        justifyContent:'center',
        paddingBottom:screenHeight*0.03,
        backgroundColor:'darkorange'
        

    },
    all2:{
        borderWidth:1,
        borderColor:'orange',
        borderRadius:5,
        width:screenWidth*0.75,
        marginTop:15,
        marginLeft:screenWidth*0.13,
        paddingHorizontal:20,
        textAlign:'center',
        justifyContent:'center',
        paddingBottom:screenHeight*0.03,
        backgroundColor:'darkorange'

    },
    all3:{
        borderWidth:1,
        borderColor:'orange',
        borderRadius:5,
        width:screenWidth*0.75,
        marginTop:10,
        marginLeft:screenWidth*0.13,
        paddingHorizontal:24,
        textAlign:'center',
        justifyContent:'center',
        paddingBottom:screenHeight*0.03,
        backgroundColor:'darkorange'

    },
   
    since:{
        color:'black',
        fontSize:14,
        textAlign:'center',
        marginTop:3


    },
    text1:{
        color:'white',
        fontSize:18,
        textAlign:'center',
        marginTop:5,
        marginLeft:screenWidth*0.09
        

    },
    missao:{
        flex:1,
        justifyContent:"space-evenly",

    },
    text2:{
        color:'white',
        fontSize:18,
        textAlign:'center',
        marginTop:10,
        marginLeft:screenWidth*0.09


    },
    visao:{
       

    },
    text3:{
        color:'white',
        fontSize:18,
        textAlign:'center',
        marginTop:10,
        marginLeft:screenWidth*0.034
        
        

    },
    valores:{

    },

 
})


export default telainformativa;
