let na = document.querySelector('input#txtna')
let nb = document.querySelector('input#txtnb')
let nc = document.querySelector('input#txtnc')
let res = document.querySelector('div#res')
function calcular() {
    if (na.value.length == 0 || nb.value.length == 0 || nc.value.length == 0) {
        alert('Valor inserido inválido ou vazio. Tente novamente.')
    } else {
        let Na = Number(na.value)
        let Nb = Number(nb.value)
        let Nc = Number(nc.value)
        let delta = Nb**2-4*Na*Nc
        res.innerHTML = `<br>A equação atual é ${Na}x² + ${Nb}x + 2 = 0`
        res.innerHTML += `<br>O cálculo realizado será &Delta; = ${Nb}² - 4 . ${Na} . ${Nc}`
        res.innerHTML += `<br>O valor calculado foi &Delta; = ${delta}`
    }
}

function limpar() {
    if (na.value.length == 0 && nb.value.length == 0 && nc.value.length == 0)  {
        alert('Valor inserido inválido ou vazio. Tente novamente.')
    } else {
        res.innerHTML = `Considerando uma equação no formato ax² + bx + c = 0, aperte o botão acima para calcular o valor de &Delta;.`
        na.value = ''
        nb.value = ''
        nc.value = ''
        na.focus()
    }
}