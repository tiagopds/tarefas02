/* Seu colega se aproxima de você falando que o código dele não funciona como devia.
Vamos ajudá-lo:
consegue perceber algum problema? O que será impresso no console? 

let num1 = Number(prompt("Digite um numero!"))
let num2 = Number(prompt("Digite outro numero!"))

const soma = num1+num2

console.log(soma)
alert(soma)*/

/*1. Faça um programa que:
    
a) Pergunte a idade do usuário
    
b) Pergunte a idade do seu melhor amigo ou da sua melhor amiga
    
c) **Imprima no console** a seguinte mensagem:"Sua idade é maior do que a do seu melhor amigo?", seguido pela resposta (`true` ou `false`)
    
d) **Imprima no console** a diferença de idade (não tem problema se sair um número negativo)

*/
/*
let idade = Number (prompt("Qual sua idade:"))//Pergunte a idade do usuário
let idadeAmigo = Number (prompt("Qual idade do seu amigo:"))//Pergunte a idade do seu melhor amigo ou da sua melhor amiga

resultado = idade >= idadeAmigo

alert (idade)
alert(idadeAmigo)
alert (`Sua idade é maior do que do seu amigo? ${resultado}`)
diferença = idade - idadeAmigo
alert(`Diferença de idade ${diferença}`)
*/

/*2-2. Faça um programa que:
    
a) Peça ao usuário que insira um número **par**
    
b) Imprima na console **o resto da divisão** desse número por 2.

c) Teste o programa com diversos números pares. Você notou um padrão? Escreva em um comentário de código.

d) O que acontece se o usuário inserir um número ímpar? Escreva em um comentário de código
*/

/*//let nome = prompt("Qual é o seu nome")
//let cor = prompt("Qual sua cor favorita?:")

//alert(`meu nome é ${nome} e minha cor é : ${cor}`)

let nome = prompt("Digite seu nome:")
let cor = prompt("Digite sua cor favorita")

// Mostrar a mensagem na tela

alert("A cor favorita de " + nome  + " é " + cor)
alert(`A cor favorita de ${nome} é ${cor}`)*/

//outra atividade de Strings 

/*let frase = prompt("Digite uma frase")
console.log(frase.toUpperCase)
console.log(frase.replaceAll("o","i"))
console.log(frase.length)
console.log(frase.replaceAll("o","i")).toUpperCase().frase.replaceAll("H","P")
alert(frase)*/

//Criando Arrays exercicíos:03
//const raçasDeCachorro = ["pastor alemao","buldoque","labrador","poodle","maltes"]
//let optionRaca = prompt("Digite um número de 0 a 4:")
//alert(raçasDeCachorro[optionRaca])

//exercicíos:04
let numbers = [1,2,3,4,5,6]
console.log(numbers.length)
numbers.push(7)
numbers.splice(3,2)
console.log(numbers.length)
console.log(numbers)