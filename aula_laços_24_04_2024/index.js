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

let array = [11, 15, 18, 14, 12, 13]
let maiorValor = 0

for (let i = 0; i < 6; i++){
      if (array[i] > maiorValor){
        maiorValor = array[i]
      }
}
alert(maiorValor)//18