let speed = 0
let aceleration = 0


speed = parseFloat(window.prompt("Insira a velocidade inicial:"))


setInterval(function () {

  let confirm = true

  aceleration = parseFloat(window.prompt("Insira a aceleração(m/s)"))
  speed += aceleration

  window.alert(`Velocidade Atual ${speed}`)

}, 1000)

