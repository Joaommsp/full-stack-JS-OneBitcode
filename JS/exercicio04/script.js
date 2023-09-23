let nome = window.prompt("E aí, turista ! Qual é o seu nome?")
let cities = ""
let numCities = 0

let answer = window.prompt("Você visitou alguma cidade ? (Sim/Não)")

while ( answer === "Sim") {

    let city = window.prompt("Qual é o nome da cidade visitada ? ")
    // cidades = cidades + ...
    cities += " - " + city + "\n"
    numCities ++
    answer = window.prompt("Você visitou mais alguma cidade? ")
}

window.alert(`Turista ${nome}
Número de cidades visitadas: ${numCities}
Cidades Visitadas: ${cities}
`)