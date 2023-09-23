function registerPlayer() {
  let values = []
  const section = document.getElementById('register-section')
  const ul = document.createElement('ul')

  const positionLi = document.createElement('li')
  positionLi.innerHTML = '<label for="position">Posição: </label>'
  const positionInput = document.createElement('input')
  positionInput.type = 'text'
  positionInput.id = 'position'
  positionInput.onblur = function getPositionValue () {
    values.push(positionInput.value)
  }
  positionLi.appendChild(positionInput)
  ul.appendChild(positionLi)
  ul.appendChild(document.createElement('br'))

  const nameLi = document.createElement('li')
  nameLi.innerHTML = '<label for="name">Nome: </label>'
  const nameInput = document.createElement('input')
  nameInput.type = 'text'
  nameInput.id = 'name'
  nameInput.onblur = function getNameValue() {
    values.push(nameInput.value)
  }
  nameLi.appendChild(nameInput)
  ul.appendChild(nameLi)
  ul.appendChild(document.createElement('br'))

  const numberLi = document.createElement('li')
  numberLi.innerHTML = '<label for="number">Número: </label>'
  const numberInput = document.createElement('input')
  numberInput.type = 'number'
  numberInput.id = 'number'
  numberInput.onblur = function getNumberValue () {
    values.push(numberInput.value)
  }
  numberLi.appendChild(numberInput)
  ul.appendChild(numberLi)
  ul.appendChild(document.createElement('br'))

  section.appendChild(ul)

  return console.log(values)
}

function relate() {



}