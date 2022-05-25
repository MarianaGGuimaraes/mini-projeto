"use strict";
//forma de trabalhar com valores numericos de forma mais ordenada e legível
//o cód final que o enum vai gerar é um número
var Permissoes;
(function (Permissoes) {
    Permissoes[Permissoes["admin"] = 0] = "admin";
    Permissoes[Permissoes["editor"] = 1] = "editor";
    Permissoes[Permissoes["comum"] = 2] = "comum";
})(Permissoes || (Permissoes = {}));
const usuario = {
    nivel: Permissoes.admin
};
console.log(usuario);
