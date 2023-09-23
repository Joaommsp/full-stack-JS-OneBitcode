let spaceship = window.prompt("Digite o nome da Nave:")

let charToReplace = window.prompt("Digite o caracter que deseja trocar:")

let charReplacement = window.prompt("Insira o novo caracter")

let newSpaceship = ""

for(let i = 0; i < spaceship.length ; i ++) {
  if(spaceship[i] == charToReplace) {
    newSpaceship += charReplacement
  }
  else {
    newSpaceship += spaceship[i]
  }
}

window.alert(`Novo nome da nave é ${newSpaceship} `)