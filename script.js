// Crie um objeto que receba ao menos três propriedades sobre você.
let caracteristicas = {
    nome: "Letícia",
    idade: 18,
    signo:"Virgem"
}
console.log(caracteristicas)

// Adicione uma nova propriedade sem alterar seu objeto inicial.
caracteristicas.telefone = 999134946
console.log(caracteristicas)

// Remova uma propriedade desse objeto.
delete caracteristicas.signo
console.log(caracteristicas)

//Mostre no console todas as propriedades desse objeto.
console.log(caracteristicas)

// Crie um array  chamado "cadastro" contendo ao menos 5 objetos.
//Cada objeto deve receber as seguintes propriedades: nome,  idade,  telefone, amigos. 
//Na propriedade amigos, adicione ao menos 4 itens.
// Mostre no console o nome de um amigo de cada lista. 
const cadastro = [{
    nome: "Artur",
    idade: 17,
    telefone: 15242,
    amigos: ["Letícia", "Vitor", "Samara", "Maria", "Vt"] ,

}, 
{
    nome: "Letícia" ,
    idade: 18,
    telefone: 87524,
    amigos: ["Artur", "Isabela", "Duda", "Kalen", "Daniel"], 
},
{
    nome: "Lara",
    idade: 10,
    telefone: 55200,
    amigos:["Ana Júlia","Betina","Ana Luiza","Sofia","Alana"],
},

{
    nome: "Elaine",
    idade: 42,
    telefone: 78549,
    amigos: ["Dayana","Renata","Jéssica","Jorge Luís","Grécia"],
},
{
    nome: "Daniel",
    idade: 19,
    telefone: 85785,
    amigos: ["Luquinhas","Letícia","Tiago","Guilherme","Vinicius"],
}]

console.log(cadastro)
console.log(cadastro[0].amigos[0], cadastro[1].amigos[0],cadastro[2].amigos[0],cadastro[3].amigos[0],cadastro[4].amigos[0])
