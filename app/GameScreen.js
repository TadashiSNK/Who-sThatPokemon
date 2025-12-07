import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, Button, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {styles} from './Components/Styles'
import { use, useRef, useState } from 'react';
import PokemonDisplay from '././Components/PokemonDisplay';
import NULLIMG from './assets/awaiting.png'
import * as Animatable from 'react-native-animatable';
import { Stack } from 'expo-router';
import { useRouter } from "expo-router";
import AsyncStorage from '@react-native-async-storage/async-storage';




async function salvarTentativa(texto, state){
    const dados = {
        texto: texto,
        state: state
    }

    await AsyncStorage.setItem("teste", JSON.stringify(dados))
}


async function registrarTentativa(texto, correto) {
  const atual = await AsyncStorage.getItem("historico");
  const lista = atual ? JSON.parse(atual) : [];

  const novaEntrada = {
    texto,
    correto,
    data: Date.now(),
  };

  await AsyncStorage.setItem("historico", JSON.stringify([...lista, novaEntrada]));
}


export default function GameScreen() {
    const router = useRouter()

  const chutar = () => {



    if(resposta == ''){
      alert("digite algo primeiro, cabeçudo")
      return null
    }

    



    if (resposta.toLowerCase() == pokeJson.name.toLowerCase()){
      setAcertou(true)
      registrarTentativa(resposta, true);
      // alert("VC ACERTOUUU")
    }
    else{
      alert("Errou :(")
      registrarTentativa(resposta, false);
    }
  } 


  const [acertou, setAcertou] = useState(false)
  const [resposta, SetResposta] = useState("")
  const [pokeJson, SetPokeJson] = useState(null)
  const getRandomPokemon = async () => {
    setAcertou(false)
    const NumeroAleatorio = Math.floor(Math.random() * 150)

    const rndPokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${NumeroAleatorio}/`, {
      method: 'GET',
      headers: {
        "Accept": "application/json"
      }
    })

    const json = await rndPokemon.json()
    SetPokeJson(json)
    
    console.log("fez o request do numero: ", NumeroAleatorio)
    console.log("nome:", json.name)
  }
  


  



    return (

        <SafeAreaView style={styles.safearea}>
            <Stack.Screen options={{ headerShown: false }} />
            <View style={styles.safearea}>

                <TouchableOpacity style={styles.botaoRodarPokemon} onPress={() => router.push("/History")}>
                    <Text style={styles.btnText}>Historico</Text>
                </TouchableOpacity>

                {pokeJson ? <PokemonDisplay acertou={acertou} json={pokeJson} /> 
                            : <View style={styles.pokemonView}><Image style={styles.awaitIMG} source={NULLIMG}></Image></View>}

                {pokeJson && 
                <TextInput
                onChangeText={SetResposta}
                placeholder='Resposta'
                style={styles.inputTexto}
                />}

                {!pokeJson && 
                <TouchableOpacity style={styles.botaoRodarPokemon} onPress={getRandomPokemon}>
                    <Text style={styles.btnText}>Começar!</Text>
                </TouchableOpacity>}

                {pokeJson && <TouchableOpacity style={styles.botaoRodarPokemon} onPress={() => {SetPokeJson('')}}>
                    <Text style={styles.btnText}>Limpar</Text>
                </TouchableOpacity>}

                {pokeJson &&
                <TouchableOpacity style={styles.botaoRodarPokemon} onPress={chutar}>
                    <Text style={styles.btnText}>Chutar</Text>
                </TouchableOpacity>}



            </View>
        </SafeAreaView>
        )
    }

