//servem para indicar ao pc do tspara a garantir que a tipagem é de um tipo específico

type JogoAssertion = {
    nome:string;
    descricao: string;
}

let jogo = {} as JogoAssertion;
//let jogo = <JogoAssertion>{};
jogo.nome = 'nome'
jogo.descricao = 'descricao do jogo'