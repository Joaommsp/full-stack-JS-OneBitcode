
window.alert("Seja bem vindo!!")
let nome =  window.prompt(`Digite seu nome:`)
let age =  window.prompt("Digite sua idade:")

let confirm = window.confirm(`Confirmar dados:
Nome: ${nome}
Idade: ${age} anos
`)

if(confirm) {
  window.alert("Dados salvos com sucesso")
}
else{
  window.alert("Cancelando...")
}