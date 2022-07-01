let res = document.querySelector('div#res')
let nome = document.querySelector('input#txtn')
let sal = document.querySelector('input#txts')
let porcent = document.querySelector('input#txtp')

function reajustar() {
    if (nome.value.length == 0 || sal.value.length == 0 || porcent.value.length == 0 || sal.value <= 0 || porcent.value <= 0)  {
        alert ('Valor inserido inválido ou vazio. Tente novamente.')
    } else {
        let Nsal = Number(sal.value)
        let Nporcent = Number(porcent.value)
        let Snome = String(nome.value)
        let salporcent = Nsal * (Nporcent / 100) 
        let valsal = Nsal + salporcent 

        res.innerHTML = `${Snome} recebeu um aumento salarial!`
        res.innerHTML += `<br>O salário atual é de ${Nsal.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}.`
        res.innerHTML += `<p>Com um aumento de ${Nporcent}%, o salário vai aumentar ${salporcent.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})} no próximo mês.`
        res.innerHTML += `<br>E a partir daí, ${Snome} vai passar a ganhar ${valsal.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}.`
    }
}

function limpar() {
    if (nome.value.length == 0 && sal.value.length == 0 && porcent.value.length == 0) {
        alert('Valor inserido inválido ou vazio. Tente novamente.')
    } else {
        res.innerHTML = 'Clique no botão acima para iniciar.'
        nome.value = ''
        sal.value = ''
        porcent.value = ''
        nome.focus()
    }
}