/*Escreva um programa em javascript para calcular a área de diferentes 
formas geométricas. O programa deve iniciar com um menu contendo as 
diferentes opções de cálculas. As opções devem ser:

- área do triângulo: base * altura / 2
- área do retângulo: base * altura
- área do quadrado: lado²
- área do trapézio: (base maior + base menor) * altura / 2
- área do círculo: pi * raio² (considere pi = 3.14)

Você deve escrever o programa usando funções sempre que possível para 
separar os procedimentos. O programa também deve ter uma opção de 
“Sair” e enquanto ela não for escolhida deverá voltar ao menu.*/

function triangle(base, height) {
  return  (base * height) / 2 
}

function rectangle(base, height) {
  return base * height
}

function square(side) {
  return Math.pow(side,2)
}

function trapeze(bBase, lBase, height) {
  return (bBase + lBase) * (height * 2)
}

function circle(ray) {
  const pi = 3.14159265359
  return pi * (Math.pow(ray,2))
}

let option = ""
let result = 0

do {

  option = window.prompt(`
  MENU
  Escolha uma opção 
  1- área do triângulo
  2- área do retângulo
  3- área do quadrado
  4- área do trapézio
  5- área do círculo
  6- Sair
`)

switch(option){
  case "1":
  let bTriangle = 0
  let hTriangle = 0

  bTriangle = parseFloat(window.prompt("Insira o valor da BASE do do Triângulo"))
  hTriangle = parseFloat(window.prompt("Insira o valor da ALTURA do Triângulo"))

  result = triangle(bTriangle,hTriangle)

  window.alert(`A área do Triângulo é ${result}`)
  break
  case "2":
  let bRectangle = 0
  let hRectangle = 0
  
  bRectangle = parseFloat(window.prompt("Insira o valor da BASE do Retângulo"))
  hRectangle = parseFloat(window.prompt("Insira o valor da ALTURA do Retângulo"))

  result = rectangle(bRectangle, hRectangle)

  window.alert(`A área do Retângulo é ${result}`)
  break
  case "3":
  let side = 0

  side = parseFloat(window.prompt("Insira o valor do LADO do Quadrado"))

  result = square(side)

  window.alert(`A área do quadrado é ${result}`)
  break
  case "4":
  let bBase = 0
  let lBase = 0
  let hTrapeze = 0

  lBase = parseFloat(window.prompt("Insira a BASE MAIOR do Trapézio"))
  lBase = parseFloat(window.prompt("Insira a BASE MENOR do Trapézio"))
  hTrapeze = parseFloat(window.prompt("Insira a ALTURA do Trapézio"))

  result = trapeze(bBase, lBase, hTrapeze)

  window.alert(`A área do Trapézio é ${result}`)
  break
  case "5":
  let circleRay = 0

  circleRay = parseFloat(window.prompt("Insira o RAIO do Círculo"))

  result = circle(circleRay)

  window.alert(`A área do círculo é ${result.toFixed(2)}`)
  break
  case "6":
    window.alert("Saindo...")
  break
  default:
    window.alert("Escolha um apção válida!")
}

}while(option !== "6")