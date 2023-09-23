let med = parseFloat(window.prompt("===Conversor de medidas====\nDigite o valor em metros "))
console.log(med)
let opt = window.prompt(`Para qual medida o valor de ${med}m será convertido:
a)milímetro(mm)
b)centímetro(cm)
c)decímetro(dm)
d)decâmetro(dam)
e)hectômetro(hm)
f)quilômetro(km)
`)
let result

switch(opt) {
    case "a" :
        result = med * 1000
        window.alert(`O resultado é ${result}mm`)
    break
    case "b":
        result = med * 100
        window.alert(`O resultado é ${result}cm`)
    break
    case "c":
        result = med * 10 
        window.alert(`O resultado é ${result}dm`)
    break
    case "d":
        result = med / 10
        window.alert(`O resulado é ${result}dam`)
    break
    case "e":
        result = med / 100
        window.alert(`O resultado é ${result}hm`)
    break
    case "f":
        result = med / 1000
        window.alert(`O resultado é ${result}km`)
    break
    default:
        window.alert("Valor inválido...")
}