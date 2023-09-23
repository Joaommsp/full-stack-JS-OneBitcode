let select
let option

do {

    select = parseInt(window.prompt("Menu Principal\nEscolha uma opção" 
    +"\n1 - Inicio" 
    +"\n2 - Sobre a loja"
    +"\n3 - Afiliais"
    +"\n4 - Comprar"
    +"\n5 - Sair"))

    switch(select) {
        case 1 :
            window.alert("Você escolheu o a página inicial")
        break
        case 2 :
            window.alert("Você escolheu Sobre a loja")
        break
        case 3 :
            window.alert("Você escolheu Afiliais")
        break
        case 4 :
            window.alert("Você escolheu Comprar veículos")
        break 
        case 5 :
            window.alert("Você escolheu Sair")
            window.alert("Saindo ...")
        break
        default :
            window.alert("Digite uma opção válida")
    }

}while(select != 5)