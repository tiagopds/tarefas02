//Exercicíos:01,02,03 aula23/04/2024

/*Crie uma função que:
● Recebe 2 números (chamaremos de num1 e num2)
● Compara esses números entre si:
○ Retorna mensagens dizendo se o primeiro número é
{maior/menor/igual} ao segundo número
*/
// Declara Variáveis:
/*let num1 = 8
let num2 = 8
// Lê valores do usúario:
num1 = prompt("Digite um número: ")
num2 = prompt("Digite um número: ")
//processa dados:
if(num1 > num2){
    alert(`Números maior!!!`)
} else if (num1 < num2){
    alert(`Número menor!!!`)
} else if (num1 == num2){
    alert(`Números iguais!!!`)
}
    */
//--------------------------------------------------------------------------------------------

//Exercicíos:04 Pokémon
/*
Escreva um programa que receba
o Pokémon inicial escolhido pela
pessoa e imprima no console o seu
tipo:


//Declara variáveis:
let pokemon

//lê valores do usuário:
pokemon = prompt("Digite seu primeiro pokemon: ")

// Processa Dados:
switch (pokemon){
    case 'Bulbassauro':
        alert(`Planta e veneno!!!`)
        break
        case 'charmander':
            alert(`fogo!!!`)
            break
            case 'Squirtle':
                alert(`Água!!!`)
                break
                default:
                    alert(`Não é pokemon inicial!!!`)
                    break
}
*/

//--------------------------------------------------------------------------------------------

/*//Exercicíos 05:
//Declara variáveis e lê valores:
let cond1 = prompt ("Você concluiu o ensino médio?")
let cond2 = prompt ("Você tem mais de 18 anos?")
let cond3 = prompt ("Você está cursando outra faculdade?")
// Condicional para faculdade
if((cond1 == "sim") && (cond2 == "sim") && (cond3 == "não")){
    alert(`Você pode cursar a faculdade !!!`)
} else {
    alert(`Você NÃO pode cursar a faculdade!!!`)
}
*/

//---------------------------------------------------------------------------------------

//Exercícios de interpretação de código:
//1-Leia o código abaixo:
/*const respostaDoUsuario = prompt("Digite o número que você quer testar")
const numero = Number(respostaDoUsuario)

if (numero % 2 === 0) {
  console.log("Passou no teste.")
} else {
  console.log("Não passou no teste.")
}
*/
//a) Explique o que o código faz. Qual o teste que ele realiza? 
     // Resposta: Se o Número é par.  
//b) Para que tipos de números ele imprime no console "Passou no teste"? 
      // Resposta: Se for divisivel por 2.
//c) Para que tipos de números a mensagem é "Não passou no teste"?
      // Resposta: Ímpar.

//-------------------------------------------------------------------------------------------

// Exercicíos 02:
/*
let fruta = prompt("Escolha uma fruta")
let preco
switch (fruta) {
  case "Laranja":
    preco = 3.5
    break;
  case "Maçã":
    preco = 2.25
    break;
  case "Uva":
    preco = 0.30
    break;
  case "Pêra":
    preco = 5.5
    break; // BREAK PARA O ITEM c.
  default:
    preco = 5
    break;
}
console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)
/*
 02- O código abaixo foi feito por uma pessoa desenvolvedora,
contratada para automatizar algumas tarefas de um supermercado:
a) Para que serve o código acima?
Resposta: Para descubrir o valor da fruta que vc quer comprar.

b) Qual será a mensagem impressa no console, se o valor de fruta for `"Maçã"`?
Resposta: O preço da fruta  Maçã  é  R$  2.25

c) Considere que um usuário queira comprar uma `Pêra`, 
qual seria a mensagem impressa no console se retirássemos o `break` 
que está logo acima do `default` (o `break` indicado pelo comentário "BREAK PARA O ITEM c.")?
Resposta: O preço da fruta  Pêra  é  R$  5.5
*/
//-----------------------------------------------------------------------------------------

//Exercicíos 03:
//Leia o código abaixo:

const numero = Number(prompt("Digite o primeiro número."))

if(numero > 0) {
  console.log("Esse número passou no teste")
	let mensagem = "Essa mensagem é secreta!!!"
}

console.log(mensagem)
/*
a) O que a primeira linha está fazendo?
Resposta: Digite o primeiro número

b) Considere um usuário digitou o número 10.
Qual será a mensagem do terminal? resposta:Esse número passou no teste 
E se fosse o número -10?
Resposta:

c) Haverá algum erro no console? Justifique usando os conceitos de bloco ou escopo.
Resposta:



*/















