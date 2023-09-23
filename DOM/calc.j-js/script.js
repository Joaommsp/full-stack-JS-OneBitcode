let main = document.querySelector('main')
let themeSwitcher = document.getElementById('themeSwitcher')
let input = document.getElementById('input')
let clear = document.getElementById('clear')
let keys = document.querySelectorAll('.charKey')
let equalBtn = document.getElementById('equal')
let copyBtn = document.getElementById('copyToClipboard')
let root = document.querySelector(':root')
let result = document.getElementById('result')

const allowedKeys = ["(", ")", "/", "*", "-", "+", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0", ".", "%", " "]

keys.forEach((key) => {
  key.addEventListener('click', () => {
    input.value += key.dataset.value
    console.log(key.dataset.value)
  })
})

input.addEventListener('keydown', (ev) => {
  ev.preventDefault()
  console.log(ev.key)
  if(allowedKeys.includes(ev.key)) {
    input.value += ev.key
  }
  else if(ev.key == 'Backspace') {
   input.value = input.value.slice(0, -1)
  }
  else if(ev.key == 'Enter') {
    calculate()
  }
})

function calculate() {
  result.value = 'ERROR'
  result.classList.add('error')
  let calc = eval(input.value)
  result.value = calc
  result.classList.remove('error')
}

equalBtn.addEventListener('click', calculate)

themeSwitcher.addEventListener('click', ()=> {
  if(main.dataset.theme === 'dark') {
    root.style.setProperty('--bg-color', '#f1f5f9')
    root.style.setProperty('--border-color', '#212529')
    root.style.setProperty('--font-color', '#212529')
    root.style.setProperty('--primary-color','#0E21A0')
    equalBtn.style.backgroundColor = '#1A5D1A'
    main.dataset.theme = 'light'
  }
  else {
    root.style.setProperty('--bg-color', '#212529')
    root.style.setProperty('--border-color', '#666')
    root.style.setProperty('--font-color', '#f1f5f9')
    root.style.setProperty('--primary-color','#4FC0D0')
    equalBtn.style.backgroundColor = '#03C988'
    main.dataset.theme = 'dark'
  }
})

copyBtn.addEventListener('click', () => {
  navigator.clipboard.writeText(result.value)

  if(copyBtn.innerText === 'Copy') {
    copyBtn.classList.add('success')
    copyBtn.innerText = 'Copied'
  }
  else {
    copyBtn.classList.remove('success')
    copyBtn.innerText = 'Copy'
  }

})