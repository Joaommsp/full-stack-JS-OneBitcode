const input = document.getElementById('input')

document.getElementById('value').addEventListener('click', () => {
  input.value = 'Olá, mundo'

  console.log(input.value)
  console.log(input.getAttribute('value'))
})

document.getElementById('type').addEventListener('click', ()=> {
  // input.type = input.type !== 'radio' ? 'radio': 'text'

  // console.log(input.type)
  input.setAttribute('type','radio')
})

document.getElementById('placeholder').addEventListener('click' , ()=> {
  input.placeholder = "digite algo..."
})

document.getElementById('disable').addEventListener('click', () => {
  input.setAttribute('disabled', !input.disabled)
})

document.getElementById('data').addEventListener('click', () => {
  const data = input.dataset.somethingElse 
  console.log("o valor do atributo data-something é: " + data)

  input.dataset.something  = 'algum outro valor'
  console.log("o valor do atributo data-something é: " + input.dataset.somethingElse)
})