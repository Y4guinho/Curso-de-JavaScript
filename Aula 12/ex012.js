var agora = new Date()
var hora = agora.getHours()
console.log(`São exatamente ${hora} horas.`)
if (hora<=5) {
    console.log('Boa madrugada!')
} else if (hora<=11) {
    console.log('Bom dia!')
} else if (hora<=17) {
    console.log('Boa tarde!')
} else {
    console.log('Boa noite!')
}