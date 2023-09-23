let spaceship = ""
let newSpaceship = ""

spaceship = window.prompt("Insira o nome da nave")

for(let i = spaceship.length - 1; i >= 0 ; i-- ) {

  if(spaceship[i] == "e") {
    break
  }
  else{
    newSpaceship += spaceship[i]
  }
  
}

window.alert(newSpaceship)