function verificar() {
    let data = new Date()
    let ano = data.getFullYear()
    let fano = document.querySelector('input#txtano')
    let res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        alert(`[ERRO] Valor inválido. Insira um ano inferior a ${ano}! [ERRO]`)
    } else {
        let fsex = document.getElementsByName('radsex')
        let idade = ano - Number(fano.value)
        let genero = ''
        let img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >=0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'bebehomem.png')
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'jovemhomem.png')
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'adultohomem.png')
            } else {
                // Idoso
                img.setAttribute('src', 'idosohomem.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >=0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'bebemulher.png')
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'jovemmulher.png')
            } else if (idade < 50) {
                // Adulto    
                img.setAttribute('src', 'adultomulher.png')
            } else {
                // Idoso
                img.setAttribute('src', 'idosomulher.png')
                }
            }
            res.style.textAlign = 'center'
            res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
            res.appendChild(img)
    }
}