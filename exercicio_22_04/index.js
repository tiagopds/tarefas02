//EXERCICÍOS:
/*1.Faça um programa que pergunte ao usuário seu nome e seu e-mail.
Em seguida, Imprima no console a seguinte mensagem:
O e-mail `emailDoUsuario` foi cadastrado com sucesso. 
Seja bem-vinda(o), `nomeDoUsuario`!*/

/*let nome = prompt("Digite seu nome")
let emailDoUsuario = prompt("Digite seu email")
const mensagem = "Seu email foi cadastrado com sucesso."
alert (mensagem)
alert ("Seja bem vindo")
alert (nome)*/

/*Faça um programa que contenha um array com 5 das suas comidas preferidas,
armazenado em uma variável. Em seguida, siga os passos:

a) Imprima no console o array completo

b) Imprima no console a mensagem "Essas são as minhas comidas preferidas":
seguida por cada uma das comidas, **uma embaixo da outra**.

c) Aqui vai um desafio: pergunte ao usuário uma comida preferida.
Troque a segunda comida da sua lista pela inserida pelo usuário.
Imprima no console a nova lista*/


let comidas = prompt("Digite sua comida preferida?")
console.log = prompt("Essas são as minhas comidas preferidas: ")
let comidasPreferidas = ["Arroz","Bife","Ovo","Batata frita","Feijao"]
//console.log(comidasPreferidas[0])
//console.log(comidasPreferidas[1])
//console.log(comidasPreferidas[2])
//console.log(comidasPreferidas[3])
//console.log(comidasPreferidas[4])

console.log(comidasPreferidas[0] + "\n" + comidasPreferidas[1] + "\n" + comidasPreferidas[2] + "\n"+ comidasPreferidas[3] + "\n" + comidasPreferidas[4])


