/*Escreva um programa em javascript que funcione como um cadastro de imóveis e
atenda aos seguintes requisitos:

- Deve ter um menu interativo que sempre é exibido até que o usuário escolha sair.
- O menu interativo deve mostrar no topo a quantidade de imóveis cadastrados.
- O menu deve ter a opção de salvar um imóvel.
- Para salvar um novo imóvel o programa deve pedir as seguintes informações:
    - Nome do proprietário.
    - Quantidade de quartos.
    - Quantidade de banheiros.
    - Se possui garagem.
- O menu também deve ter a opção de mostrar todos os imóveis salvos.*/

let propertiesList = []
let propertiesDetails = {}
propertiesDetails.owner = ""
propertiesDetails.rooms = ""
propertiesDetails.bathrooms = ""
propertiesDetails.garage = " "

console.log(propertiesDetails)

let option = 0

do {

  window.alert(`Total de imóveis: ${propertiesList.length}`)

  option = parseFloat(window.prompt(`
  1 Adicionar Imóvel
  2 Ver imóveis
  3 Sair
  `))

  switch(option) {
    case 1: 
    propertiesDetails.owner = window.prompt("Digite o nome do proprietário do Imóvel")
    console.log(propertiesDetails.owner)
    propertiesDetails.rooms = window.prompt("Insira a quantidade de quartos do imóvel")
    console.log(propertiesDetails.rooms)
    propertiesDetails.bathrooms = window.prompt("Insira a quantidade de banheiros do Imóvel")
    console.log(propertiesDetails.bathrooms)
    let questionGarage = window.prompt("O imóvel possui garagem ?")


    if(questionGarage == "Sim" || questionGarage == "sim") {
      propertiesDetails.garage = " Possui Gagarem "
    }
    else if(questionGarage == "Não" || questionGarage == "não") {
      propertiesDetails.garage = " Não possui garagem "
    }

    propertiesList.push(propertiesDetails)

    console.log(propertiesList[0])

    break
    case 2:
      for(let i = 0; i <propertiesList.length; i++){
        window.alert(`Imóvel ${i+1}:
        Proprietário: ${propertiesList[i].owner}
        Quartos: ${propertiesList[i].rooms}
        Banheiros: ${propertiesList[i].bathrooms}
        Garagem: ${propertiesList[i].garage}`)
      }
      break
      case 3:
      window.alert("Saindo...")
      break
      default:
      window.alert("Insira um opção Válida")
  }

}while(option != 3)