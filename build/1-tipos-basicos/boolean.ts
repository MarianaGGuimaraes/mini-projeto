//para valores de V ou F

let estaAtivo: boolean;

//..código etc

estaAtivo = true;

function mapearStatusDeUsuario(status: boolean){
    if (status) {
        return `Usuário está ativo`
    } else {
        return `Usuário NÃO está ativo`
    }
}

mapearStatusDeUsuario(true);
mapearStatusDeUsuario(false);
