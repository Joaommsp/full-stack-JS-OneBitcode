const soma = (n1, n2) => n1 + n2
const subtracao = (n1, n2) => {
    if(n1 > n2) {
        return n1 -n2
    }
    else {
        return n2 - n1
    }
}
const multi = (n1, n2) => n1 * n2
const divi = (n1, n2) => n1 / n2

let n1 = window.prompt("Digite o primeiro número: ")
let n2 = window.prompt("Digite o segundo número: ")

console.log(soma(parseFloat(n1),parseFloat(n2)))
console.log(subtracao(n1,n2))
console.log(multi(n1,n2))
console.log(divi(n1,n2))