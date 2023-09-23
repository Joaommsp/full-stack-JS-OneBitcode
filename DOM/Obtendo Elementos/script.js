function show() {
  let contactList = document.getElementById('contact-list')
  console.log(contactList)

  let listElements = document.getElementsByClassName('li')
  console.log(listElements)
  
  let contactInput = document.getElementsByClassName('contact-input')
  console.log(contactInput)

  let contacts = document.querySelectorAll('.contact-input > li > label')
  console.log(contacts)

  let names = document.getElementsByName('contact1')
  console.log(names)

  let firstContact = document.querySelector('#contact-list > li > label')
  console.log(firstContact)

}