function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    //var data= new Date()
    //var hora=data.getHours()
    var  hora = 12

    msg.innerHTML=`São exatamente ${hora} horas.`

    if (hora >= 0 && hora < 5) {
        document.querySelector('img').src='fotomadrugada.png'
        document.body.style.background = "#0d121f"
    } else if (hora >= 6 && hora <= 11) {
        document.querySelector('img').src='fotomanha.png'
        document.body.style.background = '#d2dfe8'
    } else if (hora >= 12 && hora <= 17) {
        document.querySelector('img').src='fototarde.png'
        document.body.style.background = '#cf8755'
    } else {
        document.querySelector('img').src='fotonoite.png'
        document.body.style.background='#5c466d'
    }
}