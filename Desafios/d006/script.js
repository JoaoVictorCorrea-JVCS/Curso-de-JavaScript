let tempC = document.querySelector('input#txtn')
let res = document.querySelector('div#res')
function converter() {
    if (tempC.value.length == 0 ) {
        alert('Credenciais inseridas inválidas ou não encontradas. Insira-os novamente.')
    } else {
        let NtempC = Number(tempC.value)
        let NtempF = (NtempC * 1.8) + 32
        let NtempK = NtempC + 273.15
        res.innerHTML = `<strong>A temperatura de ${NtempC.toFixed(2).replace('.', ',')}°C corresponde a...</strong>`
        res.innerHTML += `<p> ${NtempK.toFixed(2).replace('.', ',')}°K (Kelvin).`
        res.innerHTML += `<p> ${NtempF.toFixed(2).replace('.', ',')}°F (Fahrenheit).`
    }
}

function limpar() {
    if (tempC.value.length == 0 ) {
        alert('Credenciais inseridas inválidas ou não encontradas. Insira-os novamente.')
    } else {
        res.innerHTML = 'Clique no botão acima para iniciar.'
        tempC.value = ''
        tempC.focus()
    }
}