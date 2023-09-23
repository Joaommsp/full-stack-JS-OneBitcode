let pessoa = {
  nome: "João",
  idade: 19,
  aniversario (){
    return this.idade++
  },
  dizerOi() {
    console.log("Olá meu nome é: " + this.nome)
  }
}

console.log(pessoa)
pessoa.aniversario()
console.log(pessoa)
pessoa.dizerOi()