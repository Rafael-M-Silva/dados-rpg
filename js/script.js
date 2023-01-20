var button4 = document.querySelector("#d4")
var button6 = document.querySelector("#d6")
var button8 = document.querySelector("#d8")
var button10 = document.querySelector("#d10")
var button12 = document.querySelector("#d12")
var button20 = document.querySelector("#d20")
var button100 = document.querySelector("#d100")

let themeDark = document.querySelector("#theme-dark")
let body = document.querySelector("body")
let header = document.querySelector("header")
let footer = document.querySelector("footer")
let main = document.querySelector(".box")
let buttonClear = document.querySelector("#clear")

let res = document.querySelector("#res")
let clear = document.querySelector("#button-clear")
let res2 = document.querySelector("#res2")

function playDice(dice){ 
    const audio = document.querySelector("audio")
    let modificador = document.querySelector("#modificador")
    var amount = document.querySelector("#amount")
    var diceRamdom1 = Math.floor((Math.random() * (dice)) + 1)
    var diceRamdom2 = Math.floor((Math.random() * (dice)) + 1)
    var diceRamdom3 = Math.floor((Math.random() * (dice)) + 1)
    var diceRamdom4 = Math.floor((Math.random() * (dice)) + 1)
    var diceRamdom5 = Math.floor((Math.random() * (dice)) + 1)
    var diceRamdom6 = Math.floor((Math.random() * (dice)) + 1)
    var diceRamdom7 = Math.floor((Math.random() * (dice)) + 1)
    var diceRamdom8 = Math.floor((Math.random() * (dice)) + 1)
    var diceRamdom9 = Math.floor((Math.random() * (dice)) + 1)
    var diceRamdom10 = Math.floor((Math.random() * (dice)) + 1)
    let quantidadeDado = Number(amount.value)
    let modificadorCon = Number(modificador.value)
    audio.play()
    res.style.background = 'white'

    if (quantidadeDado <= -1){
        window.alert("[ERRO] Dados Invalidos")
    }else if(quantidadeDado > 10){
        window.alert("[ERRO] Limites de 10 dados")
    }else if(quantidadeDado == 0 | quantidadeDado == 1){
        res.innerHTML = `(${diceRamdom1} + <span class="modificador">${modificadorCon}</span> = ${diceRamdom1 + modificadorCon})`
        if(diceRamdom1 == 1){
            res.style.background = 'red'
        }
    }else if(quantidadeDado == 2){
        res.innerHTML = `(${diceRamdom1} + ${diceRamdom2} + <span class="modificador">${modificadorCon}</span>) = ${diceRamdom1 + diceRamdom2 + modificadorCon}`
    }else if(quantidadeDado == 3){
        res.innerHTML = `(${diceRamdom1} + ${diceRamdom2} + ${diceRamdom3} + <span class="modificador">${modificadorCon}</span>) = ${diceRamdom1 + diceRamdom2 + diceRamdom3 + modificadorCon}`
    }else if(quantidadeDado == 4){
        res.innerHTML = `(${diceRamdom1} + ${diceRamdom2} + ${diceRamdom3} + ${diceRamdom4} + <span class="modificador">${modificadorCon}</span>) = ${diceRamdom1 + diceRamdom2 + diceRamdom3 + diceRamdom4 + modificadorCon}`
    }else if(quantidadeDado == 5){
        res.innerHTML = `(${diceRamdom1} + ${diceRamdom2} + ${diceRamdom3} + ${diceRamdom4} + ${diceRamdom5} + <span class="modificador">${modificadorCon}</span>) = ${diceRamdom1 + diceRamdom2 + diceRamdom3 + diceRamdom4 + diceRamdom5 + modificadorCon}`
    }else if(quantidadeDado == 6){
        res.innerHTML = `(${diceRamdom1} + ${diceRamdom2} + ${diceRamdom3} + ${diceRamdom4} + ${diceRamdom5} + ${diceRamdom6} + <span class="modificador">${modificadorCon}</span>) = ${diceRamdom1 + diceRamdom2 + diceRamdom3 + diceRamdom4 + diceRamdom5 + diceRamdom6 + modificadorCon}`
    }else if(quantidadeDado == 7){
        res.innerHTML = `(${diceRamdom1} + ${diceRamdom2} + ${diceRamdom3} + ${diceRamdom4} + ${diceRamdom5} + ${diceRamdom6} + ${diceRamdom7} + <span class="modificador">${modificadorCon}</span>) = ${diceRamdom1 + diceRamdom2 + diceRamdom3 + diceRamdom4 + diceRamdom5 + diceRamdom6 + diceRamdom7 + modificadorCon}`
    }else if(quantidadeDado == 8){
        res.innerHTML = `(${diceRamdom1} + ${diceRamdom2} + ${diceRamdom3} + ${diceRamdom4} + ${diceRamdom5} + ${diceRamdom6} + ${diceRamdom7} + ${diceRamdom8} + <span class="modificador">${modificadorCon}</span>) = ${diceRamdom1 + diceRamdom2 + diceRamdom3 + diceRamdom4 + diceRamdom5 + diceRamdom6 + diceRamdom7 + diceRamdom8 + modificadorCon}`
    }else if(quantidadeDado == 9){
        res.innerHTML = `(${diceRamdom1} + ${diceRamdom2} + ${diceRamdom3} + ${diceRamdom4} + ${diceRamdom5} + ${diceRamdom6} + ${diceRamdom7} + ${diceRamdom8} + ${diceRamdom9} + <span class="modificador">${modificadorCon}</span>) = ${diceRamdom1 + diceRamdom2 + diceRamdom3 + diceRamdom4 + diceRamdom5 + diceRamdom6 + diceRamdom7 + diceRamdom8 + diceRamdom9 + modificadorCon}`
    }else{
        res.innerHTML = `(${diceRamdom1} + ${diceRamdom2} + ${diceRamdom3} + ${diceRamdom4} + ${diceRamdom5} + ${diceRamdom6} + ${diceRamdom7} + ${diceRamdom8} + ${diceRamdom9} + ${diceRamdom10} + <span class="modificador">${modificadorCon}</span>) = ${diceRamdom1 + diceRamdom2 + diceRamdom3 + diceRamdom4 + diceRamdom5 + diceRamdom6 + diceRamdom7 + diceRamdom8 + diceRamdom9 + diceRamdom10 + modificadorCon}`
    }
}

    button4.addEventListener("click", () => {
        playDice(4)
    })
    button6.addEventListener("click", () => {
        playDice(6)
    })
    button8.addEventListener("click", () => {
        playDice(8)
    })
    button10.addEventListener("click", () => {
        playDice(10)
    })
    button12.addEventListener("click", () => {
        playDice(12)
    })
    button20.addEventListener("click", () => {
        playDice(20)
    })
    button100.addEventListener("click", () => {
        playDice(100)
    })



clear.addEventListener("click", ()=>{
    res.innerHTML = ``
    res.style = 'none'
})



themeDark.addEventListener("click", ()=>{
    body.classList.toggle("theme-dark-bg")
    header.classList.toggle("theme-dark-bg-header-footer")
    footer.classList.toggle("theme-dark-bg-header-footer")
    button4.classList.toggle("theme-dark-button")
    button6.classList.toggle("theme-dark-button")
    button8.classList.toggle("theme-dark-button")
    button10.classList.toggle("theme-dark-button")
    button12.classList.toggle("theme-dark-button")
    button20.classList.toggle("theme-dark-button")
    button100.classList.toggle("theme-dark-button")
    buttonClear.classList.toggle("theme-dark-button")
    body.style.transition = "0.3s";
})