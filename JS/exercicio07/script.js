/*Escreva um programa em javascript para simular uma fila de espera em um consultório médico. O
programa deve iniciar mostrando na tela um menu interativo contendo a lista de todos os pacientes
esperando em ordem mostrando sua posição ao lado do nome (ex.: 1º Matheus, 2º Marcos, etc). O
menu também deve permitir escolher entre as opções de “Novo paciente”, para adicionar um novo
paciente ao fim da fila (pedindo o nome do paciente), “Consultar paciente”, que retira o primeiro
paciente da fila e mostra na tela o nome do paciente consultado, e “Sair”. O programa só deve ser
encerrado ao escolher a opção de “Sair”, caso contrário deve voltar ao menu.*/

let patientList = []

let option = 0

do {

  let patients = ""

  for(var i = 0; i < patientList.length ; i ++){
    patients+= "Paciente " + (i+1) + "°: " + patientList[i]
  }
  
  window.alert(`Menu
  lista de pacientes em espera: \n ${patients}
  `)

  option = parseFloat(window.prompt(`Escolha uma opção:
  1 - Novo Paciente 
  2 - Consultar Paciente 
  3 - Sair 
  4 - pilha de cartas
  `))

  if(option == 1) {
  let patientName = window.prompt("Digite o nome do paciente")
  patientList.push(patientName)
  }
  else if(option == 2) {
    let answered = patientList.shift()
    window.alert(`paciente atendido: ${answered}`)
  }

}while(option !== 3)

