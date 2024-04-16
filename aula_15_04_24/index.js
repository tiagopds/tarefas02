/*let resultado
resultado = 3 + 4
alert(resultado)

resultado = (3+5)/2
alert(resultado)

resultado = 3+5/2
alert(resultado)

resultado = (4-5)*-1
alert(resultado)

resultado = 234 % 5
alert(resultado)*/

/*//Declaração de Variáveis
let primeiroNumero
let segundoNumero
let resultado

//Leitura de Dados informados pelo Usuário
primeiroNumero = prompt("Digite o primeiro numero:")
segundoNumero = prompt("Digite o segundo numero:")

//Teste de comparação
resultado = primeiroNumero === segundoNumero

//Mostra resultados na tela
alert(`Seu Primeiro Número é ${resultado} que o Segundo Número`)

primeiroNumero = prompt("Digite o primeiro numero:")
segundoNumero = prompt("Digite o segundo numero:")
resultado = primeiroNumero !== segundoNumero
alert(`Seu Primeiro Número é ${resultado} que o Segundo Número`)

primeiroNumero = prompt("Digite o primeiro numero:")
segundoNumero = prompt("Digite o segundo numero:")
resultado = primeiroNumero > segundoNumero
alert(`Seu Primeiro Número é ${resultado} que o Segundo Número`)

primeiroNumero = prompt("Digite o primeiro numero:")
segundoNumero = prompt("Digite o segundo numero:")
resultado = primeiroNumero < segundoNumero
alert(`Seu Primeiro Número é ${resultado} que o Segundo Número`)*/

/*//Declaração de Variáveis
let a
let b
let c
let resultado

// Leitura de  dados informados pelo Usuário
a = true
b = false
c = true

// 1. Realize a operação: a && b
resultado = a && b
alert(resultado)
//2. Realize a operação: a && c
resultado = a && c
alert(resultado)
//3.Realize a operação: a && c
resultado = a && c
alert(resultado)
//4.Realize a operação: a && b && c
resultado = a && b && c
alert(resultado)
//1.Realize a operação: a || b
resultado = a || b 
alert(resultado)
//2.Realize a operação: b || c
resultado = b || c
alert(resultado)
//3.Realize a operação: a || c
resultado = a || c
alert(resultado)
//4.Realize a operação: a || b || c
resultado = a || b || c
alert(resultado)*/

// Declarar variáveis
let nome 
let anodeNascimento 
let anoAtual 
let idade
let maiordeIdade 
let idade2050

//Recebe valores
nome = prompt("Digite seu nome:")
anodeNascimento = prompt("Digite seu ano de Nascimento:")
anoAtual = prompt("Digite o Ano atual:")

//Calcula valores pedidos
idade = anoAtual - anodeNascimento
maiordeIdade = idade >= 18
idade2050 = 2050 - anodeNascimento

//Mostra resultado na tela
alert(nome)
alert(idade)
alert(maiordeIdade)
alert (idade2050)


