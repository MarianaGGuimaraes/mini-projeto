//nao existe no js. existe em outras linguagens, mas consegue-se simular com padrões e tiopos de tuplas.
//é um array com tamanhos e tipos definidos
//comum em cenário de React

let bichos: [string, string, string] = [  //identificando que a array tem 3 tipos de string
    'Luna',
    'Margot',
    'Nina'
]

const Luna: [string, number] = [
    'Luna', 12
]

const Margot: [string, number]= [
    'Margot', 6
]

const Nina: [string, number] = [
    'Nina', 5
]

//foi definida uma tupla de 3 posições no início e abaixo uma tupla de 2 posições (uma string e um number)