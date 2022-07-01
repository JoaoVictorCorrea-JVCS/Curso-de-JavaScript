function calcular() {
    let num = document.querySelector('input#txtn')
    let res = document.querySelector('div#res')
    if (num.value.length == 0) {
        alert('Credenciais inseridas inválidas ou não encontradas. Insira-os novamente.')
    } else {
        let n = Number(num.value)
        res.innerHTML = `Antes de ${n} vem o número ${n-1}.<br>Depois de ${n} vem o número ${n+1}.`
    }
}