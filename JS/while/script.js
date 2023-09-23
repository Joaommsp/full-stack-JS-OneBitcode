let speed = 90

while (speed > 0) {

    window.alert(`O carro está a ${speed}`)
    window.alert("Diminuindo velocidade ...")
    speed -= 20

    if( speed <= 0) {
        window.alert("O carro parou ...")
        break
    }

}