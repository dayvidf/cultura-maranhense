<<<<<<< HEAD

var radio = document.querySelector('.manual-btn')
var cont = 1

document.getElementById('radio1').checked = true

setInterval(() => {
    proximaImg()
}, 5000)

function proximaImg(){
    cont ++

    if(cont > 3){
        cont = 1
    }

    document.getElementById('radio' + cont).checked = true
=======

var radio = document.querySelector('.manual-btn')
var cont = 1

document.getElementById('radio1').checked = true

setInterval(() => {
    proximaImg()
}, 5000)

function proximaImg(){
    cont ++

    if(cont > 3){
        cont = 1
    }

    document.getElementById('radio' + cont).checked = true
>>>>>>> 9fe72d3837f7fc911bbf15719ed156b0506345fb
}