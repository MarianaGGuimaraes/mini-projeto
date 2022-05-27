"use strict";
//estrutura de dados com sequencia de valores de forma ordenada (lista, sequecnia etc)
let gatos = [
    'Margot',
    'Nina'
];
function exibeGatos(gatos) {
    return `Os gatos são: ${gatos.join(', ')}
    `;
}
console.log(exibeGatos(gatos));
