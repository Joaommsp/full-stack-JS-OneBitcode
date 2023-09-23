let veloc1 = window.prompt("Digite a velocidade do primeiro veículo: ")
let veloc2 = window.prompt("Digite a velocidade do segundo veículo: ")

let v1 = parseFloat(veloc1)
let v2 = parseFloat(veloc2)

if(v1 > v2) {
    window.alert(`O primeiro veículo é mais rápido com velocidade de ${veloc1}Km/h\n`)
}
else if(v1 == v2) {
    window.alert(`As velocidade são iguais!!\n`)
}
else {
    window.alert(`O segundo veículo está mais rápido com velocidade de ${veloc2}Km/h\n`)
}
