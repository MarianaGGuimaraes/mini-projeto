//estrutura de dados com sequencia de valores de forma ordenada (lista, sequecnia etc)

let gatos: string[] = [
    'Margot',
    'Nina'
]

function exibeGatos(gatos: string[]){
    return `Os gatos são: ${gatos.join(', ')}
    `
}

console.log(exibeGatos(gatos))