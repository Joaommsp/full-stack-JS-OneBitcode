  /*Escreva um programa em javascript para simular um baralho de cartas. O programa deve iniciar mostrando
  na tela um menu interativo contendo as cartas que estão atualmente no baralho e as opções de “Adicionar
  uma carta”, “Puxar uma carta” e “Sair”. Ao escolher “Adicionar uma carta”, o programa deve perguntar o
  nome da carta e adicioná-la no topo do baralho. Ao escolher “Puxar uma carta”, o programa deve retirar a
  carta do topo do baralho e mostrar na tela o nome da carta puxada. O programa só deve ser encerrado ao
  escolher a opção de “Sair”, caso contrário deve voltar ao menu.*/

  let option = 0
  let cardsList = ['valete', 'dama', 'rei', 'coringa', 'espadas (♠)', 'paus (♣)', 'copas (♥)','ouros (♦)']

  do {
  
  window.alert(`Lista de cartas atual: ${cardsList}
  Quantidades de cartas: ${cardsList.length}
  `)

  option = parseFloat(window.prompt(`Escolha uma opção:
  1 - Adicionar Carta
  2 - Puxar carta
  3 - Sair 
  `))

  if(option == 1) {
    let newCard = window.prompt("Digite o nome da carta a ser adicionada")
    cardsList.unshift(newCard)

    window.alert(cardsList)
  }
  else if(option == 2) {
    let newCardRemoved = cardsList.shift()
    window.alert(`Carta puxada: ${newCardRemoved}`)
  }

}while(option !== 3)