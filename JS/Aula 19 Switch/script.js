let res = window.prompt("Escolha uma alternativa:\nA)\nB)\nC)")

let resToNumber = parseFloat(res)

switch(res) {
    case "1":
        window.alert("O resultado é a")
    break
    case "2":
        window.alert("O resultado é b")
    break
    case "3":
      window.alert("O resultado é c")
    break
    default:
        window.alert("Finalizando...")
    }