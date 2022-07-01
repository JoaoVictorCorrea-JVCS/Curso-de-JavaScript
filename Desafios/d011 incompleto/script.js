let anototal = document.querySelector('input#txtano')
let res = document.querySelector('div#res')

function ano400(a) {
    if (Number(a) %= 400 = 0) {
        return true
    } else {
        return false
    }
}

function ano100(a) {
    if (Number(a) %= 100 != 0) {
        return true
    } else {
        return false
    }
}

function ano4(a) {
    if (Number(a) %= 4 = 0) {
        return true
    } else {
        return false
    }
}

function verificar() {
    if (ano400(anototal.value) && ano100(anototal.value) && ano4(anototal.value)) {
        alert('OK!')
    } else {
        alert('OKOK!')
    }
}


function limpar() {
    if (anototal.value.length == 0) {
        alert('Valor inserido inválido ou vazio. Tente novamente.')
    } else {
        res.innerHTML = 'Clique no botão acima para iniciar.'
        anototal.value = ''
        anototal.focus()
    }
}