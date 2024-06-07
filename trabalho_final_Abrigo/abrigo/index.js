// Banco de dados dos abrigos disponíveis no estado
//O nome do "banco de dados" era abrigos, e não abrigosCadastrados
let abrigos = []

// Variáveis
// let =   Permite armazenar cálculos intermediários, valores ou definir nomes dentro de uma fórmula.
let menu   
const listarAbrigos = []  // const = Cria uma variável cujo o valor é fixo, ou seja, uma constante somente leitura.
while (menu !== 5) { // While = Testa a condição; Se a condição for falsa então pula todos os comandos do bloco.
    menu = Number(
    //prompt = Ação de enviar comandos de texto, imprimi o texto digitado.
        prompt(`===== ABRIGOS TEMPORÁRIOS =====  
    

    1. Cadastrar abrigo

    2. Listar abrigos

    3. Procurar abrigo

    4. Sair

    Escolha uma opção:`)
  )
 
  switch (menu) {    // Switch = permite executar um bloco de código diferente de acordo com cada opção (cada case).
    case 1: 
        cadastrar()
        break; // Break = Permite um controle adicional sobre os laços de repetição.
    case 2:
        listar()
        break;
    case 3:            // Case= Ele é usado quando há uma necessidade de executar diferentes blocos de código
        buscarAbrigo()
        break;
    case 4:
        alert("Obrigado por acessar este sistema")
        break;
    default:
        alert("Não existe essa opção no menu!") // Exibe a mensagem final.
        break;
  }

function cadastrar() { // functions retornam valores 
    const nome = prompt("Digite o nome do abrigo")
    const endereco = prompt("Digite a rua, número e bairro do abrigo")
    const cidade = prompt("Digite a cidade do seu abrigo:").toLowerCase()
    const telefone = Number(prompt("Digite  o telefone do abrigo:"))
    const capacidade = Number(prompt("Digite a capacidade do abrigo"))
    abrigos.push({nome,endereco,cidade,telefone,capacidade})
    //Registra no objeto
    //abrigosCadastrados.push(abrigo);
    //alert("Abrigo cadastrado com sucesso!");
  }

function listar() {
    if (abrigos.length === 0) {
        alert("Ainda não existem abrigos cadastrados");
    } else {
        let mensagem =
`
      LISTAGEM DE ABRIGOS:

      ----------------------------------

      NOME      |    ENDEREÇO       |   TELEFONE  |   CAPACIDADE

     --------------------------------------------------------------------`;
    for (let abrigo of abrigos) {
        mensagem += `\n   ${abrigo.nome}  ${abrigo.endereco}  ${abrigo.cidade}  ${abrigo.telefone}  ${abrigo.capacidade}`
    }
    alert(mensagem);  // Exibe a mensagem final.
    }
}
    
function buscarAbrigo() {
if (abrigos.length === 0) {
    alert("Ainda não existem abrigos cadastrados na sua cidade.");
} else {
    const localizarAbrigo = prompt("Digite sua cidade").toLowerCase();
    // .toLowerCase = Converter strings em sua versão em letras minúsculas.
    let mensagem = 
    
    `LISTAGEM DE ABRIGOS:

      ------------------------------------------------------------------

      NOME      |    ENDEREÇO          |   TELEFONE        | CAPACIDADE

     --------------------------------------------------------------------`;
    for (let abrigo of abrigos) { // for=  Permite criar loops e repetir um conjunto de instruções várias vezes. 
        if (abrigo.cidade.includes(localizarAbrigo))
        {
            mensagem += "\n" + abrigo.nome + " " +  abrigo.endereco + " " + abrigo.cidade + " " + abrigo.telefone + " " + abrigo.capacidade
        }
    }
    alert(mensagem); // Exibe a mensagem final.
    }
}
}