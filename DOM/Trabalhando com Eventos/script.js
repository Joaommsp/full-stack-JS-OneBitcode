function register(ev) {
  console.log(ev)

  const sectionElement = ev.currentTarget.parentNode

  const username = sectionElement.children.username.value
  const password = sectionElement.children.password.value
  const confirmation = sectionElement.children.confirmation.value

  if(password == confirmation) {
    window.alert(`Usuário ${username} registrado`)
  }
  else{
    window.alert("Senhas não coincidem")
  }
}

const button = document.getElementById('register-button')

button.addEventListener('click', register)

function removeListener() {
  button.removeEventListener('click', register)
  window.alert("Event Removed")
}

button.addEventListener('mouseover', function (ev) {
  console.log(ev.currentTarget)
})
// // 
// function register(ev) {
//   console.log(ev)
//   const sectionElement = ev.currentTarget.parentNode
//   const username = sectionElement.children.username.value
//   const password = sectionElement.children.password.value
//   const passwordConfirmation = sectionElement.children.passwordConfirmation.value

//   if (password === passwordConfirmation) {
//     alert("Usuário " + username + " registrado!")
//   } else {
//     alert("As senhas não conferem")
//   }
// }

// function removeEvent() {
//   button.removeEventListener("click", register)
//   alert("Event Removed")
// }

// const button = document.getElementById("register-button")

// button.addEventListener("click", register)

// button.addEventListener("mouseover", function (ev) {
//   console.log(ev)
// })