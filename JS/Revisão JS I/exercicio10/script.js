const hitchedSpaceShips = [
  ["Fenix", 8, true],
  ["Golias", 10, true],
  ["Helmet", 5, false],
  ["Elemental", 15, false ],
  ["Darwin", 18, true]
]

let moreThan9 = hitchedSpaceShips.filter( spaceShips => {
  return spaceShips[1] > 9
}).map( spaceShips => {
  return spaceShips[0]
})

let pendentPlataform = hitchedSpaceShips.findIndex( spaceShips => {
  return spaceShips[2] == false
})

let namesUp = hitchedSpaceShips.map(spaceShips => {
  return spaceShips[0].toUpperCase()
})

let message = `Naves com mais de 9 tripulantes:
${moreThan9.join(', ')}

Naves pendentes (plataformas ): ${pendentPlataform}

nomes das naves em maiúisculo: ${namesUp.join(', ')}
`

window.alert(message)