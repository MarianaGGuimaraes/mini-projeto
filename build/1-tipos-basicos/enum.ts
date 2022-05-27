//forma de trabalhar com valores numericos de forma mais ordenada e legível
//o cód final que o enum vai gerar é um número

enum Permissoes {
   admin,
   editor, 
   comum
}

const usuario ={ 
   nivel: Permissoes.admin
}
console.log(usuario)

//também é possível criar strings no enum, constantes.

enum Permissoes {
    adminx = 'ADMIN',
    editorx = 'EDITOR',
    comumx = 'COMUM'
}
const usuariox ={ 
   nivel: Permissoes.admin
}
  
console.log(usuario)

