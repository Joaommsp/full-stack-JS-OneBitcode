// Global Variables
let ul = document.getElementById('techList')
let form = document.getElementById('devForm')

// buttons
let addBtn = document.getElementById('addBtn')

// usefull Functions
function createLabel(text, htmlFor) {
  let label = document.createElement('label')
  label.innerText = text
  label.htmlFor = htmlFor

  return label
}

function createInput(name, id, type = "text", placeholder = "", value) {
  let input = document.createElement('input')
  input.name = name
  input.id = id
  input.type = type
  input.placeholder = placeholder
  input.value = value

  return input
}

let devs = []
let row = 0

// button Action 
addBtn.addEventListener('click', (ev) => {
  ev.preventDefault()
  let li = document.createElement('li')
  let rowIndex = row
  row++
  li.id = "tech" + rowIndex
  li.className = "inputRow"
  let techNameLabel = createLabel("Nome ", `techNameInput`)
  let techNameInput = createInput(`techNameInput`, `techName${rowIndex}`, "text", "Tecnologia", null)
  // Time
  let id1 = `row${rowIndex}.1`
  let techRadio1 = createLabel("0-2 Anos", `techOption${rowIndex}`)
  let techRadio1_1 = createInput(`techOption${rowIndex}`, id1, "radio", " ", "0-2 Anos")
  let id2 = `row${rowIndex}.2`
  let techRadio2 = createLabel("2-5 Anos", `techOption${rowIndex}`)
  let techRadio2_1 = createInput(`techOption${rowIndex}`, id2, "radio", " ", "2-5 Anos")
  let id3 = `row${rowIndex}.3`
  let techRadio3 = createLabel("2-5 Anos", `techOption${rowIndex}`)
  let techRadio3_1 = createInput(`techOption${rowIndex}`, id3, "radio", " ", "2-5 Anos")

  //Remove
  let removeBtn = document.createElement('button')
  removeBtn.type = "button"
  removeBtn.innerText = "Remover"
  removeBtn.addEventListener('click', ()=> {
    ul.removeChild(li)
  })
  
  li.append(techNameLabel,techNameInput, document.createElement('br') ,techRadio1, techRadio1_1, techRadio2, techRadio2_1, techRadio3, techRadio3_1, removeBtn)
  ul.appendChild(li)

})

form.addEventListener('submit', (ev) => {
  ev.preventDefault()

  let devName = document.getElementById('fullName')
  let inputRow = document.querySelectorAll('.inputRow')

  let techs = []

  inputRow.forEach((row) => {
    let techName = document.querySelector(`#${row.id} input[name="techNameInput"]`).value
    let techExp = document.querySelector(`#${row.id} input[type="radio"]:checked`).value

    techs.push({nome: techName, exp: techExp})
  })
  
  let newDev = {nome: devName.value, tecnologias: techs}

  devs.push(newDev)
  alert("Dev Cadastrado com Sucesso")
  console.log(devs)

  devName.value = ""

  inputRow.forEach((row) => {
    row.remove()
  })
})
