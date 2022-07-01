let preçoant = document.querySelector('input#txtpant')
let preçodps = document.querySelector('input#txtpdps')
let res = document.querySelector('div#res')
function verificar() {
    if (preçoant.value.length == 0 ||preçodps.value.length == 0 || preçoant.value <= 0 || preçodps.value <= 0) {
        alert('Valor inserido inválido ou não encontrado.')
    } else {
        let Npant = Number(preçoant.value)
        let Npdps = Number(preçodps.value)
        
        res.innerHTML = `O produto custava ${Npant.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})} e agora custa ${Npdps.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}.`
        if (Npant > Npdps) {
            let subiu = Npant - Npdps
            let variaçãosub = (Npant/Npdps - 1) * 100
            res.innerHTML += `<p>Hoje o produto está mais barato.`
            res.innerHTML += `<p>O preço caiu ${subiu.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})} em relação ao preço anterior.`
            res.innerHTML += `<p>Uma variação de ${variaçãosub.toFixed(1).replace('.', ',')}% para baixo.`
        } else {
            let desceu = Npdps - Npant
            let variaçãodesc = (Npdps/Npant - 1) * 100
            res.innerHTML += `<p>Hoje o produto está mais caro.`
            res.innerHTML += `<p>O preço subiu ${desceu.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})} em relação ao preço atual.`
            res.innerHTML += `<p>Uma variação de ${variaçãodesc.toFixed(1).replace('.', ',')}% para cima.`
        }
    }
}

function limpar() {
    if (preçoant.value.length == 0 && preçodps.value.length == 0) {
        alert('Valor inserido inválido ou vazio. Tente novamente.')
    } else {
        res.innerHTML = `Clique no botão acima para analisar a mudança de preço.`
        preçoant.value = ''
        preçodps.value = ''
        preçoant.focus()
    }
}