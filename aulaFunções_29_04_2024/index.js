
// AULA DE FUNÇÕES DIA: 29/04/2024

//EXERCICÍOS: 01 FUNÇÕES
/*function imprimirOlaMundo(){
alert("olá Mundo!")
}
imprimirOlaMundo()
imprimirOlaMundo()
imprimirOlaMundo()
*/

//--------------------------------------------------------------------------------------------
//EXERCICÍOS: 02 FUNÇÕES
/*function imprimirNome(nome){
alert(`Olá ${nome}`)
}
let NomeUser = ""
NomeUser = prompt("Digite seu nome:")
imprimirNome(NomeUser)
NomeUser = prompt("Digite seu nome:")
imprimirNome(NomeUser)
NomeUser = prompt("Digite seu nome:")
imprimirNome(NomeUser)
*/

//-------------------------------------------------------------------------------------------

//EXERCICÍOS: 03 FUNÇÕES
//RECEBA DOIS NUMEROS E  RETORNE A SOMA ENTRE ELES:

/*function somaNum(num1,num2){
    let soma = num1 + num2
    return soma
}
let numero1 = 2
let numero2 = 12
let resultado = 0
resultado = somaNum(numero1,numero2)
alert(resultado)
*/
//------------------------------------------------------------------------------------------

//Exercicío 04:
function trataArray(newArray){
  // inicializa variáveis
let array = []
let tamanho = newArray.length

// Armazena primeiro valor dividido por 2
array.push((newArray[0]/2))
array.push((newArray[(tamanho-1)]/2))
// Retorna array nova
return array
}
// Declara variáveis
let array = [2,3,4,5,6,7,8]
let novaArray = []
// Chama função
novaArray = trataArray(array)
// Escreve com alert
alert(novaArray)
