function tabuada() {
    let numero= document.getElementById('txtn')
    let tabu= document.getElementById('tab')
    if(numero.value.length == 0) {
        window.alert('Não foi possível gerar tabuada, adcione um número')
    }else {
        let n = Number(numero.value)
        let c = 1 
        tabu.innerHTML=''
        while(c<=10) {
            let item = document.createElement('option')
            item.text=`${n} x ${c} = ${n*c}`
            item.value=`tab${c}`
            tabu.appendChild(item)
            c++
        }
    }
}