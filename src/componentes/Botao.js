import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";

import Texto from "./texto";

export default function Botao({ texto, onPress}) {
    return <>
        <TouchableOpacity style={estilos.botao} onPress={onPress}>
            <Texto style={estilos.textoBotao}>{ texto }</Texto>
        </TouchableOpacity>
    </>
} 

const estilos = StyleSheet.create({
    botao: {
      backgroundColor: "#2A9F85",
      paddingVertical: 16,
      borderRadius: 6,
    },
    textoBotao: {
      textAlign: "center",
      color: "#ffffff",
      fontSize: 16,
      lineHeight: 26,
      fontWeight: "bold",
    },
});