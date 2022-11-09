var button4 = document.querySelector("#d4")
var button6 = document.querySelector("#d6")
var button8 = document.querySelector("#d8")
var button10 = document.querySelector("#d10")
var button12 = document.querySelector("#d12")
var button20 = document.querySelector("#d20")
var button100 = document.querySelector("#d100")
let amount = document.querySelector("#amount")



let res = document.querySelector("#res")
let clear = document.querySelector("#button-clear")
let res2 = document.querySelector("#res2")



button4.addEventListener("click", ()=>{
    var dado4Ramdom1 = Math.floor((Math.random() * 4) + 1)
    var dado4Ramdom2 = Math.floor((Math.random() * 4) + 1)
    var dado4Ramdom3 = Math.floor((Math.random() * 4) + 1)
    var dado4Ramdom4 = Math.floor((Math.random() * 4) + 1)
    var dado4Ramdom5 = Math.floor((Math.random() * 4) + 1)
    var dado4Ramdom6 = Math.floor((Math.random() * 4) + 1)
    var dado4Ramdom7 = Math.floor((Math.random() * 4) + 1)
    var dado4Ramdom8 = Math.floor((Math.random() * 4) + 1)
    var dado4Ramdom9 = Math.floor((Math.random() * 4) + 1)
    var dado4Ramdom10 = Math.floor((Math.random() * 4) + 1)
    let quantidadeDado = Number(amount.value)
    res.style.background = 'white'
    if (quantidadeDado <= 0){
        window.alert("[ERRO] Dados Invalidos")
    }else if(quantidadeDado > 10){
        window.alert("[ERRO] Limites de 10 dados")
    }else if(quantidadeDado == 1){
        res.innerHTML = `(${dado4Ramdom1})`
        if(dado4Ramdom1 == 1){
            res.style.background = 'red'
        }
    }else if(quantidadeDado == 2){
        res.innerHTML = `(${dado4Ramdom1} + ${dado4Ramdom2}) = ${dado4Ramdom1 + dado4Ramdom2}`
    }else if(quantidadeDado == 3){
        res.innerHTML = `(${dado4Ramdom1} + ${dado4Ramdom2} + ${dado4Ramdom3}) = ${dado4Ramdom1 + dado4Ramdom2 + dado4Ramdom3}`
    }else if(quantidadeDado == 4){
        res.innerHTML = `(${dado4Ramdom1} + ${dado4Ramdom2} + ${dado4Ramdom3} + ${dado4Ramdom4}) = ${dado4Ramdom1 + dado4Ramdom2 + dado4Ramdom3 + dado4Ramdom4}`
    }else if(quantidadeDado == 5){
        res.innerHTML = `(${dado4Ramdom1} + ${dado4Ramdom2} + ${dado4Ramdom3} + ${dado4Ramdom4} + ${dado4Ramdom5}) = ${dado4Ramdom1 + dado4Ramdom2 + dado4Ramdom3 + dado4Ramdom4 + dado4Ramdom5}`
    }else if(quantidadeDado == 6){
        res.innerHTML = `(${dado4Ramdom1} + ${dado4Ramdom2} + ${dado4Ramdom3} + ${dado4Ramdom4} + ${dado4Ramdom5} + ${dado4Ramdom6}) = ${dado4Ramdom1 + dado4Ramdom2 + dado4Ramdom3 + dado4Ramdom4 + dado4Ramdom5 + dado4Ramdom6}`
    }else if(quantidadeDado == 7){
        res.innerHTML = `(${dado4Ramdom1} + ${dado4Ramdom2} + ${dado4Ramdom3} + ${dado4Ramdom4} + ${dado4Ramdom5} + ${dado4Ramdom6} + ${dado4Ramdom7}) = ${dado4Ramdom1 + dado4Ramdom2 + dado4Ramdom3 + dado4Ramdom4 + dado4Ramdom5 + dado4Ramdom6 + dado4Ramdom7}`
    }else if(quantidadeDado == 8){
        res.innerHTML = `(${dado4Ramdom1} + ${dado4Ramdom2} + ${dado4Ramdom3} + ${dado4Ramdom4} + ${dado4Ramdom5} + ${dado4Ramdom6} + ${dado4Ramdom7} + ${dado4Ramdom8}) = ${dado4Ramdom1 + dado4Ramdom2 + dado4Ramdom3 + dado4Ramdom4 + dado4Ramdom5 + dado4Ramdom6 + dado4Ramdom7 + dado4Ramdom8}`
    }else if(quantidadeDado == 9){
        res.innerHTML = `(${dado4Ramdom1} + ${dado4Ramdom2} + ${dado4Ramdom3} + ${dado4Ramdom4} + ${dado4Ramdom5} + ${dado4Ramdom6} + ${dado4Ramdom7} + ${dado4Ramdom8} + ${dado4Ramdom9}) = ${dado4Ramdom1 + dado4Ramdom2 + dado4Ramdom3 + dado4Ramdom4 + dado4Ramdom5 + dado4Ramdom6 + dado4Ramdom7 + dado4Ramdom8 + dado4Ramdom9}`
    }else{
        res.innerHTML = `(${dado4Ramdom1} + ${dado4Ramdom2} + ${dado4Ramdom3} + ${dado4Ramdom4} + ${dado4Ramdom5} + ${dado4Ramdom6} + ${dado4Ramdom7} + ${dado4Ramdom8} + ${dado4Ramdom9} + ${dado4Ramdom10}) = ${dado4Ramdom1 + dado4Ramdom2 + dado4Ramdom3 + dado4Ramdom4 + dado4Ramdom5 + dado4Ramdom6 + dado4Ramdom7 + dado4Ramdom8 + dado4Ramdom9 + dado4Ramdom10}`
    }
})

button6.addEventListener("click", ()=>{
    var dado6Ramdom1 = Math.floor((Math.random() * 6) + 1)
    var dado6Ramdom2 = Math.floor((Math.random() * 6) + 1)
    var dado6Ramdom3 = Math.floor((Math.random() * 6) + 1)
    var dado6Ramdom4 = Math.floor((Math.random() * 6) + 1)
    var dado6Ramdom5 = Math.floor((Math.random() * 6) + 1)
    var dado6Ramdom6 = Math.floor((Math.random() * 6) + 1)
    var dado6Ramdom7 = Math.floor((Math.random() * 6) + 1)
    var dado6Ramdom8 = Math.floor((Math.random() * 6) + 1)
    var dado6Ramdom9 = Math.floor((Math.random() * 6) + 1)
    var dado6Ramdom10 = Math.floor((Math.random() * 6) + 1)
    let quantidadeDado = Number(amount.value)
    res.style.background = 'white'
    if (quantidadeDado <= 0){
        window.alert("[ERRO] Dados Invalidos")
    }else if(quantidadeDado > 10){
        window.alert("[ERRO] Limites de 10 dados")
    }else if(quantidadeDado == 1){
        res.innerHTML = `(${dado6Ramdom1})`
        if(dado6Ramdom1 == 1){
            res.style.background = 'red'
        }
    }else if(quantidadeDado == 2){
        res.innerHTML = `(${dado6Ramdom1} + ${dado6Ramdom2}) = ${dado6Ramdom1 + dado6Ramdom2}`
    }else if(quantidadeDado == 3){
        res.innerHTML = `(${dado6Ramdom1} + ${dado6Ramdom2} + ${dado6Ramdom3}) = ${dado6Ramdom1 + dado6Ramdom2 + dado6Ramdom3}`
    }else if(quantidadeDado == 4){
        res.innerHTML = `(${dado6Ramdom1} + ${dado6Ramdom2} + ${dado6Ramdom3} + ${dado6Ramdom4}) = ${dado6Ramdom1 + dado6Ramdom2 + dado6Ramdom3 + dado6Ramdom4}`
    }else if(quantidadeDado == 5){
        res.innerHTML = `(${dado6Ramdom1} + ${dado6Ramdom2} + ${dado6Ramdom3} + ${dado6Ramdom4} + ${dado6Ramdom5}) = ${dado6Ramdom1 + dado6Ramdom2 + dado6Ramdom3 + dado6Ramdom4 + dado6Ramdom5}`
    }else if(quantidadeDado == 6){
        res.innerHTML = `(${dado6Ramdom1} + ${dado6Ramdom2} + ${dado6Ramdom3} + ${dado6Ramdom4} + ${dado6Ramdom5} + ${dado6Ramdom6}) = ${dado6Ramdom1 + dado6Ramdom2 + dado6Ramdom3 + dado6Ramdom4 + dado6Ramdom5 + dado6Ramdom6}`
    }else if(quantidadeDado == 7){
        res.innerHTML = `(${dado6Ramdom1} + ${dado6Ramdom2} + ${dado6Ramdom3} + ${dado6Ramdom4} + ${dado6Ramdom5} + ${dado6Ramdom6} + ${dado6Ramdom7}) = ${dado6Ramdom1 + dado6Ramdom2 + dado6Ramdom3 + dado6Ramdom4 + dado6Ramdom5 + dado6Ramdom6 + dado6Ramdom7}`
    }else if(quantidadeDado == 8){
        res.innerHTML = `(${dado6Ramdom1} + ${dado6Ramdom2} + ${dado6Ramdom3} + ${dado6Ramdom4} + ${dado6Ramdom5} + ${dado6Ramdom6} + ${dado6Ramdom7} + ${dado6Ramdom8}) = ${dado6Ramdom1 + dado6Ramdom2 + dado6Ramdom3 + dado6Ramdom4 + dado6Ramdom5 + dado6Ramdom6 + dado6Ramdom7 + dado6Ramdom8}`
    }else if(quantidadeDado == 9){
        res.innerHTML = `(${dado6Ramdom1} + ${dado6Ramdom2} + ${dado6Ramdom3} + ${dado6Ramdom4} + ${dado6Ramdom5} + ${dado6Ramdom6} + ${dado6Ramdom7} + ${dado6Ramdom8} + ${dado6Ramdom9}) = ${dado6Ramdom1 + dado6Ramdom2 + dado6Ramdom3 + dado6Ramdom4 + dado6Ramdom5 + dado6Ramdom6 + dado6Ramdom7 + dado6Ramdom8 + dado6Ramdom9}`
    }else{
        res.innerHTML = `(${dado6Ramdom1} + ${dado6Ramdom2} + ${dado6Ramdom3} + ${dado6Ramdom4} + ${dado6Ramdom5} + ${dado6Ramdom6} + ${dado6Ramdom7} + ${dado6Ramdom8} + ${dado6Ramdom9} + ${dado6Ramdom10}) = ${dado6Ramdom1 + dado6Ramdom2 + dado6Ramdom3 + dado6Ramdom4 + dado6Ramdom5 + dado6Ramdom6 + dado6Ramdom7 + dado6Ramdom8 + dado6Ramdom9 + dado6Ramdom10}`
    }
})

button8.addEventListener("click", ()=>{
    var dado8Ramdom1 = Math.floor((Math.random() * 8) + 1)
    var dado8Ramdom2 = Math.floor((Math.random() * 8) + 1)
    var dado8Ramdom3 = Math.floor((Math.random() * 8) + 1)
    var dado8Ramdom4 = Math.floor((Math.random() * 8) + 1)
    var dado8Ramdom5 = Math.floor((Math.random() * 8) + 1)
    var dado8Ramdom6 = Math.floor((Math.random() * 8) + 1)
    var dado8Ramdom7 = Math.floor((Math.random() * 8) + 1)
    var dado8Ramdom8 = Math.floor((Math.random() * 8) + 1)
    var dado8Ramdom9 = Math.floor((Math.random() * 8) + 1)
    var dado8Ramdom10 = Math.floor((Math.random() * 8) + 1)
    let quantidadeDado = Number(amount.value)
    res.style.background = 'white'
    if (quantidadeDado <= 0){
        window.alert("[ERRO] Dados Invalidos")
    }else if(quantidadeDado > 10){
        window.alert("[ERRO] Limites de 10 dados")
    }else if(quantidadeDado == 1){
        res.innerHTML = `(${dado8Ramdom1})`
        if(dado8Ramdom1 == 1){
            res.style.background = 'red'
        }
    }else if(quantidadeDado == 2){
        res.innerHTML = `(${dado8Ramdom1} + ${dado8Ramdom2}) = ${dado8Ramdom1 + dado8Ramdom2}`
    }else if(quantidadeDado == 3){
        res.innerHTML = `(${dado8Ramdom1} + ${dado8Ramdom2} + ${dado8Ramdom3}) = ${dado8Ramdom1 + dado8Ramdom2 + dado8Ramdom3}`
    }else if(quantidadeDado == 4){
        res.innerHTML = `(${dado8Ramdom1} + ${dado8Ramdom2} + ${dado8Ramdom3} + ${dado8Ramdom4}) = ${dado8Ramdom1 + dado8Ramdom2 + dado8Ramdom3 + dado8Ramdom4}`
    }else if(quantidadeDado == 5){
        res.innerHTML = `(${dado8Ramdom1} + ${dado8Ramdom2} + ${dado8Ramdom3} + ${dado8Ramdom4} + ${dado8Ramdom5}) = ${dado8Ramdom1 + dado8Ramdom2 + dado8Ramdom3 + dado8Ramdom4 + dado8Ramdom5}`
    }else if(quantidadeDado == 6){
        res.innerHTML = `(${dado8Ramdom1} + ${dado8Ramdom2} + ${dado8Ramdom3} + ${dado8Ramdom4} + ${dado8Ramdom5} + ${dado8Ramdom6}) = ${dado8Ramdom1 + dado8Ramdom2 + dado8Ramdom3 + dado8Ramdom4 + dado8Ramdom5 + dado8Ramdom6}`
    }else if(quantidadeDado == 7){
        res.innerHTML = `(${dado8Ramdom1} + ${dado8Ramdom2} + ${dado8Ramdom3} + ${dado8Ramdom4} + ${dado8Ramdom5} + ${dado8Ramdom6} + ${dado8Ramdom7}) = ${dado8Ramdom1 + dado8Ramdom2 + dado8Ramdom3 + dado8Ramdom4 + dado8Ramdom5 + dado8Ramdom6 + dado8Ramdom7}`
    }else if(quantidadeDado == 8){
        res.innerHTML = `(${dado8Ramdom1} + ${dado8Ramdom2} + ${dado8Ramdom3} + ${dado8Ramdom4} + ${dado8Ramdom5} + ${dado8Ramdom6} + ${dado8Ramdom7} + ${dado8Ramdom8}) = ${dado8Ramdom1 + dado8Ramdom2 + dado8Ramdom3 + dado8Ramdom4 + dado8Ramdom5 + dado8Ramdom6 + dado8Ramdom7 + dado8Ramdom8}`
    }else if(quantidadeDado == 9){
        res.innerHTML = `(${dado8Ramdom1} + ${dado8Ramdom2} + ${dado8Ramdom3} + ${dado8Ramdom4} + ${dado8Ramdom5} + ${dado8Ramdom6} + ${dado8Ramdom7} + ${dado8Ramdom8} + ${dado8Ramdom9}) = ${dado8Ramdom1 + dado8Ramdom2 + dado8Ramdom3 + dado8Ramdom4 + dado8Ramdom5 + dado8Ramdom6 + dado8Ramdom7 + dado8Ramdom8 + dado8Ramdom9}`
    }else{
        res.innerHTML = `(${dado8Ramdom1} + ${dado8Ramdom2} + ${dado8Ramdom3} + ${dado8Ramdom4} + ${dado8Ramdom5} + ${dado8Ramdom6} + ${dado8Ramdom7} + ${dado8Ramdom8} + ${dado8Ramdom9} + ${dado8Ramdom10}) = ${dado8Ramdom1 + dado8Ramdom2 + dado8Ramdom3 + dado8Ramdom4 + dado8Ramdom5 + dado8Ramdom6 + dado8Ramdom7 + dado8Ramdom8 + dado8Ramdom9 + dado8Ramdom10}`
    }
})

button10.addEventListener("click", ()=>{
    var dado10Ramdom1 = Math.floor((Math.random() * 10) + 1)
    var dado10Ramdom2 = Math.floor((Math.random() * 10) + 1)
    var dado10Ramdom3 = Math.floor((Math.random() * 10) + 1)
    var dado10Ramdom4 = Math.floor((Math.random() * 10) + 1)
    var dado10Ramdom5 = Math.floor((Math.random() * 10) + 1)
    var dado10Ramdom6 = Math.floor((Math.random() * 10) + 1)
    var dado10Ramdom7 = Math.floor((Math.random() * 10) + 1)
    var dado10Ramdom8 = Math.floor((Math.random() * 10) + 1)
    var dado10Ramdom9 = Math.floor((Math.random() * 10) + 1)
    var dado10Ramdom10 = Math.floor((Math.random() * 10) + 1)
    let quantidadeDado = Number(amount.value)
    res.style.background = 'white'
    if (quantidadeDado <= 0){
        window.alert("[ERRO] Dados Invalidos")
    }else if(quantidadeDado > 10){
        window.alert("[ERRO] Limites de 10 dados")
    }else if(quantidadeDado == 1){
        res.innerHTML = `(${dado10Ramdom1})`
        if(dado10Ramdom1 == 1){
            res.style.background = 'red'
        }
    }else if(quantidadeDado == 2){
        res.innerHTML = `(${dado10Ramdom1} + ${dado10Ramdom2}) = ${dado10Ramdom1 + dado10Ramdom2}`
    }else if(quantidadeDado == 3){
        res.innerHTML = `(${dado10Ramdom1} + ${dado10Ramdom2} + ${dado10Ramdom3}) = ${dado10Ramdom1 + dado10Ramdom2 + dado10Ramdom3}`
    }else if(quantidadeDado == 4){
        res.innerHTML = `(${dado10Ramdom1} + ${dado10Ramdom2} + ${dado10Ramdom3} + ${dado10Ramdom4}) = ${dado10Ramdom1 + dado10Ramdom2 + dado10Ramdom3 + dado10Ramdom4}`
    }else if(quantidadeDado == 5){
        res.innerHTML = `(${dado10Ramdom1} + ${dado10Ramdom2} + ${dado10Ramdom3} + ${dado10Ramdom4} + ${dado10Ramdom5}) = ${dado10Ramdom1 + dado10Ramdom2 + dado10Ramdom3 + dado10Ramdom4 + dado10Ramdom5}`
    }else if(quantidadeDado == 6){
        res.innerHTML = `(${dado10Ramdom1} + ${dado10Ramdom2} + ${dado10Ramdom3} + ${dado10Ramdom4} + ${dado10Ramdom5} + ${dado10Ramdom6}) = ${dado10Ramdom1 + dado10Ramdom2 + dado10Ramdom3 + dado10Ramdom4 + dado10Ramdom5 + dado10Ramdom6}`
    }else if(quantidadeDado == 7){
        res.innerHTML = `(${dado10Ramdom1} + ${dado10Ramdom2} + ${dado10Ramdom3} + ${dado10Ramdom4} + ${dado10Ramdom5} + ${dado10Ramdom6} + ${dado10Ramdom7}) = ${dado10Ramdom1 + dado10Ramdom2 + dado10Ramdom3 + dado10Ramdom4 + dado10Ramdom5 + dado10Ramdom6 + dado10Ramdom7}`
    }else if(quantidadeDado == 8){
        res.innerHTML = `(${dado10Ramdom1} + ${dado10Ramdom2} + ${dado10Ramdom3} + ${dado10Ramdom4} + ${dado10Ramdom5} + ${dado10Ramdom6} + ${dado10Ramdom7} + ${dado10Ramdom8}) = ${dado10Ramdom1 + dado10Ramdom2 + dado10Ramdom3 + dado10Ramdom4 + dado10Ramdom5 + dado10Ramdom6 + dado10Ramdom7 + dado10Ramdom8}`
    }else if(quantidadeDado == 9){
        res.innerHTML = `(${dado10Ramdom1} + ${dado10Ramdom2} + ${dado10Ramdom3} + ${dado10Ramdom4} + ${dado10Ramdom5} + ${dado10Ramdom6} + ${dado10Ramdom7} + ${dado10Ramdom8} + ${dado10Ramdom9}) = ${dado10Ramdom1 + dado10Ramdom2 + dado10Ramdom3 + dado10Ramdom4 + dado10Ramdom5 + dado10Ramdom6 + dado10Ramdom7 + dado10Ramdom8 + dado10Ramdom9}`
    }else{
        res.innerHTML = `(${dado10Ramdom1} + ${dado10Ramdom2} + ${dado10Ramdom3} + ${dado10Ramdom4} + ${dado10Ramdom5} + ${dado10Ramdom6} + ${dado10Ramdom7} + ${dado10Ramdom8} + ${dado10Ramdom9} + ${dado10Ramdom10}) = ${dado10Ramdom1 + dado10Ramdom2 + dado10Ramdom3 + dado10Ramdom4 + dado10Ramdom5 + dado10Ramdom6 + dado10Ramdom7 + dado10Ramdom8 + dado10Ramdom9 + dado10Ramdom10}`
    }
})

button12.addEventListener("click", ()=>{
    var dado12Ramdom1 = Math.floor((Math.random() * 12) + 1)
    var dado12Ramdom2 = Math.floor((Math.random() * 12) + 1)
    var dado12Ramdom3 = Math.floor((Math.random() * 12) + 1)
    var dado12Ramdom4 = Math.floor((Math.random() * 12) + 1)
    var dado12Ramdom5 = Math.floor((Math.random() * 12) + 1)
    var dado12Ramdom6 = Math.floor((Math.random() * 12) + 1)
    var dado12Ramdom7 = Math.floor((Math.random() * 12) + 1)
    var dado12Ramdom8 = Math.floor((Math.random() * 12) + 1)
    var dado12Ramdom9 = Math.floor((Math.random() * 12) + 1)
    var dado12Ramdom10 = Math.floor((Math.random() * 12) + 1)
    let quantidadeDado = Number(amount.value)
    res.style.background = 'white'
    if (quantidadeDado <= 0){
        window.alert("[ERRO] Dados Invalidos")
    }else if(quantidadeDado > 10){
        window.alert("[ERRO] Limites de 10 dados")
    }else if(quantidadeDado == 1){
        res.innerHTML = `(${dado12Ramdom1})`
        if(dado12Ramdom1 == 1){
            res.style.background = 'red'
        }
    }else if(quantidadeDado == 2){
        res.innerHTML = `(${dado12Ramdom1} + ${dado12Ramdom2}) = ${dado12Ramdom1 + dado12Ramdom2}`
    }else if(quantidadeDado == 3){
        res.innerHTML = `(${dado12Ramdom1} + ${dado12Ramdom2} + ${dado12Ramdom3}) = ${dado12Ramdom1 + dado12Ramdom2 + dado12Ramdom3}`
    }else if(quantidadeDado == 4){
        res.innerHTML = `(${dado12Ramdom1} + ${dado12Ramdom2} + ${dado12Ramdom3} + ${dado12Ramdom4}) = ${dado12Ramdom1 + dado12Ramdom2 + dado12Ramdom3 + dado12Ramdom4}`
    }else if(quantidadeDado == 5){
        res.innerHTML = `(${dado12Ramdom1} + ${dado12Ramdom2} + ${dado12Ramdom3} + ${dado12Ramdom4} + ${dado12Ramdom5}) = ${dado12Ramdom1 + dado12Ramdom2 + dado12Ramdom3 + dado12Ramdom4 + dado12Ramdom5}`
    }else if(quantidadeDado == 6){
        res.innerHTML = `(${dado12Ramdom1} + ${dado12Ramdom2} + ${dado12Ramdom3} + ${dado12Ramdom4} + ${dado12Ramdom5} + ${dado12Ramdom6}) = ${dado12Ramdom1 + dado12Ramdom2 + dado12Ramdom3 + dado12Ramdom4 + dado12Ramdom5 + dado12Ramdom6}`
    }else if(quantidadeDado == 7){
        res.innerHTML = `(${dado12Ramdom1} + ${dado12Ramdom2} + ${dado12Ramdom3} + ${dado12Ramdom4} + ${dado12Ramdom5} + ${dado12Ramdom6} + ${dado12Ramdom7}) = ${dado12Ramdom1 + dado12Ramdom2 + dado12Ramdom3 + dado12Ramdom4 + dado12Ramdom5 + dado12Ramdom6 + dado12Ramdom7}`
    }else if(quantidadeDado == 8){
        res.innerHTML = `(${dado12Ramdom1} + ${dado12Ramdom2} + ${dado12Ramdom3} + ${dado12Ramdom4} + ${dado12Ramdom5} + ${dado12Ramdom6} + ${dado12Ramdom7} + ${dado12Ramdom8}) = ${dado12Ramdom1 + dado12Ramdom2 + dado12Ramdom3 + dado12Ramdom4 + dado12Ramdom5 + dado12Ramdom6 + dado12Ramdom7 + dado12Ramdom8}`
    }else if(quantidadeDado == 9){
        res.innerHTML = `(${dado12Ramdom1} + ${dado12Ramdom2} + ${dado12Ramdom3} + ${dado12Ramdom4} + ${dado12Ramdom5} + ${dado12Ramdom6} + ${dado12Ramdom7} + ${dado12Ramdom8} + ${dado12Ramdom9}) = ${dado12Ramdom1 + dado12Ramdom2 + dado12Ramdom3 + dado12Ramdom4 + dado12Ramdom5 + dado12Ramdom6 + dado12Ramdom7 + dado12Ramdom8 + dado12Ramdom9}`
    }else{
        res.innerHTML = `(${dado12Ramdom1} + ${dado12Ramdom2} + ${dado12Ramdom3} + ${dado12Ramdom4} + ${dado12Ramdom5} + ${dado12Ramdom6} + ${dado12Ramdom7} + ${dado12Ramdom8} + ${dado12Ramdom9} + ${dado12Ramdom10}) = ${dado12Ramdom1 + dado12Ramdom2 + dado12Ramdom3 + dado12Ramdom4 + dado12Ramdom5 + dado12Ramdom6 + dado12Ramdom7 + dado12Ramdom8 + dado12Ramdom9 + dado12Ramdom10}`
    }
})

button20.addEventListener("click", ()=>{
    var dado20Ramdom1 = Math.floor((Math.random() * 20) + 1)
    var dado20Ramdom2 = Math.floor((Math.random() * 20) + 1)
    var dado20Ramdom3 = Math.floor((Math.random() * 20) + 1)
    var dado20Ramdom4 = Math.floor((Math.random() * 20) + 1)
    var dado20Ramdom5 = Math.floor((Math.random() * 20) + 1)
    var dado20Ramdom6 = Math.floor((Math.random() * 20) + 1)
    var dado20Ramdom7 = Math.floor((Math.random() * 20) + 1)
    var dado20Ramdom8 = Math.floor((Math.random() * 20) + 1)
    var dado20Ramdom9 = Math.floor((Math.random() * 20) + 1)
    var dado20Ramdom10 = Math.floor((Math.random() * 20) + 1)
    let quantidadeDado = Number(amount.value)
    res.style.background = 'white'
    if (quantidadeDado <= 0){
        window.alert("[ERRO] Dados Invalidos")
    }else if(quantidadeDado > 10){
        window.alert("[ERRO] Limites de 10 dados")
    }else if(quantidadeDado == 1){
        res.innerHTML = `(${dado20Ramdom1})`
        if(dado20Ramdom1 == 1){
            res.innerHTML += '<p>FALHA CRITICA!</p>'
        }
    }else if(quantidadeDado == 2){
        res.innerHTML = `(${dado20Ramdom1} + ${dado20Ramdom2}) = ${dado20Ramdom1 + dado20Ramdom2}`
    }else if(quantidadeDado == 3){
        res.innerHTML = `(${dado20Ramdom1} + ${dado20Ramdom2} + ${dado20Ramdom3}) = ${dado20Ramdom1 + dado20Ramdom2 + dado20Ramdom3}`
    }else if(quantidadeDado == 4){
        res.innerHTML = `(${dado20Ramdom1} + ${dado20Ramdom2} + ${dado20Ramdom3} + ${dado20Ramdom4}) = ${dado20Ramdom1 + dado20Ramdom2 + dado20Ramdom3 + dado20Ramdom4}`
    }else if(quantidadeDado == 5){
        res.innerHTML = `(${dado20Ramdom1} + ${dado20Ramdom2} + ${dado20Ramdom3} + ${dado20Ramdom4} + ${dado20Ramdom5}) = ${dado20Ramdom1 + dado20Ramdom2 + dado20Ramdom3 + dado20Ramdom4 + dado20Ramdom5}`
    }else if(quantidadeDado == 6){
        res.innerHTML = `(${dado20Ramdom1} + ${dado20Ramdom2} + ${dado20Ramdom3} + ${dado20Ramdom4} + ${dado20Ramdom5} + ${dado20Ramdom6}) = ${dado20Ramdom1 + dado20Ramdom2 + dado20Ramdom3 + dado20Ramdom4 + dado20Ramdom5 + dado20Ramdom6}`
    }else if(quantidadeDado == 7){
        res.innerHTML = `(${dado20Ramdom1} + ${dado20Ramdom2} + ${dado20Ramdom3} + ${dado20Ramdom4} + ${dado20Ramdom5} + ${dado20Ramdom6} + ${dado20Ramdom7}) = ${dado20Ramdom1 + dado20Ramdom2 + dado20Ramdom3 + dado20Ramdom4 + dado20Ramdom5 + dado20Ramdom6 + dado20Ramdom7}`
    }else if(quantidadeDado == 8){
        res.innerHTML = `(${dado20Ramdom1} + ${dado20Ramdom2} + ${dado20Ramdom3} + ${dado20Ramdom4} + ${dado20Ramdom5} + ${dado20Ramdom6} + ${dado20Ramdom7} + ${dado20Ramdom8}) = ${dado20Ramdom1 + dado20Ramdom2 + dado20Ramdom3 + dado20Ramdom4 + dado20Ramdom5 + dado20Ramdom6 + dado20Ramdom7 + dado20Ramdom8}`
    }else if(quantidadeDado == 9){
        res.innerHTML = `(${dado20Ramdom1} + ${dado20Ramdom2} + ${dado20Ramdom3} + ${dado20Ramdom4} + ${dado20Ramdom5} + ${dado20Ramdom6} + ${dado20Ramdom7} + ${dado20Ramdom8} + ${dado20Ramdom9}) = ${dado20Ramdom1 + dado20Ramdom2 + dado20Ramdom3 + dado20Ramdom4 + dado20Ramdom5 + dado20Ramdom6 + dado20Ramdom7 + dado20Ramdom8 + dado20Ramdom9}`
    }else{
        res.innerHTML = `(${dado20Ramdom1} + ${dado20Ramdom2} + ${dado20Ramdom3} + ${dado20Ramdom4} + ${dado20Ramdom5} + ${dado20Ramdom6} + ${dado20Ramdom7} + ${dado20Ramdom8} + ${dado20Ramdom9} + ${dado20Ramdom10}) = ${dado20Ramdom1 + dado20Ramdom2 + dado20Ramdom3 + dado20Ramdom4 + dado20Ramdom5 + dado20Ramdom6 + dado20Ramdom7 + dado20Ramdom8 + dado20Ramdom9 + dado20Ramdom10}`
    }
})

button100.addEventListener("click", ()=>{
    var dado100Ramdom1 = Math.floor((Math.random() * 100) + 1)
    var dado100Ramdom2 = Math.floor((Math.random() * 100) + 1)
    var dado100Ramdom3 = Math.floor((Math.random() * 100) + 1)
    var dado100Ramdom4 = Math.floor((Math.random() * 100) + 1)
    var dado100Ramdom5 = Math.floor((Math.random() * 100) + 1)
    var dado100Ramdom6 = Math.floor((Math.random() * 100) + 1)
    var dado100Ramdom7 = Math.floor((Math.random() * 100) + 1)
    var dado100Ramdom8 = Math.floor((Math.random() * 100) + 1)
    var dado100Ramdom9 = Math.floor((Math.random() * 100) + 1)
    var dado100Ramdom10 = Math.floor((Math.random() * 100) + 1)
    let quantidadeDado = Number(amount.value)
    res.style.background = 'white'
    if (quantidadeDado <= 0){
        window.alert("[ERRO] Dados Invalidos")
    }else if(quantidadeDado > 10){
        window.alert("[ERRO] Limites de 10 dados")
    }else if(quantidadeDado == 1){
        res.innerHTML = `(${dado100Ramdom1})`
        if(dado100Ramdom1 == 1){
            res.style.background = 'red'
        }
    }else if(quantidadeDado == 2){
        res.innerHTML = `(${dado100Ramdom1} + ${dado100Ramdom2}) = ${dado100Ramdom1 + dado100Ramdom2}`
    }else if(quantidadeDado == 3){
        res.innerHTML = `(${dado100Ramdom1} + ${dado100Ramdom2} + ${dado100Ramdom3}) = ${dado100Ramdom1 + dado100Ramdom2 + dado100Ramdom3}`
    }else if(quantidadeDado == 4){
        res.innerHTML = `(${dado100Ramdom1} + ${dado100Ramdom2} + ${dado100Ramdom3} + ${dado100Ramdom4}) = ${dado100Ramdom1 + dado100Ramdom2 + dado100Ramdom3 + dado100Ramdom4}`
    }else if(quantidadeDado == 5){
        res.innerHTML = `(${dado100Ramdom1} + ${dado100Ramdom2} + ${dado100Ramdom3} + ${dado100Ramdom4} + ${dado100Ramdom5}) = ${dado100Ramdom1 + dado100Ramdom2 + dado100Ramdom3 + dado100Ramdom4 + dado100Ramdom5}`
    }else if(quantidadeDado == 6){
        res.innerHTML = `(${dado100Ramdom1} + ${dado100Ramdom2} + ${dado100Ramdom3} + ${dado100Ramdom4} + ${dado100Ramdom5} + ${dado100Ramdom6}) = ${dado100Ramdom1 + dado100Ramdom2 + dado100Ramdom3 + dado100Ramdom4 + dado100Ramdom5 + dado100Ramdom6}`
    }else if(quantidadeDado == 7){
        res.innerHTML = `(${dado100Ramdom1} + ${dado100Ramdom2} + ${dado100Ramdom3} + ${dado100Ramdom4} + ${dado100Ramdom5} + ${dado100Ramdom6} + ${dado100Ramdom7}) = ${dado100Ramdom1 + dado100Ramdom2 + dado100Ramdom3 + dado100Ramdom4 + dado100Ramdom5 + dado100Ramdom6 + dado100Ramdom7}`
    }else if(quantidadeDado == 8){
        res.innerHTML = `(${dado100Ramdom1} + ${dado100Ramdom2} + ${dado100Ramdom3} + ${dado100Ramdom4} + ${dado100Ramdom5} + ${dado100Ramdom6} + ${dado100Ramdom7} + ${dado100Ramdom8}) = ${dado100Ramdom1 + dado100Ramdom2 + dado100Ramdom3 + dado100Ramdom4 + dado100Ramdom5 + dado100Ramdom6 + dado100Ramdom7 + dado100Ramdom8}`
    }else if(quantidadeDado == 9){
        res.innerHTML = `(${dado100Ramdom1} + ${dado100Ramdom2} + ${dado100Ramdom3} + ${dado100Ramdom4} + ${dado100Ramdom5} + ${dado100Ramdom6} + ${dado100Ramdom7} + ${dado100Ramdom8} + ${dado100Ramdom9}) = ${dado100Ramdom1 + dado100Ramdom2 + dado100Ramdom3 + dado100Ramdom4 + dado100Ramdom5 + dado100Ramdom6 + dado100Ramdom7 + dado100Ramdom8 + dado100Ramdom9}`
    }else{
        res.innerHTML = `(${dado100Ramdom1} + ${dado100Ramdom2} + ${dado100Ramdom3} + ${dado100Ramdom4} + ${dado100Ramdom5} + ${dado100Ramdom6} + ${dado100Ramdom7} + ${dado100Ramdom8} + ${dado100Ramdom9} + ${dado100Ramdom10}) = ${dado100Ramdom1 + dado100Ramdom2 + dado100Ramdom3 + dado100Ramdom4 + dado100Ramdom5 + dado100Ramdom6 + dado100Ramdom7 + dado100Ramdom8 + dado100Ramdom9 + dado100Ramdom10}`
    }
})

clear.addEventListener("click", ()=>{
    res.innerHTML = ``
    res.style = 'none'
})