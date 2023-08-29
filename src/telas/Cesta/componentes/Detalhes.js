import React from "react";
import { View, Image, StyleSheet } from "react-native";

import Texto from "../../../componentes/texto";
import Botao from "../../../componentes/Botao";

export default function Detalhes({ nome, logoFazenda, nomeFazenda, descricao, preco, botao}) {
    return <>
            <Texto style = {estilos.nome}>{nome}</Texto>
            <View style = {estilos.fazenda}>
                <Image source={logoFazenda} style = {estilos.imagemFazenda}/>
                <Texto style = {estilos.nomeFazenda}>{nomeFazenda}</Texto>
            </View>    
            <Texto style = {estilos.descricao}>{descricao}</Texto>
            <Texto style = {estilos.preco}>{preco}</Texto>

            <Botao texto={botao} style={estilos.botao} onPress={() => {}}/>
    </>
}

const estilos = StyleSheet.create({
    nome: {
        fontSize: 26,
        color: "#464646",
        lineHeight: 42,
        fontWeight: "bold",
    },
    fazenda: {
        flexDirection: "row",
        paddingVertical: 12,
    },
    imagemFazenda: {
        width: 32,
        height: 32,
    },
    nomeFazenda: {
        fontSize: 16,
        lineHeight: 26,
        color: "#A3A3A3",
        marginLeft: 12,
        fontWeight: "bold",
    },
    descricao: {
        fontSize: 16,
        lineHeight: 26,
        color: "#A3A3A3",
    },
    preco: {
        fontSize: 26,
        lineHeight: 42,
        fontWeight: "bold",
        color: "#2A9F85",
        marginTop: 8,
    },
    botao: {
        marginTop: 16,
    },
})