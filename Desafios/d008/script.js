let prod = document.querySelector('input#txtp')
let valor = document.querySelector('input#txtv')
let res = document.querySelector('div#res')
function desconto() {
    if (prod.value.length == 0 || valor.value.length == 0 || valor.value <= 0) {
        alert('Valor inserido inválido ou vazio. Tente novamente.')
    } else {
        let Nvalor = Number(valor.value)
        let Ndesc = Nvalor * 0.1
        let Ntotal = Nvalor - Ndesc
        let Sprod = String(prod.value)
        res.innerHTML = `O preço original era ${Nvalor.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}.`
        res.innerHTML += `<p>Você acaba de ganhar ${Ndesc.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})} de desconto (-10%).`
        res.innerHTML += `<p>No fim, você vai pagar ${Ntotal.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})} no produto ${Sprod}.`
    }
}

function limpar() {
    if (prod.value.length == 0 && valor.value.length == 0) {
        alert('Valor inserido inválido ou vazio. Tente novamente.')
    } else {
        res.innerHTML = 'Clique no botão acima para iniciar.'
        prod.value = ''
        valor.value = ''
        prod.focus()
    }
}