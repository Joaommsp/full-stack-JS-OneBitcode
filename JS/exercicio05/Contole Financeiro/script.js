let actualMoney
let action
let actionValue

actualMoney = parseInt(window.prompt("Bem vindo ao seu controle financeiro"
+"\nInsira a quantidade de dinheiro atual:"
))


do {

    action = parseInt(window.prompt("Quantidade de dinheiro atual:"+actualMoney
    +"\nEscolha uma opção:"
    +"\n1 - Adicionar fundos"
    +"\n2 - Remover Fundos"
    +"\n3 - Sair"
    ))
    
    switch(action) {
        case 1:
            actionValue = parseInt(window.prompt("Você escolheu adicionar fundos"
            +"\nInsira o valor a ser adicionado:"
            ))
            console.log(typeof(actualMoney))
            console.log((actionValue))
            actualMoney += actionValue
            window.alert("Novo valor atual de dinheiro: "+ actualMoney)
        break
        case 2:
            actionValue = parseInt(window.prompt("Você escolheu remover fundos"
                +"\nInsira o valor a ser removido:"
            ))
            actualMoney -= actionValue
            window.alert("Novo valor atual de dinheiro: "+actualMoney)
        break
        case 3: 
            window.alert("Você escolheu sair")
            window.alert("Saindo...")
        break
        default:
            window.alert("Escolha uma opção válida!")
    
    }

}while(action != 3)
