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
    var convertido = Number(amount.value)
    res.innerHTML = ``
    if (convertido <= 0){
        window.alert("[ERRO]Dado Invalido!")
    }else if(convertido > 10){
        window.alert("[ERRO]Limite de 10 dados!")
    }else{    
        for(let i = 0; i < convertido; i++){
            let item = document.createElement('option')
            var dado4 = Math.floor((Math.random() * 4) + 1)
            item.innerHTML += `<p>${dado4}</p>`      
            res.appendChild(item)
        }
    }
    
    if( dado4 == 1){
        let item = document.createElement('option')
        item.innerHTML += `<p>FALHA CRITICA!</p>`
        res.style.background = 'rgb(243, 47, 47)'
        res.style.border = 'white 2px solid'
        res.style.boxShadow = 'rgb(243, 47, 47) 0px 1px 10px'
        res.style.color = 'white'
        res.appendChild(item)
    }else{
        res.style = 'none'
    }
})

button6.addEventListener("click", ()=>{
    var convertido = Number(amount.value)
    res.innerHTML = ``
    if(convertido <= 0){
        window.alert("[ERRO]Dado Invalido!")
    }else if(convertido > 10){
        window.alert("[ERRO]Limite de 10 dados!")
    }else{
        for(let i = 0; i < convertido; i++){
            let item = document.createElement('option')
            var dado6 = Math.floor((Math.random() * 6) + 1)
            item.innerHTML += `<p>${dado6}</p>`      
            res.appendChild(item)
        }
    }

    if(dado6 == 1){
        let item = document.createElement('option')
        item.innerHTML += `<p>FALHA CRITICA!</p>`
        res.style.background = 'rgb(243, 47, 47)'
        res.style.border = 'white 2px solid'
        res.style.boxShadow = 'rgb(243, 47, 47) 0px 1px 10px'
        res.style.color = 'white'
        res.appendChild(item)
    }else{
        res.style = 'none'
    }
})

button8.addEventListener("click", ()=>{
    res.innerHTML = ''
    var convertido = Number(amount.value)
    if (convertido <= 0){
        window.alert("[ERRO]Dado Invalido!")
    }else if(convertido > 10){
        window.alert("[ERRO]Limite de 10 dados!")
    }else{
        for(let i = 0; i < convertido; i++){
            let item = document.createElement('option')
            var dado8 = Math.floor((Math.random() * 8) + 1)
            item.innerHTML += `<p>${dado8}</p>`      
            res.appendChild(item)
        }   
    }
    if(dado8 == 1){
        let item = document.createElement('option')
        item.innerHTML += `<p>FALHA CRITICA!</p>`
        res.style.background = 'rgb(243, 47, 47)'
        res.style.border = 'white 2px solid'
        res.style.boxShadow = 'rgb(243, 47, 47) 0px 1px 10px'
        res.style.color = 'white'
        res.appendChild(item)
    }else{
        res.style = 'none'
    }
})

button10.addEventListener("click", ()=>{
    res.innerHTML = ''
    var convertido = Number(amount.value)
    if (convertido <= 0){
        window.alert("[ERRO]Dado Invalido!")
    }else if(convertido > 10){
        window.alert("[ERRO]Limite de 10 dados!")
    }else{
        for(let i = 0; i < convertido; i++){
            let item = document.createElement('option')
            var dado10 = Math.floor((Math.random() * 10) + 1)
            item.innerHTML += `<p>${dado10}</p>`      
            res.appendChild(item)  
        }   
    }
    if(dado10 == 1){
        let item = document.createElement('option')
        item.innerHTML += `<p>FALHA CRITICA!</p>`
        res.style.background = 'rgb(243, 47, 47)'
        res.style.border = 'white 2px solid'
        res.style.boxShadow = 'rgb(243, 47, 47) 0px 1px 10px'
        res.style.color = 'white'
        res.appendChild(item)
    }else{
        res.style = 'none'
    }
})


button12.addEventListener("click", ()=>{
    res.innerHTML = ''
    var convertido = Number(amount.value)
    if (convertido <= 0){
        window.alert("[ERRO]Dado Invalido!")
    }else if(convertido > 10){
        window.alert("[ERRO]Limite de 10 dados!")
    }else{
        for(let i = 0; i < convertido; i++){
            let item = document.createElement('option')
            var dado12 = Math.floor((Math.random() * 12) + 1)
            item.innerHTML += `<p>${dado12}</p>`      
            res.appendChild(item)  
        }   
    }
    if(dado12 == 1){
        let item = document.createElement('option')
        item.innerHTML += `<p>FALHA CRITICA!</p>`
        res.style.background = 'rgb(243, 47, 47)'
        res.style.border = 'white 2px solid'
        res.style.boxShadow = 'rgb(243, 47, 47) 0px 1px 10px'
        res.style.color = 'white'
        res.appendChild(item)
    }else{
        res.style = 'none'
    }
})

button20.addEventListener("click", ()=>{
    res.innerHTML = ''
    var convertido = Number(amount.value)
    if (convertido <= 0){
        window.alert("[ERRO]Dado Invalido!")
    }else if(convertido > 10){
        window.alert("[ERRO]Limite de 10 dados!")
    }else{
        for(let i = 0; i < convertido; i++){
            let item = document.createElement('option')
            var dado20 = Math.floor((Math.random() * 20) + 1)
            item.innerHTML += `<p>${dado20}</p>`      
            res.appendChild(item)
        }   
    }
    if(dado20 == 1){
        let item = document.createElement('option')
        item.innerHTML += `<p>FALHA CRITICA!</p>`
        res.style.background = 'rgb(243, 47, 47)'
        res.style.border = 'white 2px solid'
        res.style.boxShadow = 'rgb(243, 47, 47) 0px 1px 10px'
        res.style.color = 'white'
        res.appendChild(item)
    }else{
        res.style = 'none'
    }
})

button100.addEventListener("click", ()=>{
    res.innerHTML = ''
    var convertido = Number(amount.value)
    if (convertido <= 0){
        window.alert("[ERRO]Dado Invalido!")
    }else if(convertido > 10){
        window.alert("[ERRO]Limite de 10 dados!")
    }else{
        for(let i = 0; i < convertido; i++){
            let item = document.createElement('option')
            var dado100 = Math.floor((Math.random() * 100) + 1)
            item.innerHTML += `<p>${dado100}</p>`      
            res.appendChild(item)   
        }   
    }
    if(dado100 == 1){
        let item = document.createElement('option')
        item.innerHTML += `<p>FALHA CRITICA!</p>`
        res.style.background = 'rgb(243, 47, 47)'
        res.style.border = 'white 2px solid'
        res.style.boxShadow = 'rgb(243, 47, 47) 0px 1px 10px'
        res.style.color = 'white'
        res.appendChild(item)
    }else{
        res.style = 'none'
    }
})



clear.addEventListener("click", ()=>{
    res.innerHTML = ``
    res.style = 'none'
})