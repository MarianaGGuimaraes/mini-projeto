"use strict";
//para valores de V ou F
let estaAtivo;
//..código etc
estaAtivo = true;
function mapearStatusDeUsuario(status) {
    if (status) {
        return `Usuário está ativo`;
    }
    else {
        return `Usuário NÃO está ativo`;
    }
}
mapearStatusDeUsuario(true);
mapearStatusDeUsuario(false);
