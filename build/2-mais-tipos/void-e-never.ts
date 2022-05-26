//não há retorno nas funções, ou quando quisermos que a função tenha retorno.

function principal(): void{
    console.log('executando')
}

principal() //se passar o mouse em cima do () vai ver que o próprio ts já infere o void.

//never. também está relacionado a um tipo de função.
//ou a função dispara um erro ou entra num looping infinito (laços de repetição infinitos)

function funcaoQueNuncaRetorna(): never {
    while(true){

    }
}


function funcaoQueNuncaRetorna2(): never {
    throw new Error ('Olá')
    }

    const a = funcaoQueNuncaRetorna2()