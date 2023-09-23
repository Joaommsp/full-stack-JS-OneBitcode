// Funções de alta-ordem, ou high-order functions, são funções que
// recebem outras funções como parâmetro e as executam em algum momento

// https://onebitcode.notion.site/50-Fun-es-de-Alta-ordem-High-order-Functions-236fb8cfd2bd4b938f659d480cf0a9c7

function calcular(a, b, operacao) {
  console.log("Realizando uma operação.")
  const resultado = operacao(a, b) 
  return resultado
}

function somar(x,y) {
  return x + y
}

console.log(calcular(4, 5, somar))

console.log(calcular(8, 9, function (x, y) {
  console.log("Realizando subtração...")
  return x - y
}))

function exibirElemento(elemento, indice, array) {
  console.log(`
  ${elemento}:
  ${indice}:
  ${array}
  `)
}

const listaDeCompras = ["maçã","banana","feijão","arroz","laranja"]

for(let i = 0; i < listaDeCompras.length; i++) {
  exibirElemento(listaDeCompras[i], i+1, listaDeCompras)
}

listaDeCompras.forEach(exibirElemento)

listaDeCompras.forEach((e,i,a) => {
  console.log(`Elemento: ${e} [${i}] ${a}`)
  
})