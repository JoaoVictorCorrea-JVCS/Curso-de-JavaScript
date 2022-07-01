function contar() {
    let txti = document.querySelector('input#txti')
    let txtf = document.querySelector('input#txtf')
    let txtp = document.querySelector('input#txtp')
    let res = document.querySelector('div#res')
    
    if (txti.value.length == 0 || txtf.value.length == 0 || txtp.value.length == 0) {
        res.innerHTML = `Insira os dados acima.`
        alert('[ERRO] Valor inserido inválido! [ERRO]')
    } else {
        res.innerHTML = 'Contando: <br>'
        let i = Number(txti.value)
        let f = Number(txtf.value)
        let p = Number(txtp.value)
        if (p <= 0) {
            alert(`[ERRO] Valor inválido. Considerando passo 1. [ERRO]`)
            p = 1
        }
        if (i < f) {
            //Contagem Crescente.
            for (let n = i; n <= f; n += p) {
                res.innerHTML += `${n} \u{1f449}`
            } 
        } else {
            //Contagem Regressiva.
            for (let n = i; n >= f; n -= p) {
                res.innerHTML += `${n} \u{1f449}`
            }
        } 
        res.innerHTML += `\u{1F3C1}`
    }
    
}