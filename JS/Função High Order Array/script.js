const personagens = [
  { nivel: 42, nome: "Thrall", raca: "Orc", classe: "Xamã" },
  { nivel: 28, nome: "Garrosh", raca: "Orc", classe: "Guerreiro" },
  { nivel: 35, nome: "Varok", raca: "Orc", classe: "Guerreiro" },
  { nivel: 35, nome: "Uther", raca: "Humano", classe: "Paladino" },
  { nivel: 26, nome: "Jaina", raca: "Humano", classe: "Maga" },
  { nivel: 39, nome: "Tyrande", raca: "Elfo Noturno", classe: "Sacerdotisa" },
  { nivel: 29, nome: "Muradin", raca: "Anão", classe: "Guerreiro" },
]

// map: permite obter um novo array a partir de um array existenste

// const nomes = []

// for(let i = 0; i < personagens.length; i++) {
//   nomes.push(personagens[i].nome)
// }

// console.log(nomes)

const nomes = personagens.map( e => {
  return e.nome
})

console.log(nomes)

// const orcs = []

// for(let i = 0 ; i < personagens.length ; i ++) {
//   if(personagens[i].raca == 'Orc') {
//     orcs.push(personagens[i])
//   }
// }

// console.log(orcs)

// filter: permite obter um novo array contendo apenas elementos específicos de um array existente

const orcs = personagens.filter( e => {
  return e.raca === 'Orc'
})

console.log(orcs)

// let nivelTotal = 0
// for (let i = 0; i < personagens.length; i++) {
//   nivelTotal += personagens[i].nivel
// }

// console.log(nivelTotal)

// reduce: serve para reduzir um array existente a um valor final qualquer,
// passando um valor entre cada iteração sobre esse array e retornando ele no final

let nivelTotal = personagens.reduce( (acumulador,e) => {
  return acumulador + e.nivel
}, 0)

console.log(nivelTotal)

let racas = personagens.reduce( (acumulador,e) => {
  if(acumulador[e.raca]) {
    acumulador[e.raca].push(e)
  }else{
    acumulador[e.raca] = [e]
  }

  return acumulador
}, {})

console.log(racas)

// sort

console.log(personagens)

personagens.sort( (a, b) => {
  return a.nivel - b.nivel 
})

console.log(personagens)