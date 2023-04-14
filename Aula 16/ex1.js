/*function parimp(n) {//IMPAR OU PAR
    if(n%2==0) {
        return 'Par!'
    }else {
        return'Impar!'
    }
}

console.log(parimp(5656))*/

/*function soma(n1=0,n2=0,n3=0) {//SOMAR NUMEROS 
    return n1+n2-n3
}

console.log(soma(2,5))*/

/*let v = function(x) {//MULTIPLICAR POR 2
    return x*2
}

console.log(v(8))*/

/*function fatorial(n) {//PATORIAL
    let fat=1
    for(let c = n;c > 1;c--) {
        fat*=c
    }
    return fat
}

console.log(fatorial(8))*/

//RECURSIVIDADE
function fatorial(n) {
    if(n==1) {
        return 1
    } else {
        return n * fatorial(n-1)
    }
}

console.log(fatorial(5))


