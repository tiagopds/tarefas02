//Exercícios de laços: 01
/*No nosso sistema, o usuário será solicitado para inserir
vários números, um após o outro
● Quando ele digitar o número '0', devemos parar de
solicitar novos inputs e imprimir no console a soma de
todos os números por ele indicados
● Ex.: Vamos supor que ele coloque: 10, 3, 50, 7, 0.
O resultado deve ser: 70 

//Declare variáveis:
let i = 0
let soma = 0
//Inicializa i
i = Number(prompt("Digite um número para ser somado: (para sair digite 0!!!"))
//inicializa loop
while(i !=0){
    //soma valores
    soma = soma + i
    //lê valores para somar
i = Number(prompt("Digite um número para ser somado: (para sair digite 0!!!"))
}
//Mostra valores somados na tela após sair do loop 
alert(soma)
*/

//----------------------------------------------------------------------------------------

//Exercício laços: 02

/*Escreva uma função que receba um array com números e
devolva qual o maior dentro dele.

Ex: Para o array [11, 15, 18, 14, 12, 13], a saída deve ser: "O
maior número é 18"
*/

/*let array = [11, 15, 18, 14, 12, 13]
let maiorValor = 0

for (let i = 0; i < 6; i++){
      if (array[i] > maiorValor){
        maiorValor = array[i]
      }
}
alert(maiorValor)//18
*/
//--------------------------------------------------------------------------------------

/*// Exemplo de For
const palavras = ["oi", "sumido(a)", "tudo", "bem?", "Saudades"]
let frase = ""

for (let indices of palavras){
  frase = frase + indices + ""
}
alert(frase)*/

//---------------------------------------------------------------------------------------

//Exercícios de Laços, escrita de código:
/*
1.Pergunte ao usuário quantos bichinhos de estimação ele tem e guarde esse dado em uma variável.   
a)Se a quantidade for 0, imprima no console "Que pena! Você pode adotar um pet!"
b)Se a quantidade for maior que 0, solicite que o usuário digite os nomes deles, um por um, e guarde esses nomes em um array

- 💡 Dica
        
 <aside>
Coloque o seu prompt dentro de um loop. Esse loop deve ser executado a mesma quantidade de vezes que o usuário inseriu. Por exemplo: 
se o usuário tem 4 pets, ele deve conseguir inserir 4 nomes.

</aside> 
c) Por fim, imprima o array com os nomes dos bichinhos no console
  */

let quantidade = Number(prompt("Digite quantos bichinhos de estimação você tem ?"))
let nomePet = []

if (quantidade === 0) {
  alert("Que pena! Você pode adotar um pet!")
} else if (quantidade > 0) {
  for (let i = 0; i < quantidade;  i++){
    let nome = prompt("Digite o nome dos seus pet's!")
    nomePet.push(nome)
    // quantidadeMaior = quantidadeMaior + i + " "
  }
}
for (let i = 0; i < quantidade; i ++){
  alert(nomePet[i])
}

//Exercicíos 02 Laços:
/*
2.Considere que você tenha acesso a um `array`(chamado de 'array original') que é composto somente de números.
Baseando-se nisso, crie uma função para cada um dos itens abaixo, realizando as operações pedidas:
    
a)Escreva um programa que **imprime** cada um dos valores do array original.
    
b)Escreva um programa que **imprime** cada um dos valores do array original divididos por 10.
    
c)Escreva um programa que **crie** um novo array contendo, somente, 
os números pares do array original e **imprima** esse novo array.
    
d)Escreva um programa que **crie** um novo array contendo strings, 
da seguinte forma:"O elemento do índex `i` é: `numero`".Depois, **imprima** este novo array.
    
e)Escreva um programa que imprima no console o maior e o menor números contidos no array original.

*/