let speed = 0
let spaceship = ""
let spaceshipVelocity = 0

function speedUp(s) {
  let newSpeed = s + 5
  return newSpeed
}

function slowDown(s) {
  let newSpeed = s - 5
  return newSpeed
}

function printBoard(spaceshipName, spaceshipSpeed) {
  window.alert(`Diário de Bordo Atual:
  EspaçoNave: ${spaceshipName}
  Velocidade Atual: ${spaceshipSpeed}
  `)
}

let option = ""
spaceship = window.prompt("Insira o Nome da Espaço Nave")

do {
  option = window.prompt(`Bem vindo ao Diário de Bordo da espaçonave ${spaceship}:
  1 - Acelear 5 Km/s
  2 - Desacelerar 5 Km/s 
  3 - Exibir Diário de Bordo
  4 - Sair
  `)

  switch(option){
    case "1":
      speed = speedUp(speed)
      console.log("oihn32ruihn2")
    break
    case "2":
      speed = slowDown(speed)
      console.log("oihn32ruihn2")
    break
    case "3":
      printBoard(spaceship, speed)
    break
    case "4":
      window.alert("Saindo...")
    break
    default:
      window.alert("Escolha um opção válida")
  }

}while( option !== "4")