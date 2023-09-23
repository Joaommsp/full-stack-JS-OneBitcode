/*## Sistema de Vagas de Emprego

Escreva um programa em javascript que simule um sistema de vagas de emprego, onde é possível gerenciar as vagas e adicionar candidatos às vagas. Ele deve atender aos seguintes requisitos:

- Ter um um menu onde é possível escolher entre as diferentes funcionalidades do sistema
    - Listar vagas disponíveis
    - Criar um nova vaga
    - Visualizar uma vaga
    - Inscrever um candidato em uma vaga
    - Excluir uma vaga
    - Sair
- A opção de listar as vagas deve mostrar o índice, o nome e a quantidade de candidatos inscritos de todas as vagas.
- A opção de criar uma nova vaga deve pedir um nome para a vaga, uma descrição e uma data limite, e também deve pedir que o usuário confirme as informações antes de salvá-las.
- A opção de visualizar uma vaga deve pedir o índice da vaga e mostrar todas as informações dela: índice, nome, descrição, data limite, quantidade de candidatos e o nome dos candidatos.
- A opção de inscrever um candidato em uma vaga de pedir o nome do candidato, o índice da vaga e então uma confirmação exibindo as informações da vaga antes de salvar o candidato na vaga.
- A opção de excluir uma vaga deve pedir o índice da vaga, mostrar suas informações e pedir que o usuário confirme a exclusão da vaga antes de realmente exclui-la.

Este é o exercício de revisão do módulo, então aproveite para utilizar todos os recursos vistos até agora sempre que possível, como os objetos, arrays e funções.*/

let option = ""
let list = []
let listDetails = Object()
console.log(list)

function menu() {

  option = window.prompt(`Menu Inicial
  Escolha um opção:
    1- Listar vagas disponíveis
    2- Criar um nova vaga
    3- Visualizar uma vaga
    4- Inscrever um candidato em uma vaga
    5- Excluir uma vaga
    6- Sair
  `)

  return option
}

function jobList() {

  if(list[0] != undefined) {

    for(i = 0; i < list.length ; i++) {


      window.alert(`Vaga ${i + 1}:
      Nome: ${list[i].jobName}
      Descrição: ${list[i].description}
      Data Limite: ${list[i].limitDate}
      Quantidade de Candidatos: ${list[i].candidates}
      Nomes dos Candidatos: ${list[i].candidatesNames}
      `)
    }
  }
  else {
    window.alert("Não há vagas")
  }
}

function createJob() {

  listDetails.jobName = window.prompt(`Insira o nome da Vaga de Emprego`)
  listDetails.candidates = 0
  listDetails.candidatesNames = []
  listDetails.description = window.prompt(`Adicione uma descrição para a vaga`)
  listDetails.limitDate = window.prompt(`Adicione o prazo de disponibilidade da vaga`)

  list.push(listDetails)
  console.log(list.length)

  let i = list.length

  window.alert(`Vaga Adicionada :
    Nome: ${list[i - 1].jobName}
    Descrição: ${list[i- 1].description}
    Data Limite: ${list[i - 1].limitDate}
    Quantidade de Candidatos: ${list[i - 1].candidates}
    Nomes dos Candidatos: ${list[i - 1].candidatesNames}
    `)
  
}

function seeJobs() {

  let i = 0
  i = window.prompt(`Insira o índice da vaga`)

  if(list[i] !== undefined) {
    window.alert(`Vaga ${i + 1}:
    Nome: ${list[i].jobName}
    Descrição: ${list[i].description}
    Data Limite: ${list[i].limitDate}
    Quantidade de Candidatos: ${list[i].candidates}
    Nomes dos Candidatos: ${list[i].candidatesNames}
    `)
  }
  else {
    window.alert("Vaga não encontrada")
  }
  
}

function candidateJob() {

  let candidate = ""
  let i = 0

  candidate = window.prompt("Qual o nome do candidato?")
  i = window.prompt("Qual a posição da vaga?")

    list[i].candidatesNames.push(candidate)
    list[i].candidates ++

    window.alert(`Vaga escolhida:
    Nome: ${list[i].jobName}
    Descrição: ${list[i].description}
    Data Limite: ${list[i].limitDate}
    Quantidade de Candidatos: ${list[i].candidates}
    Nomes dos Candidatos: ${list[i].candidatesNames}
  `)

}

function deleteJob() {

  let i = 0
  let confirm = true

  i = window.prompt("Digite a posição da vaga a ser deletada")

  confirm = window.confirm(`Vaga a ser deletada:
  Nome: ${list[i].jobName}
  Descrição: ${list[i].description}
  Data Limite: ${list[i].limitDate}
  Quantidade de Candidatos: ${list[i].candidates}
  Nomes dos Candidatos: ${list[i].candidatesNames}
  `)

  if(confirm) {
    list.splice(i, 1)
  }
  else{
    window.alert("Exclusão cancelada")
  }

}



do {
  option = menu()

  switch(option) {
    case "1":
      jobList()  
    break
    case "2":
      createJob()
    break
    case "3":
      seeJobs()
    break
    case "4":
      candidateJob()
    break
    case "5":
      deleteJob()
    break
    case "6":
      window.alert("Saindo...")
    break
    default:
      window.alert("Escolha uma opção Válida")
  }
 

}while(option !== "6")