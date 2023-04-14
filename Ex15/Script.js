function verificar() {
    var data=new Date()
    var ano= data.getFullYear()
    var fano= document.getElementById('txtano')
    var res=document.querySelector('div#res')

    if (fano.value.length == 0 || Number(fano.value)>ano) {
        window.alert('[ERRO], Verifique os dados e tente novamente!')
    } else {
        var fsex= document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero=''
        var img=document.getElementById('imagem')
        /*var img=document.createElement('img')
        img.setAttribute('id','foto')*/
    }
    if (fsex[0].checked) {
        genero='Homem'

        if (idade<=1) {
            document.querySelector('img').src='bebemenino.png'
            document.body.style.background='#0560e8'

        } else if (idade<=15) {
            document.querySelector('img').src='criancamenino.png'
            document.body.style.background='#0560e8'

        } else if (idade<=21) {
            document.querySelector('img').src='jovemmenino.png'
            document.body.style.background='#0560e8'

        } else if (idade<=50) {
            document.querySelector('img').src='adultomenino.png'
            document.body.style.background='#0560e8'

        } else if (idade<=100) {
            document.querySelector('img').src='idoso.png'
            document.body.style.background='#0560e8'

        } else {
            document.querySelector('img').src='caixao.png'
            document.body.style.background='black'

        }
    } else if (fsex[1].checked) {
        genero='Mulher'

        if (idade<=1) {
            document.querySelector('img').src='bebemenina.png'
            document.body.style.background='#e3007b'

        } else if (idade<=15) {
            document.querySelector('img').src='criancamenina.png'
            document.body.style.background='#e3007b'

        } else if (idade<=21) {
            document.querySelector('img').src='jovemmenina.png'
            document.body.style.background='#e3007b'

        } else if (idade<=50) {
            document.querySelector('img').src='adultamenina.png'
            document.body.style.background='#e3007b'

        } else if (idade<=100) {
            document.querySelector('img').src='idosa.png'
            document.body.style.background='#e3007b'

        } else {
            document.querySelector('img').src='caixao.png'
            document.body.style.background='black'

        }
 

    }
    res.style.textAlign='center'
    res.innerHTML=`Detectamos ${genero} com ${idade} anos.`
    res.appendChild(img)

}