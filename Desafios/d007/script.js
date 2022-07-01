let cotação = document.querySelector('input#txtcn')
let valortot = document.querySelector('input#txtvt')
let res = document.querySelector('div#res')

function converter() {
    if (cotação.value.length == 0 || valortot <= 0 || valortot.value.length == 0) {
        alert('Credenciais inseridas inválidas ou não encontradas. Insira-os novamente.')
    } else {
        let Nc = Number(cotação.value)
        let Nvt = Number(valortot.value)
        let Nvc = Nvt / Nc
        res.innerHTML = `Você tem ${Nvt.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})} atualmente. E a cotação do dólar é de ${Nc.toFixed(2).replace('.', ',')} para R$ 1.`
        res.innerHTML += `<p> Você tem ${Nvc.toLocaleString('pt-BR', {style: 'currency', currency: 'USD'})}!`
    }
}

function limpar() {
    if (cotação.value.length == 0 && valortot.value.length == 0) {
        alert('Credenciais inseridas inválidas ou não encontradas. Insira-os novamente.')
    } else {
        cotação.value = ''
        valortot.value = ''
        cotação.focus()
        res.innerHTML = 'Clique no botão acima para iniciar.'
    }
}