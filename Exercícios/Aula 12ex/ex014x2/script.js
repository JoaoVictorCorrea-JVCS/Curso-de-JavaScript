function carregar() {
    let msg = document.querySelector('div#msg')
    let img = document.querySelector('img#imagem')
    let data = new Date()
    let hora = data.getHours()
    let minuto = data.getMinutes()
    if (hora >= 0 && hora < 12) {
        img.src = 'fotomanha.png'
        document.body.style.background = '#d5d1bb'
        msg.innerHTML = `Bom dia! Agora são ${hora} horas e ${minuto} minutos!`
    } else if (hora >= 12 && hora <= 18) {
        img.src = 'fototarde.png'
        document.body.style.background = '#fecc78'
        msg.innerHTML = `Boa tarde! Agora são ${hora} horas e ${minuto} minutos!` 
    } else {
        img.src = 'fotonoite.png'
        document.body.style.background = '#1e3037'
        msg.innerHTML = `Boa noite! Agora são ${hora} horas e ${minuto} minutos!`
    }
}