 var button4 = document.querySelector("#d4")
var button6 = document.querySelector("#d6")
var button20 = document.querySelector("#d20")
var button100 = document.querySelector("#d100")
 

let res = document.querySelector("#res")
let clear = document.querySelector("#button-clear")
let res2 = document.querySelector("#res2")
 

var dado6 = Math.floor((Math.random() * 6) + 1)
var dado20 = Math.floor((Math.random() * 20) + 1)
var dado100 = Math.floor((Math.random() * 100) + 1)

button4.addEventListener("click", ()=>{
    var dado4 = Math.floor((Math.random() * 4) + 1)
    res.innerHTML = `${dado4}` 
    res2.innerHTML = `${dado4}` 
    if( dado4 == 1){
        res.innerHTML += `<p>FALHA CRITICA!</p>`
        res.style.background = 'rgb(243, 47, 47)'
        res.style.border = 'white 2px solid'
        res.style.boxShadow = 'rgb(243, 47, 47) 0px 1px 10px'
        res.style.color = 'white'
    }else{
        res.style = 'none'
    }
})


button6.addEventListener("click", ()=>{
    var dado6 = Math.floor((Math.random() * 6) + 1)
    res.innerHTML = `${dado6}`
    res2.innerHTML = `${dado6}`
    if(dado6 == 1){
        res.innerHTML += `<p>FALHA CRITICA!</p>`
        res.style.background = 'rgb(243, 47, 47)'
        res.style.border = 'white 2px solid'
        res.style.boxShadow = 'rgb(243, 47, 47) 0px 1px 10px'
        res.style.color = 'white'
    }else{
        res.style = 'none'
    }
})

button20.addEventListener("click", ()=>{
    var dado20 = Math.floor((Math.random() * 20 ) + 1)
    res.innerHTML = `${dado20}`
    res2.innerHTML = `${dado20}`
    if(dado20 == 1){
        res.innerHTML += `<p>FALHA CRITICA!</p>`
        res.style.background = 'rgb(243, 47, 47)'
        res.style.border = 'white 2px solid'
        res.style.boxShadow = 'rgb(243, 47, 47) 0px 1px 10px'
        res.style.color = 'white'
    }else{
        res.style = 'none'
    }
})

button100.addEventListener("click", ()=>{
    var dado100 = Math.floor((Math.random() * 100 ) + 1)
    res.innerHTML = `${dado100}`
    res2.innerHTML = `${dado100}`
    if(dado100 == 1){
        res.innerHTML += `<p>FALHA CRITICA!</p>`
        res.style.background = 'rgb(243, 47, 47)'
        res.style.border = 'white 2px solid'
        res.style.boxShadow = 'rgb(243, 47, 47) 0px 1px 10px'
        res.style.color = 'white'
    }else{
        res.style = 'none'
    }
})

clear.addEventListener("click", ()=>{
    res.innerHTML = ``
    res2.innerHTML = `?`
    res.style = 'none'
})