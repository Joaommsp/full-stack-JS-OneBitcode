let lyInitial = 0

let lyToParsec = 0.306601
let lyToAstro = 63241.1
let lyToKm = 9.5 * Math.pow(10,12)

lyInitial = parseFloat(window.prompt("Insira a distância inicial em L.Y"))

let option = ""

option = window.prompt(`Escolha uma medida para converter:
1 - Parsec
2 - Astronomia
3 - Km
`)

switch(option) {
  case "1":
      lyInitial = lyInitial * lyToParsec
      window.alert(`O resultado é ${lyInitial} Parsec`)
  break
  case "2":
      lyInitial = lyInitial * lyToAstro
      window.alert(`O resultado é ${lyInitial} Astronomia]`)
  break
  case "3":
      lyInitial = lyInitial * lyToKm
      window.alert(`O resultado é ${lyInitial} km`)
  break
}