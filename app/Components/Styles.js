import { StyleSheet, Dimensions } from "react-native";


const { height, width } = Dimensions.get("screen")

export const styles = StyleSheet.create({
    fullbody: {
        backgroundColor: "black",
    },
    safearea: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: "#4287f5",
        justifyContent: "center",
        alignItems: "center",
    },
    pokemonView:{
        justifyContent: "start",
        alignItems: "center",
        // backgroundColor: "lightblue",
        width: 250,
        height: 250,
        padding: 50,
    }, 
    pokeimg:{
        width: 220,
        height: 220,
        marginRight: 10,
        tintColor: 'black',
    },
    pokeBackground:{
        height: 200,
        width: 200,
        backgroundColor: "#acedf8f8",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 150,
        borderWidth: 5,
        borderColor: "black",
    },
    inputTexto:{
        margin: 15,
        backgroundColor: "white",
        borderWidth: 2,
        borderRadius: 15,
        width: 300,
        textAlign: "center",
    },
    botaoRodarPokemon:{
        width: 130,
        height: 50,
        backgroundColor: "orange",
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        margin: 6,
    },
    btnText:{
        fontSize: 20,
        fontWeight: "bold",
        color: "black",
    },
    awaitIMG:{
        height: 180,
        width: 180,
        borderRadius: 25,
    },
    header:{
        backgroundColor: "#acedf8f8",
        
    },
    historico:{
        backgroundColor: "#d1f8ff17",
        height: "75%",
        width: 300,
        borderRadius: 15,
    },
    correto:{
        backgroundColor: "#0aff5344",
        borderRadius: 10,
        padding: 5,
        margin: 5,


    },
    errado:{
        backgroundColor: "#ff693c3b",
        borderRadius: 10,
        padding: 5,
        margin: 5,

    },
    historicoItem:{
        height: 15,
        justifyContent: "space-evenly"
    },
    vazio:{
        margin: 'auto',
        height: '50%',
        width: "auto",
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
    }

    

})