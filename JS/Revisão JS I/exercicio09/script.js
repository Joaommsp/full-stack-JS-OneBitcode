let speed = 150

function  slowDown(spaceshipSpeed, printer) {
  
  while(spaceshipSpeed > 0) {
    printer(spaceshipSpeed)
    spaceshipSpeed -= 20
  }
  window.alert("A nave está parada")
}

slowDown(speed, velocity => {
  window.alert(`A nave está a ${velocity}Km/s`)
})