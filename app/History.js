import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, Button, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {styles} from './Components/Styles'
import { useEffect, useState } from 'react';
import PokemonDisplay from '././Components/PokemonDisplay';
import NULLIMG from './assets/awaiting.png'
import * as Animatable from 'react-native-animatable';
import { Stack, useRouter } from 'expo-router'
import AsyncStorage from '@react-native-async-storage/async-storage';




export default function History(){

    const [historico, setHistorico] = useState([]);

    useEffect(() => {
    async function carregar() {
        const json = await AsyncStorage.getItem("historico");
        setHistorico(json ? JSON.parse(json) : []);
    }

    carregar();
    }, []);



    const router = useRouter()

    return(

        <SafeAreaView style={styles.safearea}>
            <Stack.Screen options={{ headerShown: false }} />
            <View style={styles.safearea}>


                <View style={styles.historico}>

                    {historico == '' && <View style={styles.vazio}> <Text style={{fontWeight: 'bold'}}>Nenhuma tentativa registrada!</Text>  </View>} 


                    {historico.map((item, i) => (
                        <Text key={i} style={[item.correto ? styles.correto : styles.errado]}>
                            {i + 1}: {item.texto} - {item.correto ? "✔️" : "❌"}
                        </Text>
                    ))}


                </View>
                <TouchableOpacity style={styles.botaoRodarPokemon} onPress={() => router.push("/GameScreen")}>
                    <Text style={styles.btnText}>Voltar</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.botaoRodarPokemon} onPress={async () => await AsyncStorage.clear()}>
                    <Text style={styles.btnText}>Limpar</Text>
                </TouchableOpacity>

            </View>
        </SafeAreaView>
    )
}