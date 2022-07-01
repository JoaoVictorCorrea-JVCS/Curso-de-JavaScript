let res = document.querySelector('div#res')
let val = document.querySelector('input#resultado')
let valores = []

function zero() {
    val.value += 0
    
}
function um() {
    val.value += 1
}
function dois() {
    val.value += 2
}
function tres() {
    val.value += 3
}
function quatro() {
    val.value += 4
}
function cinco() {
    val.value += 5
}
function seis() {
    val.value += 6
}
function sete() {
    val.value += 7
}
function oito() {
    val.value += 8
}
function nove() {
    val.value += 9
}
function ponto() {
    val.value = ''
    val.focus()
}
function subtracao() {
    val.value = ''
    val.focus()
}
function adicao() {
    val.value = ''
    val.focus()
}
function multiplicacao() {
    val.value = ''
    val.focus()
}
function divisao() {
    alert('divisao')
}
function limpar() {
    val.value = ''
    val.focus()
    value = []
    res.innerHTML = ''
}
function calc() {
    if (val.value.length == 0) {
        alert('Valor inserido inválido ou vazio.')
    } else {
        alert("OK!")
    }
}