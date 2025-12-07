import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './Styles'
import { useState } from 'react';
import awaiting from '../assets/awaiting.png'
import * as Animatable from 'react-native-animatable';

export default function PokemonDisplay(props){

    let pokeJson = props.json


    if(!pokeJson || Object.keys(pokeJson).length === 0){
        return <View style={styles.pokemonView}><Image style={styles.awaitIMG} source={awaiting}></Image></View>
    }


    let tintValue
    if (props.acertou == false){
        tintValue = 'black'
    }
    else{
        tintValue = null
    }




    let transparent = "rgba(0,0,0,0)"
    let visivel = "rgba(0,0,0,1)"
    
    const fadetint = {
        0:   { tintColor: visivel},
        1:   { tintColor: transparent}
    } 




    return(



        <View style={styles.pokemonView}>


            <Animatable.View  style={styles.pokeBackground}> 
                <Animatable.Image animation="fadeIn" duration={1500} style={[styles.pokeimg, {tintColor: tintValue}]} source={{uri: pokeJson.sprites.front_default}}></Animatable.Image>

            </Animatable.View>

        


            
        </View>
    )
}