let produto = document.querySelector('input#txtp')
let valorp = document.querySelector('input#txtvp')
let valortot = document.querySelector('input#txtvt')
let res = document.querySelector('div#res')

function comprar() {
    if (produto.value.length == 0 || valorp.value.length == 0 || valortot.value.length == 0 || valorp.value <= 0 || valortot.value <= 0 || valortot.value < valorp.value) {
        alert('Credenciais inseridas inválidas ou não encontradas. Insira-os novamente.')
    } else {
        let produto2 = String(produto.value)
        let vt = Number(valorp.value)
        let vp = Number(valortot.value)
        let troco = vp - vt
        res.innerHTML = `Você comprou ${produto2}, que custa ${vp.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}, e pagou ${vt.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}! <p> O troco recebido foi de ${troco.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}! <p> Volte sempre!`
    }
}

function limpar() {
    if (produto.value.length == 0 && valorp.value.length == 0 && valortot.value.length == 0) {
        alert('Credenciais inseridas inválidas ou não encontradas. Insira-os novamente.')
    } else {
        res.innerHTML = 'Clique no botão acima para iniciar.'
        produto.value = ''
        valorp.value = ''
        valortot.value = ''
        produto.focus()
    }
}