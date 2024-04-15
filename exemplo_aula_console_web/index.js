/*//Recebeu as variáveis
let nome = prompt("Digite seu nome: ")
let idade = prompt("Digite sua idade: ")

//MENSAGEM: Digite as horas que você trabalha por dia:
let horasTrabalho = prompt("Digite as horas que você trabalha por dia:")
let salarioDia = prompt("Digite o seu salário diário:")

 //Verificando as variáveis
console.log(typeof nome)
console.log(typeof horasTrabalho)
console.log(typeof salarioDia)

//Convertendo o que é necessário
let horasTrabNumber = Number(horasTrabalho)
let salDiaNumber = Number(salarioDia)

//Processando valores
let valHoraNumber = salDiaNumber/horasTrabNumber

//Conversão para não dar erro de NULL
let valorHora = String(valHoraNumber)
const mensagem = "Seu valor e" + valorHora + "!!!"

//Verificando variáveis
console.log(typeof valorHora)
console.log(typeof mensagem)
console.log(mensagem)

//Saída de valores para Front End
alert(mensagem)*/


let resultado
resultado = 3 + 4
alert(resultado)

resultado = (3+5)/2
alert(resultado)

resultado = 3+5/2
alert(resultado)

resultado = (4-5)*-1
alert(resultado)

resultado = 234 % 5
alert(resultado)