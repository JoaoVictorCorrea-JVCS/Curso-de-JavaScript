let n = document.querySelector('input#txtn')
let res = document.querySelector('div#res')

function converter() {
    if (n.value.length == 0 || n.value <= 0) {
        alert('Credenciais inseridas inválidas ou não encontradas. Insira-os novamente.')
    } else {
        let num = Number(n.value)
        let Km = num / 1000
        let Hm = num / 100
        let dam = num / 10
        let dm = num * 10
        let cm = num * 100
        let mm = num * 1000

        res.innerHTML = `A distância de ${num} metros, corresponde a:`
        res.innerHTML += `<br>${Km.toFixed(4).replace('.', ',')} quilômetros (Km)`
        res.innerHTML += `<br>${Hm.toFixed(4).replace('.', ',')} hectômetros (Hm)`
        res.innerHTML += `<br>${dam.toFixed(4).replace('.', ',')} decâmetros (dam)`
        res.innerHTML += `<br>${dm.toFixed(1).replace('.', ',')} decímetros (dm)`
        res.innerHTML += `<br>${cm.toFixed(1).replace('.', ',')} centímetros (cm)`
        res.innerHTML += `<br>${mm.toFixed(1).replace('.', ',')} milímetros (mm)` 

    }
}

function limpar() {
    if (n.value.length == 0 || n.value <= 0) {
        alert('Credenciais inseridas inválidas ou não encontradas. Insira-os novamente.')
    } else {
        res.innerHTML = 'Clique no botão acima para iniciar.'
        n.value = ''
        n.focus()
    }
}