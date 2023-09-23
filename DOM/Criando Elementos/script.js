function addInput() {
  const ul = document.getElementById('inputs') // nó onde eu vou colocar os elementos

  const newLi = document.createElement('li')
  newLi.className = "list-item"
  newLi.innerText = "Novo Input"

  const newInput = document.createElement('input')
  newInput.type = 'text'
  newInput.name = 'input'

  newLi.appendChild(newInput)
  ul.appendChild(newLi)
}