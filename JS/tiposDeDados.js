let n1 = 9
let nome = 'Joao'

console.log(typeof(n1))
console.log("PretoLKKK")
console.log('PretoLKKK')
console.log(nome)

console.log('PretoLKKK'[0])
console.log("João".length) // .lenght : pega o tamanho de uma string ou array

function joaoDoido(loucura) {
    if(loucura == true) {
        console.log("é doido!!")
    }
    else if(loucura == false) {
        console.log("Não é doido!!!")
    }
}

joaoDoido(true)

doidao = (doido) => console.log(`Louco louco pra ${doido}`)

let doidao = "muito"

doidao(doidao)

console.log("Null:" + typeof(null)) // existe mas está vazio
console.log("Undefined:" + typeof(undefined)) // não está definido 