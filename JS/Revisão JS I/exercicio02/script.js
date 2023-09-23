let olderName = ""
let olderAge = 0
let yungerName = ""
let yungerAge = 0

let diferenca = 0

window.alert("Quem é o mais velho?")

olderName = window.prompt("Digite o nome da Primeira Pessoa: ")
olderAge = parseInt(window.prompt("Digite a idade da Primeira Pessoa: "))

yungerName = window.prompt("Digite o nome da Segunda Pessoa: ")
yungerAge = parseInt(window.prompt("Digite a idade ds Segunda Pessoa: "))


if(olderAge > yungerAge) {
  diferenca = olderAge - yungerAge
  window.alert(`A diferença de idade é de ${diferenca} ano(s) e ${olderName} é o mais velho!!`)
}
else {
  diferenca = yungerAge = olderAge
  window.alert(`A diferença de idade é de ${diferenca} ano{s) e ${yungerName} é o mais velho!!`)
}

