function dividir(num) {
  console.log(num)
  if( num % 2 == 0) {
    dividir(num / 2)
  }
  else {
    return num
  }
}

dividir(40)
console.log("\n")
dividir(256)

function fatorial(num) {
  console.log("num = " + num)
  if (num === 0) { // caso base
    return 1
  } else if (num === 1) { // caso base
    return 1
  } else {
    console.log(num + " * !" + (num - 1))
    return num * fatorial(num - 1)
  }
}

console.log("\nresultado = " + fatorial(5))
