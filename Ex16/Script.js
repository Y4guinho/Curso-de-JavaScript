function contar() {
    var ini = document.getElementById('txti')
    var fim = document.getElementById('txtf')
    var pass= document.getElementById('txtp')
    var r=document.getElementById('res')

    if(ini.value.length == 0 || fim.value.length == 0 || pass.value.length == 0) {
        r.innerHTML='Impossivel contar! Confira os dados.'
    } else {
        r.innerHTML='Contando:'
        var i = Number(ini.value)
        var f = Number(fim.value)
        var p = Number(pass.value)
        if(p<=0) {
            window.alert('Passo Invalido! Considerando PASSO = 1')
            p=1
        }
        if(i<f) {
            //Contagem Crescente
            for(var c = i;c <= f;c += p) {
                r.innerHTML+=` ${c} `
            } 
        } else {
            //Contagem regressiva
            for(var c = i;c >= f;c -= p) {
                r.innerHTML+=` ${c} `
            }
        }
    }
}