let word =  ""
let normalWord = ""
let inverseWord = ""

word = window.prompt("Insira a palavra: ")

for(let i = 0; i < word.length ; i ++) {
    normalWord += word[i]
}

for(let i = word.length - 1; i >= 0 ; i -- ) {
    inverseWord += word[i]
}

if(normalWord == inverseWord) {
    console.log("igual")
}
else{
    console.log("DIferente")
}
       