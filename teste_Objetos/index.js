/*Exercícios de interpretação de código: Objetos
Tente responder os exercícios dessa seção sem executar o código. Se ficar muito difícil,
pode rodar no seu computador **para analisar e pensar sobre o resultado.**
*/
/*const filme = {
	nome: "Auto da Compadecida", 
	ano: 2000, 
	elenco: [
		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
		"Virginia Cavendish"
		], 
	transmissoesHoje: [
		{canal: "Telecine", horario: "21h"}, 
		{canal: "Canal Brasil", horario: "19h"}, 
		{canal: "Globo", horario: "14h"}
		]
}

console.log(filme.elenco[0])
console.log(filme.elenco[filme.elenco.length - 1])
console.log(filme.transmissoesHoje[2])

// a) O que vai ser impresso no console?
Matheus Nachtergaele
Virginia Cavendish
{canal: 'Globo', horario: '14h'}
*/

//------------------------------------------------------------------------------------------------------------------

/*const cachorro = {
	nome: "Juca", 
	idade: 3, 
	raca: "SRD"
}

const gato = {...cachorro, nome: "Juba"}

const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

console.log(cachorro)
console.log(gato)
console.log(tartaruga)
*/

// a) O que vai ser impresso no console?
/*
resposta:
{nome: 'Juca', idade: 3, raca: 'SRD'}
{nome: 'Juba', idade: 3, raca: 'SRD'}
{nome: 'Jubo', idade: 3, raca: 'SRD'}
*/

// b) O que faz a sintaxe dos três pontos antes do nome de um objeto?
// Resposta: Ela copia o cadastro anterior sem alteração.

//-----------------------------------------------------------------------------------------------------------------

/*function minhaFuncao(objeto, propriedade) {
	return objeto[propriedade]
}

const pessoa = {
  nome: "Caio", 
  idade: 23, 
  backender: false
}

console.log(minhaFuncao(pessoa, "backender"))
console.log(minhaFuncao(pessoa, "altura"))

/*a) O que vai ser impresso no console?
Resposta:
false
undefined

// b) Explique o valor impresso no console. Você sabe por que isso aconteceu?
//Resposta: 
*/

//------------------------------------------------------------------------------------------------------------------

// Exercícios de escrita de código:
/*1.Resolva os passos a seguir:   
a) Crie um objeto. Ele deve conter duas propriedades:
nome (string) e apelidos (um array que sempre terá exatamente **três apelidos**). 
Depois, escreva uma função que recebe como entrada um objeto e imprime uma mensagem no modelo abaixo**:**
// Exemplo de entrada
*/

/*const pessoa = {
   nome: "Vitor Hugo", 
   apelidos: ["Vitinho", "Vitão", "Vit"]
}
*/
// Exemplo de saída
//"Eu sou Vitor, mas pode me chamar de: Vitinho, Vitão ou Vit"

const pessoa = {
    nome: "Tiago", 
    apelidos: ["Tiagao", "Ti", "Tiaguinho"]

 }
 console.log("Eu sou " + pessoa.nome)
 console.log(", mas pode me chamar: " +  pessoa.apelidos)

//b)Agora, usando o operador spread, crie um novo objeto mantendo o valor da propriedade nome, 
//mas com uma nova lista de três apelidos.
//Depois, chame a função feita no item anterior passando como argumento o novo objeto


//------------------------------------------------------------------------------------------------------------------

/* 2.Resolva os passos a seguir: 
    
    a) Crie dois objetos diferentes com as seguintes propriedades: nome, idade e profissão. 
    
    b) Escreva uma função que receba um objeto de cada vez e retorne um array com as seguintes informações:
    
    1. O valor de `nome`
    2. O numero de caracteres do valor `nome`
    3. O valor de `idade`
    4. O valor de `profissão`
    5. O numero de caracteres do valor `profissão`
    

    const pessoa = {
        nome: "Bruno", 
      idade: 23, 
        profissao: "Instrutor"
    }
    
    function minhaFuncao(pessoa) {
      const resultado = []
        // desenvolver sua logica
      return resultado
    }
    
    console.log(minhaFuncao(pessoa))
    // Retorno: ["Bruno", 5, 23, "Instrutor", 9]
    */

//-----------------------------------------------------------------------------------------------------------------

/*3. Resolva os passos a seguir: 
    
    a) Crie uma variável de escopo global que guarde um `array` vazio chamada `carrinho`
    
    b) Crie três novos objetos que representem frutas de um sacolão. Eles devem ter as seguintes propriedades: nome (`string`) e disponibilidade (`boolean` - devem começar como `true`)
    
    c) Crie uma função que **receba** um objeto fruta por **parâmetro** e coloque-a dentro do array de `carrinho`. Invoque essa função passando os três objetos criados. 
    
    - 💡  Dica
        
        <aside>
        💡 Aqui você deve usar o método **push()**
        
        </aside>
        
    
    d) Imprima a variável `carrinho` e garanta que ela agora seja um **array preenchido com três objetos.**
    */