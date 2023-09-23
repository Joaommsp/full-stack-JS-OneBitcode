let spaceship = {
  speed: 0,
  speedUp(velocity) {
    return this.speed += velocity
  }
}

console.log(spaceship)

  function registerShip() {window.alert("Bom vindo ao Controle de Bordo")
  spaceship.spaceshipName = window.prompt("Insira o Nome da Nave")
  spaceship.spaceshipType = window.prompt("Insira o Tipo de Nave")
  spaceship.max = Number(window.prompt("Insira a velocidade Máxima da Nave"))
}

function menu() {
  let option = ""

  do {
    window.alert(`
    Controle de Bordo de ${spaceship.spaceshipName}
    Nave ${spaceship.spaceshipType}
    Velocidade Máxima: ${spaceship.max}
    Velocidade Atual: ${spaceship.speed}
    `)
  
    option = window.prompt(`Deseja acelerar ou parar a Nave ?
    Acelerar: Comand 1
    Parar: Comand 0 
    3 - Sair do Controle de Bordo
    `)
  
    switch(option){
      case "1":
        let velocity = Number(window.prompt("Insira a velocidade que deseja acelerar"))
        spaceship.speedUp(velocity)
        if(spaceship.speed >= spaceship.max ) {
          spaceship.speed = spaceship.max
          window.alert(`Velocidade máxima de ${spaceship.max}Km/s alcançada`)
        }
        break
      case "0":
        spaceship.speed = 0
        window.alert("Parando a Nave...")
        break
      case "3":
        window.alert("Saindo...")
        break
      default:
        window.alert("Escolha uma Opção Válida!!!")
      }

  }while(option !== "3")

}

registerShip()
menu()