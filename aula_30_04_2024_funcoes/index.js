// Exercícios de interpretação de código:
// 1 - Leia o código abaixo
/*function minhaFuncao(variavel) {
return variavel * 5
}
console.log(minhaFuncao(2))
console.log(minhaFuncao(10))
minhaFuncao(2)
minhaFuncao(10)*/

//a) O que vai ser impresso no console? resposta:10,50
/*b) O que aconteceria se retirasse os dois console.log e simplesmente invocasse 
a função minhaFuncao(2) e minhaFuncao(10)? O que apareceria no console?
 resposta: Não vai imprimir nada porque não tem o console */

//-----------------------------------------------------------------------------------------

//  2- Leia o código abaixo:
/*let textoDoUsuario = prompt("Insira um texto");

const outraFuncao = function(texto) {
	return texto.replaceAll("texto","cenoura")
}

const resposta = outraFuncao(textoDoUsuario)
console.log(resposta)*/

/*
a. Explique o que essa função faz e qual é sua utilidade? pede pro usúario inserir um texto e depois troca as letras maiúsculas por minúsculas, depois ve se a palavra é cenoura.
b. Determine qual será a saída no console para cada uma das 3 entradas do usuário:
i.Eu gosto de cenoura
ii.CENOURA é bom pra vista
iii.Cenouras crescem na terra
*/

//-------------------------------------------------------------------------------------------------------------

//Exercícios de escrita de código
// 1- Escreva as funções explicadas abaixo:
//let nome = prompt("Digite seu nome:")
//let idade = prompt("Digite sua idade:")
//let cidade = prompt("Digite sua cidade:")
//let profissão = prompt("Digite sua profissão")

/*
function TrocarParametros(){
let mensagem = "Eu sou Caio, tenho 23 anos, moro em São Paulo e sou estudante."
alert(mensagem)
alert(mensagem.replace("Caio","Tiago").replace("23", "34").replace("São Paulo", "São leopoldo").replace("estudante", "trabalhador"))

}
TrocarParametros()
/*let nome 
let idade
let ondeMora
let oqueFaz 

nome = ("Tiago")
idade = ("34")
ondeMora = ("São Leopoldo")
oqueFaz = ("trabalhador")
console.log(`Me chamo ${nome}, tenho${idade} anos, moro${ondeMora}cidade, trabalho de ${oqueFaz}`)*/

//-----------------------------------------------------------------------------------------------------------------------------------

//b)Agora escreva uma função que receba 4 parâmetros que correspondem às informações de uma pessoa:
//o nome (string),
//a idade (number),
//a cidade (string)
//e uma profissão (string). Ela deve retornar uma string que unifique todas as informações da pessoa em uma só mensagem com o template:

function parametros(nome, idade, cidade, profissão) {
    console.log(
        `Me chamo ${nome} tenho ${idade} anos, moro em ${cidade} e trabalho de ${profissão}`
    );
}
let nome = prompt("Digite seu nome:");
let idade = prompt("Digite sua idade:");
let cidade = prompt("Digite sua cidade:");
let profissão = prompt("Digite sua profissão");
parametros(nome, idade, cidade, profissão);
