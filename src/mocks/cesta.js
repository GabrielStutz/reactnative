import logo from "../../assets/logo.png";
import abobora from "../../assets/frutas/Abóbora.png";
import batata from "../../assets/frutas/Batata.png";
import brocolis from "../../assets/frutas/Brócolis.png";
import pepino from "../../assets/frutas/Pepino.png";
import tomate from "../../assets/frutas/Tomate.png";

const cesta = {
    topo: {
        titulo: "Detalhe da cesta",
    },
    detalhes: {
        nome: "Cesta de verduras",
        logoFazenda: logo,
        nomeFazenda: "Jenny Jack Farm",
        descricao: "Uma cesta com produtos selecionados cuidadosamente da fazenda direto para sua cozinha",
        preco: "R$ 40,00",
        botao: "Comprar",
    },
    itens: {
        titulo: "Itens da Sexta",
        lista: [
            {
                nome: "Abóbora",
                imagem: abobora,
            },
            {
                nome: "Batata",
                imagem: batata,
            },
            {
                nome: "Brócolis",
                imagem: brocolis,
            },
            {
                nome: "Pepino",
                imagem: pepino,
            },
            {
                nome: "Tomate",
                imagem: tomate,
            },
        ],
    }
}

export default cesta;