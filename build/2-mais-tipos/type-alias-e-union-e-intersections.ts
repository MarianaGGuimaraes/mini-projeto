//para ter garantias

type User = {
    name: string;
    lastName: string;
    birthday: string;
    age: number;
}

//pode criar campos opcionais

const Mariana: User ={
    name: 'Mariana',
    lastName: 'Guimarães',
    birthday: '27/09/1987',
    age: 34 //poderia ser uma propriedade opcional, por ex. utilizando "?" no age, por ex. e não precisa usar o campo age no campo opcional;
}

//union types são marcados | serve para indicar que algum valor tem que ser de um tipo ou de outro. Parece o OR, mas é usado para tipagem de variável/elemnto.
//o union não faz união

type logLevel = 'info'| 'error' | 'debug';

function logMessage(message: string, level: logLevel){
    console.log(`[${level}] - ${message}`)
}

logMessage('uma mensagem info', 'error')
logMessage ('uma mensagem info', 'debug')
logMessage('uma mensagem info', 'info')

//intesections servem para combinar type alias
//símbolo & 

type About = {
    bio:string;
    interests: string[];
}

type Profile = User & About;
const userWithProfile: Profile = {
    name: 'mariana',
    lastName: 'guimarães',
    birthday: '27/09/87',
    age: 34,
    bio: 'Olá, meu nome é Mariana',
    interests: ['pets', 'music', 'films']
}