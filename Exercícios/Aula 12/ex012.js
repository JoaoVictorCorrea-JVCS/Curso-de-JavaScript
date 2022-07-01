var agora = new Date()
var hora = agora.getHours()
if (hora < 12) {
    console.log(`Bom Dia! agora são ${hora} horas!`)
} else if (hora <= 18) {
    console.log(`Boa Tarde! Agora são ${hora} horas!`)
} else {
    console.log(`Boa Noite! Agora são ${hora} horas!`)
}