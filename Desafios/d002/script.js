let nome = document.querySelector('input#txtname')
let idade = document.querySelector('input#txtidade')
let res = document.querySelector('div#res')

function iniciar() {
    if (nome.value.length == 0 || idade.value.length == 0 || idade.value < 1 || idade.value > 110) {
        alert('Credenciais inseridas inválidas ou não encontradas. Insira-os novamente.')
    } else {
        let nome2 = String(nome.value)
        let idade2 = Number(idade.value)
        res.innerHTML = `Acabei de conhecer ${nome2}, que tem ${idade2} anos de idade. <p>Seja bem-vindo!`
    }
}

function limpar() {
    if (nome.value.length == 0 && idade.value.length == 0) {
        alert('Credenciais inseridas inválidas ou não encontradas. Insira-os novamente.')
    } else {
        nome = document.querySelector('input#txtname')
        nome.value = ''
        idade.value = ''
        nome.focus()
        res.innerHTML = 'Clique no botão acima para iniciar.'
    }
}