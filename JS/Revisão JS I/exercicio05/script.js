let count = 0
let chipName = ""
let option = ""

chipName = window.prompt("Insira o nome da Nave")

option = window.prompt(`Deseja entrar em Dobra Espacial?
Comandos:
1 - Sim
2 - Não
`)

if(option == "1") {
  count ++
  window.alert(`Dobra ${count} realizada`)
}
else {
  window.alert("Parando a Nave...")
}


while(option == "1") {
  count++
  option = window.prompt(`Deseja Realizar a próxima dobra?
  Comandos:
  1 - Sim
  2 - Não
  `)

  if(option == "1") {
    window.alert(`Dobra ${count} realizada`)
  }
  else {
    window.alert("Parando a Nave...")
  }
}

window.alert(`Relatório De Viagem:
Nave: ${chipName}
Quantidade de dobras espaciais realizadas: ${count}
`)