let dano = 0

let person = window.prompt("Insira o nome do personagem: \n")
let ataque = window.prompt(`Insira o poder de ataque de ${person}\n`)
let atq = parseFloat(ataque)

let person2 = window.prompt("Insira o nome do adversário: ")
let person2_vida = window.prompt(`Insira a quantidade de vida de ${person2}`)
parseFloat(person2_vida)

let person2_nova_vida

let person2_defesa = window.prompt(`Insira os pontos de defesa de ${person2}`)
let def = parseFloat(person2_defesa)

let escudo
let confirmarEscudo = window.confirm(`${person2} possui escudo ?`)
console.log(confirmarEscudo)

if(confirmarEscudo == false) {
    if(atq > def) {
        dano = atq - def
        window.alert(`Dano causado: ${dano}`)
    }
    else {
        dano = 0
        window.alert(`Dano causado: ${dano}`)
    }
}
else {
    if(atq > def) {
        dano = (atq - def) / 2
        window.alert(`Dano causado com escudo: ${dano}`)
    }
    else {
        dano = 0
        window.alert(`Dano causado com escudo: ${dano}`)
    }
}

person2_nova_vida = person2_vida - dano

window.alert(`Status ${person}:
Poder de ataque: ${ataque}
`)

window.alert(`Status ${person2}
Vida: ${person2_nova_vida}
defesa: ${person2_defesa}
`)