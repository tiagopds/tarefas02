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

let idade = Number (prompt("Qual sua idade:"))//Pergunte a idade do usuário
let idadeAmigo = Number (prompt("Qual idade do seu amigo:"))//Pergunte a idade do seu melhor amigo ou da sua melhor amiga

resultado = idade >= idadeAmigo

alert (idade)
alert(idadeAmigo)
alert (`Sua idade é maior do que do seu amigo? ${resultado}`)
diferença = idade - idadeAmigo
alert(`Diferença de idade ${diferença}`)
/*
Imprima no console a seguinte mensagem:"Sua idade é maior do que a do seu melhor amigo?", 
seguido pela resposta (`true` ou `false`)
*/
