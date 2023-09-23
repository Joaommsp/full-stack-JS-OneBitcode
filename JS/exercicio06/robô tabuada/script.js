let num
let i
let result = ""

num = parseInt(window.prompt("Bem vindo ao Robô da Tabuada"
+"\nEscolha um número:"
))

for(i = 1; i <= 20 ; i++) {
    result += "\nResultado: "+ num + " X " + i + " = " + num * i
}

window.alert("Aqui está a tabuada de " + num + " de 1 - 20 "
+"\n"+ result
)