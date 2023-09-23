function addPlayer() {
  const position = document.getElementById('position').value
  const name = document.getElementById('name').value
  const number = document.getElementById('number').value

  console.log(position,name,number)

  const confirmation = window.confirm(`Deseja escalar o jogador:
  Nome: ${name} 
  Posição: ${position}
  Número: ${number}
  `)

  if(confirmation) {
    const ul = document.getElementById('team-list')
    const h3 = `${name}`
    const nameLi = document.createElement('li')
    const positionLi = document.createElement('li')
    const numberLi = document.createElement('li')
    nameLi.innerText = `Nome: ${name}`
    positionLi.innerText = `Posição: ${position}`
    numberLi.innerText = `Número: ${number}`
    ul.append(h3,nameLi,positionLi,numberLi)
    ul.appendChild(document.createElement('br'))
  }
  else {
    window.alert("Escalação Cancelada")
  }
}