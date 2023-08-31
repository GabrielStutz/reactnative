import React from "react";
import { StyleSheet, View} from "react-native";

import Topo from "./componentes/topo";
import Detalhes from "./componentes/Detalhes";
import Itens from "./componentes/itens";

export default function Cesta({ topo, detalhes, itens }) {
    return <>
        <Topo {...topo} />
        <View style={estilos.cesta}>
            <Detalhes {...detalhes}/>
            <Itens {...itens}/>
        </View>
    </>
}

const estilos = StyleSheet.create({
    cesta: {
        paddingVertical: 8,
        paddingHorizontal: 16,
    },
});